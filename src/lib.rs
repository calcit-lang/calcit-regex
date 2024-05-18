use std::{
  cell::RefCell,
  sync::{Arc, Mutex},
};

use cirru_edn::{Edn, EdnAnyRef, EdnListView};
use lazy_static::lazy_static;
use regex::Regex;

lazy_static! {
  static ref PATTERNS: Mutex<Vec<EdnAnyRef>> = Mutex::from(vec![]);
}

#[no_mangle]
pub fn abi_version() -> String {
  String::from("0.0.8")
}

#[no_mangle]
pub fn re_pattern(args: Vec<Edn>) -> Result<Edn, String> {
  if args.len() == 1 {
    match &args[0] {
      Edn::Str(s) => match Regex::new(s) {
        Ok(pattern) => {
          let p = Arc::from(RefCell::new(pattern));
          // push to PATTERNS
          let v = EdnAnyRef(p);
          let mut patterns = PATTERNS.lock().unwrap();
          patterns.push(v.to_owned());
          Ok(Edn::AnyRef(v))
        }
        Err(e) => Err(format!("re-pattern failed, {}", e)),
      },
      _ => Err(format!("re-pattern expect 1 string, got {:?}", args)),
    }
  } else {
    Err(format!("re-pattern expect 1 string, got {:?}", args))
  }
}

/// re_drop drops pattern from global PATTERNS
#[no_mangle]
pub fn re_drop(args: Vec<Edn>) -> Result<Edn, String> {
  if args.len() == 1 {
    match &args[0] {
      Edn::AnyRef(p) => {
        let mut patterns = PATTERNS.lock().unwrap();
        let mut i = 0;
        let mut found = false;
        println!("patterns size {}", patterns.len());
        for v in patterns.iter() {
          if v == p {
            found = true;
            break;
          }
          i += 1;
        }
        println!("re-drop found {} at {}\n", found, i);
        if found {
          patterns.remove(i);
          Ok(Edn::from(true))
        } else {
          Ok(Edn::from(false))
        }
      }
      _ => Err(format!("re-drop expect 1 pattern, got {:?}", args)),
    }
  } else {
    Err(format!("re-drop expect 1 pattern, got {:?}", args))
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
        if let Some(pattern) = p.borrow().downcast_ref::<Regex>() {
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
        if let Some(pattern) = p.borrow().downcast_ref::<Regex>() {
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
        if let Some(pattern) = p.borrow().downcast_ref::<Regex>() {
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
        if let Some(pattern) = p.borrow().downcast_ref::<Regex>() {
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
        if let Some(pattern) = p.borrow().downcast_ref::<Regex>() {
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
        if let Some(pattern) = p.borrow().downcast_ref::<Regex>() {
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
