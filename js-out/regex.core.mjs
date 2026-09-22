
import * as $clt from "./calcit.core.mjs";
import { get_dylib_path } from "./regex.util.mjs";
const _t_ = $clt.init_tags(["Regex","RegexTrait","args","err","find","find-all","find-index","handle","matches?","ok","replace-all","return","source","split",]);

export function re_find_all(s, pattern) {
  if (arguments.length !== 2) throw $clt._args_throw('re-find-all', 2, arguments.length);
  let tmp_AUTO_8 = get_dylib_path("/dylibs/libcalcit_regex");
  return $clt._$n_call_dylib_edn(tmp_AUTO_8, "re_find_all", s, pattern)
}

export function re_find_index_option(text, pattern) {
  if (arguments.length !== 2) throw $clt._args_throw('re-find-index-option', 2, arguments.length);
  let found = $clt._$n_call_dylib_edn(get_dylib_path("/dylibs/libcalcit_regex"), "re_find_index_optional", text, pattern);

  if ($clt.nil_$q_(found)) { return $clt._PCT_none() } else { return $clt._PCT_some(found) }

}

export function re_find_option(text, pattern) {
  if (arguments.length !== 2) throw $clt._args_throw('re-find-option', 2, arguments.length);
  let found = $clt._$n_call_dylib_edn(get_dylib_path("/dylibs/libcalcit_regex"), "re_find_optional", text, pattern);

  if ($clt.nil_$q_(found)) { return $clt._PCT_none() } else { return $clt._PCT_some(found) }

}

export function re_matches(s, pattern) {
  if (arguments.length !== 2) throw $clt._args_throw('re-matches', 2, arguments.length);
  let tmp_AUTO_9 = get_dylib_path("/dylibs/libcalcit_regex");
  return $clt._$n_call_dylib_edn(tmp_AUTO_9, "re_matches", s, pattern)
}

export function re_replace_all(s, pattern, next) {
  if (arguments.length !== 3) throw $clt._args_throw('re-replace-all', 3, arguments.length);
  let tmp_AUTO_10 = get_dylib_path("/dylibs/libcalcit_regex");
  return $clt._$n_call_dylib_edn(tmp_AUTO_10, "re_replace_all", s, pattern, next)
}

export function re_source(pattern) {
  if (arguments.length !== 1) throw $clt._args_throw('re-source', 1, arguments.length);
  let tmp_AUTO_11 = get_dylib_path("/dylibs/libcalcit_regex");
  return $clt._$n_call_dylib_edn(tmp_AUTO_11, "re_source", pattern)
}

export function re_split(s, pattern) {
  if (arguments.length !== 2) throw $clt._args_throw('re-split', 2, arguments.length);
  let tmp_AUTO_12 = get_dylib_path("/dylibs/libcalcit_regex");
  return $clt._$n_call_dylib_edn(tmp_AUTO_12, "re_split", s, pattern)
}

export function _$n_regex_$o_find(self, text) {
  if (arguments.length !== 2) throw $clt._args_throw('&regex:find', 2, arguments.length);
  let tmp_AUTO_34 = $clt._$n_struct_$o_get(self, _t_.handle);
  return re_find_option(text, tmp_AUTO_34)
}

export function _$n_regex_$o_find_all(self, text) {
  if (arguments.length !== 2) throw $clt._args_throw('&regex:find-all', 2, arguments.length);
  let tmp_AUTO_35 = $clt._$n_struct_$o_get(self, _t_.handle);
  return re_find_all(text, tmp_AUTO_35)
}

export function _$n_regex_$o_find_index(self, text) {
  if (arguments.length !== 2) throw $clt._args_throw('&regex:find-index', 2, arguments.length);
  let tmp_AUTO_36 = $clt._$n_struct_$o_get(self, _t_.handle);
  return re_find_index_option(text, tmp_AUTO_36)
}

export function _$n_regex_$o_matches_$q_(self, text) {
  if (arguments.length !== 2) throw $clt._args_throw('&regex:matches?', 2, arguments.length);
  let tmp_AUTO_37 = $clt._$n_struct_$o_get(self, _t_.handle);
  return re_matches(text, tmp_AUTO_37)
}

export function _$n_regex_$o_replace_all(self, text, replacement) {
  if (arguments.length !== 3) throw $clt._args_throw('&regex:replace-all', 3, arguments.length);
  let tmp_AUTO_38 = $clt._$n_struct_$o_get(self, _t_.handle);
  return re_replace_all(text, tmp_AUTO_38, replacement)
}

export function _$n_regex_$o_source(self) {
  if (arguments.length !== 1) throw $clt._args_throw('&regex:source', 1, arguments.length);
  let tmp_AUTO_39 = $clt._$n_struct_$o_get(self, _t_.handle);
  return re_source(tmp_AUTO_39)
}

export function _$n_regex_$o_split(self, text) {
  if (arguments.length !== 2) throw $clt._args_throw('&regex:split', 2, arguments.length);
  let tmp_AUTO_40 = $clt._$n_struct_$o_get(self, _t_.handle);
  return re_split(text, tmp_AUTO_40)
}

export function compile(pattern) {
  if (arguments.length !== 1) throw $clt._args_throw('compile', 1, arguments.length);
  let match_v_AUTO_41 = $clt._$n_call_dylib_edn(get_dylib_path("/dylibs/libcalcit_regex"), "re_compile_result", pattern);
  let match_t_AUTO_42 = $clt._$n_enum_$o_nth(match_v_AUTO_41, 0);
  if (match_t_AUTO_42 === _t_.ok && $clt._$n_enum_$o_count(match_v_AUTO_41) === 2) {
  let handle = $clt._$n_enum_$o_nth(match_v_AUTO_41, 1);
  let tmp_AUTO_43 = $clt._$n__PCT__$M_(Regex, _t_.handle, handle);
  return $clt._PCT_ok(tmp_AUTO_43) }
   else if (match_t_AUTO_42 === _t_.err && $clt._$n_enum_$o_count(match_v_AUTO_41) === 2) {
  let message = $clt._$n_enum_$o_nth(match_v_AUTO_41, 1);
  return $clt._PCT_err(message) }
   else { throw new Error("match: no matching branch for tag " + match_t_AUTO_42); }
}

export function compile_$x_(pattern) {
  if (arguments.length !== 1) throw $clt._args_throw('compile!', 1, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_44 = compile(pattern);
    let match_t_AUTO_45 = $clt._$n_enum_$o_nth(match_v_AUTO_44, 0);
    switch (match_t_AUTO_45.idx) {
    case _t_.err.idx:
    if ($clt._$n_enum_$o_count(match_v_AUTO_44) === 2) {
    let message = $clt._$n_enum_$o_nth(match_v_AUTO_44, 1);
    let err_AUTO_46 = new Error(message);
    err_AUTO_46.data = null;
    throw err_AUTO_46;
    }
    break;
    case _t_.ok.idx:
    if ($clt._$n_enum_$o_count(match_v_AUTO_44) === 2) {
    let value = $clt._$n_enum_$o_nth(match_v_AUTO_44, 1);
    return value
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_45);
  })()
}

export function re_drop(pattern) {
  if (arguments.length !== 1) throw $clt._args_throw('re-drop', 1, arguments.length);
  let tmp_AUTO_47 = get_dylib_path("/dylibs/libcalcit_regex");
  return $clt._$n_call_dylib_edn(tmp_AUTO_47, "re_drop", pattern)
}

export function re_find(s, pattern) {
  if (arguments.length !== 2) throw $clt._args_throw('re-find', 2, arguments.length);
  let tmp_AUTO_48 = get_dylib_path("/dylibs/libcalcit_regex");
  return $clt._$n_call_dylib_edn(tmp_AUTO_48, "re_find", s, pattern)
}

export function re_find_index(s, pattern) {
  if (arguments.length !== 2) throw $clt._args_throw('re-find-index', 2, arguments.length);
  let tmp_AUTO_49 = get_dylib_path("/dylibs/libcalcit_regex");
  return $clt._$n_call_dylib_edn(tmp_AUTO_49, "re_find_index", s, pattern)
}

export function re_pattern(pattern) {
  if (arguments.length !== 1) throw $clt._args_throw('re-pattern', 1, arguments.length);
  let match_v_AUTO_50 = $clt._$n_call_dylib_edn(get_dylib_path("/dylibs/libcalcit_regex"), "re_compile_result", pattern);
  let match_t_AUTO_51 = $clt._$n_enum_$o_nth(match_v_AUTO_50, 0);
  if (match_t_AUTO_51 === _t_.ok && $clt._$n_enum_$o_count(match_v_AUTO_50) === 2) {
  let handle = $clt._$n_enum_$o_nth(match_v_AUTO_50, 1);
  return handle }
   else if (match_t_AUTO_51 === _t_.err && $clt._$n_enum_$o_count(match_v_AUTO_50) === 2) {
  let message = $clt._$n_enum_$o_nth(match_v_AUTO_50, 1);
  let err_AUTO_52 = new Error(message);
  err_AUTO_52.data = null;
  throw err_AUTO_52; }
   else { throw new Error("match: no matching branch for tag " + match_t_AUTO_51); }
}



export var Regex0 = $clt._$n_struct_def_$o_new(_t_.Regex, $clt._$L_(_t_.handle, new $clt.CalcitSymbol("Dynamic")));

export var RegexTrait = $clt._$n_trait_$o__$o_new(_t_.RegexTrait, (function _fn_(){
  let tmp_AUTO_1 = $clt._$L_(_t_["matches?"], new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Fn")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol("{}"), new $clt.CalcitSliceList([_t_.args, new $clt.CalcitSliceList([new $clt.CalcitSymbol("[]"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("regex.core/Regex")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])]), new $clt.CalcitSliceList([_t_.return, new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Bool")])])])]));
  let tmp_AUTO_2 = $clt._$L_(_t_.find, new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Fn")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol("{}"), new $clt.CalcitSliceList([_t_.args, new $clt.CalcitSliceList([new $clt.CalcitSymbol("[]"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("regex.core/Regex")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])]), new $clt.CalcitSliceList([_t_.return, new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Option")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])])])]));
  let tmp_AUTO_3 = $clt._$L_(_t_["find-index"], new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Fn")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol("{}"), new $clt.CalcitSliceList([_t_.args, new $clt.CalcitSliceList([new $clt.CalcitSymbol("[]"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("regex.core/Regex")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])]), new $clt.CalcitSliceList([_t_.return, new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Option")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Number")])])])])]));
  let tmp_AUTO_4 = $clt._$L_(_t_["find-all"], new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Fn")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol("{}"), new $clt.CalcitSliceList([_t_.args, new $clt.CalcitSliceList([new $clt.CalcitSymbol("[]"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("regex.core/Regex")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])]), new $clt.CalcitSliceList([_t_.return, new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("List")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])])])]));
  let tmp_AUTO_5 = $clt._$L_(_t_.split, new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Fn")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol("{}"), new $clt.CalcitSliceList([_t_.args, new $clt.CalcitSliceList([new $clt.CalcitSymbol("[]"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("regex.core/Regex")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])]), new $clt.CalcitSliceList([_t_.return, new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("List")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])])])]));
  let tmp_AUTO_6 = $clt._$L_(_t_["replace-all"], new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Fn")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol("{}"), new $clt.CalcitSliceList([_t_.args, new $clt.CalcitSliceList([new $clt.CalcitSymbol("[]"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("regex.core/Regex")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])]), new $clt.CalcitSliceList([_t_.return, new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])])]));
  let tmp_AUTO_7 = $clt._$L_(_t_.source, new $clt.CalcitSliceList([new $clt.CalcitSymbol("::"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("Fn")]), new $clt.CalcitSliceList([new $clt.CalcitSymbol("{}"), new $clt.CalcitSliceList([_t_.args, new $clt.CalcitSliceList([new $clt.CalcitSymbol("[]"), new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("regex.core/Regex")])])]), new $clt.CalcitSliceList([_t_.return, new $clt.CalcitSliceList([new $clt.CalcitSymbol('quote'), new $clt.CalcitSymbol("String")])])])]));
  return $clt._$L_(tmp_AUTO_1, tmp_AUTO_2, tmp_AUTO_3, tmp_AUTO_4, tmp_AUTO_5, tmp_AUTO_6, tmp_AUTO_7);
})());

export var RegexImpl = (function _fn_(){
  let tmp_AUTO_13 = (function _fn_(){
    let tmp_AUTO_14 = function f_PCT_(self, text) {
      if (arguments.length !== 2) throw $clt._args_throw('f%', 2, arguments.length);
      let tmp_AUTO_15 = $clt._$n_struct_$o_get(self, _t_.handle);
      return re_matches(text, tmp_AUTO_15)
    }
    ;
    return $clt._$L_(_t_["matches?"], tmp_AUTO_14);
  })();
  let tmp_AUTO_16 = (function _fn_(){
    let tmp_AUTO_17 = function f_PCT_(self, text) {
      if (arguments.length !== 2) throw $clt._args_throw('f%', 2, arguments.length);
      let tmp_AUTO_18 = $clt._$n_struct_$o_get(self, _t_.handle);
      return re_find_option(text, tmp_AUTO_18)
    }
    ;
    return $clt._$L_(_t_.find, tmp_AUTO_17);
  })();
  let tmp_AUTO_19 = (function _fn_(){
    let tmp_AUTO_20 = function f_PCT_(self, text) {
      if (arguments.length !== 2) throw $clt._args_throw('f%', 2, arguments.length);
      let tmp_AUTO_21 = $clt._$n_struct_$o_get(self, _t_.handle);
      return re_find_index_option(text, tmp_AUTO_21)
    }
    ;
    return $clt._$L_(_t_["find-index"], tmp_AUTO_20);
  })();
  let tmp_AUTO_22 = (function _fn_(){
    let tmp_AUTO_23 = function f_PCT_(self, text) {
      if (arguments.length !== 2) throw $clt._args_throw('f%', 2, arguments.length);
      let tmp_AUTO_24 = $clt._$n_struct_$o_get(self, _t_.handle);
      return re_find_all(text, tmp_AUTO_24)
    }
    ;
    return $clt._$L_(_t_["find-all"], tmp_AUTO_23);
  })();
  let tmp_AUTO_25 = (function _fn_(){
    let tmp_AUTO_26 = function f_PCT_(self, text) {
      if (arguments.length !== 2) throw $clt._args_throw('f%', 2, arguments.length);
      let tmp_AUTO_27 = $clt._$n_struct_$o_get(self, _t_.handle);
      return re_split(text, tmp_AUTO_27)
    }
    ;
    return $clt._$L_(_t_.split, tmp_AUTO_26);
  })();
  let tmp_AUTO_28 = (function _fn_(){
    let tmp_AUTO_29 = function f_PCT_(self, text, replacement) {
      if (arguments.length !== 3) throw $clt._args_throw('f%', 3, arguments.length);
      let tmp_AUTO_30 = $clt._$n_struct_$o_get(self, _t_.handle);
      return re_replace_all(text, tmp_AUTO_30, replacement)
    }
    ;
    return $clt._$L_(_t_["replace-all"], tmp_AUTO_29);
  })();
  let tmp_AUTO_31 = (function _fn_(){
    let tmp_AUTO_32 = function f_PCT_(self) {
      if (arguments.length !== 1) throw $clt._args_throw('f%', 1, arguments.length);
      let tmp_AUTO_33 = $clt._$n_struct_$o_get(self, _t_.handle);
      return re_source(tmp_AUTO_33)
    }
    ;
    return $clt._$L_(_t_.source, tmp_AUTO_32);
  })();
  return $clt._$n_impl_$o__$o_new(RegexTrait, tmp_AUTO_13, tmp_AUTO_16, tmp_AUTO_19, tmp_AUTO_22, tmp_AUTO_25, tmp_AUTO_28, tmp_AUTO_31);
})();

export var Regex = $clt.impl_traits(Regex0, RegexImpl);

