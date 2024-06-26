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
    if let Some(_rhs_concrete) = rhs.as_any().downcast_ref::<Regex>() {
      // does not compare the regex pattern
      false
    } else {
      false
    }
  }
}

#[no_mangle]
pub fn abi_version() -> String {
  String::from("0.0.9")
}

#[no_mangle]
pub fn re_pattern(args: Vec<Edn>) -> Result<Edn, String> {
  if args.len() == 1 {
    match &args[0] {
      Edn::Str(s) => match Regex::new(s) {
        Ok(pattern) => {
          let p = Arc::from(RwLock::new(RegexWrapper(pattern)));
          Ok(Edn::AnyRef(EdnAnyRef(p)))
        }
        Err(e) => Err(format!("re-pattern failed, {}", e)),
      },
      _ => Err(format!("re-pattern expect 1 string, got {:?}", args)),
    }
  } else {
    Err(format!("re-pattern expect 1 string, got {:?}", args))
  }
}

#[no_mangle]
pub fn re_matches(args: Vec<Edn>) -> Result<Edn, String> {
  if args.len() == 2 {
    match (&args[0], &args[1]) {
      (Edn::Str(s), Edn::Str(pattern)) => match Regex::new(pattern) {
        Ok(p) => Ok(Edn::Bool(p.is_match(s))),
        Err(e) => Err(format!("re-matches failed, {}", e)),
      },
      (Edn::Str(s), Edn::AnyRef(EdnAnyRef(p))) => {
        if let Some(pattern) = p.read().map_err(|e| e.to_string())?.as_any().downcast_ref::<Regex>() {
          Ok(Edn::Bool(pattern.is_match(s)))
        } else {
          Err(format!("re-matches expected a regex, got {:?}", p))
        }
      }
      (_, _) => Err(format!("re-matches expected 2 strings: {:?}", args)),
    }
  } else {
    Err(format!("re-matches expected 2 strings: {:?}", args))
  }
}

#[no_mangle]
pub fn re_find_index(args: Vec<Edn>) -> Result<Edn, String> {
  if args.len() == 2 {
    match (&args[0], &args[1]) {
      (Edn::Str(s), Edn::Str(pattern)) => {
        match Regex::new(pattern) {
          Ok(p) => match p.find(s) {
            Some(matched) => Ok(Edn::Number(matched.start() as f64)),
            None => Ok(Edn::Number(-1.0)), // TODO maybe nil
          },
          Err(e) => Err(format!("re-find-index failed, {}", e)),
        }
      }
      (Edn::Str(s), Edn::AnyRef(EdnAnyRef(p))) => {
        if let Some(pattern) = p.read().map_err(|e| e.to_string())?.as_any().downcast_ref::<Regex>() {
          match pattern.find(s) {
            Some(matched) => Ok(Edn::Number(matched.start() as f64)),
            None => Ok(Edn::Number(-1.0)), // TODO maybe nil
          }
        } else {
          Err(format!("re-find-index expected a regex, got {:?}", p))
        }
      }
      (_, _) => Err(format!("re-find-index expected 2 strings: {:?}", args)),
    }
  } else {
    Err(format!("re-find-index expected 2 strings: {:?}", args))
  }
}

#[no_mangle]
/// takes stirng and patterns, returns a matches string, or empty for nil
pub fn re_find(args: Vec<Edn>) -> Result<Edn, String> {
  if args.len() == 2 {
    match (&args[0], &args[1]) {
      (Edn::Str(s), Edn::Str(pattern)) => {
        match Regex::new(pattern) {
          Ok(p) => {
            let mut matched = p.find_iter(s);
            match matched.next() {
              Some(v) => Ok(Edn::str(v.as_str().to_string())),
              None => Ok(Edn::from("")), // TODO maybe nil
            }
          }
          Err(e) => Err(format!("re-find failed, {}", e)),
        }
      }
      (Edn::Str(s), Edn::AnyRef(EdnAnyRef(p))) => {
        if let Some(pattern) = p.read().map_err(|e| e.to_string())?.as_any().downcast_ref::<Regex>() {
          let mut matched = pattern.find_iter(s);
          match matched.next() {
            Some(v) => Ok(Edn::str(v.as_str().to_string())),
            None => Ok(Edn::from("")), // TODO maybe nil
          }
        } else {
          Err(format!("re-find expected a regex, got {:?}", p))
        }
      }
      (_, _) => Err(format!("re-find expected 2 strings: {:?}", args)),
    }
  } else {
    Err(format!("re-find expected 2 strings: {:?}", args))
  }
}

#[no_mangle]
pub fn re_find_all(args: Vec<Edn>) -> Result<Edn, String> {
  if args.len() == 2 {
    match (&args[0], &args[1]) {
      (Edn::Str(s), Edn::Str(pattern)) => match Regex::new(pattern) {
        Ok(p) => {
          let mut ys: Vec<Edn> = vec![];
          for v in p.find_iter(s) {
            ys.push(Edn::Str(v.as_str().to_string().into()))
          }
          Ok(Edn::List(EdnListView(ys)))
        }
        Err(e) => Err(format!("re-find-all failed, {}", e)),
      },
      (Edn::Str(s), Edn::AnyRef(EdnAnyRef(p))) => {
        if let Some(pattern) = p.read().map_err(|e| e.to_string())?.as_any().downcast_ref::<Regex>() {
          let mut ys: Vec<Edn> = vec![];
          for v in pattern.find_iter(s) {
            ys.push(Edn::Str(v.as_str().to_string().into()))
          }
          Ok(Edn::List(EdnListView(ys)))
        } else {
          Err(format!("re-find-all expected a regex, got {:?}", p))
        }
      }
      (_, _) => Err(format!("re-find-all expected 2 strings: {:?}", args)),
    }
  } else {
    Err(format!("re-find-all expected 2 strings: {:?}", args))
  }
}

#[no_mangle]
pub fn re_split(args: Vec<Edn>) -> Result<Edn, String> {
  if args.len() == 2 {
    match (&args[0], &args[1]) {
      (Edn::Str(s), Edn::Str(pattern)) => match Regex::new(pattern) {
        Ok(p) => {
          let mut ys: Vec<Edn> = vec![];
          for piece in p.split(s) {
            ys.push(Edn::str(piece));
          }
          Ok(Edn::List(EdnListView(ys)))
        }
        Err(e) => Err(format!("re-split failed, {}", e)),
      },
      (Edn::Str(s), Edn::AnyRef(EdnAnyRef(p))) => {
        if let Some(pattern) = p.read().map_err(|e| e.to_string())?.as_any().downcast_ref::<Regex>() {
          let mut ys: Vec<Edn> = vec![];
          for piece in pattern.split(s) {
            ys.push(Edn::str(piece));
          }
          Ok(Edn::List(EdnListView(ys)))
        } else {
          Err(format!("re-split expected a regex, got {:?}", p))
        }
      }
      (_, _) => Err(format!("re-split expected 2 strings: {:?}", args)),
    }
  } else {
    Err(format!("re-split expected 2 strings: {:?}", args))
  }
}

#[no_mangle]
pub fn re_replace_all(args: Vec<Edn>) -> Result<Edn, String> {
  if args.len() == 3 {
    match (&args[0], &args[1], &args[2]) {
      (Edn::Str(s), Edn::Str(pattern), Edn::Str(next)) => match Regex::new(pattern) {
        Ok(p) => Ok(Edn::str(p.replace_all(s, &**next).into_owned())),
        Err(e) => Err(format!("re-replace-all failed, {}", e)),
      },
      (Edn::Str(s), Edn::AnyRef(EdnAnyRef(p)), Edn::Str(next)) => {
        if let Some(pattern) = p.read().map_err(|e| e.to_string())?.as_any().downcast_ref::<Regex>() {
          Ok(Edn::str(pattern.replace_all(s, &**next).into_owned()))
        } else {
          Err(format!("re-replace-all expected a regex, got {:?}", p))
        }
      }
      (a, b, c) => Err(format!("re-replace-all expected 3 strings: {} {} {}", a, b, c)),
    }
  } else {
    Err(format!("re-replace-all expected 3 strings: {:?}", args))
  }
}
