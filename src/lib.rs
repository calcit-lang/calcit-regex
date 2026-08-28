use std::sync::{Arc, LazyLock, Mutex};

use cirru_edn::{Edn, EdnListView, EdnStructView};
use regex::Regex;

calcit_native_ffi::export_buffer_abi_v1!();

const RESOURCE_TOKEN_STRUCT: &str = "CalcitFfiResourceV1";
const RESOURCE_TOKEN_FIELD: &str = "token";
const RESOURCE_TOKEN_BYTES: usize = 16;

const STATUS_OK: i32 = 0;
const STATUS_INVALID_HANDLE: i32 = 1;
const STATUS_STALE_HANDLE: i32 = 2;
const STATUS_INTERNAL_ERROR: i32 = 9;

#[derive(Debug)]
struct RegexSlot {
  generation: u64,
  pattern: Option<Arc<Regex>>,
  retired: bool,
}

#[derive(Debug, Default)]
struct RegexRegistry {
  slots: Vec<RegexSlot>,
}

impl RegexRegistry {
  fn insert(&mut self, pattern: Regex) -> Result<(u64, u64), String> {
    let pattern = Arc::new(pattern);
    for (index, slot) in self.slots.iter_mut().enumerate() {
      if slot.pattern.is_some() || slot.retired {
        continue;
      }
      let Some(generation) = slot.generation.checked_add(1) else {
        slot.retired = true;
        continue;
      };
      slot.generation = generation;
      slot.pattern = Some(pattern);
      let handle = u64::try_from(index + 1).map_err(|_| "regex registry handle overflow".to_owned())?;
      return Ok((handle, generation));
    }

    let handle = u64::try_from(self.slots.len() + 1).map_err(|_| "regex registry handle overflow".to_owned())?;
    self.slots.push(RegexSlot {
      generation: 1,
      pattern: Some(pattern),
      retired: false,
    });
    Ok((handle, 1))
  }

  fn resolve(&self, handle: u64, generation: u64) -> Result<Arc<Regex>, String> {
    let index = handle
      .checked_sub(1)
      .and_then(|value| usize::try_from(value).ok())
      .ok_or_else(|| "invalid compiled regex handle".to_owned())?;
    let slot = self.slots.get(index).ok_or_else(|| "invalid compiled regex handle".to_owned())?;
    if slot.generation != generation || slot.pattern.is_none() {
      return Err("stale compiled regex handle".to_owned());
    }
    Ok(slot.pattern.as_ref().expect("checked regex slot").clone())
  }

  fn release(&mut self, handle: u64, generation: u64) -> i32 {
    let Some(index) = handle.checked_sub(1).and_then(|value| usize::try_from(value).ok()) else {
      return STATUS_INVALID_HANDLE;
    };
    let Some(slot) = self.slots.get_mut(index) else {
      return STATUS_INVALID_HANDLE;
    };
    if slot.generation != generation || slot.pattern.is_none() {
      return STATUS_STALE_HANDLE;
    }
    slot.pattern = None;
    STATUS_OK
  }
}

static REGISTRY: LazyLock<Mutex<RegexRegistry>> = LazyLock::new(|| Mutex::new(RegexRegistry::default()));

fn compile_pattern(source: &str) -> Result<Regex, String> {
  Regex::new(source).map_err(|error| format!("invalid regex pattern {source:?}: {error}"))
}

fn encode_resource_token(handle: u64, generation: u64) -> Edn {
  let mut bytes = Vec::with_capacity(RESOURCE_TOKEN_BYTES);
  bytes.extend_from_slice(&handle.to_le_bytes());
  bytes.extend_from_slice(&generation.to_le_bytes());
  let mut value = EdnStructView::new(RESOURCE_TOKEN_STRUCT);
  value.insert(RESOURCE_TOKEN_FIELD, Edn::Buffer(bytes));
  value.into()
}

fn decode_resource_token(value: &Edn) -> Result<(u64, u64), String> {
  let Edn::Struct(value) = value else {
    return Err(format!("expected a compiled regex resource, got: {value}"));
  };
  if value.name.as_ref() != RESOURCE_TOKEN_STRUCT || value.pairs.len() != 1 || !value.pairs[0].0.matches(RESOURCE_TOKEN_FIELD) {
    return Err("expected a CalcitFfiResourceV1 regex token".to_owned());
  }
  let Edn::Buffer(bytes) = &value.pairs[0].1 else {
    return Err("compiled regex resource token must be a buffer".to_owned());
  };
  if bytes.len() != RESOURCE_TOKEN_BYTES {
    return Err(format!("compiled regex resource token must contain {RESOURCE_TOKEN_BYTES} bytes"));
  }
  let handle = u64::from_le_bytes(bytes[..8].try_into().expect("regex handle byte width"));
  let generation = u64::from_le_bytes(bytes[8..].try_into().expect("regex generation byte width"));
  if handle == 0 || generation == 0 {
    return Err("compiled regex resource requires non-zero handle and generation".to_owned());
  }
  Ok((handle, generation))
}

fn register_pattern(pattern: Regex) -> Result<Edn, String> {
  let (handle, generation) = REGISTRY
    .lock()
    .map_err(|_| "compiled regex registry lock is poisoned".to_owned())?
    .insert(pattern)?;
  Ok(encode_resource_token(handle, generation))
}

fn with_regex<T>(value: &Edn, operation: impl FnOnce(&Regex) -> T) -> Result<T, String> {
  match value {
    Edn::Str(source) => {
      let pattern = compile_pattern(source)?;
      Ok(operation(&pattern))
    }
    Edn::Struct(_) => {
      let (handle, generation) = decode_resource_token(value)?;
      let pattern = REGISTRY
        .lock()
        .map_err(|_| "compiled regex registry lock is poisoned".to_owned())?
        .resolve(handle, generation)?;
      Ok(operation(&pattern))
    }
    other => Err(format!("expected a regex pattern string or compiled regex, got: {other}")),
  }
}

fn expect_text_and_pattern<'a>(args: &'a [Edn], name: &str) -> Result<(&'a str, &'a Edn), String> {
  match args {
    [Edn::Str(text), pattern] => Ok((text.as_ref(), pattern)),
    _ => Err(format!("{name} expected text and a regex pattern, got: {args:?}")),
  }
}

pub fn re_pattern(args: Vec<Edn>) -> Result<Edn, String> {
  match args.as_slice() {
    [Edn::Str(source)] => compile_pattern(source).and_then(register_pattern),
    _ => Err(format!("re-pattern expected 1 string, got: {args:?}")),
  }
}

pub fn re_compile_result(args: Vec<Edn>) -> Result<Edn, String> {
  Ok(match re_pattern(args) {
    Ok(value) => Edn::enum_value("ok", vec![value]),
    Err(error) => Edn::enum_value("err", vec![Edn::str(error)]),
  })
}

pub fn re_matches(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-matches")?;
  with_regex(pattern, |pattern| Edn::Bool(pattern.is_match(text)))
}

pub fn re_find_index(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find-index")?;
  with_regex(pattern, |pattern| match pattern.find(text) {
    Some(found) => Edn::Number(found.start() as f64),
    None => Edn::Number(-1.0),
  })
}

pub fn re_find_index_optional(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find-index-optional")?;
  with_regex(pattern, |pattern| match pattern.find(text) {
    Some(found) => Edn::Number(found.start() as f64),
    None => Edn::Nil,
  })
}

/// Takes text and a pattern, returning the first matching text or an empty string.
pub fn re_find(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find")?;
  with_regex(pattern, |pattern| match pattern.find(text) {
    Some(found) => Edn::str(found.as_str()),
    None => Edn::str(""),
  })
}

pub fn re_find_optional(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find-optional")?;
  with_regex(pattern, |pattern| match pattern.find(text) {
    Some(found) => Edn::str(found.as_str()),
    None => Edn::Nil,
  })
}

pub fn re_find_all(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find-all")?;
  with_regex(pattern, |pattern| {
    Edn::List(EdnListView(pattern.find_iter(text).map(|found| Edn::str(found.as_str())).collect()))
  })
}

pub fn re_split(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-split")?;
  with_regex(pattern, |pattern| {
    Edn::List(EdnListView(pattern.split(text).map(Edn::str).collect()))
  })
}

pub fn re_replace_all(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern, replacement) = match args.as_slice() {
    [Edn::Str(text), pattern, Edn::Str(replacement)] => (text.as_ref(), pattern, replacement.as_ref()),
    _ => {
      return Err(format!(
        "re-replace-all expected text, a regex pattern, and replacement text, got: {args:?}"
      ));
    }
  };
  with_regex(pattern, |pattern| Edn::str(pattern.replace_all(text, replacement).into_owned()))
}

pub fn re_source(args: Vec<Edn>) -> Result<Edn, String> {
  match args.as_slice() {
    [pattern] => with_regex(pattern, |pattern| Edn::str(pattern.as_str())),
    _ => Err(format!("re-source expected 1 regex pattern, got: {args:?}")),
  }
}

/// Compatibility no-op. Resource lifetime is owned by the Calcit host.
pub fn re_drop(args: Vec<Edn>) -> Result<Edn, String> {
  match args.as_slice() {
    [pattern] => with_regex(pattern, |_| Edn::Nil),
    _ => Err(format!("re-drop expected 1 regex pattern, got: {args:?}")),
  }
}

#[unsafe(no_mangle)]
pub extern "C" fn calcit_ffi_resource_version() -> u32 {
  1
}

#[unsafe(no_mangle)]
pub extern "C" fn calcit_ffi_resource_release_v1(handle: u64, generation: u64) -> i32 {
  match std::panic::catch_unwind(|| REGISTRY.lock().map(|mut registry| registry.release(handle, generation))) {
    Ok(Ok(status)) => status,
    Ok(Err(_)) | Err(_) => STATUS_INTERNAL_ERROR,
  }
}

calcit_native_ffi::export_edn_buffer_method_v1!(re_pattern_calcit_ffi_v1, re_pattern);
calcit_native_ffi::export_edn_buffer_method_v1!(re_compile_result_calcit_ffi_v1, re_compile_result);
calcit_native_ffi::export_edn_buffer_method_v1!(re_matches_calcit_ffi_v1, re_matches);
calcit_native_ffi::export_edn_buffer_method_v1!(re_find_index_calcit_ffi_v1, re_find_index);
calcit_native_ffi::export_edn_buffer_method_v1!(re_find_index_optional_calcit_ffi_v1, re_find_index_optional);
calcit_native_ffi::export_edn_buffer_method_v1!(re_find_calcit_ffi_v1, re_find);
calcit_native_ffi::export_edn_buffer_method_v1!(re_find_optional_calcit_ffi_v1, re_find_optional);
calcit_native_ffi::export_edn_buffer_method_v1!(re_find_all_calcit_ffi_v1, re_find_all);
calcit_native_ffi::export_edn_buffer_method_v1!(re_split_calcit_ffi_v1, re_split);
calcit_native_ffi::export_edn_buffer_method_v1!(re_replace_all_calcit_ffi_v1, re_replace_all);
calcit_native_ffi::export_edn_buffer_method_v1!(re_source_calcit_ffi_v1, re_source);
calcit_native_ffi::export_edn_buffer_method_v1!(re_drop_calcit_ffi_v1, re_drop);

#[cfg(test)]
mod tests {
  use super::*;

  fn compiled(source: &str) -> Edn {
    re_pattern(vec![Edn::str(source)]).expect("pattern should compile")
  }

  fn release(value: &Edn) -> i32 {
    let (handle, generation) = decode_resource_token(value).expect("resource token");
    calcit_ffi_resource_release_v1(handle, generation)
  }

  #[test]
  fn compile_result_keeps_invalid_patterns_in_data() {
    let result = re_compile_result(vec![Edn::str("[")]).expect("result entrypoint should not return a dylib error");
    let Edn::Enum(value) = result else {
      panic!("compile result should be an enum");
    };
    assert_eq!(value.variant.as_ref(), "err");
    assert_eq!(value.extra.len(), 1);
  }

  #[test]
  fn optional_find_distinguishes_empty_matches_from_absence() {
    let empty = compiled("^");
    assert_eq!(
      re_find_optional(vec![Edn::str("abc"), empty.clone()]).expect("empty match"),
      Edn::str("")
    );
    assert_eq!(release(&empty), STATUS_OK);

    let missing = compiled(r"\d");
    assert_eq!(
      re_find_optional(vec![Edn::str("abc"), missing.clone()]).expect("missing match"),
      Edn::Nil
    );
    assert_eq!(release(&missing), STATUS_OK);
  }

  #[test]
  fn string_and_compiled_patterns_have_the_same_behavior() {
    let text = Edn::str("a12b");
    let pattern = compiled(r"\d");
    let from_string = re_find_all(vec![text.clone(), Edn::str(r"\d")]).expect("string pattern should work");
    let from_compiled = re_find_all(vec![text, pattern.clone()]).expect("compiled pattern should work");
    assert_eq!(from_string, from_compiled);
    assert_eq!(release(&pattern), STATUS_OK);
  }

  #[test]
  fn released_and_reused_slots_reject_stale_generations() {
    let mut registry = RegexRegistry::default();
    let (first_handle, first_generation) = registry.insert(compile_pattern(r"\d+").expect("first regex")).expect("first slot");
    assert_eq!(registry.release(first_handle, first_generation), STATUS_OK);
    assert_eq!(registry.release(first_handle, first_generation), STATUS_STALE_HANDLE);
    assert!(
      registry
        .resolve(first_handle, first_generation)
        .expect_err("released token must be stale")
        .contains("stale")
    );

    let (second_handle, second_generation) = registry
      .insert(compile_pattern(r"\w+").expect("second regex"))
      .expect("second slot");
    assert_eq!(second_handle, first_handle);
    assert!(second_generation > first_generation);
    assert_eq!(registry.release(second_handle, second_generation), STATUS_OK);
  }

  #[test]
  fn compiled_regex_can_be_used_concurrently() {
    let pattern = compiled(r"\d+");
    std::thread::scope(|scope| {
      for index in 0..8 {
        let pattern = pattern.clone();
        scope.spawn(move || {
          assert_eq!(
            re_matches(vec![Edn::str(format!("item-{index}")), pattern]).expect("concurrent match"),
            Edn::Bool(true)
          );
        });
      }
    });
    assert_eq!(release(&pattern), STATUS_OK);
  }
}
