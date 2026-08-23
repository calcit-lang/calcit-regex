use std::sync::{Arc, RwLock};

use cirru_edn::{DynEq, Edn, EdnAnyRef, EdnListView};
use regex::Regex;

#[derive(Debug)]
struct RegexWrapper(pub Regex);

impl DynEq for RegexWrapper {
  fn as_any(&self) -> &dyn std::any::Any {
    &self.0
  }

  fn do_eq(&self, rhs: &dyn DynEq) -> bool {
    rhs
      .as_any()
      .downcast_ref::<Regex>()
      .is_some_and(|other| self.0.as_str() == other.as_str())
  }
}

#[unsafe(no_mangle)]
pub fn abi_version() -> String {
  String::from("0.0.9")
}

#[unsafe(no_mangle)]
pub fn edn_version() -> String {
  cirru_edn::version().to_string()
}

fn compile_pattern(source: &str) -> Result<Regex, String> {
  Regex::new(source).map_err(|error| format!("invalid regex pattern {source:?}: {error}"))
}

fn wrap_pattern(pattern: Regex) -> Edn {
  Edn::AnyRef(EdnAnyRef(Arc::from(RwLock::new(RegexWrapper(pattern)))))
}

fn with_regex<T>(value: &Edn, operation: impl FnOnce(&Regex) -> T) -> Result<T, String> {
  match value {
    Edn::Str(source) => {
      let pattern = compile_pattern(source)?;
      Ok(operation(&pattern))
    }
    Edn::AnyRef(EdnAnyRef(pattern)) => {
      let guard = pattern.read().map_err(|_| "compiled regex lock is poisoned".to_string())?;
      let pattern = guard
        .as_any()
        .downcast_ref::<Regex>()
        .ok_or_else(|| "expected a compiled regex handle".to_string())?;
      Ok(operation(pattern))
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

#[unsafe(no_mangle)]
pub fn re_pattern(args: Vec<Edn>) -> Result<Edn, String> {
  match args.as_slice() {
    [Edn::Str(source)] => compile_pattern(source).map(wrap_pattern),
    _ => Err(format!("re-pattern expected 1 string, got: {args:?}")),
  }
}

#[unsafe(no_mangle)]
pub fn re_compile_result(args: Vec<Edn>) -> Result<Edn, String> {
  Ok(match re_pattern(args) {
    Ok(value) => Edn::enum_value("ok", vec![value]),
    Err(error) => Edn::enum_value("err", vec![Edn::str(error)]),
  })
}

#[unsafe(no_mangle)]
pub fn re_matches(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-matches")?;
  with_regex(pattern, |pattern| Edn::Bool(pattern.is_match(text)))
}

#[unsafe(no_mangle)]
pub fn re_find_index(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find-index")?;
  with_regex(pattern, |pattern| match pattern.find(text) {
    Some(found) => Edn::Number(found.start() as f64),
    None => Edn::Number(-1.0),
  })
}

#[unsafe(no_mangle)]
pub fn re_find_index_optional(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find-index-optional")?;
  with_regex(pattern, |pattern| match pattern.find(text) {
    Some(found) => Edn::Number(found.start() as f64),
    None => Edn::Nil,
  })
}

#[unsafe(no_mangle)]
/// takes string and patterns, returns a matches string, or empty for nil
pub fn re_find(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find")?;
  with_regex(pattern, |pattern| match pattern.find(text) {
    Some(found) => Edn::str(found.as_str()),
    None => Edn::str(""),
  })
}

#[unsafe(no_mangle)]
pub fn re_find_optional(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find-optional")?;
  with_regex(pattern, |pattern| match pattern.find(text) {
    Some(found) => Edn::str(found.as_str()),
    None => Edn::Nil,
  })
}

#[unsafe(no_mangle)]
pub fn re_find_all(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-find-all")?;
  with_regex(pattern, |pattern| {
    Edn::List(EdnListView(pattern.find_iter(text).map(|found| Edn::str(found.as_str())).collect()))
  })
}

#[unsafe(no_mangle)]
pub fn re_split(args: Vec<Edn>) -> Result<Edn, String> {
  let (text, pattern) = expect_text_and_pattern(&args, "re-split")?;
  with_regex(pattern, |pattern| {
    Edn::List(EdnListView(pattern.split(text).map(Edn::str).collect()))
  })
}

#[unsafe(no_mangle)]
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

#[unsafe(no_mangle)]
pub fn re_source(args: Vec<Edn>) -> Result<Edn, String> {
  match args.as_slice() {
    [pattern] => with_regex(pattern, |pattern| Edn::str(pattern.as_str())),
    _ => Err(format!("re-source expected 1 regex pattern, got: {args:?}")),
  }
}

#[unsafe(no_mangle)]
pub fn re_drop(args: Vec<Edn>) -> Result<Edn, String> {
  match args.as_slice() {
    [pattern] => with_regex(pattern, |_| Edn::Nil),
    _ => Err(format!("re-drop expected 1 regex pattern, got: {args:?}")),
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  fn compiled(source: &str) -> Edn {
    re_pattern(vec![Edn::str(source)]).expect("pattern should compile")
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
    assert_eq!(
      re_find_optional(vec![Edn::str("abc"), compiled("^")]).expect("empty match should succeed"),
      Edn::str("")
    );
    assert_eq!(
      re_find_optional(vec![Edn::str("abc"), compiled(r"\d")]).expect("missing match should succeed"),
      Edn::Nil
    );
  }

  #[test]
  fn string_and_compiled_patterns_have_the_same_behavior() {
    let text = Edn::str("a12b");
    let from_string = re_find_all(vec![text.clone(), Edn::str(r"\d")]).expect("string pattern should work");
    let from_compiled = re_find_all(vec![text, compiled(r"\d")]).expect("compiled pattern should work");
    assert_eq!(from_string, from_compiled);
  }

  #[test]
  fn compiled_patterns_compare_by_source() {
    assert_eq!(compiled(r"\d+"), compiled(r"\d+"));
    assert_ne!(compiled(r"\d+"), compiled(r"\w+"));
  }
}
