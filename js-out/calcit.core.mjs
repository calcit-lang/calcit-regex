
import {init_tags, arrayToList, listToArray, CalcitSliceList, CalcitSymbol, CalcitRecur} from "@calcit/procs";
import * as $procs from "@calcit/procs";
export * from "@calcit/procs";

import * as $calcit_DOT_internal from "./calcit.internal.mjs";
const _t_ = init_tags(["&core-enum-methods","&core-fn-methods","&core-list-methods","&core-map-methods","&core-number-methods","&core-ref-methods","&core-set-methods","&core-string-methods","&core-struct-methods","Add","Compare","Contains","Countable","Debug","Deserialize","Eq","FfiResponse","FfiResponseOps","FfiTask","FfiTaskOps","FsPath","FsPathOps","Len","ListDestruct","MapDestruct","MapEntryDecision","Mappable","Multiply","Option","OptionOps","ReadableByteStream","Result","ResultOps","RuntimeMapMeta","RuntimeMapResponse","Serialize","SetDestruct","Show","Sliceable","StreamConsumeError","StringDestruct","add","and-then","any?","append","apply","args","assoc","assoc-after","assoc-before","bind","blank?","body","bool","buffer","butlast","call","call-args","cancel","cancel-with","ceil","cirru-quote","code","common-keys","compare","concat","contains?","count","debug","deref","deserialize","destruct","diff-keys","diff-new","diff-triple","difference","display-by","dissoc","drop","each","empty","empty?","ends-with?","enum","enum-def","eq?","err","err?","escape","exclude","filter","filter-kv","filter-map-kv","filter-not","filter-pair","find","find-index","find-last","find-last-index","first","flatten","float32","float64","floor","fn","fold","foldl","format","fract","generics","get","get-char-code","get-in","group-by","impl","inc","include","includes?","index-of","int16","int32","int64","int8","intersection","join","join-str","js","keep","keys","kind","last","last-index-of","len","list","macro","map","map-err","map-indexed","map-kv","map-list","map-pair","mappend","max","merge","message","meta","method","min","multiply","negate","none","none?","nth","number","ok","ok?","or-else","pad-left","pad-right","pairs-map","parse-cirru","parse-cirru-edn","parse-cirru-list","parse-float","parse-json","pow","prepend","raw","read-dir","read-text","reduce","ref","reject","rem","replace","resolve","rest","return","reverse","round","round?","scalar","serialize","set","show","slice","some","some?","sort","sort-by","split","split-lines","sqrt","starts-with?","string","strip-prefix","strip-suffix","struct","struct-def","syntax","take","take-last","to-list","to-map","to-pairs","to-set","to-string","total-limit","trim","uint16","uint32","uint64","uint8","union","unit","unwrap","unwrap-or","utf8-byte-count","value","values","walk-dir","write-text",]);

export function result_$o_map(res, f) {
  if (arguments.length !== 2) throw $procs._args_throw('result:map', 2, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_1 = res;
    let match_t_AUTO_2 = $procs._$n_enum_$o_nth(match_v_AUTO_1, 0);
    switch (match_t_AUTO_2.idx) {
    case _t_.err.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_1) === 2) {
    let err = $procs._$n_enum_$o_nth(match_v_AUTO_1, 1);
    let tmp_AUTO_3 = $procs._$n_enum_$o_definition(res);
    return $procs._PCT__$o__$o_(tmp_AUTO_3, _t_.err, err)
    }
    break;
    case _t_.ok.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_1) === 2) {
    let value = $procs._$n_enum_$o_nth(match_v_AUTO_1, 1);
    let tmp_AUTO_4 = $procs._$n_enum_$o_definition(res);
    let tmp_AUTO_5 = f(value);
    return $procs._PCT__$o__$o_(tmp_AUTO_4, _t_.ok, tmp_AUTO_5)
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_2);
  })()
}

export function result_$o_and_then(res, f) {
  if (arguments.length !== 2) throw $procs._args_throw('result:and-then', 2, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_12 = res;
    let match_t_AUTO_13 = $procs._$n_enum_$o_nth(match_v_AUTO_12, 0);
    switch (match_t_AUTO_13.idx) {
    case _t_.err.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_12) === 2) {
    let err = $procs._$n_enum_$o_nth(match_v_AUTO_12, 1);
    let tmp_AUTO_14 = $procs._$n_enum_$o_definition(res);
    return $procs._PCT__$o__$o_(tmp_AUTO_14, _t_.err, err)
    }
    break;
    case _t_.ok.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_12) === 2) {
    let value = $procs._$n_enum_$o_nth(match_v_AUTO_12, 1);
    return f(value)
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_13);
  })()
}

export function result_$o_err_$q_(res) {
  if (arguments.length !== 1) throw $procs._args_throw('result:err?', 1, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_15 = res;
    let match_t_AUTO_16 = $procs._$n_enum_$o_nth(match_v_AUTO_15, 0);
    switch (match_t_AUTO_16.idx) {
    case _t_.err.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_15) === 2) {
    return true
    }
    break;
    case _t_.ok.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_15) === 2) {
    return false
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_16);
  })()
}

export function result_$o_map_err(res, f) {
  if (arguments.length !== 2) throw $procs._args_throw('result:map-err', 2, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_17 = res;
    let match_t_AUTO_18 = $procs._$n_enum_$o_nth(match_v_AUTO_17, 0);
    switch (match_t_AUTO_18.idx) {
    case _t_.err.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_17) === 2) {
    let err = $procs._$n_enum_$o_nth(match_v_AUTO_17, 1);
    let tmp_AUTO_19 = $procs._$n_enum_$o_definition(res);
    let tmp_AUTO_20 = f(err);
    return $procs._PCT__$o__$o_(tmp_AUTO_19, _t_.err, tmp_AUTO_20)
    }
    break;
    case _t_.ok.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_17) === 2) {
    let value = $procs._$n_enum_$o_nth(match_v_AUTO_17, 1);
    let tmp_AUTO_21 = $procs._$n_enum_$o_definition(res);
    return $procs._PCT__$o__$o_(tmp_AUTO_21, _t_.ok, value)
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_18);
  })()
}

export function result_$o_ok_$q_(res) {
  if (arguments.length !== 1) throw $procs._args_throw('result:ok?', 1, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_22 = res;
    let match_t_AUTO_23 = $procs._$n_enum_$o_nth(match_v_AUTO_22, 0);
    switch (match_t_AUTO_23.idx) {
    case _t_.err.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_22) === 2) {
    return false
    }
    break;
    case _t_.ok.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_22) === 2) {
    return true
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_23);
  })()
}

export function result_$o_or_else(res, fallback) {
  if (arguments.length !== 2) throw $procs._args_throw('result:or-else', 2, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_24 = res;
    let match_t_AUTO_25 = $procs._$n_enum_$o_nth(match_v_AUTO_24, 0);
    switch (match_t_AUTO_25.idx) {
    case _t_.err.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_24) === 2) {
    return fallback()
    }
    break;
    case _t_.ok.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_24) === 2) {
    return res
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_25);
  })()
}

export function result_$o_unwrap_or(res, fallback) {
  if (arguments.length !== 2) throw $procs._args_throw('result:unwrap-or', 2, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_26 = res;
    let match_t_AUTO_27 = $procs._$n_enum_$o_nth(match_v_AUTO_26, 0);
    switch (match_t_AUTO_27.idx) {
    case _t_.err.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_26) === 2) {
    return fallback
    }
    break;
    case _t_.ok.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_26) === 2) {
    let value = $procs._$n_enum_$o_nth(match_v_AUTO_26, 1);
    return value
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_27);
  })()
}

export let foldl_compare = function foldl_compare(xs, acc, f) {
  if (arguments.length !== 3) throw $procs._args_throw('foldl-compare', 3, arguments.length);
  
  let times_AUTO_38 = 0;
  while(true) { /* Tail Recursion */
    let ret_AUTO_37 = null;
    if (((times_AUTO_38 & 1023) === 0) && times_AUTO_38 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
    
if ($procs._$n_list_$o_empty_$q_(xs)) { ret_AUTO_37 =true }
 else if (f(acc, $procs._$n_list_$o_nth(xs, 0))) { let tmp_AUTO_35 = $procs._$n_list_$o_rest(xs);
let tmp_AUTO_36 = $procs._$n_list_$o_nth(xs, 0);
ret_AUTO_37 =$procs.recur(tmp_AUTO_35, tmp_AUTO_36, f) } else { ret_AUTO_37 =false }

    if (ret_AUTO_37 instanceof CalcitRecur) {
      if (ret_AUTO_37.args.length !== 3) throw $procs._args_throw('foldl-compare', 3, ret_AUTO_37.args.length);
      xs = ret_AUTO_37.args[0];
acc = ret_AUTO_37.args[1];
f = ret_AUTO_37.args[2];
      
      times_AUTO_38 += 1;
      continue;
    } else {
      return ret_AUTO_37;
    }
  }
}


export function _$e_(x, ...ys) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('=', 1, arguments.length);
  ys = arrayToList(ys);

  if ($procs._$n__$e_(1, $procs._$n_list_$o_count(ys))) { let tmp_AUTO_39 = $procs._$n_list_$o_first(ys);
  return $procs._$n__$e_(x, tmp_AUTO_39) } else { return foldl_compare(ys, x, $procs._$n__$e_) }
}

export function enum_def_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('enum-def?', 1, arguments.length);
  let tmp_AUTO_40 = $procs.type_of(x);
  return $procs._$n__$e_(tmp_AUTO_40, _t_["enum-def"])
}

export function every_$q_(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('every?', 2, arguments.length);
  let tmp_AUTO_41 = function _PCT_every_$q_(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%every?', 2, arguments.length);

    if (f(x)) { return $procs._$o__$o_(false, acc) } else { return $procs._$o__$o_(true, false) }
  }
  ;
  return $procs.foldl_shortcut(xs, true, true, tmp_AUTO_41)
}

export function some_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('some?', 1, arguments.length);
  let tmp_AUTO_42 = $procs.nil_$q_(x);
  return $procs.not(tmp_AUTO_42)
}

export function _$n_str_spaced(head_$q_, x0, ...xs) {
  if (arguments.length < 2) throw $procs._args_fewer_throw('&str-spaced', 2, arguments.length);
  xs = arrayToList(xs);

  if ($procs._$n_list_$o_empty_$q_(xs)) { 
  if (head_$q_) { return $procs._$n_str(x0) }
   else if ($procs.nil_$q_(x0)) { return "" } else { return $procs._$n_str_$o_concat(" ", x0) } }
   else if (some_$q_(x0)) { let tmp_AUTO_43 = (head_$q_ ? $procs._$n_str(x0) : $procs._$n_str_$o_concat(" ", x0));
  let tmp_AUTO_44 = _$n_str_spaced(false, ...listToArray(xs));
  return $procs._$n_str_$o_concat(tmp_AUTO_43, tmp_AUTO_44) } else { return _$n_str_spaced(head_$q_, ...listToArray(xs)) }
}

export function str_spaced(...xs) {
  xs = arrayToList(xs);
  return _$n_str_spaced(true, ...listToArray(xs))
}

export function struct_def_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('struct-def?', 1, arguments.length);
  let tmp_AUTO_45 = $procs.type_of(x);
  return $procs._$n__$e_(tmp_AUTO_45, _t_["struct-def"])
}

export function impl_traits(x, ...traits) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('impl-traits', 1, arguments.length);
  traits = arrayToList(traits);
  {

    if ((function _fn_(){
      let tmp_AUTO_46 = (function _fn_(){
        let tmp_AUTO_47 = function f_PCT_(trait) {
          if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
          let tmp_AUTO_48 = $procs.type_of(trait);
          return _$e_(_t_.impl, tmp_AUTO_48)
        }
        ;
        return every_$q_(traits, tmp_AUTO_47);
      })();
      return $procs.not(tmp_AUTO_46);
    })()) { let err_AUTO_49 = new Error("impl-traits misuse. Expected: impl arguments are :impl values. Actual: found non-impl argument. Fix: pass values created by `defimpl`.");
    err_AUTO_49.data = null;
    throw err_AUTO_49; } else {  null; };
  }

  if (struct_def_$q_(x)) { return $procs._$n_struct_def_$o_impl_traits(x, ...listToArray(traits)) }
   else if (enum_def_$q_(x)) { return $procs._$n_enum_def_$o_impl_traits(x, ...listToArray(traits)) } else { let err_AUTO_50 = new Error(str_spaced("impl-traits misuse. Expected: first argument is struct/enum definition. Actual:", $procs.type_of(x), "Fix: attach impls to `defstruct`/`defenum` result, then construct instances from that definition."));
  err_AUTO_50.data = null;
  throw err_AUTO_50; }
}

export function _PCT_err(message) {
  if (arguments.length !== 1) throw $procs._args_throw('%err', 1, arguments.length);
  return $procs._PCT__$o__$o_(Result, _t_.err, message)
}

export function option_$o_map(opt, f) {
  if (arguments.length !== 2) throw $procs._args_throw('option:map', 2, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_52 = opt;
    let match_t_AUTO_53 = $procs._$n_enum_$o_nth(match_v_AUTO_52, 0);
    switch (match_t_AUTO_53.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_52) === 1) {
    let tmp_AUTO_54 = $procs._$n_enum_$o_definition(opt);
    return $procs._PCT__$o__$o_(tmp_AUTO_54, _t_.none)
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_52) === 2) {
    let value = $procs._$n_enum_$o_nth(match_v_AUTO_52, 1);
    let tmp_AUTO_55 = $procs._$n_enum_$o_definition(opt);
    let tmp_AUTO_56 = f(value);
    return $procs._PCT__$o__$o_(tmp_AUTO_55, _t_.some, tmp_AUTO_56)
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_53);
  })()
}

export function option_$o_and_then(opt, f) {
  if (arguments.length !== 2) throw $procs._args_throw('option:and-then', 2, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_64 = opt;
    let match_t_AUTO_65 = $procs._$n_enum_$o_nth(match_v_AUTO_64, 0);
    switch (match_t_AUTO_65.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_64) === 1) {
    let tmp_AUTO_66 = $procs._$n_enum_$o_definition(opt);
    return $procs._PCT__$o__$o_(tmp_AUTO_66, _t_.none)
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_64) === 2) {
    let value = $procs._$n_enum_$o_nth(match_v_AUTO_64, 1);
    return f(value)
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_65);
  })()
}

export function option_$o_fold(opt, on_none, on_some) {
  if (arguments.length !== 3) throw $procs._args_throw('option:fold', 3, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_67 = opt;
    let match_t_AUTO_68 = $procs._$n_enum_$o_nth(match_v_AUTO_67, 0);
    switch (match_t_AUTO_68.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_67) === 1) {
    return on_none()
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_67) === 2) {
    let value = $procs._$n_enum_$o_nth(match_v_AUTO_67, 1);
    return on_some(value)
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_68);
  })()
}

export function option_$o_none_$q_(opt) {
  if (arguments.length < 0) throw $procs._args_between_throw('option:none?', 0, 1, arguments.length);
  if (arguments.length > 1) throw $procs._args_between_throw('option:none?', 0, 1, arguments.length);
  if (arguments.length >= 0 && arguments.length <= 0) opt = _PCT_none();
  return (function _fn_(){
    let match_v_AUTO_69 = opt;
    let match_t_AUTO_70 = $procs._$n_enum_$o_nth(match_v_AUTO_69, 0);
    switch (match_t_AUTO_70.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_69) === 1) {
    return true
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_69) === 2) {
    return false
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_70);
  })()
}

export function option_$o_or_else(opt, fallback) {
  if (arguments.length !== 2) throw $procs._args_throw('option:or-else', 2, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_71 = opt;
    let match_t_AUTO_72 = $procs._$n_enum_$o_nth(match_v_AUTO_71, 0);
    switch (match_t_AUTO_72.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_71) === 1) {
    return fallback()
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_71) === 2) {
    return opt
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_72);
  })()
}

export function option_$o_some_$q_(opt) {
  if (arguments.length < 0) throw $procs._args_between_throw('option:some?', 0, 1, arguments.length);
  if (arguments.length > 1) throw $procs._args_between_throw('option:some?', 0, 1, arguments.length);
  if (arguments.length >= 0 && arguments.length <= 0) opt = _PCT_none();
  return (function _fn_(){
    let match_v_AUTO_73 = opt;
    let match_t_AUTO_74 = $procs._$n_enum_$o_nth(match_v_AUTO_73, 0);
    switch (match_t_AUTO_74.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_73) === 1) {
    return false
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_73) === 2) {
    return true
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_74);
  })()
}

export function option_$o_unwrap(opt) {
  if (arguments.length < 0) throw $procs._args_between_throw('option:unwrap', 0, 1, arguments.length);
  if (arguments.length > 1) throw $procs._args_between_throw('option:unwrap', 0, 1, arguments.length);
  if (arguments.length >= 0 && arguments.length <= 0) opt = _PCT_none();
  return (function _fn_(){
    let match_v_AUTO_75 = opt;
    let match_t_AUTO_76 = $procs._$n_enum_$o_nth(match_v_AUTO_75, 0);
    switch (match_t_AUTO_76.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_75) === 1) {
    let err_AUTO_77 = new Error("option:unwrap-received-none");
    err_AUTO_77.data = null;
    throw err_AUTO_77;
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_75) === 2) {
    let value = $procs._$n_enum_$o_nth(match_v_AUTO_75, 1);
    return value
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_76);
  })()
}

export function option_$o_unwrap_or(opt, fallback) {
  if (arguments.length !== 2) throw $procs._args_throw('option:unwrap-or', 2, arguments.length);
  return (function _fn_(){
    let match_v_AUTO_78 = opt;
    let match_t_AUTO_79 = $procs._$n_enum_$o_nth(match_v_AUTO_78, 0);
    switch (match_t_AUTO_79.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_78) === 1) {
    return fallback
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_78) === 2) {
    let value = $procs._$n_enum_$o_nth(match_v_AUTO_78, 1);
    return value
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_79);
  })()
}

export function _PCT_none() {
  if (arguments.length !== 0) throw $procs._args_throw('%none', 0, arguments.length);
  return $procs._PCT__$o__$o_(Option, _t_.none)
}

export function _PCT_ok(value) {
  if (arguments.length !== 1) throw $procs._args_throw('%ok', 1, arguments.length);
  return $procs._PCT__$o__$o_(Result, _t_.ok, value)
}

export function _PCT_some(value) {
  if (arguments.length !== 1) throw $procs._args_throw('%some', 1, arguments.length);
  return $procs._PCT__$o__$o_(Option, _t_.some, value)
}

export function _$n__LT__$e_(a, b) {
  if (arguments.length !== 2) throw $procs._args_throw('&<=', 2, arguments.length);
  {
    {

    if ($procs.not(true)) { let err_AUTO_88 = new Error(str_spaced("expects 1st argument to be string, got:", "expects numbers for &<="));
    err_AUTO_88.data = null;
    throw err_AUTO_88; } else {  null; };
    }
    void 0;
  }

  if ($procs._$n__LT_(a, b)) { return true } else { return $procs._$n__$e_(a, b) }
}

export function _$n__GT__$e_(a, b) {
  if (arguments.length !== 2) throw $procs._args_throw('&>=', 2, arguments.length);
  {
    {

    if ($procs.not(true)) { let err_AUTO_89 = new Error(str_spaced("expects 1st argument to be string, got:", "expects numbers for &>="));
    err_AUTO_89.data = null;
    throw err_AUTO_89; } else {  null; };
    }
    void 0;
  }

  if ($procs._$n__GT_(a, b)) { return true } else { return $procs._$n__$e_(a, b) }
}

export function first(x) {
  if (arguments.length !== 1) throw $procs._args_throw('first', 1, arguments.length);

  if ($procs.list_$q_(x)) { 
  if ($procs._$n_list_$o_empty_$q_(x)) { return _PCT_none() } else { let tmp_AUTO_90 = $procs._$n_list_$o_first(x);
  return _PCT_some(tmp_AUTO_90) } }
   else if ($procs.string_$q_(x)) { 
  if ($procs._$n_str_$o_empty_$q_(x)) { return _PCT_none() } else { let tmp_AUTO_91 = $procs._$n_str_$o_first(x);
  return _PCT_some(tmp_AUTO_91) } }
   else if ($procs.enum_$q_(x)) { 
  if ($procs._$n__$e_(0, $procs._$n_enum_$o_count(x))) { return _PCT_none() } else { let tmp_AUTO_92 = $procs._$n_enum_$o_nth(x, 0);
  return _PCT_some(tmp_AUTO_92) } } else { let err_AUTO_93 = new Error(str_spaced("first", "expected", "a", "list,", "string,", "or", "enum,", "got:", x));
  err_AUTO_93.data = null;
  throw err_AUTO_93; }
}

export function nth(x, i) {
  if (arguments.length !== 2) throw $procs._args_throw('nth', 2, arguments.length);

  if ($procs.not(true)) { return _PCT_none() }
   else if ($procs.list_$q_(x)) { 
  if ((_$n__GT__$e_(i, 0) ? (function _fn_(){
    let v1__1 = $procs._$n__LT_(i, $procs._$n_list_$o_count(x));

    if (v1__1) { return v1__1 } else { return false }
  })() : false)) { let tmp_AUTO_94 = $procs._$n_list_$o_nth(x, i);
  return _PCT_some(tmp_AUTO_94) } else { return _PCT_none() } }
   else if ($procs.string_$q_(x)) { 
  if ((_$n__GT__$e_(i, 0) ? (function _fn_(){
    let v1__2 = $procs._$n__LT_(i, $procs._$n_str_$o_count(x));

    if (v1__2) { return v1__2 } else { return false }
  })() : false)) { let tmp_AUTO_95 = $procs._$n_str_$o_nth(x, i);
  return _PCT_some(tmp_AUTO_95) } else { return _PCT_none() } }
   else if ($procs.enum_$q_(x)) { 
  if ((_$n__GT__$e_(i, 0) ? (function _fn_(){
    let v1__3 = $procs._$n__LT_(i, $procs._$n_enum_$o_count(x));

    if (v1__3) { return v1__3 } else { return false }
  })() : false)) { let tmp_AUTO_96 = $procs._$n_enum_$o_nth(x, i);
  return _PCT_some(tmp_AUTO_96) } else { return _PCT_none() } } else { let err_AUTO_97 = new Error(str_spaced("nth", "expected", "a", "list,", "string,", "or", "enum,", "got:", x));
  err_AUTO_97.data = null;
  throw err_AUTO_97; }
}

export function get(base, k) {
  if (arguments.length !== 2) throw $procs._args_throw('get', 2, arguments.length);

  if ($procs.map_$q_(base)) { 
  if ($procs._$n_map_$o_contains_$q_(base, k)) { let tmp_AUTO_98 = $procs._$n_map_$o_get(base, k);
  return _PCT_some(tmp_AUTO_98) } else { return _PCT_none() } }
   else if ($procs.struct_$q_(base)) { 
  if (((function _fn_(){
    let v1__1 = $procs.tag_$q_(k);

    if (v1__1) { return v1__1 } else { let v1__2 = $procs.string_$q_(k);

    if (v1__2) { return v1__2 } else { return $procs.symbol_$q_(k) }
     }
  })() ? (function _fn_(){
    let v1__3 = $procs._$n_struct_$o_contains_$q_(base, k);

    if (v1__3) { return v1__3 } else { return false }
  })() : false)) { let tmp_AUTO_99 = $procs._$n_struct_$o_get(base, k);
  return _PCT_some(tmp_AUTO_99) } else { return _PCT_none() } }
   else if ((function _fn_(){
    let v1__4 = $procs.list_$q_(base);

    if (v1__4) { return v1__4 } else { let v1__5 = $procs.string_$q_(base);

    if (v1__5) { return v1__5 } else { return $procs.enum_$q_(base) }
     }
  })()) { 
  if ($procs.number_$q_(k)) { return nth(base, k) } else { return _PCT_none() } } else { let err_AUTO_100 = new Error(str_spaced("get", "expected", "a", "map", "or", "indexed", "collection,", "got:", base));
  err_AUTO_100.data = null;
  throw err_AUTO_100; }
}

export function last(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('last', 1, arguments.length);

  if ($procs.list_$q_(xs)) { 
  if ($procs._$n_list_$o_empty_$q_(xs)) { return _PCT_none() } else { let tmp_AUTO_101 = $procs._$n_list_$o_last(xs);
  return _PCT_some(tmp_AUTO_101) } }
   else if ($procs.string_$q_(xs)) { 
  if ($procs._$n_str_$o_empty_$q_(xs)) { return _PCT_none() } else { let tmp_AUTO_102 = $procs._$n_str_$o_nth(xs, $procs._$n__($procs._$n_str_$o_count(xs), 1));
  return _PCT_some(tmp_AUTO_102) } }
   else if ($procs.enum_$q_(xs)) { 
  if ($procs._$n__$e_(0, $procs._$n_enum_$o_count(xs))) { return _PCT_none() } else { let tmp_AUTO_103 = $procs._$n_enum_$o_nth(xs, $procs._$n__($procs._$n_enum_$o_count(xs), 1));
  return _PCT_some(tmp_AUTO_103) } } else { let err_AUTO_104 = new Error(str_spaced("last", "expected", "a", "list,", "string,", "or", "enum,", "got:", xs));
  err_AUTO_104.data = null;
  throw err_AUTO_104; }
}

export function _$n_fn_$o_apply(f, g) {
  if (arguments.length !== 2) throw $procs._args_throw('&fn:apply', 2, arguments.length);
  return function f_PCT_(x) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    let tmp_AUTO_121 = f(x);
    return g(x, tmp_AUTO_121)
  }

}

export function _$n_fn_$o_bind(m, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&fn:bind', 2, arguments.length);
  return function f_PCT_(x) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    let tmp_AUTO_122 = m(x);
    return f(tmp_AUTO_122, x)
  }

}

export function _$n_fn_$o_map(f, g) {
  if (arguments.length !== 2) throw $procs._args_throw('&fn:map', 2, arguments.length);
  return function f_PCT_(x) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    let tmp_AUTO_123 = g(x);
    return f(tmp_AUTO_123)
  }

}

export function reduce(xs, x0, f) {
  if (arguments.length !== 3) throw $procs._args_throw('reduce', 3, arguments.length);
  return $procs.foldl(xs, x0, f)
}

export function merge(x0, ...xs) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('merge', 1, arguments.length);
  xs = arrayToList(xs);
  return reduce(xs, x0, $procs._$n_merge)
}

export function union(base, ...xs) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('union', 1, arguments.length);
  xs = arrayToList(xs);
  let tmp_AUTO_124 = function f_PCT_(acc, item) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);
    return $procs._$n_union(acc, item)
  }
  ;
  return reduce(xs, base, tmp_AUTO_124)
}

export function _$n_fn_$o_mappend(f, g) {
  if (arguments.length !== 2) throw $procs._args_throw('&fn:mappend', 2, arguments.length);
  return function f_PCT_(x) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    let v1 = f(x);
    let v2 = g(x);

    if ($procs.list_$q_(v1)) { return $procs._$n_list_$o_concat(v1, v2) }
     else if ($procs.map_$q_(v1)) { return merge(v1, v2) }
     else if ($procs.set_$q_(v1)) { return union(v1, v2) }
     else if ($procs.string_$q_(v1)) { return $procs._$n_str_$o_concat(v1, v2) } else { return $procs.invoke_method("mappend",v1,v2) }


  }

}

export function _$n_list_$o_map(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:map', 2, arguments.length);
  let tmp_AUTO_133 = $procs._$L_();
  let tmp_AUTO_134 = function _PCT__$n_list_$o_map(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%&list:map', 2, arguments.length);
    let tmp_AUTO_135 = f(x);
    return $procs.append(acc, tmp_AUTO_135)
  }
  ;
  return $procs.foldl(xs, tmp_AUTO_133, tmp_AUTO_134)
}

export function _$n_list_$o_apply(xs, fs) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:apply', 2, arguments.length);
  let tmp_AUTO_136 = (function _fn_(){
    let tmp_AUTO_137 = function f_PCT_(f) {
      if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
      let tmp_AUTO_138 = function f_PCT_(x) {
        if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
        return f(x)
      }
      ;
      return _$n_list_$o_map(xs, tmp_AUTO_138)
    }
    ;
    return _$n_list_$o_map(fs, tmp_AUTO_137);
  })();
  return $procs._$n_list_$o_concat(...listToArray(tmp_AUTO_136))
}

export function _$n_list_$o_empty(_xs) {
  if (arguments.length !== 1) throw $procs._args_throw('&list:empty', 1, arguments.length);
  return $procs._$L_()
}

export function _$n_list_$o_filter(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:filter', 2, arguments.length);
  let tmp_AUTO_139 = $procs._$L_();
  let tmp_AUTO_140 = function _PCT__$n_list_$o_filter(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%&list:filter', 2, arguments.length);

    if (f(x)) { return $procs.append(acc, x) } else { return acc }
  }
  ;
  return reduce(xs, tmp_AUTO_139, tmp_AUTO_140)
}

export function _$n_list_$o_filter_pair(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:filter-pair', 2, arguments.length);
  let tmp_AUTO_141 = function _PCT_filter_pair(pair) {
    if (arguments.length !== 1) throw $procs._args_throw('%filter-pair', 1, arguments.length);
    {
      {

      if ($procs.not(true)) { let err_AUTO_142 = new Error(str_spaced("expects 1st argument to be string, got:", "expected a pair"));
      err_AUTO_142.data = null;
      throw err_AUTO_142; } else {  null; };
      }

      if (($procs.list_$q_(pair) ? (function _fn_(){
        let v1__1 = _$e_(2, $procs._$n_list_$o_count(pair));

        if (v1__1) { return v1__1 } else { return false }
      })() : false)) { void 0 } else { {
      console.error($procs.printable("Failed assertion:", $procs.format_to_lisp(new CalcitSliceList([new CalcitSymbol("and"), new CalcitSliceList([new CalcitSymbol("list?"), new CalcitSymbol("pair")]), new CalcitSliceList([new CalcitSymbol("="), 2, new CalcitSliceList([new CalcitSymbol("count"), new CalcitSymbol("pair")])])]))));
      }
      let err_AUTO_143 = new Error("expected a pair (and (list? pair) (= 2 (count pair)))");
      err_AUTO_143.data = null;
      throw err_AUTO_143;
       };
    }
    let tmp_AUTO_144 = $procs._$n_list_$o_nth(pair, 0);
    let tmp_AUTO_145 = $procs._$n_list_$o_nth(pair, 1);
    return f(tmp_AUTO_144, tmp_AUTO_145)
  }
  ;
  return _$n_list_$o_filter(xs, tmp_AUTO_141)
}

export function _$n_list_$o_find_last(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:find-last', 2, arguments.length);
  let tmp_AUTO_146 = _PCT_none();
  let tmp_AUTO_147 = _PCT_none();
  let tmp_AUTO_148 = function f_PCT_(_acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);

    if (f(x)) { let tmp_AUTO_149 = _PCT_some(x);
    return $procs._$o__$o_(true, tmp_AUTO_149) } else { let tmp_AUTO_150 = _PCT_none();
    return $procs._$o__$o_(false, tmp_AUTO_150) }
  }
  ;
  return $procs.foldr_shortcut(xs, tmp_AUTO_146, tmp_AUTO_147, tmp_AUTO_148)
}

export function dec(x) {
  if (arguments.length !== 1) throw $procs._args_throw('dec', 1, arguments.length);
  return $procs._$n__(x, 1)
}

export function _$n_list_$o_find_last_index(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:find-last-index', 2, arguments.length);
  let tmp_AUTO_151 = dec($procs._$n_list_$o_count(xs));
  let tmp_AUTO_152 = _PCT_none();
  let tmp_AUTO_153 = function f_PCT_(idx, x) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);

    if (f(x)) { let tmp_AUTO_154 = _PCT_some(idx);
    return $procs._$o__$o_(true, tmp_AUTO_154) } else { let tmp_AUTO_155 = $procs._$n__(1, idx);
    return $procs._$o__$o_(false, tmp_AUTO_155) }
  }
  ;
  return $procs.foldr_shortcut(xs, tmp_AUTO_151, tmp_AUTO_152, tmp_AUTO_153)
}

export function _$n_list_$o_flatten(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('&list:flatten', 1, arguments.length);

  if ($procs.list_$q_(xs)) { let tmp_AUTO_156 = _$n_list_$o_map(xs, _$n_list_$o_flatten);
  return $procs._$n_list_$o_concat(...listToArray(tmp_AUTO_156)) } else { return $procs._$L_(xs) }
}

export function _$n_list_$o_last_index_of(xs, item) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:last-index-of', 2, arguments.length);
  let tmp_AUTO_157 = dec($procs._$n_list_$o_count(xs));
  let tmp_AUTO_158 = _PCT_none();
  let tmp_AUTO_159 = function f_PCT_(idx, x) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);

    if ($procs._$n__$e_(item, x)) { let tmp_AUTO_160 = _PCT_some(idx);
    return $procs._$o__$o_(true, tmp_AUTO_160) } else { let tmp_AUTO_161 = $procs._$n__(1, idx);
    return $procs._$o__$o_(false, tmp_AUTO_161) }
  }
  ;
  return $procs.foldr_shortcut(xs, tmp_AUTO_157, tmp_AUTO_158, tmp_AUTO_159)
}

export function _$n_list_$o_map_pair(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:map-pair', 2, arguments.length);
  let tmp_AUTO_162 = function _PCT_map_pair(pair) {
    if (arguments.length !== 1) throw $procs._args_throw('%map-pair', 1, arguments.length);
    {
      {

      if ($procs.not(true)) { let err_AUTO_163 = new Error(str_spaced("expects 1st argument to be string, got:", "expected a pair"));
      err_AUTO_163.data = null;
      throw err_AUTO_163; } else {  null; };
      }

      if (($procs.list_$q_(pair) ? (function _fn_(){
        let v1__1 = _$e_(2, $procs._$n_list_$o_count(pair));

        if (v1__1) { return v1__1 } else { return false }
      })() : false)) { void 0 } else { {
      console.error($procs.printable("Failed assertion:", $procs.format_to_lisp(new CalcitSliceList([new CalcitSymbol("and"), new CalcitSliceList([new CalcitSymbol("list?"), new CalcitSymbol("pair")]), new CalcitSliceList([new CalcitSymbol("="), 2, new CalcitSliceList([new CalcitSymbol("count"), new CalcitSymbol("pair")])])]))));
      }
      let err_AUTO_164 = new Error("expected a pair (and (list? pair) (= 2 (count pair)))");
      err_AUTO_164.data = null;
      throw err_AUTO_164;
       };
    }
    let tmp_AUTO_165 = $procs._$n_list_$o_nth(pair, 0);
    let tmp_AUTO_166 = $procs._$n_list_$o_nth(pair, 1);
    return f(tmp_AUTO_165, tmp_AUTO_166)
  }
  ;
  return _$n_list_$o_map(xs, tmp_AUTO_162)
}

export function _$n_list_$o_mappend(x, y) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:mappend', 2, arguments.length);
  return $procs._$n_list_$o_concat(x, y)
}

export let _$n_list_$o_max_loop = function _$n_list_$o_max_loop(xs, acc) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:max-loop', 2, arguments.length);
  
  let times_AUTO_171 = 0;
  while(true) { /* Tail Recursion */
    let ret_AUTO_170 = null;
    if (((times_AUTO_171 & 1023) === 0) && times_AUTO_171 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
    
if ($procs._$n_list_$o_empty_$q_(xs)) { ret_AUTO_170 =acc } else { let x = $procs._$n_list_$o_nth(xs, 0);
let tmp_AUTO_168 = $procs._$n_list_$o_rest(xs);
let tmp_AUTO_169 = ($procs._$n__GT_(x, acc) ? x : acc);
ret_AUTO_170 =$procs.recur(tmp_AUTO_168, tmp_AUTO_169)
 }

    if (ret_AUTO_170 instanceof CalcitRecur) {
      if (ret_AUTO_170.args.length !== 2) throw $procs._args_throw('&list:max-loop', 2, ret_AUTO_170.args.length);
      xs = ret_AUTO_170.args[0];
acc = ret_AUTO_170.args[1];
      
      times_AUTO_171 += 1;
      continue;
    } else {
      return ret_AUTO_170;
    }
  }
}


export function _$n_list_$o_max(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('&list:max', 1, arguments.length);

  if ($procs._$n_list_$o_empty_$q_(xs)) { return _PCT_none() } else { let tmp_AUTO_172 = _$n_list_$o_max_loop($procs._$n_list_$o_rest(xs), $procs._$n_list_$o_nth(xs, 0));
  return _PCT_some(tmp_AUTO_172) }
}

export let _$n_list_$o_min_loop = function _$n_list_$o_min_loop(xs, acc) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:min-loop', 2, arguments.length);
  
  let times_AUTO_177 = 0;
  while(true) { /* Tail Recursion */
    let ret_AUTO_176 = null;
    if (((times_AUTO_177 & 1023) === 0) && times_AUTO_177 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
    
if ($procs._$n_list_$o_empty_$q_(xs)) { ret_AUTO_176 =acc } else { let x = $procs._$n_list_$o_nth(xs, 0);
let tmp_AUTO_174 = $procs._$n_list_$o_rest(xs);
let tmp_AUTO_175 = ($procs._$n__LT_(x, acc) ? x : acc);
ret_AUTO_176 =$procs.recur(tmp_AUTO_174, tmp_AUTO_175)
 }

    if (ret_AUTO_176 instanceof CalcitRecur) {
      if (ret_AUTO_176.args.length !== 2) throw $procs._args_throw('&list:min-loop', 2, ret_AUTO_176.args.length);
      xs = ret_AUTO_176.args[0];
acc = ret_AUTO_176.args[1];
      
      times_AUTO_177 += 1;
      continue;
    } else {
      return ret_AUTO_176;
    }
  }
}


export function _$n_list_$o_min(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('&list:min', 1, arguments.length);

  if ($procs._$n_list_$o_empty_$q_(xs)) { return _PCT_none() } else { let tmp_AUTO_178 = _$n_list_$o_min_loop($procs._$n_list_$o_rest(xs), $procs._$n_list_$o_nth(xs, 0));
  return _PCT_some(tmp_AUTO_178) }
}

export function _$n_get_raw(base, k) {
  if (arguments.length !== 2) throw $procs._args_throw('&get-raw', 2, arguments.length);

  if ($procs.list_$q_(base)) { return $procs._$n_list_$o_nth(base, k) }
   else if ($procs.map_$q_(base)) { return $procs._$n_map_$o_get(base, k) }
   else if ($procs.string_$q_(base)) { return $procs._$n_str_$o_nth(base, k) }
   else if ($procs.enum_$q_(base)) { return $procs._$n_enum_$o_nth(base, k) }
   else if ($procs.struct_$q_(base)) { return $procs._$n_struct_$o_get(base, k) } else { let err_AUTO_179 = new Error(str_spaced("&get-raw", "expected", "a", "collection", "or", "struct,", "got:", base));
  err_AUTO_179.data = null;
  throw err_AUTO_179; }
}

export function _$n_list_$o_sort_by(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&list:sort-by', 2, arguments.length);

  if ($procs.tag_$q_(f)) { let tmp_AUTO_180 = function _PCT__$n_list_$o_sort_by(a, b) {
    if (arguments.length !== 2) throw $procs._args_throw('%&list:sort-by', 2, arguments.length);
    let tmp_AUTO_181 = _$n_get_raw(a, f);
    let tmp_AUTO_182 = _$n_get_raw(b, f);
    return $procs._$n_compare(tmp_AUTO_181, tmp_AUTO_182)
  }
  ;
  return $procs.sort(xs, tmp_AUTO_180) } else { let tmp_AUTO_183 = function _PCT__$n_list_$o_sort_by(a, b) {
    if (arguments.length !== 2) throw $procs._args_throw('%&list:sort-by', 2, arguments.length);
    let tmp_AUTO_184 = f(a);
    let tmp_AUTO_185 = f(b);
    return $procs._$n_compare(tmp_AUTO_184, tmp_AUTO_185)
  }
  ;
  return $procs.sort(xs, tmp_AUTO_183) }
}

export function any_$q_(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('any?', 2, arguments.length);
  let tmp_AUTO_186 = function _PCT_any_$q_(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%any?', 2, arguments.length);

    if (f(x)) { return $procs._$o__$o_(true, true) } else { return $procs._$o__$o_(false, acc) }
  }
  ;
  return $procs.foldl_shortcut(xs, false, false, tmp_AUTO_186)
}

export function slice(xs, n, m) {
  if (arguments.length < 2) throw $procs._args_between_throw('slice', 2, 3, arguments.length);
  if (arguments.length > 3) throw $procs._args_between_throw('slice', 2, 3, arguments.length);
  if (arguments.length <= 2) m = null;

  if ($procs.nil_$q_(m)) { 
  if ($procs.list_$q_(xs)) { return $procs._$n_list_$o_slice(xs, n) }
   else if ($procs.string_$q_(xs)) { return $procs._$n_str_$o_slice(xs, n) } else { return $procs.invoke_method("slice",xs,n) } }
   else if ($procs.list_$q_(xs)) { return $procs._$n_list_$o_slice(xs, n, m) }
   else if ($procs.string_$q_(xs)) { return $procs._$n_str_$o_slice(xs, n, m) } else { return $procs.invoke_method("slice",xs,n, m) }
}

export function drop(xs, n) {
  if (arguments.length !== 2) throw $procs._args_throw('drop', 2, arguments.length);
  let tmp_AUTO_187 = $procs._$n_list_$o_count(xs);
  return slice(xs, n, tmp_AUTO_187)
}

export function each(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('each', 2, arguments.length);
  let tmp_AUTO_188 = void 0;
  let tmp_AUTO_189 = function _PCT_each(_acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%each', 2, arguments.length);
    {
      f(x);
    }
    return void 0
  }
  ;
  return $procs.foldl(xs, tmp_AUTO_188, tmp_AUTO_189)
}

export function filter_not(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('filter-not', 2, arguments.length);
  let tmp_AUTO_190 = function _PCT_filter_not(x) {
    if (arguments.length !== 1) throw $procs._args_throw('%filter-not', 1, arguments.length);
    let tmp_AUTO_191 = f(x);
    return $procs.not(tmp_AUTO_191)
  }
  ;
  return _$n_list_$o_filter(xs, tmp_AUTO_190)
}

export function find(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('find', 2, arguments.length);
  let tmp_AUTO_192 = _PCT_none();
  let tmp_AUTO_193 = function _PCT_find(_acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%find', 2, arguments.length);

    if (f(x)) { let tmp_AUTO_194 = _PCT_some(x);
    return $procs._$o__$o_(true, tmp_AUTO_194) } else { let tmp_AUTO_195 = _PCT_none();
    return $procs._$o__$o_(false, tmp_AUTO_195) }
  }
  ;
  return $procs.foldl_shortcut(xs, 0, tmp_AUTO_192, tmp_AUTO_193)
}

export function find_index(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('find-index', 2, arguments.length);
  let tmp_AUTO_196 = _PCT_none();
  let tmp_AUTO_197 = function _PCT_find_index(index, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%find-index', 2, arguments.length);

    if (f(x)) { let tmp_AUTO_198 = _PCT_some(index);
    return $procs._$o__$o_(true, tmp_AUTO_198) } else { let tmp_AUTO_199 = $procs._$n__ADD_(1, index);
    return $procs._$o__$o_(false, tmp_AUTO_199) }
  }
  ;
  return $procs.foldl_shortcut(xs, 0, tmp_AUTO_196, tmp_AUTO_197)
}

export let get_in = function get_in(base, path) {
  if (arguments.length !== 2) throw $procs._args_throw('get-in', 2, arguments.length);
  
  let times_AUTO_206 = 0;
  while(true) { /* Tail Recursion */
    let ret_AUTO_205 = null;
    if (((times_AUTO_206 & 1023) === 0) && times_AUTO_206 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
    
if ($procs.nil_$q_(base)) { ret_AUTO_205 =_PCT_none() } else { let v__1 = path;
($procs.not(true) ? (function _fn_(){
  let err_AUTO_201 = new Error("expected a list in list-match");
  err_AUTO_201.data = null;
  throw err_AUTO_201;
})() : null);

if ($procs._$n_list_$o_empty_$q_(v__1)) { ret_AUTO_205 =_PCT_some(base)
 } else { let y0 = $procs._$n_list_$o_nth(v__1, 0);
let ys = $procs._$n_list_$o_slice(v__1, 1);

if ($procs.struct_$q_(base)) { let err_AUTO_202 = new Error("get-in does not traverse Struct fields; use (:field value) so the checker can enforce the declared type");
err_AUTO_202.data = null;
throw err_AUTO_202; } else { ret_AUTO_205 =(function _fn_(){
  let match_v_AUTO_203 = get(base, y0);
  let match_t_AUTO_204 = $procs._$n_enum_$o_nth(match_v_AUTO_203, 0);
  switch (match_t_AUTO_204.idx) {
  case _t_.none.idx:
  if ($procs._$n_enum_$o_count(match_v_AUTO_203) === 1) {
  return _PCT_none()
  }
  break;
  case _t_.some.idx:
  if ($procs._$n_enum_$o_count(match_v_AUTO_203) === 2) {
  let value = $procs._$n_enum_$o_nth(match_v_AUTO_203, 1);
  return $procs.recur(value, ys)
  }
  break;
  }
  throw new Error("match: no matching branch for tag " + match_t_AUTO_204);
})() }


 }
 }

    if (ret_AUTO_205 instanceof CalcitRecur) {
      if (ret_AUTO_205.args.length !== 2) throw $procs._args_throw('get-in', 2, ret_AUTO_205.args.length);
      base = ret_AUTO_205.args[0];
path = ret_AUTO_205.args[1];
      
      times_AUTO_206 += 1;
      continue;
    } else {
      return ret_AUTO_205;
    }
  }
}


export function assoc(x, k, v) {
  if (arguments.length !== 3) throw $procs._args_throw('assoc', 3, arguments.length);

  if ($procs.nil_$q_(x)) { let err_AUTO_207 = new Error(str_spaced("assoc does not work on nil for:", k, v));
  err_AUTO_207.data = null;
  throw err_AUTO_207; }
   else if ($procs.list_$q_(x)) { return $procs._$n_list_$o_assoc(x, k, v) } else { return $procs.invoke_method("assoc",x,k, v) }
}

export function contains_$q_(x, k) {
  if (arguments.length !== 2) throw $procs._args_throw('contains?', 2, arguments.length);

  if ($procs.list_$q_(x)) { return $procs._$n_list_$o_contains_$q_(x, k) } else { return $procs.invoke_method("contains?",x,k) }
}

export function update(x, k, f) {
  if (arguments.length !== 3) throw $procs._args_throw('update', 3, arguments.length);

  if ($procs.map_$q_(x)) { 
  if ($procs._$n_map_$o_contains_$q_(x, k)) { let tmp_AUTO_208 = f($procs._$n_map_$o_get(x, k));
  return $procs._$n_map_$o_assoc(x, k, tmp_AUTO_208) } else { return x } }
   else if ($procs.list_$q_(x)) { 
  if ($procs._$n_list_$o_contains_$q_(x, k)) { let tmp_AUTO_209 = f($procs._$n_list_$o_nth(x, k));
  return $procs._$n_list_$o_assoc(x, k, tmp_AUTO_209) } else { return x } }
   else if ($procs.enum_$q_(x)) { let tmp_AUTO_210 = f($procs._$n_enum_$o_nth(x, k));
  return $procs._$n_enum_$o_assoc(x, k, tmp_AUTO_210) }
   else if ($procs.struct_$q_(x)) { 
  if (contains_$q_(x, k)) { let tmp_AUTO_211 = f($procs._$n_struct_$o_get(x, k));
  return assoc(x, k, tmp_AUTO_211) } else { return x } } else { let err_AUTO_212 = new Error($procs._$n_str_$o_concat("Cannot update key on item: ", $procs.to_lispy_string(x)));
  err_AUTO_212.data = null;
  throw err_AUTO_212; }
}

export function group_by(xs0, f) {
  if (arguments.length !== 2) throw $procs._args_throw('group-by', 2, arguments.length);
  let tmp_AUTO_213 = $procs._$n__$M_();
  return function _PCT_group_by(acc, xs) {
    if (arguments.length !== 2) throw $procs._args_throw('%group-by', 2, arguments.length);

    let times_AUTO_219 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_218 = null;
      if (((times_AUTO_219 & 1023) === 0) && times_AUTO_219 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
      let v__1 = xs;
  ($procs.not(true) ? (function _fn_(){
    let err_AUTO_215 = new Error("expected a list in list-match");
    err_AUTO_215.data = null;
    throw err_AUTO_215;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { ret_AUTO_218 =acc
   } else { let x0 = $procs._$n_list_$o_nth(v__1, 0);
  let xss = $procs._$n_list_$o_slice(v__1, 1);
  let key = f(x0);
  let tmp_AUTO_216 = ($procs._$n_map_$o_contains_$q_(acc, key) ? (function _fn_(){
    let tmp_AUTO_217 = function _PCT__BSL_(_PCT_, _PCT_2) {
      if (arguments.length < 0) throw $procs._args_between_throw('%\\', 0, 2, arguments.length);
      if (arguments.length > 2) throw $procs._args_between_throw('%\\', 0, 2, arguments.length);
      if (arguments.length <= 0) _PCT_ = null;
      if (arguments.length <= 1) _PCT_2 = null;
      return $procs.append(_PCT_, x0)
    }
    ;
    return update(acc, key, tmp_AUTO_217);
  })() : $procs._$n_map_$o_assoc(acc, key, $procs._$L_(x0)));
  ret_AUTO_218 =$procs.recur(tmp_AUTO_216, xss)



   }


      if (ret_AUTO_218 instanceof CalcitRecur) {
        if (ret_AUTO_218.args.length !== 2) throw $procs._args_throw('%group-by', 2, ret_AUTO_218.args.length);
        acc = ret_AUTO_218.args[0];
  xs = ret_AUTO_218.args[1];

        times_AUTO_219 += 1;
        continue;
      } else {
        return ret_AUTO_218;
      }
    }
  }

  (tmp_AUTO_213, xs0)
}

export function identity(x) {
  if (arguments.length !== 1) throw $procs._args_throw('identity', 1, arguments.length);
  return x
}

export function index_of(xs, item) {
  if (arguments.length !== 2) throw $procs._args_throw('index-of', 2, arguments.length);
  let tmp_AUTO_220 = _PCT_none();
  let tmp_AUTO_221 = function _PCT_index_of(index, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%index-of', 2, arguments.length);

    if ($procs._$n__$e_(item, x)) { let tmp_AUTO_222 = _PCT_some(index);
    return $procs._$o__$o_(true, tmp_AUTO_222) } else { let tmp_AUTO_223 = $procs._$n__ADD_(1, index);
    return $procs._$o__$o_(false, tmp_AUTO_223) }
  }
  ;
  return $procs.foldl_shortcut(xs, 0, tmp_AUTO_220, tmp_AUTO_221)
}

export function join(xs0, sep) {
  if (arguments.length !== 2) throw $procs._args_throw('join', 2, arguments.length);
  let tmp_AUTO_224 = $procs._$L_();
  return function _PCT_join(acc, xs, beginning_$q_) {
    if (arguments.length !== 3) throw $procs._args_throw('%join', 3, arguments.length);

    let times_AUTO_230 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_229 = null;
      if (((times_AUTO_230 & 1023) === 0) && times_AUTO_230 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
      let v__1 = xs;
  ($procs.not(true) ? (function _fn_(){
    let err_AUTO_226 = new Error("expected a list in list-match");
    err_AUTO_226.data = null;
    throw err_AUTO_226;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { ret_AUTO_229 =acc
   } else { let x0 = $procs._$n_list_$o_nth(v__1, 0);
  let xss = $procs._$n_list_$o_slice(v__1, 1);
  let tmp_AUTO_227 = (function _fn_(){
    let tmp_AUTO_228 = (beginning_$q_ ? acc : $procs.append(acc, sep));
    return $procs.append(tmp_AUTO_228, x0);
  })();
  ret_AUTO_229 =$procs.recur(tmp_AUTO_227, xss, false)


   }


      if (ret_AUTO_229 instanceof CalcitRecur) {
        if (ret_AUTO_229.args.length !== 3) throw $procs._args_throw('%join', 3, ret_AUTO_229.args.length);
        acc = ret_AUTO_229.args[0];
  xs = ret_AUTO_229.args[1];
  beginning_$q_ = ret_AUTO_229.args[2];

        times_AUTO_230 += 1;
        continue;
      } else {
        return ret_AUTO_229;
      }
    }
  }

  (tmp_AUTO_224, xs0, true)
}

export function join_str(xs0, sep) {
  if (arguments.length !== 2) throw $procs._args_throw('join-str', 2, arguments.length);
  return function _PCT_join_str(acc, xs, beginning_$q_) {
    if (arguments.length !== 3) throw $procs._args_throw('%join-str', 3, arguments.length);

    let times_AUTO_236 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_235 = null;
      if (((times_AUTO_236 & 1023) === 0) && times_AUTO_236 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
      let v__1 = xs;
  ($procs.not(true) ? (function _fn_(){
    let err_AUTO_232 = new Error("expected a list in list-match");
    err_AUTO_232.data = null;
    throw err_AUTO_232;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { ret_AUTO_235 =acc
   } else { let x0 = $procs._$n_list_$o_nth(v__1, 0);
  let xss = $procs._$n_list_$o_slice(v__1, 1);
  let tmp_AUTO_233 = (function _fn_(){
    let tmp_AUTO_234 = (beginning_$q_ ? acc : $procs._$n_str_$o_concat(acc, sep));
    return $procs._$n_str_$o_concat(tmp_AUTO_234, x0);
  })();
  ret_AUTO_235 =$procs.recur(tmp_AUTO_233, xss, false)


   }


      if (ret_AUTO_235 instanceof CalcitRecur) {
        if (ret_AUTO_235.args.length !== 3) throw $procs._args_throw('%join-str', 3, ret_AUTO_235.args.length);
        acc = ret_AUTO_235.args[0];
  xs = ret_AUTO_235.args[1];
  beginning_$q_ = ret_AUTO_235.args[2];

        times_AUTO_236 += 1;
        continue;
      } else {
        return ret_AUTO_235;
      }
    }
  }

  ("", xs0, true)
}

export function map_indexed(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('map-indexed', 2, arguments.length);
  let tmp_AUTO_237 = $procs._$L_();
  let tmp_AUTO_238 = function _PCT_map_indexed(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%map-indexed', 2, arguments.length);
    let tmp_AUTO_239 = f($procs._$n_list_$o_count(acc), x);
    return $procs.append(acc, tmp_AUTO_239)
  }
  ;
  return $procs.foldl(xs, tmp_AUTO_237, tmp_AUTO_238)
}

export function mapcat(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('mapcat', 2, arguments.length);
  let tmp_AUTO_240 = _$n_list_$o_map(xs, f);
  return $procs._$n_list_$o_concat(...listToArray(tmp_AUTO_240))
}

export function pairs_map(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('pairs-map', 1, arguments.length);
  let tmp_AUTO_241 = $procs._$n__$M_();
  let tmp_AUTO_242 = function _PCT_pairs_map(acc, pair) {
    if (arguments.length !== 2) throw $procs._args_throw('%pairs-map', 2, arguments.length);
    {
      {

      if ($procs.not(true)) { let err_AUTO_243 = new Error(str_spaced("expects 1st argument to be string, got:", "expects pair for pairs-map"));
      err_AUTO_243.data = null;
      throw err_AUTO_243; } else {  null; };
      }

      if ($procs._$n__$e_(2, $procs._$n_list_$o_count(pair))) { void 0 } else { {
      console.error($procs.printable("Failed assertion:", $procs.format_to_lisp(new CalcitSliceList([new CalcitSymbol("if"), new CalcitSliceList([new CalcitSymbol("list?"), new CalcitSymbol("pair")]), new CalcitSliceList([new CalcitSymbol("&="), 2, new CalcitSliceList([new CalcitSymbol("&list:count"), new CalcitSymbol("pair")])]), false]))));
      }
      let err_AUTO_244 = new Error("expects pair for pairs-map (if (list? pair) (&= 2 (&list:count pair)) false)");
      err_AUTO_244.data = null;
      throw err_AUTO_244;
       };
    }
    let tmp_AUTO_245 = $procs._$n_list_$o_first(pair);
    let tmp_AUTO_246 = $procs._$n_list_$o_last(pair);
    return $procs._$n_map_$o_assoc(acc, tmp_AUTO_245, tmp_AUTO_246)
  }
  ;
  return reduce(xs, tmp_AUTO_241, tmp_AUTO_242)
}

export function _GT__$e_(x, ...ys) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('>=', 1, arguments.length);
  ys = arrayToList(ys);

  if ($procs._$n__$e_(1, $procs._$n_list_$o_count(ys))) { let tmp_AUTO_247 = $procs._$n_list_$o_nth(ys, 0);
  return _$n__GT__$e_(x, tmp_AUTO_247) } else { return foldl_compare(ys, x, _$n__GT__$e_) }
}

export function take(xs, n) {
  if (arguments.length !== 2) throw $procs._args_throw('take', 2, arguments.length);

  if (_GT__$e_(n, $procs._$n_list_$o_count(xs))) { return xs } else { return slice(xs, 0, n) }
}

export function _SUB_(x, ...ys) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('-', 1, arguments.length);
  ys = arrayToList(ys);

  if ($procs._$n_list_$o_empty_$q_(ys)) { return $procs._$n__(0, x) } else { return reduce(ys, x, $procs._$n__) }
}

export function take_last(xs, n) {
  if (arguments.length !== 2) throw $procs._args_throw('take-last', 2, arguments.length);

  if (_GT__$e_(n, $procs._$n_list_$o_count(xs))) { return xs } else { let tmp_AUTO_248 = _SUB_($procs._$n_list_$o_count(xs), n);
  let tmp_AUTO_249 = $procs._$n_list_$o_count(xs);
  return slice(xs, tmp_AUTO_248, tmp_AUTO_249) }
}

export function _$n_map_$o_add_entry(xs, pair) {
  if (arguments.length !== 2) throw $procs._args_throw('&map:add-entry', 2, arguments.length);
  {
    {

    if ($procs.not(true)) { let err_AUTO_313 = new Error(str_spaced("expects 1st argument to be string, got:", "&map:add-entry expected value in a pair"));
    err_AUTO_313.data = null;
    throw err_AUTO_313; } else {  null; };
    }

    if ((function _fn_(){
      let v1__1 = $procs._$n__$e_(2, $procs._$n_list_$o_count(pair));

      if (v1__1) { return v1__1 } else { return false }
    })()) { void 0 } else { {
    console.error($procs.printable("Failed assertion:", $procs.format_to_lisp(new CalcitSliceList([new CalcitSymbol("and"), new CalcitSliceList([new CalcitSymbol("list?"), new CalcitSymbol("pair")]), new CalcitSliceList([new CalcitSymbol("&="), 2, new CalcitSliceList([new CalcitSymbol("count"), new CalcitSymbol("pair")])])]))));
    }
    let err_AUTO_314 = new Error("&map:add-entry expected value in a pair (and (list? pair) (&= 2 (count pair)))");
    err_AUTO_314.data = null;
    throw err_AUTO_314;
     };
  }
  let tmp_AUTO_315 = $procs._$n_list_$o_nth(pair, 0);
  let tmp_AUTO_316 = $procs._$n_list_$o_nth(pair, 1);
  return $procs._$n_map_$o_assoc(xs, tmp_AUTO_315, tmp_AUTO_316)
}

export function _$n_map_$o_empty(_xs) {
  if (arguments.length !== 1) throw $procs._args_throw('&map:empty', 1, arguments.length);
  return $procs._$n__$M_()
}

export function _$n_map_$o_filter(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&map:filter', 2, arguments.length);
  let tmp_AUTO_317 = $procs._$n__$M_();
  let tmp_AUTO_318 = function _PCT__$n_map_$o_filter(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%&map:filter', 2, arguments.length);

    if (f(x)) { let tmp_AUTO_319 = $procs._$n_list_$o_nth(x, 0);
    let tmp_AUTO_320 = $procs._$n_list_$o_nth(x, 1);
    return $procs._$n_map_$o_assoc(acc, tmp_AUTO_319, tmp_AUTO_320) } else { return acc }
  }
  ;
  return reduce(xs, tmp_AUTO_317, tmp_AUTO_318)
}

export function _$n_map_$o_filter_kv(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&map:filter-kv', 2, arguments.length);
  let tmp_AUTO_321 = $procs._$n__$M_();
  let tmp_AUTO_322 = function _PCT_map_$o_filter_kv(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%map:filter-kv', 2, arguments.length);

    if (f($procs._$n_list_$o_nth(x, 0), $procs._$n_list_$o_nth(x, 1))) { let tmp_AUTO_323 = $procs._$n_list_$o_nth(x, 0);
    let tmp_AUTO_324 = $procs._$n_list_$o_nth(x, 1);
    return $procs._$n_map_$o_assoc(acc, tmp_AUTO_323, tmp_AUTO_324) } else { return acc }
  }
  ;
  return reduce(xs, tmp_AUTO_321, tmp_AUTO_322)
}

export function _$n_map_$o_map(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&map:map', 2, arguments.length);
  let tmp_AUTO_325 = $procs._$n__$M_();
  let tmp_AUTO_326 = function _$n_map_$o_map(acc, pair) {
    if (arguments.length !== 2) throw $procs._args_throw('&map:map', 2, arguments.length);
    let result = f(pair);
    (function _fn_(){
      {

      if ($procs.not(true)) { let err_AUTO_327 = new Error(str_spaced("expects 1st argument to be string, got:", "expected pair returned when mapping hashmap"));
      err_AUTO_327.data = null;
      throw err_AUTO_327; } else {  null; };
      }

      if (($procs.list_$q_(result) ? (function _fn_(){
        let v1__1 = $procs._$n__$e_(2, $procs._$n_list_$o_count(result));

        if (v1__1) { return v1__1 } else { return false }
      })() : false)) { return void 0 } else { {
      console.error($procs.printable("Failed assertion:", $procs.format_to_lisp(new CalcitSliceList([new CalcitSymbol("and"), new CalcitSliceList([new CalcitSymbol("list?"), new CalcitSymbol("result")]), new CalcitSliceList([new CalcitSymbol("&="), 2, new CalcitSliceList([new CalcitSymbol("&list:count"), new CalcitSymbol("result")])])]))));
      }
      let err_AUTO_328 = new Error("expected pair returned when mapping hashmap (and (list? result) (&= 2 (&list:count result)))");
      err_AUTO_328.data = null;
      throw err_AUTO_328;
       }
    })();
    let tmp_AUTO_329 = $procs._$n_list_$o_nth(result, 0);
    let tmp_AUTO_330 = $procs._$n_list_$o_nth(result, 1);
    return $procs._$n_map_$o_assoc(acc, tmp_AUTO_329, tmp_AUTO_330)

  }
  ;
  return $procs.foldl(xs, tmp_AUTO_325, tmp_AUTO_326)
}

export function _$n_map_$o_map_list(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&map:map-list', 2, arguments.length);
  let tmp_AUTO_331 = $procs._$L_();
  let tmp_AUTO_332 = function _PCT__$n_map_$o_map_list(acc, pair) {
    if (arguments.length !== 2) throw $procs._args_throw('%&map:map-list', 2, arguments.length);
    let tmp_AUTO_333 = f(pair);
    return $procs.append(acc, tmp_AUTO_333)
  }
  ;
  return $procs.foldl(xs, tmp_AUTO_331, tmp_AUTO_332)
}

export function destruct_map(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('destruct-map', 1, arguments.length);
  let pair = $procs._$n_map_$o_destruct(xs);

  if ($procs.nil_$q_(pair)) { return $procs._PCT__$o__$o_(MapDestruct, _t_.none) } else { return $procs._PCT__$o__$o_(MapDestruct, _t_.some, ...listToArray(pair)) }

}

export function filter_map_kv(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('filter-map-kv', 2, arguments.length);
  let tmp_AUTO_335 = $procs._$n__$M_();
  let tmp_AUTO_336 = function _PCT_filter_map_kv(acc, pair) {
    if (arguments.length !== 2) throw $procs._args_throw('%filter-map-kv', 2, arguments.length);
    let key = $procs._$n_list_$o_nth(pair, 0);
    let value = $procs._$n_list_$o_nth(pair, 1);
    let decision = f(key, value);
    return (function _fn_(){
      let match_v_AUTO_337 = decision;
      let match_t_AUTO_338 = $procs._$n_enum_$o_nth(match_v_AUTO_337, 0);
      switch (match_t_AUTO_338.idx) {
      case _t_.drop.idx:
      if ($procs._$n_enum_$o_count(match_v_AUTO_337) === 1) {
      return acc
      }
      break;
      case _t_.keep.idx:
      if ($procs._$n_enum_$o_count(match_v_AUTO_337) === 3) {
      let next_key = $procs._$n_enum_$o_nth(match_v_AUTO_337, 1);
      let next_value = $procs._$n_enum_$o_nth(match_v_AUTO_337, 2);
      return $procs._$n_map_$o_assoc(acc, next_key, next_value)
      }
      break;
      }
      throw new Error("match: no matching branch for tag " + match_t_AUTO_338);
    })()



  }
  ;
  return $procs.foldl(xs, tmp_AUTO_335, tmp_AUTO_336)
}

export function map_kv(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('map-kv', 2, arguments.length);
  let tmp_AUTO_339 = $procs._$n__$M_();
  let tmp_AUTO_340 = function _PCT_map_kv(acc, pair) {
    if (arguments.length !== 2) throw $procs._args_throw('%map-kv', 2, arguments.length);
    let result = f($procs._$n_list_$o_nth(pair, 0), $procs._$n_list_$o_nth(pair, 1));

    if ($procs.list_$q_(result)) { {
    {

    if ($procs.not(true)) { let err_AUTO_341 = new Error(str_spaced("expects 1st argument to be string, got:", "expected pair returned when mapping hashmap"));
    err_AUTO_341.data = null;
    throw err_AUTO_341; } else {  null; };
    }

    if ($procs._$n__$e_(2, $procs._$n_list_$o_count(result))) { void 0 } else { {
    console.error($procs.printable("Failed assertion:", $procs.format_to_lisp(new CalcitSliceList([new CalcitSymbol("&="), 2, new CalcitSliceList([new CalcitSymbol("&list:count"), new CalcitSymbol("result")])]))));
    }
    let err_AUTO_342 = new Error("expected pair returned when mapping hashmap (&= 2 (&list:count result))");
    err_AUTO_342.data = null;
    throw err_AUTO_342;
     }
    ;
    }
    let tmp_AUTO_343 = $procs._$n_list_$o_nth(result, 0);
    let tmp_AUTO_344 = $procs._$n_list_$o_nth(result, 1);
    return $procs._$n_map_$o_assoc(acc, tmp_AUTO_343, tmp_AUTO_344)
     }
     else if ((function _fn_(){
      let v1__1 = $procs.nil_$q_(result);

      if (v1__1) { return v1__1 } else { return $procs.enum_$q_(result) }
    })()) { return acc } else { let err_AUTO_345 = new Error(str_spaced("map-kv expected list or nil, got:", result));
    err_AUTO_345.data = null;
    throw err_AUTO_345; }

  }
  ;
  return $procs.foldl(xs, tmp_AUTO_339, tmp_AUTO_340)
}

export function _$n_set_$o_map(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&set:map', 2, arguments.length);
  let tmp_AUTO_346 = $procs._SHA__$M_();
  let tmp_AUTO_347 = function _PCT__$n_set_$o_map(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%&set:map', 2, arguments.length);
    let tmp_AUTO_348 = f(x);
    return $procs._$n_include(acc, tmp_AUTO_348)
  }
  ;
  return reduce(xs, tmp_AUTO_346, tmp_AUTO_347)
}

export function vals(x) {
  if (arguments.length !== 1) throw $procs._args_throw('vals', 1, arguments.length);
  let tmp_AUTO_349 = $procs.to_pairs(x);
  return _$n_set_$o_map(tmp_AUTO_349, $procs._$n_list_$o_last)
}

export function _$n_number_$o_empty(_x) {
  if (arguments.length !== 1) throw $procs._args_throw('&number:empty', 1, arguments.length);
  return 0
}

export function inc(x) {
  if (arguments.length !== 1) throw $procs._args_throw('inc', 1, arguments.length);
  return $procs._$n__ADD_(x, 1)
}

export function negate(x) {
  if (arguments.length !== 1) throw $procs._args_throw('negate', 1, arguments.length);
  return $procs._$n__(0, x)
}

export function _$n_set_$o_empty(_xs) {
  if (arguments.length !== 1) throw $procs._args_throw('&set:empty', 1, arguments.length);
  return $procs._SHA__$M_()
}

export function _$n_set_$o_filter(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('&set:filter', 2, arguments.length);
  let tmp_AUTO_403 = $procs._SHA__$M_();
  let tmp_AUTO_404 = function _PCT__$n_set_$o_filter(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%&set:filter', 2, arguments.length);

    if (f(x)) { return $procs._$n_include(acc, x) } else { return acc }
  }
  ;
  return reduce(xs, tmp_AUTO_403, tmp_AUTO_404)
}

export function _$n_set_$o_max(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('&set:max', 1, arguments.length);
  let tmp_AUTO_405 = $procs._$n_set_$o_to_list(xs);
  return _$n_list_$o_max(tmp_AUTO_405)
}

export function _$n_set_$o_min(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('&set:min', 1, arguments.length);
  let tmp_AUTO_406 = $procs._$n_set_$o_to_list(xs);
  return _$n_list_$o_min(tmp_AUTO_406)
}

export function destruct_set(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('destruct-set', 1, arguments.length);
  let pair = $procs._$n_set_$o_destruct(xs);

  if ($procs.nil_$q_(pair)) { return $procs._PCT__$o__$o_(SetDestruct, _t_.none) } else { let tmp_AUTO_407 = $procs._$n_list_$o_nth(pair, 0);
  let tmp_AUTO_408 = $procs._$n_list_$o_nth(pair, 1);
  return $procs._PCT__$o__$o_(SetDestruct, _t_.some, tmp_AUTO_407, tmp_AUTO_408) }

}

export function difference(base, ...xs) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('difference', 1, arguments.length);
  xs = arrayToList(xs);
  let tmp_AUTO_409 = function f_PCT_(acc, item) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);
    return $procs._$n_difference(acc, item)
  }
  ;
  return reduce(xs, base, tmp_AUTO_409)
}

export function exclude(base, ...xs) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('exclude', 1, arguments.length);
  xs = arrayToList(xs);
  let tmp_AUTO_410 = function f_PCT_(acc, item) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);
    return $procs._$n_exclude(acc, item)
  }
  ;
  return reduce(xs, base, tmp_AUTO_410)
}

export function include(base, ...xs) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('include', 1, arguments.length);
  xs = arrayToList(xs);
  let tmp_AUTO_411 = function f_PCT_(acc, item) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);
    return $procs._$n_include(acc, item)
  }
  ;
  return reduce(xs, base, tmp_AUTO_411)
}

export function intersection(base, ...xs) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('intersection', 1, arguments.length);
  xs = arrayToList(xs);
  let tmp_AUTO_412 = function f_PCT_(acc, item) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);
    return $procs._$n_set_$o_intersection(acc, item)
  }
  ;
  return reduce(xs, base, tmp_AUTO_412)
}

export function _$n_str_$o_empty(_) {
  if (arguments.length !== 1) throw $procs._args_throw('&str:empty', 1, arguments.length);
  return ""
}

export function parse_float(source) {
  if (arguments.length !== 1) throw $procs._args_throw('parse-float', 1, arguments.length);
  let parsed = $procs._$n_parse_float(source);

  if ($procs.nil_$q_(parsed)) { return _PCT_err(source) } else { return _PCT_ok(parsed) }

}

export function str_find_index(text, pattern) {
  if (arguments.length !== 2) throw $procs._args_throw('str-find-index', 2, arguments.length);
  let idx = $procs._$n_str_$o_find_index(text, pattern);

  if ($procs._$n__$e_(idx, -1)) { return _PCT_none() } else { return _PCT_some(idx) }

}

export function strip_prefix(s, piece) {
  if (arguments.length !== 2) throw $procs._args_throw('strip-prefix', 2, arguments.length);

  if ($procs.starts_with_$q_(s, piece)) { let tmp_AUTO_438 = $procs._$n_str_$o_count(piece);
  return $procs._$n_str_$o_slice(s, tmp_AUTO_438) } else { return s }
}

export function strip_suffix(s, piece) {
  if (arguments.length !== 2) throw $procs._args_throw('strip-suffix', 2, arguments.length);

  if ($procs.ends_with_$q_(s, piece)) { let tmp_AUTO_439 = $procs._$n__($procs._$n_str_$o_count(s), $procs._$n_str_$o_count(piece));
  return $procs._$n_str_$o_slice(s, 0, tmp_AUTO_439) } else { return s }
}

export function try_parse_cirru(source) {
  if (arguments.length !== 1) throw $procs._args_throw('try-parse-cirru', 1, arguments.length);
  try {
    let tmp_AUTO_440 = $procs.parse_cirru(source);
  return _PCT_ok(tmp_AUTO_440)
  } catch (errMsg_AUTO_441) {
    let errMessage_AUTO_442 = errMsg_AUTO_441 instanceof Error ? errMsg_AUTO_441.message : `${errMsg_AUTO_441}`;
    return  (function f_PCT_(message) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    return _PCT_err(message)
  }
  )(errMessage_AUTO_442)
  }
}

export function try_parse_cirru_edn(source) {
  if (arguments.length !== 1) throw $procs._args_throw('try-parse-cirru-edn', 1, arguments.length);
  try {
    let tmp_AUTO_443 = $procs.parse_cirru_edn(source);
  return _PCT_ok(tmp_AUTO_443)
  } catch (errMsg_AUTO_444) {
    let errMessage_AUTO_445 = errMsg_AUTO_444 instanceof Error ? errMsg_AUTO_444.message : `${errMsg_AUTO_444}`;
    return  (function f_PCT_(message) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    return _PCT_err(message)
  }
  )(errMessage_AUTO_445)
  }
}

export function try_parse_cirru_list(source) {
  if (arguments.length !== 1) throw $procs._args_throw('try-parse-cirru-list', 1, arguments.length);
  try {
    let tmp_AUTO_446 = $procs.parse_cirru_list(source);
  return _PCT_ok(tmp_AUTO_446)
  } catch (errMsg_AUTO_447) {
    let errMessage_AUTO_448 = errMsg_AUTO_447 instanceof Error ? errMsg_AUTO_447.message : `${errMsg_AUTO_447}`;
    return  (function f_PCT_(message) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    return _PCT_err(message)
  }
  )(errMessage_AUTO_448)
  }
}

export function try_parse_json(source) {
  if (arguments.length !== 1) throw $procs._args_throw('try-parse-json', 1, arguments.length);
  try {
    let tmp_AUTO_449 = $procs.json_parse(source);
  return _PCT_ok(tmp_AUTO_449)
  } catch (errMsg_AUTO_450) {
    let errMessage_AUTO_451 = errMsg_AUTO_450 instanceof Error ? errMsg_AUTO_450.message : `${errMsg_AUTO_450}`;
    return  (function f_PCT_(message) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    return _PCT_err(message)
  }
  )(errMessage_AUTO_451)
  }
}

export let _$n_get_in = function _$n_get_in(base, path) {
  if (arguments.length !== 2) throw $procs._args_throw('&get-in', 2, arguments.length);
  
  let times_AUTO_509 = 0;
  while(true) { /* Tail Recursion */
    let ret_AUTO_508 = null;
    if (((times_AUTO_509 & 1023) === 0) && times_AUTO_509 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
    {

  if ($procs.not(true)) { let err_AUTO_505 = new Error(str_spaced("expects path in a list, got:", path));
  err_AUTO_505.data = null;
  throw err_AUTO_505; } else {  null; };
}

if ($procs.nil_$q_(base)) { ret_AUTO_508 =base } else { let v__1 = path;
($procs.not(true) ? (function _fn_(){
  let err_AUTO_506 = new Error("expected a list in list-match");
  err_AUTO_506.data = null;
  throw err_AUTO_506;
})() : null);

if ($procs._$n_list_$o_empty_$q_(v__1)) { ret_AUTO_508 =base
 } else { let y0 = $procs._$n_list_$o_nth(v__1, 0);
let ys = $procs._$n_list_$o_slice(v__1, 1);
let tmp_AUTO_507 = get(base, y0);
ret_AUTO_508 =$procs.recur(tmp_AUTO_507, ys)


 }
 }

    if (ret_AUTO_508 instanceof CalcitRecur) {
      if (ret_AUTO_508.args.length !== 2) throw $procs._args_throw('&get-in', 2, ret_AUTO_508.args.length);
      base = ret_AUTO_508.args[0];
path = ret_AUTO_508.args[1];
      
      times_AUTO_509 += 1;
      continue;
    } else {
      return ret_AUTO_508;
    }
  }
}


export function _$n_init_builtin_impls_$x_() {
  if (arguments.length !== 0) throw $procs._args_throw('&init-builtin-impls!', 0, arguments.length);
  {
    identity(_$n_core_number_impls);
  }
  {
    identity(_$n_core_string_impls);
  }
  {
    identity(_$n_core_set_impls);
  }
  {
    identity(_$n_core_list_impls);
  }
  {
    identity(_$n_core_map_impls);
  }
  {
    identity(_$n_core_fn_impls);
  }
  {
    identity(_$n_core_enum_impls);
  }
  {
    identity(_$n_core_struct_impls);
  }
  {
    identity(_$n_core_scalar_impls);
  }
  {
    identity(_$n_core_ref_impls);
  }
  {
    identity(Add);
  }
  {
    identity(Debug);
  }
  {
    identity(Eq);
  }
  {
    identity(Len);
  }
  {
    identity(Mappable);
  }
  {
    identity(Multiply);
  }
  {
    identity(Show);
  }
  {
    identity(Sliceable);
  }

  if ($procs._$n__$e_($procs._$n_get_calcit_backend(), _t_.js)) { let tmp_AUTO_510 = $procs._$n_js_object(_t_.number, _$n_core_number_impls, _t_.string, _$n_core_string_impls, _t_.set, _$n_core_set_impls, _t_.list, _$n_core_list_impls, _t_.map, _$n_core_map_impls, _t_.fn, _$n_core_fn_impls, _t_.enum, _$n_core_enum_impls, _t_.struct, _$n_core_struct_impls, _t_.scalar, _$n_core_scalar_impls, _t_.ref, _$n_core_ref_impls);
  return $procs.register_calcit_builtin_impls(tmp_AUTO_510) } else { return  null; }
}

export function _$n_max(a, b) {
  if (arguments.length !== 2) throw $procs._args_throw('&max', 2, arguments.length);
  {
    {

    if ($procs.not(true)) { let err_AUTO_511 = new Error(str_spaced("expects 1st argument to be string, got:", "expects numbers for &max"));
    err_AUTO_511.data = null;
    throw err_AUTO_511; } else {  null; };
    }
    void 0;
  }

  if ($procs._$n__GT_(a, b)) { return a } else { return b }
}

export function _$n_min(a, b) {
  if (arguments.length !== 2) throw $procs._args_throw('&min', 2, arguments.length);
  {
    {

    if ($procs.not(true)) { let err_AUTO_512 = new Error(str_spaced("expects 1st argument to be string, got:", "expects numbers for &min"));
    err_AUTO_512.data = null;
    throw err_AUTO_512; } else {  null; };
    }
    void 0;
  }

  if ($procs._$n__LT_(a, b)) { return a } else { return b }
}

var _SQUO_ = $procs._SQUO_;

export function _$s_(x, ...ys) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('*', 1, arguments.length);
  ys = arrayToList(ys);
  return reduce(ys, x, $procs._$n__$s_)
}

export function _ADD_(x, ...ys) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('+', 1, arguments.length);
  ys = arrayToList(ys);
  return reduce(ys, x, $procs._$n__ADD_)
}

export function thread_step_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('thread-step?', 1, arguments.length);
  let v1__1 = $procs.symbol_$q_(x);

  if (v1__1) { return v1__1 } else { let v1__2 = $procs.tag_$q_(x);

  if (v1__2) { return v1__2 } else { let v1__3 = _$e_($procs.type_of(x), _t_.method);

  if (v1__3) { return v1__3 } else { let tmp_AUTO_513 = $procs.type_of(x);
  return _$e_(tmp_AUTO_513, _t_.fn) }
   }
   }

}

export function _SLSH_(x, ...ys) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('/', 1, arguments.length);
  ys = arrayToList(ys);

  if ($procs._$n_list_$o_empty_$q_(ys)) { return $procs._$n__SLSH_(1, x) } else { return reduce(ys, x, $procs._$n__SLSH_) }
}

export function not_$e_(x, y) {
  if (arguments.length !== 2) throw $procs._args_throw('not=', 2, arguments.length);
  let tmp_AUTO_514 = $procs._$n__$e_(x, y);
  return $procs.not(tmp_AUTO_514)
}

export function _SLSH__$e_(a, b) {
  if (arguments.length !== 2) throw $procs._args_throw('/=', 2, arguments.length);
  return not_$e_(a, b)
}

export function _LT_(x, ...ys) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('<', 1, arguments.length);
  ys = arrayToList(ys);

  if ($procs._$n__$e_(1, $procs._$n_list_$o_count(ys))) { let tmp_AUTO_515 = $procs._$n_list_$o_nth(ys, 0);
  return $procs._$n__LT_(x, tmp_AUTO_515) } else { return foldl_compare(ys, x, $procs._$n__LT_) }
}

export function _LT__$e_(x, ...ys) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('<=', 1, arguments.length);
  ys = arrayToList(ys);

  if ($procs._$n__$e_(1, $procs._$n_list_$o_count(ys))) { let tmp_AUTO_516 = $procs._$n_list_$o_nth(ys, 0);
  return _$n__LT__$e_(x, tmp_AUTO_516) } else { return foldl_compare(ys, x, _$n__LT__$e_) }
}

export function _GT_(x, ...ys) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('>', 1, arguments.length);
  ys = arrayToList(ys);

  if ($procs._$n__$e_(1, $procs._$n_list_$o_count(ys))) { let tmp_AUTO_517 = $procs._$n_list_$o_nth(ys, 0);
  return $procs._$n__GT_(x, tmp_AUTO_517) } else { return foldl_compare(ys, x, $procs._$n__GT_) }
}

export function ffi_response_$o_reject(self, value) {
  if (arguments.length !== 2) throw $procs._args_throw('ffi-response:reject', 2, arguments.length);
  let tmp_AUTO_518 = self.nthAt(0, _t_.raw);
  return $procs._$n_ffi_response_reject(tmp_AUTO_518, value)
}

export function ffi_response_$o_resolve(self, value) {
  if (arguments.length !== 2) throw $procs._args_throw('ffi-response:resolve', 2, arguments.length);
  let tmp_AUTO_519 = self.nthAt(0, _t_.raw);
  return $procs._$n_ffi_response_resolve(tmp_AUTO_519, value)
}

export function ffi_task_$o_cancel(self) {
  if (arguments.length !== 1) throw $procs._args_throw('ffi-task:cancel', 1, arguments.length);
  let tmp_AUTO_520 = self.nthAt(0, _t_.raw);
  return $procs._$n_ffi_task_cancel(tmp_AUTO_520)
}

export function ffi_task_$o_cancel_with(self, reason) {
  if (arguments.length !== 2) throw $procs._args_throw('ffi-task:cancel-with', 2, arguments.length);
  let tmp_AUTO_521 = self.nthAt(0, _t_.raw);
  return $procs._$n_ffi_task_cancel(tmp_AUTO_521, reason)
}

export function fs_path_$o_read_dir(self) {
  if (arguments.length !== 1) throw $procs._args_throw('fs-path:read-dir', 1, arguments.length);
  let tmp_AUTO_527 = self.nthAt(0, _t_.value);
  return $procs._$n_fs_read_dir(Result, FsPath, tmp_AUTO_527, "fs-path:read-dir failed")
}

export function fs_path_$o_read_text(self) {
  if (arguments.length !== 1) throw $procs._args_throw('fs-path:read-text', 1, arguments.length);
  let tmp_AUTO_528 = self.nthAt(0, _t_.value);
  return $procs._$n_fs_read_text(Result, tmp_AUTO_528, "fs-path:read-text failed")
}

export function fs_path_$o_to_string(self) {
  if (arguments.length !== 1) throw $procs._args_throw('fs-path:to-string', 1, arguments.length);
  return self.nthAt(0, _t_.value)
}

export function fs_$o_path(value) {
  if (arguments.length !== 1) throw $procs._args_throw('fs:path', 1, arguments.length);
  return $procs._$n__PCT__$M_(FsPath, _t_.value, value)
}

export function try_read_dir(path, recursive_$q_) {
  if (arguments.length < 1) throw $procs._args_between_throw('try-read-dir', 1, 2, arguments.length);
  if (arguments.length > 2) throw $procs._args_between_throw('try-read-dir', 1, 2, arguments.length);
  if (arguments.length >= 1 && arguments.length <= 1) recursive_$q_ = _PCT_none();
  try {
    let tmp_AUTO_529 = (function _fn_(){
    let match_v_AUTO_530 = recursive_$q_;
    let match_t_AUTO_531 = $procs._$n_enum_$o_nth(match_v_AUTO_530, 0);
    switch (match_t_AUTO_531.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_530) === 1) {
    return $procs.read_dir(path)
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_530) === 2) {
    let recursive_$q_ = $procs._$n_enum_$o_nth(match_v_AUTO_530, 1);
    return $procs.read_dir(path, recursive_$q_)
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_531);
  })();
  return _PCT_ok(tmp_AUTO_529)
  } catch (errMsg_AUTO_532) {
    let errMessage_AUTO_533 = errMsg_AUTO_532 instanceof Error ? errMsg_AUTO_532.message : `${errMsg_AUTO_532}`;
    return  (function f_PCT_(message) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    return _PCT_err(message)
  }
  )(errMessage_AUTO_533)
  }
}

export function fs_path_$o_walk_dir(self) {
  if (arguments.length !== 1) throw $procs._args_throw('fs-path:walk-dir', 1, arguments.length);
  let tmp_AUTO_534 = try_read_dir(self.nthAt(0, _t_.value), _PCT_some(true));
  let tmp_AUTO_535 = function f_PCT_(paths) {
    if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
    return _$n_list_$o_map(paths, fs_$o_path)
  }
  ;
  return result_$o_map(tmp_AUTO_534, tmp_AUTO_535)
}

export function fs_path_$o_write_text(self, content) {
  if (arguments.length !== 2) throw $procs._args_throw('fs-path:write-text', 2, arguments.length);
  let tmp_AUTO_536 = self.nthAt(0, _t_.value);
  return $procs._$n_fs_write_text(Result, tmp_AUTO_536, content, "fs-path:write-text failed")
}

export function abs(x) {
  if (arguments.length !== 1) throw $procs._args_throw('abs', 1, arguments.length);

  if ($procs._$n__LT_(x, 0)) { return $procs._$n__(0, x) } else { return x }
}

export function apply(f, args) {
  if (arguments.length !== 2) throw $procs._args_throw('apply', 2, arguments.length);
  return f(...listToArray(args))
}

export function assoc_in(data, path, v) {
  if (arguments.length !== 3) throw $procs._args_throw('assoc-in', 3, arguments.length);
  let v__1 = path;
  ($procs.not(true) ? (function _fn_(){
    let err_AUTO_547 = new Error("expected a list in list-match");
    err_AUTO_547.data = null;
    throw err_AUTO_547;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { return v
   } else { let p0 = $procs._$n_list_$o_nth(v__1, 0);
  let ps = $procs._$n_list_$o_slice(v__1, 1);

  if ($procs.struct_$q_(data)) { let err_AUTO_548 = new Error("assoc-in does not traverse Struct fields; use assoc with a direct field key");
  err_AUTO_548.data = null;
  throw err_AUTO_548; } else { let d = ($procs.nil_$q_(data) ? $procs._$n__$M_() : data);
  let tmp_AUTO_549 = (function _fn_(){
    let tmp_AUTO_550 = (contains_$q_(d, p0) ? _$n_get_raw(d, p0) : $procs._$n__$M_());
    return assoc_in(tmp_AUTO_550, ps, v);
  })();
  return assoc(d, p0, tmp_AUTO_549)
   }


   }

}

export function buffer_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('buffer?', 1, arguments.length);
  let tmp_AUTO_551 = $procs.type_of(x);
  return $procs._$n__$e_(tmp_AUTO_551, _t_.buffer)
}

export function cirru_quote_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('cirru-quote?', 1, arguments.length);
  let tmp_AUTO_552 = $procs.type_of(x);
  return $procs._$n__$e_(tmp_AUTO_552, _t_["cirru-quote"])
}

export function concat(...args) {
  args = arrayToList(args);
  let v__1 = args;
  ($procs.not(true) ? (function _fn_(){
    let err_AUTO_553 = new Error("expected a list in list-match");
    err_AUTO_553.data = null;
    throw err_AUTO_553;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { return $procs._$L_()
   } else { let a0 = $procs._$n_list_$o_nth(v__1, 0);
  let as = $procs._$n_list_$o_slice(v__1, 1);
  return $procs._$n_list_$o_concat(a0, ...listToArray(as))


   }

}

export function concat_dynamic(...args) {
  args = arrayToList(args);
  let v__1 = args;
  ($procs.not(true) ? (function _fn_(){
    let err_AUTO_554 = new Error("expected a list in list-match");
    err_AUTO_554.data = null;
    throw err_AUTO_554;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { return $procs._$L_()
   } else { let a0 = $procs._$n_list_$o_nth(v__1, 0);
  let as = $procs._$n_list_$o_slice(v__1, 1);
  return $procs._$n_list_$o_concat(a0, ...listToArray(as))


   }

}

export let conj = function conj(xs, y0, ...ys) {
  if (arguments.length < 2) throw $procs._args_fewer_throw('conj', 2, arguments.length);
  
ys = arrayToList(ys);
  let times_AUTO_558 = 0;
  while(true) { /* Tail Recursion */
    let ret_AUTO_557 = null;
    if (((times_AUTO_558 & 1023) === 0) && times_AUTO_558 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
    
if ($procs._$n_list_$o_empty_$q_(ys)) { ret_AUTO_557 =$procs.append(xs, y0) } else { let tmp_AUTO_556 = $procs.append(xs, y0);
ret_AUTO_557 =$procs.recur(tmp_AUTO_556, ...listToArray(ys)) }

    if (ret_AUTO_557 instanceof CalcitRecur) {
      if (ret_AUTO_557.args.length < 2) throw $procs._args_fewer_throw('conj', 2, ret_AUTO_557.args.length);
      [ xs, y0, ...ys ] = ret_AUTO_557.args;
      
ys = arrayToList(ys);
      times_AUTO_558 += 1;
      continue;
    } else {
      return ret_AUTO_557;
    }
  }
}


export function consume_readable_byte_stream(stream, max_total_bytes, max_chunk_bytes, on_chunk) {
  if (arguments.length !== 4) throw $procs._args_throw('consume-readable-byte-stream', 4, arguments.length);
  let err_AUTO_559 = new Error("consume-readable-byte-stream is only available inside a scoped async Component export");
  err_AUTO_559.data = null;
  throw err_AUTO_559;
}

export let contains_in_$q_ = function contains_in_$q_(xs, path) {
  if (arguments.length !== 2) throw $procs._args_throw('contains-in?', 2, arguments.length);
  
  let times_AUTO_567 = 0;
  while(true) { /* Tail Recursion */
    let ret_AUTO_566 = null;
    if (((times_AUTO_567 & 1023) === 0) && times_AUTO_567 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
    let v__1 = path;
($procs.not(true) ? (function _fn_(){
  let err_AUTO_561 = new Error("expected a list in list-match");
  err_AUTO_561.data = null;
  throw err_AUTO_561;
})() : null);

if ($procs._$n_list_$o_empty_$q_(v__1)) { ret_AUTO_566 =true
 } else { let p0 = $procs._$n_list_$o_nth(v__1, 0);
let ps = $procs._$n_list_$o_slice(v__1, 1);

if ($procs.list_$q_(xs)) { 
if (($procs.number_$q_(p0) ? (function _fn_(){
  let v1__2 = $procs._$n_list_$o_contains_$q_(xs, p0);

  if (v1__2) { return v1__2 } else { return false }
})() : false)) { let tmp_AUTO_562 = $procs._$n_list_$o_nth(xs, p0);
ret_AUTO_566 =$procs.recur(tmp_AUTO_562, ps) } else { ret_AUTO_566 =false } }
 else if ($procs.map_$q_(xs)) { 
if ($procs._$n_map_$o_contains_$q_(xs, p0)) { let tmp_AUTO_563 = $procs._$n_map_$o_get(xs, p0);
ret_AUTO_566 =$procs.recur(tmp_AUTO_563, ps) } else { ret_AUTO_566 =false } }
 else if ($procs.struct_$q_(xs)) { let err_AUTO_564 = new Error("contains-in? does not traverse Struct fields; end the path before the Struct and use (:field value)");
err_AUTO_564.data = null;
throw err_AUTO_564; }
 else if ($procs.enum_$q_(xs)) { 
if ((_$n__GT__$e_(p0, 0) ? (function _fn_(){
  let v1__3 = $procs._$n__LT_(p0, $procs._$n_enum_$o_count(xs));

  if (v1__3) { return v1__3 } else { return false }
})() : false)) { let tmp_AUTO_565 = $procs._$n_enum_$o_nth(xs, p0);
ret_AUTO_566 =$procs.recur(tmp_AUTO_565, ps) } else { ret_AUTO_566 =false } } else { ret_AUTO_566 =false }


 }


    if (ret_AUTO_566 instanceof CalcitRecur) {
      if (ret_AUTO_566.args.length !== 2) throw $procs._args_throw('contains-in?', 2, ret_AUTO_566.args.length);
      xs = ret_AUTO_566.args[0];
path = ret_AUTO_566.args[1];
      
      times_AUTO_567 += 1;
      continue;
    } else {
      return ret_AUTO_566;
    }
  }
}


export function contains_symbol_$q_(xs, y) {
  if (arguments.length !== 2) throw $procs._args_throw('contains-symbol?', 2, arguments.length);

  if ($procs.list_$q_(xs)) { return function _PCT_contains_symbol_$q_(body) {
    if (arguments.length !== 1) throw $procs._args_throw('%contains-symbol?', 1, arguments.length);

    let times_AUTO_571 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_570 = null;
      if (((times_AUTO_571 & 1023) === 0) && times_AUTO_571 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
      let v__1 = body;
  ($procs.not($procs.list_$q_(v__1)) ? (function _fn_(){
    let err_AUTO_569 = new Error("expected a list in list-match");
    err_AUTO_569.data = null;
    throw err_AUTO_569;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { ret_AUTO_570 =false
   } else { let b0 = $procs._$n_list_$o_nth(v__1, 0);
  let bs = $procs._$n_list_$o_slice(v__1, 1);

  if (contains_symbol_$q_(b0, y)) { ret_AUTO_570 =true } else { ret_AUTO_570 =$procs.recur(bs) }


   }


      if (ret_AUTO_570 instanceof CalcitRecur) {
        if (ret_AUTO_570.args.length !== 1) throw $procs._args_throw('%contains-symbol?', 1, ret_AUTO_570.args.length);
        body = ret_AUTO_570.args[0];

        times_AUTO_571 += 1;
        continue;
      } else {
        return ret_AUTO_570;
      }
    }
  }

  (xs) } else { return $procs._$n__$e_(xs, y) }
}

export function count(x) {
  if (arguments.length !== 1) throw $procs._args_throw('count', 1, arguments.length);

  if ($procs.list_$q_(x)) { return $procs._$n_list_$o_count(x) } else { return $procs.invoke_method("count",x,) }
}

export function data_definition_form(entry) {
  if (arguments.length !== 1) throw $procs._args_throw('data-definition-form', 1, arguments.length);

  if (($procs.list_$q_(entry) ? ($procs.not($procs._$n_list_$o_empty_$q_(entry)) ? (function _fn_(){
    let v1__1 = $procs._$n__$e_($procs._$L_, $procs._$n_list_$o_first(entry));

    if (v1__1) { return v1__1 } else { return false }
  })() : false) : false)) { return $procs._$n_list_$o_rest(entry) }
   else if (($procs.list_$q_(entry) ? ($procs._$n__$e_(1, $procs._$n_list_$o_count(entry)) ? (function _fn_(){
    let v1__2 = $procs.list_$q_($procs._$n_list_$o_first(entry));

    if (v1__2) { return v1__2 } else { return false }
  })() : false) : false)) { let err_AUTO_572 = new Error("data definition forms already receive a list from indentation; remove the extra outer parentheses");
  err_AUTO_572.data = null;
  throw err_AUTO_572; } else { return entry }
}

export function data_definition_malformed_nesting_$q_(form) {
  if (arguments.length !== 1) throw $procs._args_throw('data-definition-malformed-nesting?', 1, arguments.length);

  if (($procs.list_$q_(form) ? ($procs._$n__$e_(1, $procs._$n_list_$o_count(form)) ? (function _fn_(){
    let v1__1 = $procs.list_$q_($procs._$n_list_$o_first(form));

    if (v1__1) { return v1__1 } else { return false }
  })() : false) : false)) { let child = data_definition_form($procs._$n_list_$o_first(form));

  if ($procs.list_$q_(child)) { 
  if ($procs.not($procs._$n_list_$o_empty_$q_(child))) { let v1__2 = (function _fn_(){
    let v1__3 = $procs.tag_$q_($procs._$n_list_$o_first(child));

    if (v1__3) { return v1__3 }
     else if ($procs.not($procs.tag_$q_($procs._$n_list_$o_first(child)))) { let v1__4 = (function _fn_(){
      let tmp_AUTO_573 = function f_PCT_(bound) {
        if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
        let items = data_definition_form(bound);

        if ($procs.list_$q_(items)) { let v1__5 = $procs._$n__$e_(2, $procs._$n_list_$o_count(items));

        if (v1__5) { return v1__5 } else { return false }
         } else { return false }

      }
      ;
      return every_$q_($procs._$n_list_$o_rest(child), tmp_AUTO_573);
    })();

    if (v1__4) { return v1__4 } else { return false }
     } else { return false }
  })();

  if (v1__2) { return v1__2 } else { return false }
   } else { return false } } else { return false }
   } else { return false }
}

export function empty_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('empty?', 1, arguments.length);

  if ($procs.list_$q_(x)) { return $procs._$n_list_$o_empty_$q_(x) } else { return $procs.invoke_method("empty?",x,) }
}

export function data_definition_where_form_$q_(tail_forms) {
  if (arguments.length !== 1) throw $procs._args_throw('data-definition-where-form?', 1, arguments.length);

  if (empty_$q_(tail_forms)) { return false } else { let candidate = data_definition_form($procs._$n_list_$o_first(tail_forms));

  if ($procs.list_$q_(candidate)) { 
  if ($procs.not($procs._$n_list_$o_empty_$q_(candidate))) { 
  if ($procs.not($procs.tag_$q_($procs._$n_list_$o_first(candidate)))) { let v1__1 = (function _fn_(){
    let tmp_AUTO_574 = function f_PCT_(bound) {
      if (arguments.length !== 1) throw $procs._args_throw('f%', 1, arguments.length);
      let items = data_definition_form(bound);

      if ($procs.list_$q_(items)) { let v1__2 = $procs._$n__$e_(2, $procs._$n_list_$o_count(items));

      if (v1__2) { return v1__2 } else { return false }
       } else { return false }

    }
    ;
    return every_$q_($procs._$n_list_$o_rest(candidate), tmp_AUTO_574);
  })();

  if (v1__1) { return v1__1 } else { return false }
   } else { return false } } else { return false } } else { return false }
   }
}

export function section_by(xs0, n) {
  if (arguments.length !== 2) throw $procs._args_throw('section-by', 2, arguments.length);

  if (_GT__$e_(n, 1)) { let tmp_AUTO_575 = $procs._$L_();
  return function f_PCT_(acc, xs) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);

    let times_AUTO_580 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_579 = null;
      if (((times_AUTO_580 & 1023) === 0) && times_AUTO_580 > 10000000) throw new Error('tail recursion not finished after 10M iterations');

  if (_$n__LT__$e_($procs._$n_list_$o_count(xs), n)) { 
  if ($procs._$n_list_$o_empty_$q_(xs)) { ret_AUTO_579 =acc } else { ret_AUTO_579 =$procs.append(acc, xs) } } else { let tmp_AUTO_577 = $procs.append(acc, take(xs, n));
  let tmp_AUTO_578 = drop(xs, n);
  ret_AUTO_579 =$procs.recur(tmp_AUTO_577, tmp_AUTO_578) }

      if (ret_AUTO_579 instanceof CalcitRecur) {
        if (ret_AUTO_579.args.length !== 2) throw $procs._args_throw('f%', 2, ret_AUTO_579.args.length);
        acc = ret_AUTO_579.args[0];
  xs = ret_AUTO_579.args[1];

        times_AUTO_580 += 1;
        continue;
      } else {
        return ret_AUTO_579;
      }
    }
  }

  (tmp_AUTO_575, xs0) } else { let err_AUTO_581 = new Error(str_spaced("expected positive number, got:", n));
  err_AUTO_581.data = null;
  throw err_AUTO_581; }
}

export function syntax_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('syntax?', 1, arguments.length);
  let tmp_AUTO_582 = $procs.type_of(x);
  return $procs._$n__$e_(tmp_AUTO_582, _t_.syntax)
}

var ref_$q_ = $procs.ref_$q_;

export function deref(_$s_a) {
  if (arguments.length !== 1) throw $procs._args_throw('deref', 1, arguments.length);

  if (ref_$q_(_$s_a)) { return $procs._$n_atom_$o_deref(_$s_a) } else { return $procs._$n_atom_$o_deref(_$s_a) }
}

export function destruct_list(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('destruct-list', 1, arguments.length);

  if ($procs._$n_list_$o_empty_$q_(xs)) { return $procs._PCT__$o__$o_(ListDestruct, _t_.none) } else { let tmp_AUTO_583 = $procs._$n_list_$o_nth(xs, 0);
  let tmp_AUTO_584 = $procs._$n_list_$o_rest(xs);
  return $procs._PCT__$o__$o_(ListDestruct, _t_.some, tmp_AUTO_583, tmp_AUTO_584) }
}

export function destruct_str(s) {
  if (arguments.length !== 1) throw $procs._args_throw('destruct-str', 1, arguments.length);

  if ($procs._$n__$e_(s, "")) { return $procs._PCT__$o__$o_(StringDestruct, _t_.none) } else { let tmp_AUTO_585 = $procs._$n_str_$o_slice(s, 0, 1);
  let tmp_AUTO_586 = $procs._$n_str_$o_rest(s);
  return $procs._PCT__$o__$o_(StringDestruct, _t_.some, tmp_AUTO_585, tmp_AUTO_586) }
}

export function dissoc(x, ...args) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('dissoc', 1, arguments.length);
  args = arrayToList(args);

  if ($procs.list_$q_(x)) { return $procs._$n_list_$o_dissoc(x, ...listToArray(args)) }
   else if ($procs.map_$q_(x)) { return $procs._$n_map_$o_dissoc(x, ...listToArray(args)) } else { return $procs.invoke_method("dissoc",x,...listToArray(args)) }
}

export function dissoc_in(data, path) {
  if (arguments.length !== 2) throw $procs._args_throw('dissoc-in', 2, arguments.length);
  let v__1 = path;
  ($procs.not(true) ? (function _fn_(){
    let err_AUTO_587 = new Error("expected a list in list-match");
    err_AUTO_587.data = null;
    throw err_AUTO_587;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { return data
   } else { let p0 = $procs._$n_list_$o_nth(v__1, 0);
  let ps = $procs._$n_list_$o_slice(v__1, 1);

  if ($procs.struct_$q_(data)) { let err_AUTO_588 = new Error("dissoc-in cannot remove declared Struct fields; use an optional field or convert the Struct to a map before removing keys");
  err_AUTO_588.data = null;
  throw err_AUTO_588; }
   else if ($procs._$n__$e_(1, $procs._$n_list_$o_count(path))) { return dissoc(data, p0) } else { let tmp_AUTO_589 = dissoc_in(_$n_get_raw(data, p0), ps);
  return assoc(data, p0, tmp_AUTO_589) }


   }

}

export function distinct(x) {
  if (arguments.length !== 1) throw $procs._args_throw('distinct', 1, arguments.length);
  return $procs._$n_list_$o_distinct(x)
}

export function empty(x) {
  if (arguments.length !== 1) throw $procs._args_throw('empty', 1, arguments.length);

  if ($procs.list_$q_(x)) { return $procs._$L_() } else { return $procs.invoke_method("empty",x,) }
}

export function optionally(s) {
  if (arguments.length !== 1) throw $procs._args_throw('optionally', 1, arguments.length);

  if ($procs.nil_$q_(s)) { return _PCT_none() } else { return _PCT_some(s) }
}

export function enum_definition(tuple) {
  if (arguments.length !== 1) throw $procs._args_throw('enum-definition', 1, arguments.length);
  let tmp_AUTO_590 = $procs._$n_enum_$o_definition(tuple);
  return optionally(tmp_AUTO_590)
}

export function even_$q_(n) {
  if (arguments.length !== 1) throw $procs._args_throw('even?', 1, arguments.length);
  let tmp_AUTO_591 = $procs._$n_number_$o_rem(n, 2);
  return $procs._$n__$e_(0, tmp_AUTO_591)
}

export function ffi_$o_response(raw) {
  if (arguments.length !== 1) throw $procs._args_throw('ffi:response', 1, arguments.length);
  return $procs._$n__PCT__$M_(FfiResponse, _t_.raw, raw)
}

export function ffi_$o_task(raw) {
  if (arguments.length !== 1) throw $procs._args_throw('ffi:task', 1, arguments.length);
  return $procs._$n__PCT__$M_(FfiTask, _t_.raw, raw)
}

export function filter(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('filter', 2, arguments.length);

  if ($procs.list_$q_(xs)) { return _$n_list_$o_filter(xs, f) } else { return $procs.invoke_method("filter",xs,f) }
}

export let foldl_SQUO_ = function foldl_SQUO_(xs, acc, f) {
  if (arguments.length !== 3) throw $procs._args_throw('foldl\'', 3, arguments.length);
  
  let times_AUTO_596 = 0;
  while(true) { /* Tail Recursion */
    let ret_AUTO_595 = null;
    if (((times_AUTO_596 & 1023) === 0) && times_AUTO_596 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
    let v__1 = xs;
($procs.not(true) ? (function _fn_(){
  let err_AUTO_593 = new Error("expected a list in list-match");
  err_AUTO_593.data = null;
  throw err_AUTO_593;
})() : null);

if ($procs._$n_list_$o_empty_$q_(v__1)) { ret_AUTO_595 =acc
 } else { let x0 = $procs._$n_list_$o_nth(v__1, 0);
let xss = $procs._$n_list_$o_slice(v__1, 1);
let tmp_AUTO_594 = f(acc, x0);
ret_AUTO_595 =$procs.recur(xss, tmp_AUTO_594, f)


 }


    if (ret_AUTO_595 instanceof CalcitRecur) {
      if (ret_AUTO_595.args.length !== 3) throw $procs._args_throw('foldl\'', 3, ret_AUTO_595.args.length);
      xs = ret_AUTO_595.args[0];
acc = ret_AUTO_595.args[1];
f = ret_AUTO_595.args[2];
      
      times_AUTO_596 += 1;
      continue;
    } else {
      return ret_AUTO_595;
    }
  }
}


export function frequencies(xs0) {
  if (arguments.length !== 1) throw $procs._args_throw('frequencies', 1, arguments.length);
  {
    {

    if ($procs.not(true)) { let err_AUTO_597 = new Error(str_spaced("expects 1st argument to be string, got:", "expects a list for frequencies"));
    err_AUTO_597.data = null;
    throw err_AUTO_597; } else {  null; };
    }
    void 0;
  }
  let tmp_AUTO_598 = $procs._$n__$M_();
  return function f_PCT_(acc, xs) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);

    let times_AUTO_604 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_603 = null;
      if (((times_AUTO_604 & 1023) === 0) && times_AUTO_604 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
      let v__1 = xs;
  ($procs.not($procs.list_$q_(v__1)) ? (function _fn_(){
    let err_AUTO_600 = new Error("expected a list in list-match");
    err_AUTO_600.data = null;
    throw err_AUTO_600;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { ret_AUTO_603 =acc
   } else { let x0 = $procs._$n_list_$o_nth(v__1, 0);
  let xss = $procs._$n_list_$o_slice(v__1, 1);
  let tmp_AUTO_601 = (contains_$q_(acc, x0) ? (function _fn_(){
    let tmp_AUTO_602 = function _PCT__BSL_(_PCT_, _PCT_2) {
      if (arguments.length < 0) throw $procs._args_between_throw('%\\', 0, 2, arguments.length);
      if (arguments.length > 2) throw $procs._args_between_throw('%\\', 0, 2, arguments.length);
      if (arguments.length <= 0) _PCT_ = null;
      if (arguments.length <= 1) _PCT_2 = null;
      return $procs._$n__ADD_(_PCT_, 1)
    }
    ;
    return update(acc, x0, tmp_AUTO_602);
  })() : $procs._$n_map_$o_assoc(acc, x0, 1));
  ret_AUTO_603 =$procs.recur(tmp_AUTO_601, xss)


   }


      if (ret_AUTO_603 instanceof CalcitRecur) {
        if (ret_AUTO_603.args.length !== 2) throw $procs._args_throw('f%', 2, ret_AUTO_603.args.length);
        acc = ret_AUTO_603.args[0];
  xs = ret_AUTO_603.args[1];

        times_AUTO_604 += 1;
        continue;
      } else {
        return ret_AUTO_603;
      }
    }
  }

  (tmp_AUTO_598, xs0)
}

export function get_args() {
  if (arguments.length !== 0) throw $procs._args_throw('get-args', 0, arguments.length);
  return $procs._$n_get_args()
}

export function get_env(name) {
  if (arguments.length !== 1) throw $procs._args_throw('get-env', 1, arguments.length);
  let tmp_AUTO_605 = $procs._$n_get_env(name);
  return optionally(tmp_AUTO_605)
}

export function impl_origin(impl) {
  if (arguments.length !== 1) throw $procs._args_throw('impl-origin', 1, arguments.length);
  let tmp_AUTO_606 = $procs._$n_impl_$o_origin(impl);
  return optionally(tmp_AUTO_606)
}

export function includes_$q_(x, k) {
  if (arguments.length !== 2) throw $procs._args_throw('includes?', 2, arguments.length);

  if ($procs.list_$q_(x)) { return $procs._$n_list_$o_includes_$q_(x, k) } else { return $procs.invoke_method("includes?",x,k) }
}

export function interleave(xs0, ys0) {
  if (arguments.length !== 2) throw $procs._args_throw('interleave', 2, arguments.length);
  let tmp_AUTO_607 = $procs._$L_();
  return function _PCT_interleave(acc, xs, ys) {
    if (arguments.length !== 3) throw $procs._args_throw('%interleave', 3, arguments.length);

    let times_AUTO_613 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_612 = null;
      if (((times_AUTO_613 & 1023) === 0) && times_AUTO_613 > 10000000) throw new Error('tail recursion not finished after 10M iterations');

  if (($procs._$n_list_$o_empty_$q_(xs) ? true : $procs._$n_list_$o_empty_$q_(ys))) { ret_AUTO_612 =acc } else { let tmp_AUTO_609 = $procs.append($procs.append(acc, $procs._$n_list_$o_first(xs)), $procs._$n_list_$o_first(ys));
  let tmp_AUTO_610 = $procs._$n_list_$o_rest(xs);
  let tmp_AUTO_611 = $procs._$n_list_$o_rest(ys);
  ret_AUTO_612 =$procs.recur(tmp_AUTO_609, tmp_AUTO_610, tmp_AUTO_611) }

      if (ret_AUTO_612 instanceof CalcitRecur) {
        if (ret_AUTO_612.args.length !== 3) throw $procs._args_throw('%interleave', 3, ret_AUTO_612.args.length);
        acc = ret_AUTO_612.args[0];
  xs = ret_AUTO_612.args[1];
  ys = ret_AUTO_612.args[2];

        times_AUTO_613 += 1;
        continue;
      } else {
        return ret_AUTO_612;
      }
    }
  }

  (tmp_AUTO_607, xs0, ys0)
}

export function js_nullish_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('js-nullish?', 1, arguments.length);
  let v1__1 = $procs.nil_$q_(x);

  if (v1__1) { return v1__1 } else { let tmp_AUTO_614 = $procs.type_of(x);
  return _$e_(_t_.unit, tmp_AUTO_614) }

}

export function js_nullish__GT_option(x) {
  if (arguments.length !== 1) throw $procs._args_throw('js-nullish->option', 1, arguments.length);

  if (js_nullish_$q_(x)) { return _PCT_none() } else { return _PCT_some(x) }
}

export function js_present_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('js-present?', 1, arguments.length);
  let tmp_AUTO_615 = js_nullish_$q_(x);
  return $procs.not(tmp_AUTO_615)
}

export function keys(x) {
  if (arguments.length !== 1) throw $procs._args_throw('keys', 1, arguments.length);
  return $procs._$n_map_$o_keys(x)
}

export function keys_non_nil(x) {
  if (arguments.length !== 1) throw $procs._args_throw('keys-non-nil', 1, arguments.length);
  let tmp_AUTO_616 = $procs._SHA__$M_();
  let tmp_AUTO_617 = $procs.to_pairs(x);
  return function f_PCT_(acc, pairs) {
    if (arguments.length !== 2) throw $procs._args_throw('f%', 2, arguments.length);

    let times_AUTO_623 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_622 = null;
      if (((times_AUTO_623 & 1023) === 0) && times_AUTO_623 > 10000000) throw new Error('tail recursion not finished after 10M iterations');
      ret_AUTO_622 =(function _fn_(){
    let match_v_AUTO_619 = destruct_set(pairs);
    let match_t_AUTO_620 = $procs._$n_enum_$o_nth(match_v_AUTO_619, 0);
    switch (match_t_AUTO_620.idx) {
    case _t_.none.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_619) === 1) {
    return acc
    }
    break;
    case _t_.some.idx:
    if ($procs._$n_enum_$o_count(match_v_AUTO_619) === 3) {
    let pair = $procs._$n_enum_$o_nth(match_v_AUTO_619, 1);
    let remaining = $procs._$n_enum_$o_nth(match_v_AUTO_619, 2);

    if ($procs.nil_$q_($procs._$n_list_$o_last(pair))) { return $procs.recur(acc, remaining) } else { let tmp_AUTO_621 = include(acc, $procs._$n_list_$o_nth(pair, 0));
    return $procs.recur(tmp_AUTO_621, remaining) }
    }
    break;
    }
    throw new Error("match: no matching branch for tag " + match_t_AUTO_620);
  })()

      if (ret_AUTO_622 instanceof CalcitRecur) {
        if (ret_AUTO_622.args.length !== 2) throw $procs._args_throw('f%', 2, ret_AUTO_622.args.length);
        acc = ret_AUTO_622.args[0];
  pairs = ret_AUTO_622.args[1];

        times_AUTO_623 += 1;
        continue;
      } else {
        return ret_AUTO_622;
      }
    }
  }

  (tmp_AUTO_616, tmp_AUTO_617)
}

export function rest(x) {
  if (arguments.length !== 1) throw $procs._args_throw('rest', 1, arguments.length);

  if ($procs.list_$q_(x)) { return $procs._$n_list_$o_rest(x) } else { return $procs.invoke_method("rest",x,) }
}

export function macro_$q_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('macro?', 1, arguments.length);
  let tmp_AUTO_624 = $procs.type_of(x);
  return $procs._$n__$e_(tmp_AUTO_624, _t_.macro)
}

export function map(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('map', 2, arguments.length);

  if ($procs.list_$q_(xs)) { return _$n_list_$o_map(xs, f) }
   else if ($procs.set_$q_(xs)) { let tmp_AUTO_625 = $procs._SHA__$M_();
  let tmp_AUTO_626 = function _PCT_map(acc, x) {
    if (arguments.length !== 2) throw $procs._args_throw('%map', 2, arguments.length);
    let tmp_AUTO_627 = f(x);
    return include(acc, tmp_AUTO_627)
  }
  ;
  return $procs.foldl(xs, tmp_AUTO_625, tmp_AUTO_626) } else { return $procs.invoke_method("map",xs,f) }
}

export function map_list_kv(xs, f) {
  if (arguments.length !== 2) throw $procs._args_throw('map-list-kv', 2, arguments.length);
  let tmp_AUTO_628 = $procs._$L_();
  let tmp_AUTO_629 = function _PCT_map_list_kv(acc, pair) {
    if (arguments.length !== 2) throw $procs._args_throw('%map-list-kv', 2, arguments.length);
    let tmp_AUTO_630 = f($procs._$n_list_$o_nth(pair, 0), $procs._$n_list_$o_nth(pair, 1));
    return $procs.append(acc, tmp_AUTO_630)
  }
  ;
  return $procs.foldl(xs, tmp_AUTO_628, tmp_AUTO_629)
}

export function max(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('max', 1, arguments.length);
  return $procs.invoke_method("max",xs,)
}

export function merge_dynamic(x0, ...xs) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('merge-dynamic', 1, arguments.length);
  xs = arrayToList(xs);
  return reduce(xs, x0, $procs._$n_merge)
}

export function merge_non_nil(x0, ...xs) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('merge-non-nil', 1, arguments.length);
  xs = arrayToList(xs);
  return reduce(xs, x0, $procs._$n_merge_non_nil)
}

export function min(xs) {
  if (arguments.length !== 1) throw $procs._args_throw('min', 1, arguments.length);
  return $procs.invoke_method("min",xs,)
}

export function non_nil_$x_(x) {
  if (arguments.length !== 1) throw $procs._args_throw('non-nil!', 1, arguments.length);

  if ($procs.nil_$q_(x)) { let err_AUTO_631 = new Error("expected non nil value");
  err_AUTO_631.data = null;
  throw err_AUTO_631; } else { return x }
}

export function str(x0, ...xs) {
  if (arguments.length < 1) throw $procs._args_fewer_throw('str', 1, arguments.length);
  xs = arrayToList(xs);

  if ($procs._$n_list_$o_empty_$q_(xs)) { return $procs._$n_str(x0) } else { let tmp_AUTO_632 = str(...listToArray(xs));
  return $procs._$n_str_$o_concat(x0, tmp_AUTO_632) }
}

export function number__GT_float32(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->float32', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.float32)) { return _PCT_ok(value) } else { let tmp_AUTO_633 = str("number->float32 cannot represent ", value);
  return _PCT_err(tmp_AUTO_633) }
}

export function number__GT_float64(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->float64', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.float64)) { return _PCT_ok(value) } else { let tmp_AUTO_634 = str("number->float64 cannot represent ", value);
  return _PCT_err(tmp_AUTO_634) }
}

export function number__GT_int16(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->int16', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.int16)) { return _PCT_ok(value) } else { let tmp_AUTO_635 = str("number->int16 cannot represent ", value);
  return _PCT_err(tmp_AUTO_635) }
}

export function number__GT_int32(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->int32', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.int32)) { return _PCT_ok(value) } else { let tmp_AUTO_636 = str("number->int32 cannot represent ", value);
  return _PCT_err(tmp_AUTO_636) }
}

export function number__GT_int64(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->int64', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.int64)) { return _PCT_ok(value) } else { let tmp_AUTO_637 = str("number->int64 cannot represent ", value);
  return _PCT_err(tmp_AUTO_637) }
}

export function number__GT_int8(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->int8', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.int8)) { return _PCT_ok(value) } else { let tmp_AUTO_638 = str("number->int8 cannot represent ", value);
  return _PCT_err(tmp_AUTO_638) }
}

export function number__GT_uint16(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->uint16', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.uint16)) { return _PCT_ok(value) } else { let tmp_AUTO_639 = str("number->uint16 cannot represent ", value);
  return _PCT_err(tmp_AUTO_639) }
}

export function number__GT_uint32(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->uint32', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.uint32)) { return _PCT_ok(value) } else { let tmp_AUTO_640 = str("number->uint32 cannot represent ", value);
  return _PCT_err(tmp_AUTO_640) }
}

export function number__GT_uint64(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->uint64', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.uint64)) { return _PCT_ok(value) } else { let tmp_AUTO_641 = str("number->uint64 cannot represent ", value);
  return _PCT_err(tmp_AUTO_641) }
}

export function number__GT_uint8(value) {
  if (arguments.length !== 1) throw $procs._args_throw('number->uint8', 1, arguments.length);

  if ($procs._$n_number_$o_fits_$q_(value, _t_.uint8)) { return _PCT_ok(value) } else { let tmp_AUTO_642 = str("number->uint8 cannot represent ", value);
  return _PCT_err(tmp_AUTO_642) }
}

export function range_bothway(x, y) {
  if (arguments.length < 1) throw $procs._args_between_throw('range-bothway', 1, 2, arguments.length);
  if (arguments.length > 2) throw $procs._args_between_throw('range-bothway', 1, 2, arguments.length);
  if (arguments.length <= 1) y = null;

  if ($procs.nil_$q_(y)) { let tmp_AUTO_643 = inc(negate(x));
  return $procs.range(tmp_AUTO_643, x) } else { let tmp_AUTO_644 = inc($procs._$n__($procs._$n__ADD_(x, x), y));
  return $procs.range(tmp_AUTO_644, y) }
}

export function repeat(x, n0) {
  if (arguments.length !== 2) throw $procs._args_throw('repeat', 2, arguments.length);
  let tmp_AUTO_645 = $procs._$L_();
  return function _PCT_repeat(acc, n) {
    if (arguments.length !== 2) throw $procs._args_throw('%repeat', 2, arguments.length);

    let times_AUTO_650 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_649 = null;
      if (((times_AUTO_650 & 1023) === 0) && times_AUTO_650 > 10000000) throw new Error('tail recursion not finished after 10M iterations');

  if (_$n__LT__$e_(n, 0)) { ret_AUTO_649 =acc } else { let tmp_AUTO_647 = $procs.append(acc, x);
  let tmp_AUTO_648 = $procs._$n__(n, 1);
  ret_AUTO_649 =$procs.recur(tmp_AUTO_647, tmp_AUTO_648) }

      if (ret_AUTO_649 instanceof CalcitRecur) {
        if (ret_AUTO_649.args.length !== 2) throw $procs._args_throw('%repeat', 2, ret_AUTO_649.args.length);
        acc = ret_AUTO_649.args[0];
  n = ret_AUTO_649.args[1];

        times_AUTO_650 += 1;
        continue;
      } else {
        return ret_AUTO_649;
      }
    }
  }

  (tmp_AUTO_645, n0)
}

export function reverse(x) {
  if (arguments.length !== 1) throw $procs._args_throw('reverse', 1, arguments.length);
  return $procs._$n_list_$o_reverse(x)
}

export function secure_random_bytes(size) {
  if (arguments.length !== 1) throw $procs._args_throw('secure-random-bytes', 1, arguments.length);

  if (($procs.round_$q_(size) ? (_GT__$e_(size, 0) ? (function _fn_(){
    let v1__1 = _LT__$e_(size, 65536);

    if (v1__1) { return v1__1 } else { return false }
  })() : false) : false)) { return $procs._$n_secure_random_bytes(Result, size, "secure-random-bytes failed") } else { return _PCT_err("secure-random-bytes expected an integer byte count in 0..65536") }
}

export function select_keys(m, xs) {
  if (arguments.length !== 2) throw $procs._args_throw('select-keys', 2, arguments.length);
  {
    {

    if ($procs.not(true)) { let err_AUTO_651 = new Error(str_spaced("expects 1st argument to be string, got:", "expected map for selecting"));
    err_AUTO_651.data = null;
    throw err_AUTO_651; } else {  null; };
    }
    void 0;
  }
  let tmp_AUTO_652 = $procs._$n__$M_();
  let tmp_AUTO_653 = function _PCT_select_keys(acc, k) {
    if (arguments.length !== 2) throw $procs._args_throw('%select-keys', 2, arguments.length);
    let tmp_AUTO_654 = $procs._$n_map_$o_get(m, k);
    return $procs._$n_map_$o_assoc(acc, k, tmp_AUTO_654)
  }
  ;
  return $procs.foldl(xs, tmp_AUTO_652, tmp_AUTO_653)
}

export function some_in_$q_(x, path) {
  if (arguments.length !== 2) throw $procs._args_throw('some-in?', 2, arguments.length);
  let tmp_AUTO_655 = get_in(x, path);
  return option_$o_some_$q_(tmp_AUTO_655)
}

export function struct_definition(value) {
  if (arguments.length !== 1) throw $procs._args_throw('struct-definition', 1, arguments.length);
  let tmp_AUTO_656 = $procs._$n_struct_$o_definition(value);
  return optionally(tmp_AUTO_656)
}

export function tagging_edn(data) {
  if (arguments.length !== 1) throw $procs._args_throw('tagging-edn', 1, arguments.length);

  if ($procs.list_$q_(data)) { return _$n_list_$o_map(data, tagging_edn) }
   else if ($procs.map_$q_(data)) { let tmp_AUTO_657 = function _PCT_tagging(k, v) {
    if (arguments.length !== 2) throw $procs._args_throw('%tagging', 2, arguments.length);
    let tmp_AUTO_658 = ($procs.string_$q_(k) ? $procs.turn_tag(k) : k);
    let tmp_AUTO_659 = tagging_edn(v);
    return $procs._PCT__$o__$o_(MapEntryDecision, _t_.keep, tmp_AUTO_658, tmp_AUTO_659)
  }
  ;
  return filter_map_kv(data, tmp_AUTO_657) } else { return data }
}

export function try_read_file(path) {
  if (arguments.length !== 1) throw $procs._args_throw('try-read-file', 1, arguments.length);
  return $procs._$n_fs_read_text(Result, path, "try-read-file failed")
}

export function try_write_file(path, content) {
  if (arguments.length !== 2) throw $procs._args_throw('try-write-file', 2, arguments.length);
  return $procs._$n_fs_write_text(Result, path, content, "try-write-file failed")
}

export function tuple_enum(_value) {
  if (arguments.length !== 1) throw $procs._args_throw('tuple-enum', 1, arguments.length);
  let err_AUTO_660 = new Error("`tuple-enum` was removed; use `enum-definition`, which returns Option<EnumDef>");
  err_AUTO_660.data = null;
  throw err_AUTO_660;
}

export function tuple_$q_(_value) {
  if (arguments.length !== 1) throw $procs._args_throw('tuple?', 1, arguments.length);
  let err_AUTO_661 = new Error("`tuple?` was removed; use `enum?` for enum values or `enum-def?` for definitions");
  err_AUTO_661.data = null;
  throw err_AUTO_661;
}

export function turn_str(x) {
  if (arguments.length !== 1) throw $procs._args_throw('turn-str', 1, arguments.length);
  return $procs.turn_string(x)
}

export function unselect_keys(m, xs) {
  if (arguments.length !== 2) throw $procs._args_throw('unselect-keys', 2, arguments.length);
  {
    {

    if ($procs.not(true)) { let err_AUTO_662 = new Error(str_spaced("expects 1st argument to be string, got:", "expected map for unselecting"));
    err_AUTO_662.data = null;
    throw err_AUTO_662; } else {  null; };
    }
    void 0;
  }
  let tmp_AUTO_663 = function _PCT_unselect_keys(acc, k) {
    if (arguments.length !== 2) throw $procs._args_throw('%unselect-keys', 2, arguments.length);
    return $procs._$n_map_$o_dissoc(acc, k)
  }
  ;
  return $procs.foldl(xs, m, tmp_AUTO_663)
}

export function update_in(data, path, f) {
  if (arguments.length !== 3) throw $procs._args_throw('update-in', 3, arguments.length);
  let v__1 = path;
  ($procs.not(true) ? (function _fn_(){
    let err_AUTO_664 = new Error("expected a list in list-match");
    err_AUTO_664.data = null;
    throw err_AUTO_664;
  })() : null);

  if ($procs._$n_list_$o_empty_$q_(v__1)) { let tmp_AUTO_665 = _PCT_some(data);
  return f(tmp_AUTO_665)
   } else { let p0 = $procs._$n_list_$o_nth(v__1, 0);
  let ps = $procs._$n_list_$o_slice(v__1, 1);

  if ($procs.struct_$q_(data)) { let err_AUTO_666 = new Error("update-in does not traverse Struct fields; use update with a direct field key");
  err_AUTO_666.data = null;
  throw err_AUTO_666; } else { let current = ($procs.nil_$q_(data) ? _PCT_none() : get(data, p0));
  let tmp_AUTO_667 = ($procs.nil_$q_(data) ? $procs._$n__$M_() : data);
  let tmp_AUTO_668 = ($procs._$n_list_$o_empty_$q_(ps) ? f(current) : update_in(option_$o_unwrap_or(current, $procs._$n__$M_()), ps, f));
  return assoc(tmp_AUTO_667, p0, tmp_AUTO_668)
   }


   }

}

export function wait_ms(milliseconds) {
  if (arguments.length !== 1) throw $procs._args_throw('wait-ms', 1, arguments.length);

  if (($procs.round_$q_(milliseconds) ? (_GT__$e_(milliseconds, 0) ? (function _fn_(){
    let v1__1 = _LT__$e_(milliseconds, 4294967295);

    if (v1__1) { return v1__1 } else { return false }
  })() : false) : false)) { return $procs._$n_wait_ms(Result, milliseconds, "wait-ms failed") } else { return _PCT_err("wait-ms expected an integer millisecond duration in 0..4294967295") }
}

export function zipmap(xs0, ys0) {
  if (arguments.length !== 2) throw $procs._args_throw('zipmap', 2, arguments.length);
  let tmp_AUTO_669 = $procs._$n__$M_();
  return function f_PCT_(acc, xs, ys) {
    if (arguments.length !== 3) throw $procs._args_throw('f%', 3, arguments.length);

    let times_AUTO_675 = 0;
    while(true) { /* Tail Recursion */
      let ret_AUTO_674 = null;
      if (((times_AUTO_675 & 1023) === 0) && times_AUTO_675 > 10000000) throw new Error('tail recursion not finished after 10M iterations');

  if (($procs._$n_list_$o_empty_$q_(xs) ? true : $procs._$n_list_$o_empty_$q_(ys))) { ret_AUTO_674 =acc } else { let tmp_AUTO_671 = $procs._$n_map_$o_assoc(acc, $procs._$n_list_$o_first(xs), $procs._$n_list_$o_first(ys));
  let tmp_AUTO_672 = rest(xs);
  let tmp_AUTO_673 = rest(ys);
  ret_AUTO_674 =$procs.recur(tmp_AUTO_671, tmp_AUTO_672, tmp_AUTO_673) }

      if (ret_AUTO_674 instanceof CalcitRecur) {
        if (ret_AUTO_674.args.length !== 3) throw $procs._args_throw('f%', 3, ret_AUTO_674.args.length);
        acc = ret_AUTO_674.args[0];
  xs = ret_AUTO_674.args[1];
  ys = ret_AUTO_674.args[2];

        times_AUTO_675 += 1;
        continue;
      } else {
        return ret_AUTO_674;
      }
    }
  }

  (tmp_AUTO_669, xs0, ys0)
}



export var Mappable = $procs._$n_trait_$o__$o_new(_t_.Mappable, $procs._$L_($procs._$L_(_t_.map, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), _t_.fn])])])]))));

export var ResultMappableImpl = $procs._$n_impl_$o__$o_new(Mappable, $procs._$L_(_t_.map, result_$o_map));

export var ResultOps = $procs._$n_trait_$o__$o_new(_t_.ResultOps, (function _fn_(){
  let tmp_AUTO_6 = $procs._$L_(_t_["ok?"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Bool")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])])])])]));
  let tmp_AUTO_7 = $procs._$L_(_t_["err?"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Bool")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])])])])]));
  let tmp_AUTO_8 = $procs._$L_(_t_["unwrap-or"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]));
  let tmp_AUTO_9 = $procs._$L_(_t_["and-then"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])])])])])])])]));
  let tmp_AUTO_10 = $procs._$L_(_t_["map-err"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("F")])])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("F")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("F")])])])])])])])]));
  let tmp_AUTO_11 = $procs._$L_(_t_["or-else"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]")])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])])])])])])])])]));
  return $procs._$L_(tmp_AUTO_6, tmp_AUTO_7, tmp_AUTO_8, tmp_AUTO_9, tmp_AUTO_10, tmp_AUTO_11);
})());

export var ResultOpsImpl = (function _fn_(){
  let tmp_AUTO_28 = $procs._$L_(_t_["ok?"], result_$o_ok_$q_);
  let tmp_AUTO_29 = $procs._$L_(_t_["err?"], result_$o_err_$q_);
  let tmp_AUTO_30 = $procs._$L_(_t_["unwrap-or"], result_$o_unwrap_or);
  let tmp_AUTO_31 = $procs._$L_(_t_["and-then"], result_$o_and_then);
  let tmp_AUTO_32 = $procs._$L_(_t_["map-err"], result_$o_map_err);
  let tmp_AUTO_33 = $procs._$L_(_t_["or-else"], result_$o_or_else);
  return $procs._$n_impl_$o__$o_new(ResultOps, tmp_AUTO_28, tmp_AUTO_29, tmp_AUTO_30, tmp_AUTO_31, tmp_AUTO_32, tmp_AUTO_33);
})();

export var Result = (function _fn_(){
  let tmp_AUTO_51 = $procs._$n_enum_def_$o_new(_t_.Result, $procs._$L_(new CalcitSymbol("T"), new CalcitSymbol("E")), $procs._$L_(_t_.ok, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])), $procs._$L_(_t_.err, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("E")])));
  return impl_traits(tmp_AUTO_51, $calcit_DOT_internal._$n_core_debug_impl, $calcit_DOT_internal._$n_core_eq_impl, ResultMappableImpl, ResultOpsImpl);
})();

export var OptionMappableImpl = $procs._$n_impl_$o__$o_new(Mappable, $procs._$L_(_t_.map, option_$o_map));

export var OptionOps = $procs._$n_trait_$o__$o_new(_t_.OptionOps, (function _fn_(){
  let tmp_AUTO_57 = $procs._$L_(_t_["some?"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Bool")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])])]));
  let tmp_AUTO_58 = $procs._$L_(_t_["none?"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Bool")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])])]));
  let tmp_AUTO_59 = $procs._$L_(_t_.unwrap, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])])]));
  let tmp_AUTO_60 = $procs._$L_(_t_["unwrap-or"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]));
  let tmp_AUTO_61 = $procs._$L_(_t_["and-then"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")])])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")])])])])])])])])]));
  let tmp_AUTO_62 = $procs._$L_(_t_["or-else"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]")])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])])])])])]));
  let tmp_AUTO_63 = $procs._$L_(_t_.fold, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]")])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")])])])]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("U")])])])])])])])]));
  return $procs._$L_(tmp_AUTO_57, tmp_AUTO_58, tmp_AUTO_59, tmp_AUTO_60, tmp_AUTO_61, tmp_AUTO_62, tmp_AUTO_63);
})());

export var OptionOpsImpl = (function _fn_(){
  let tmp_AUTO_80 = $procs._$L_(_t_["some?"], option_$o_some_$q_);
  let tmp_AUTO_81 = $procs._$L_(_t_["none?"], option_$o_none_$q_);
  let tmp_AUTO_82 = $procs._$L_(_t_.unwrap, option_$o_unwrap);
  let tmp_AUTO_83 = $procs._$L_(_t_["unwrap-or"], option_$o_unwrap_or);
  let tmp_AUTO_84 = $procs._$L_(_t_["and-then"], option_$o_and_then);
  let tmp_AUTO_85 = $procs._$L_(_t_["or-else"], option_$o_or_else);
  let tmp_AUTO_86 = $procs._$L_(_t_.fold, option_$o_fold);
  return $procs._$n_impl_$o__$o_new(OptionOps, tmp_AUTO_80, tmp_AUTO_81, tmp_AUTO_82, tmp_AUTO_83, tmp_AUTO_84, tmp_AUTO_85, tmp_AUTO_86);
})();

export var Option = (function _fn_(){
  let tmp_AUTO_87 = $procs._$n_enum_def_$o_new(_t_.Option, $procs._$L_(new CalcitSymbol("T")), $procs._$L_(_t_.some, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])), $procs._$L_(_t_.none));
  return impl_traits(tmp_AUTO_87, $calcit_DOT_internal._$n_core_debug_impl, $calcit_DOT_internal._$n_core_eq_impl, OptionMappableImpl, OptionOpsImpl);
})();

export var _$n_core_enum_methods = (function _fn_(){
  let tmp_AUTO_105 = $procs._$o__$o_(_t_.count, $procs._$n_enum_$o_count);
  let tmp_AUTO_106 = $procs._$o__$o_(_t_.nth, nth);
  let tmp_AUTO_107 = $procs._$o__$o_(_t_.get, get);
  let tmp_AUTO_108 = $procs._$o__$o_(_t_.assoc, $procs._$n_enum_$o_assoc);
  let tmp_AUTO_109 = $procs._$o__$o_(_t_.first, first);
  let tmp_AUTO_110 = $procs._$o__$o_(_t_.last, last);
  let tmp_AUTO_111 = (function _fn_(){
    let tmp_AUTO_112 = function _$n_enum_$o_empty_$q__impl(x) {
      if (arguments.length !== 1) throw $procs._args_throw('&enum:empty?-impl', 1, arguments.length);
      let tmp_AUTO_113 = $procs._$n_enum_$o_count(x);
      return $procs._$n__$e_(0, tmp_AUTO_113)
    }
    ;
    return $procs._$o__$o_(_t_["empty?"], tmp_AUTO_112);
  })();
  let tmp_AUTO_114 = (function _fn_(){
    let tmp_AUTO_115 = function _$n_enum_$o_contains_$q__impl(x, k) {
      if (arguments.length !== 2) throw $procs._args_throw('&enum:contains?-impl', 2, arguments.length);

      if (_$n__GT__$e_(k, 0)) { let tmp_AUTO_116 = $procs._$n_enum_$o_count(x);
      return $procs._$n__LT_(k, tmp_AUTO_116) } else { return false }
    }
    ;
    return $procs._$o__$o_(_t_["contains?"], tmp_AUTO_115);
  })();
  return $procs._$n_impl_$o__$o_new(_t_["&core-enum-methods"], tmp_AUTO_105, tmp_AUTO_106, tmp_AUTO_107, tmp_AUTO_108, tmp_AUTO_109, tmp_AUTO_110, tmp_AUTO_111, tmp_AUTO_114);
})();

export var Contains = $procs._$n_trait_$o__$o_new(_t_.Contains, $procs._$L_($procs._$L_(_t_["contains?"], new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("K")])])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("K")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Bool")])])])]))));

export var Countable = $procs._$n_trait_$o__$o_new(_t_.Countable, $procs._$L_($procs._$L_(_t_.count, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, _t_.number]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]))));

export var Debug = $procs._$n_trait_$o__$o_new(_t_.Debug, $procs._$L_($procs._$L_(_t_.debug, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, _t_.string]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]))));

export var Eq = $procs._$n_trait_$o__$o_new(_t_.Eq, $procs._$L_($procs._$L_(_t_["eq?"], new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, _t_.bool]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]))));

export var _$n_core_enum_impls = (function _fn_(){
  let tmp_AUTO_117 = $procs._$n_impl_$o__$o_new(Debug, $calcit_DOT_internal._$n_core_debug_impl);
  let tmp_AUTO_118 = $procs._$n_impl_$o__$o_new(Eq, $calcit_DOT_internal._$n_core_eq_impl);
  let tmp_AUTO_119 = $procs._$n_impl_$o__$o_new(Countable, $calcit_DOT_internal._$n_core_countable_enum_impl);
  let tmp_AUTO_120 = $procs._$n_impl_$o__$o_new(Contains, $calcit_DOT_internal._$n_core_contains_enum_impl);
  return $procs._$L_(_$n_core_enum_methods, tmp_AUTO_117, tmp_AUTO_118, tmp_AUTO_119, tmp_AUTO_120);
})();

export var _$n_core_fn_methods = (function _fn_(){
  let tmp_AUTO_125 = (function _fn_(){
    let tmp_AUTO_126 = function _$n_fn_$o_call(f, ...args) {
      if (arguments.length < 1) throw $procs._args_fewer_throw('&fn:call', 1, arguments.length);
      args = arrayToList(args);
      return f(...listToArray(args))
    }
    ;
    return $procs._$o__$o_(_t_.call, tmp_AUTO_126);
  })();
  let tmp_AUTO_127 = (function _fn_(){
    let tmp_AUTO_128 = function _$n_fn_$o_call_args(f, args) {
      if (arguments.length !== 2) throw $procs._args_throw('&fn:call-args', 2, arguments.length);
      return f(...listToArray(args))
    }
    ;
    return $procs._$o__$o_(_t_["call-args"], tmp_AUTO_128);
  })();
  let tmp_AUTO_129 = $procs._$o__$o_(_t_.map, _$n_fn_$o_map);
  let tmp_AUTO_130 = $procs._$o__$o_(_t_.bind, _$n_fn_$o_bind);
  let tmp_AUTO_131 = $procs._$o__$o_(_t_.mappend, _$n_fn_$o_mappend);
  let tmp_AUTO_132 = $procs._$o__$o_(_t_.apply, _$n_fn_$o_apply);
  return $procs._$n_impl_$o__$o_new(_t_["&core-fn-methods"], tmp_AUTO_125, tmp_AUTO_127, tmp_AUTO_129, tmp_AUTO_130, tmp_AUTO_131, tmp_AUTO_132);
})();

export var _$n_core_fn_impls = $procs._$L_(_$n_core_fn_methods, $procs._$n_impl_$o__$o_new(Debug, $calcit_DOT_internal._$n_core_debug_impl));

export var _$n_core_list_methods = (function _fn_(){
  let tmp_AUTO_250 = $procs._$o__$o_(_t_["any?"], any_$q_);
  let tmp_AUTO_251 = $procs._$o__$o_(_t_.add, $procs.append);
  let tmp_AUTO_252 = $procs._$o__$o_(_t_.append, $procs.append);
  let tmp_AUTO_253 = $procs._$o__$o_(_t_.assoc, $procs._$n_list_$o_assoc);
  let tmp_AUTO_254 = $procs._$o__$o_(_t_["assoc-after"], $procs._$n_list_$o_assoc_after);
  let tmp_AUTO_255 = $procs._$o__$o_(_t_["assoc-before"], $procs._$n_list_$o_assoc_before);
  let tmp_AUTO_256 = $procs._$o__$o_(_t_.bind, mapcat);
  let tmp_AUTO_257 = $procs._$o__$o_(_t_.butlast, $procs.butlast);
  let tmp_AUTO_258 = $procs._$o__$o_(_t_.concat, $procs._$n_list_$o_concat);
  let tmp_AUTO_259 = $procs._$o__$o_(_t_["contains?"], $procs._$n_list_$o_contains_$q_);
  let tmp_AUTO_260 = $procs._$o__$o_(_t_["includes?"], $procs._$n_list_$o_includes_$q_);
  let tmp_AUTO_261 = $procs._$o__$o_(_t_.count, $procs._$n_list_$o_count);
  let tmp_AUTO_262 = $procs._$o__$o_(_t_.drop, drop);
  let tmp_AUTO_263 = $procs._$o__$o_(_t_.each, each);
  let tmp_AUTO_264 = $procs._$o__$o_(_t_.empty, _$n_list_$o_empty);
  let tmp_AUTO_265 = $procs._$o__$o_(_t_["empty?"], $procs._$n_list_$o_empty_$q_);
  let tmp_AUTO_266 = $procs._$o__$o_(_t_.filter, _$n_list_$o_filter);
  let tmp_AUTO_267 = $procs._$o__$o_(_t_["filter-not"], filter_not);
  let tmp_AUTO_268 = $procs._$o__$o_(_t_.find, find);
  let tmp_AUTO_269 = $procs._$o__$o_(_t_["find-index"], find_index);
  let tmp_AUTO_270 = $procs._$o__$o_(_t_["find-last"], _$n_list_$o_find_last);
  let tmp_AUTO_271 = $procs._$o__$o_(_t_["find-last-index"], _$n_list_$o_find_last_index);
  let tmp_AUTO_272 = $procs._$o__$o_(_t_.foldl, $procs.foldl);
  let tmp_AUTO_273 = $procs._$o__$o_(_t_.get, get);
  let tmp_AUTO_274 = $procs._$o__$o_(_t_["get-in"], get_in);
  let tmp_AUTO_275 = $procs._$o__$o_(_t_["group-by"], group_by);
  let tmp_AUTO_276 = $procs._$o__$o_(_t_["index-of"], index_of);
  let tmp_AUTO_277 = $procs._$o__$o_(_t_.join, join);
  let tmp_AUTO_278 = $procs._$o__$o_(_t_["join-str"], join_str);
  let tmp_AUTO_279 = $procs._$o__$o_(_t_["last-index-of"], _$n_list_$o_last_index_of);
  let tmp_AUTO_280 = $procs._$o__$o_(_t_.map, _$n_list_$o_map);
  let tmp_AUTO_281 = $procs._$o__$o_(_t_["map-indexed"], map_indexed);
  let tmp_AUTO_282 = $procs._$o__$o_(_t_.mappend, _$n_list_$o_mappend);
  let tmp_AUTO_283 = $procs._$o__$o_(_t_.max, _$n_list_$o_max);
  let tmp_AUTO_284 = $procs._$o__$o_(_t_.min, _$n_list_$o_min);
  let tmp_AUTO_285 = $procs._$o__$o_(_t_.nth, nth);
  let tmp_AUTO_286 = $procs._$o__$o_(_t_["pairs-map"], pairs_map);
  let tmp_AUTO_287 = $procs._$o__$o_(_t_.prepend, $procs.prepend);
  let tmp_AUTO_288 = $procs._$o__$o_(_t_.reduce, reduce);
  let tmp_AUTO_289 = $procs._$o__$o_(_t_.reverse, $procs._$n_list_$o_reverse);
  let tmp_AUTO_290 = $procs._$o__$o_(_t_.slice, $procs._$n_list_$o_slice);
  let tmp_AUTO_291 = $procs._$o__$o_(_t_.sort, $procs.sort);
  let tmp_AUTO_292 = $procs._$o__$o_(_t_["sort-by"], _$n_list_$o_sort_by);
  let tmp_AUTO_293 = $procs._$o__$o_(_t_.take, take);
  let tmp_AUTO_294 = $procs._$o__$o_(_t_["take-last"], take_last);
  let tmp_AUTO_295 = $procs._$o__$o_(_t_["to-set"], $procs._$n_list_$o_to_set);
  let tmp_AUTO_296 = $procs._$o__$o_(_t_.first, first);
  let tmp_AUTO_297 = $procs._$o__$o_(_t_.last, last);
  let tmp_AUTO_298 = $procs._$o__$o_(_t_.rest, $procs._$n_list_$o_rest);
  let tmp_AUTO_299 = $procs._$o__$o_(_t_.dissoc, $procs._$n_list_$o_dissoc);
  let tmp_AUTO_300 = $procs._$o__$o_(_t_["to-list"], identity);
  let tmp_AUTO_301 = $procs._$o__$o_(_t_["map-pair"], _$n_list_$o_map_pair);
  let tmp_AUTO_302 = $procs._$o__$o_(_t_["filter-pair"], _$n_list_$o_filter_pair);
  let tmp_AUTO_303 = $procs._$o__$o_(_t_.apply, _$n_list_$o_apply);
  let tmp_AUTO_304 = $procs._$o__$o_(_t_.flatten, _$n_list_$o_flatten);
  return $procs._$n_impl_$o__$o_new(_t_["&core-list-methods"], tmp_AUTO_250, tmp_AUTO_251, tmp_AUTO_252, tmp_AUTO_253, tmp_AUTO_254, tmp_AUTO_255, tmp_AUTO_256, tmp_AUTO_257, tmp_AUTO_258, tmp_AUTO_259, tmp_AUTO_260, tmp_AUTO_261, tmp_AUTO_262, tmp_AUTO_263, tmp_AUTO_264, tmp_AUTO_265, tmp_AUTO_266, tmp_AUTO_267, tmp_AUTO_268, tmp_AUTO_269, tmp_AUTO_270, tmp_AUTO_271, tmp_AUTO_272, tmp_AUTO_273, tmp_AUTO_274, tmp_AUTO_275, tmp_AUTO_276, tmp_AUTO_277, tmp_AUTO_278, tmp_AUTO_279, tmp_AUTO_280, tmp_AUTO_281, tmp_AUTO_282, tmp_AUTO_283, tmp_AUTO_284, tmp_AUTO_285, tmp_AUTO_286, tmp_AUTO_287, tmp_AUTO_288, tmp_AUTO_289, tmp_AUTO_290, tmp_AUTO_291, tmp_AUTO_292, tmp_AUTO_293, tmp_AUTO_294, tmp_AUTO_295, tmp_AUTO_296, tmp_AUTO_297, tmp_AUTO_298, tmp_AUTO_299, tmp_AUTO_300, tmp_AUTO_301, tmp_AUTO_302, tmp_AUTO_303, tmp_AUTO_304);
})();

export var Add = $procs._$n_trait_$o__$o_new(_t_.Add, $procs._$L_($procs._$L_(_t_.add, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]))));

export var Len = $procs._$n_trait_$o__$o_new(_t_.Len, $procs._$L_($procs._$L_(_t_.len, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, _t_.number]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]))));

export var Sliceable = $procs._$n_trait_$o__$o_new(_t_.Sliceable, $procs._$L_($procs._$L_(_t_.slice, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Number")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Number")])])])])]))));

export var _$n_core_list_impls = (function _fn_(){
  let tmp_AUTO_305 = $procs._$n_impl_$o__$o_new(Debug, $calcit_DOT_internal._$n_core_debug_impl);
  let tmp_AUTO_306 = $procs._$n_impl_$o__$o_new(Eq, $calcit_DOT_internal._$n_core_eq_impl);
  let tmp_AUTO_307 = $procs._$n_impl_$o__$o_new(Add, $calcit_DOT_internal._$n_core_add_list_impl);
  let tmp_AUTO_308 = $procs._$n_impl_$o__$o_new(Len, $calcit_DOT_internal._$n_core_len_list_impl);
  let tmp_AUTO_309 = $procs._$n_impl_$o__$o_new(Mappable, $calcit_DOT_internal._$n_core_mappable_list_impl);
  let tmp_AUTO_310 = $procs._$n_impl_$o__$o_new(Countable, $calcit_DOT_internal._$n_core_countable_list_impl);
  let tmp_AUTO_311 = $procs._$n_impl_$o__$o_new(Contains, $calcit_DOT_internal._$n_core_contains_list_impl);
  let tmp_AUTO_312 = $procs._$n_impl_$o__$o_new(Sliceable, $procs._$o__$o_(_t_.slice, $procs._$n_list_$o_slice));
  return $procs._$L_(_$n_core_list_methods, tmp_AUTO_305, tmp_AUTO_306, tmp_AUTO_307, tmp_AUTO_308, tmp_AUTO_309, tmp_AUTO_310, tmp_AUTO_311, tmp_AUTO_312);
})();

export var MapDestruct = (function _fn_(){
  let tmp_AUTO_334 = $procs._$L_(_t_.some, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("K")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("V")]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Map")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("K")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("V")])]));
  return $procs._$n_enum_def_$o_new(_t_.MapDestruct, $procs._$L_(new CalcitSymbol("K"), new CalcitSymbol("V")), tmp_AUTO_334, $procs._$L_(_t_.none));
})();

export var _$n_core_map_methods = (function _fn_(){
  let tmp_AUTO_350 = $procs._$o__$o_(_t_.add, _$n_map_$o_add_entry);
  let tmp_AUTO_351 = $procs._$o__$o_(_t_.assoc, $procs._$n_map_$o_assoc);
  let tmp_AUTO_352 = $procs._$o__$o_(_t_["common-keys"], $procs._$n_map_$o_common_keys);
  let tmp_AUTO_353 = $procs._$o__$o_(_t_["contains?"], $procs._$n_map_$o_contains_$q_);
  let tmp_AUTO_354 = $procs._$o__$o_(_t_.count, $procs._$n_map_$o_count);
  let tmp_AUTO_355 = $procs._$o__$o_(_t_.destruct, destruct_map);
  let tmp_AUTO_356 = $procs._$o__$o_(_t_["diff-keys"], $procs._$n_map_$o_diff_keys);
  let tmp_AUTO_357 = $procs._$o__$o_(_t_["diff-new"], $procs._$n_map_$o_diff_new);
  let tmp_AUTO_358 = $procs._$o__$o_(_t_["diff-triple"], $procs._$n_map_$o_diff_triple);
  let tmp_AUTO_359 = $procs._$o__$o_(_t_.dissoc, $procs._$n_map_$o_dissoc);
  let tmp_AUTO_360 = $procs._$o__$o_(_t_.empty, _$n_map_$o_empty);
  let tmp_AUTO_361 = $procs._$o__$o_(_t_["empty?"], $procs._$n_map_$o_empty_$q_);
  let tmp_AUTO_362 = $procs._$o__$o_(_t_.filter, _$n_map_$o_filter);
  let tmp_AUTO_363 = $procs._$o__$o_(_t_["filter-kv"], _$n_map_$o_filter_kv);
  let tmp_AUTO_364 = $procs._$o__$o_(_t_["filter-map-kv"], filter_map_kv);
  let tmp_AUTO_365 = $procs._$o__$o_(_t_.get, get);
  let tmp_AUTO_366 = $procs._$o__$o_(_t_["get-in"], get_in);
  let tmp_AUTO_367 = $procs._$o__$o_(_t_["includes?"], $procs._$n_map_$o_includes_$q_);
  let tmp_AUTO_368 = $procs._$o__$o_(_t_.keys, $procs._$n_map_$o_keys);
  let tmp_AUTO_369 = $procs._$o__$o_(_t_.map, _$n_map_$o_map);
  let tmp_AUTO_370 = $procs._$o__$o_(_t_["map-kv"], map_kv);
  let tmp_AUTO_371 = $procs._$o__$o_(_t_["map-list"], _$n_map_$o_map_list);
  let tmp_AUTO_372 = $procs._$o__$o_(_t_.mappend, merge);
  let tmp_AUTO_373 = $procs._$o__$o_(_t_.merge, merge);
  let tmp_AUTO_374 = $procs._$o__$o_(_t_["to-list"], $procs._$n_map_$o_to_list);
  let tmp_AUTO_375 = $procs._$o__$o_(_t_["to-map"], identity);
  let tmp_AUTO_376 = $procs._$o__$o_(_t_["to-pairs"], $procs.to_pairs);
  let tmp_AUTO_377 = $procs._$o__$o_(_t_.values, vals);
  return $procs._$n_impl_$o__$o_new(_t_["&core-map-methods"], tmp_AUTO_350, tmp_AUTO_351, tmp_AUTO_352, tmp_AUTO_353, tmp_AUTO_354, tmp_AUTO_355, tmp_AUTO_356, tmp_AUTO_357, tmp_AUTO_358, tmp_AUTO_359, tmp_AUTO_360, tmp_AUTO_361, tmp_AUTO_362, tmp_AUTO_363, tmp_AUTO_364, tmp_AUTO_365, tmp_AUTO_366, tmp_AUTO_367, tmp_AUTO_368, tmp_AUTO_369, tmp_AUTO_370, tmp_AUTO_371, tmp_AUTO_372, tmp_AUTO_373, tmp_AUTO_374, tmp_AUTO_375, tmp_AUTO_376, tmp_AUTO_377);
})();

export var _$n_core_map_impls = (function _fn_(){
  let tmp_AUTO_378 = $procs._$n_impl_$o__$o_new(Debug, $calcit_DOT_internal._$n_core_debug_impl);
  let tmp_AUTO_379 = $procs._$n_impl_$o__$o_new(Eq, $calcit_DOT_internal._$n_core_eq_impl);
  let tmp_AUTO_380 = $procs._$n_impl_$o__$o_new(Len, $calcit_DOT_internal._$n_core_len_map_impl);
  let tmp_AUTO_381 = $procs._$n_impl_$o__$o_new(Mappable, $calcit_DOT_internal._$n_core_mappable_map_impl);
  let tmp_AUTO_382 = $procs._$n_impl_$o__$o_new(Countable, $calcit_DOT_internal._$n_core_countable_map_impl);
  let tmp_AUTO_383 = $procs._$n_impl_$o__$o_new(Contains, $calcit_DOT_internal._$n_core_contains_map_impl);
  return $procs._$L_(_$n_core_map_methods, tmp_AUTO_378, tmp_AUTO_379, tmp_AUTO_380, tmp_AUTO_381, tmp_AUTO_382, tmp_AUTO_383);
})();

export var _$n_core_number_methods = (function _fn_(){
  let tmp_AUTO_384 = $procs._$o__$o_(_t_.ceil, $procs.ceil);
  let tmp_AUTO_385 = $procs._$o__$o_(_t_.empty, _$n_number_$o_empty);
  let tmp_AUTO_386 = $procs._$o__$o_(_t_.floor, $procs.floor);
  let tmp_AUTO_387 = $procs._$o__$o_(_t_.format, $procs._$n_number_$o_format);
  let tmp_AUTO_388 = $procs._$o__$o_(_t_["display-by"], $procs._$n_number_$o_display_by);
  let tmp_AUTO_389 = $procs._$o__$o_(_t_.inc, inc);
  let tmp_AUTO_390 = $procs._$o__$o_(_t_.pow, $procs.pow);
  let tmp_AUTO_391 = $procs._$o__$o_(_t_.round, $procs.round);
  let tmp_AUTO_392 = $procs._$o__$o_(_t_["round?"], $procs.round_$q_);
  let tmp_AUTO_393 = $procs._$o__$o_(_t_.fract, $procs._$n_number_$o_fract);
  let tmp_AUTO_394 = $procs._$o__$o_(_t_.sqrt, $procs.sqrt);
  let tmp_AUTO_395 = $procs._$o__$o_(_t_.negate, negate);
  let tmp_AUTO_396 = $procs._$o__$o_(_t_.rem, $procs._$n_number_$o_rem);
  let tmp_AUTO_397 = $procs._$o__$o_(_t_.compare, $procs._$n_compare);
  return $procs._$n_impl_$o__$o_new(_t_["&core-number-methods"], tmp_AUTO_384, tmp_AUTO_385, tmp_AUTO_386, tmp_AUTO_387, tmp_AUTO_388, tmp_AUTO_389, tmp_AUTO_390, tmp_AUTO_391, tmp_AUTO_392, tmp_AUTO_393, tmp_AUTO_394, tmp_AUTO_395, tmp_AUTO_396, tmp_AUTO_397);
})();

export var Compare = $procs._$n_trait_$o__$o_new(_t_.Compare, $procs._$L_($procs._$L_(_t_.compare, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Number")])])])]))));

export var Multiply = $procs._$n_trait_$o__$o_new(_t_.Multiply, $procs._$L_($procs._$L_(_t_.multiply, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]))));

export var _$n_core_number_impls = (function _fn_(){
  let tmp_AUTO_398 = $procs._$n_impl_$o__$o_new(Debug, $calcit_DOT_internal._$n_core_debug_impl);
  let tmp_AUTO_399 = $procs._$n_impl_$o__$o_new(Eq, $calcit_DOT_internal._$n_core_eq_impl);
  let tmp_AUTO_400 = $procs._$n_impl_$o__$o_new(Add, $calcit_DOT_internal._$n_core_add_number_impl);
  let tmp_AUTO_401 = $procs._$n_impl_$o__$o_new(Multiply, $calcit_DOT_internal._$n_core_multiply_number_impl);
  let tmp_AUTO_402 = $procs._$n_impl_$o__$o_new(Compare, $calcit_DOT_internal._$n_core_compare_number_impl);
  return $procs._$L_(_$n_core_number_methods, tmp_AUTO_398, tmp_AUTO_399, tmp_AUTO_400, tmp_AUTO_401, tmp_AUTO_402);
})();

export var _$n_core_ref_methods = $procs._$n_impl_$o__$o_new(_t_["&core-ref-methods"], $procs._$o__$o_(_t_.deref, $procs._$n_atom_$o_deref));

export var _$n_core_ref_impls = $procs._$L_(_$n_core_ref_methods);

export var _$n_core_scalar_impls = $procs._$L_($procs._$n_impl_$o__$o_new(Debug, $calcit_DOT_internal._$n_core_debug_impl), $procs._$n_impl_$o__$o_new(Eq, $calcit_DOT_internal._$n_core_eq_impl));

export var SetDestruct = $procs._$n_enum_def_$o_new(_t_.SetDestruct, $procs._$L_(new CalcitSymbol("T")), $procs._$L_(_t_.some, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Set")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])), $procs._$L_(_t_.none));

export var _$n_core_set_methods = (function _fn_(){
  let tmp_AUTO_413 = $procs._$o__$o_(_t_.add, include);
  let tmp_AUTO_414 = $procs._$o__$o_(_t_["contains?"], $procs._$n_set_$o_includes_$q_);
  let tmp_AUTO_415 = $procs._$o__$o_(_t_.count, $procs._$n_set_$o_count);
  let tmp_AUTO_416 = $procs._$o__$o_(_t_.destruct, destruct_set);
  let tmp_AUTO_417 = $procs._$o__$o_(_t_.difference, difference);
  let tmp_AUTO_418 = $procs._$o__$o_(_t_.empty, _$n_set_$o_empty);
  let tmp_AUTO_419 = $procs._$o__$o_(_t_["empty?"], $procs._$n_set_$o_empty_$q_);
  let tmp_AUTO_420 = $procs._$o__$o_(_t_.exclude, exclude);
  let tmp_AUTO_421 = $procs._$o__$o_(_t_.filter, _$n_set_$o_filter);
  let tmp_AUTO_422 = $procs._$o__$o_(_t_.include, include);
  let tmp_AUTO_423 = $procs._$o__$o_(_t_["includes?"], $procs._$n_set_$o_includes_$q_);
  let tmp_AUTO_424 = $procs._$o__$o_(_t_.intersection, intersection);
  let tmp_AUTO_425 = $procs._$o__$o_(_t_.map, _$n_set_$o_map);
  let tmp_AUTO_426 = $procs._$o__$o_(_t_.mappend, union);
  let tmp_AUTO_427 = $procs._$o__$o_(_t_.max, _$n_set_$o_max);
  let tmp_AUTO_428 = $procs._$o__$o_(_t_.min, _$n_set_$o_min);
  let tmp_AUTO_429 = $procs._$o__$o_(_t_["to-list"], $procs._$n_set_$o_to_list);
  let tmp_AUTO_430 = $procs._$o__$o_(_t_["to-set"], identity);
  let tmp_AUTO_431 = $procs._$o__$o_(_t_.union, union);
  return $procs._$n_impl_$o__$o_new(_t_["&core-set-methods"], tmp_AUTO_413, tmp_AUTO_414, tmp_AUTO_415, tmp_AUTO_416, tmp_AUTO_417, tmp_AUTO_418, tmp_AUTO_419, tmp_AUTO_420, tmp_AUTO_421, tmp_AUTO_422, tmp_AUTO_423, tmp_AUTO_424, tmp_AUTO_425, tmp_AUTO_426, tmp_AUTO_427, tmp_AUTO_428, tmp_AUTO_429, tmp_AUTO_430, tmp_AUTO_431);
})();

export var _$n_core_set_impls = (function _fn_(){
  let tmp_AUTO_432 = $procs._$n_impl_$o__$o_new(Debug, $calcit_DOT_internal._$n_core_debug_impl);
  let tmp_AUTO_433 = $procs._$n_impl_$o__$o_new(Eq, $calcit_DOT_internal._$n_core_eq_impl);
  let tmp_AUTO_434 = $procs._$n_impl_$o__$o_new(Len, $calcit_DOT_internal._$n_core_len_set_impl);
  let tmp_AUTO_435 = $procs._$n_impl_$o__$o_new(Mappable, $calcit_DOT_internal._$n_core_mappable_set_impl);
  let tmp_AUTO_436 = $procs._$n_impl_$o__$o_new(Countable, $calcit_DOT_internal._$n_core_countable_set_impl);
  let tmp_AUTO_437 = $procs._$n_impl_$o__$o_new(Contains, $calcit_DOT_internal._$n_core_contains_set_impl);
  return $procs._$L_(_$n_core_set_methods, tmp_AUTO_432, tmp_AUTO_433, tmp_AUTO_434, tmp_AUTO_435, tmp_AUTO_436, tmp_AUTO_437);
})();

export var _$n_core_string_methods = (function _fn_(){
  let tmp_AUTO_452 = $procs._$o__$o_(_t_["blank?"], $procs.blank_$q_);
  let tmp_AUTO_453 = $procs._$o__$o_(_t_.count, $procs._$n_str_$o_count);
  let tmp_AUTO_454 = $procs._$o__$o_(_t_["utf8-byte-count"], $procs._$n_str_$o_utf8_byte_count);
  let tmp_AUTO_455 = $procs._$o__$o_(_t_.empty, _$n_str_$o_empty);
  let tmp_AUTO_456 = $procs._$o__$o_(_t_["ends-with?"], $procs.ends_with_$q_);
  let tmp_AUTO_457 = $procs._$o__$o_(_t_.get, get);
  let tmp_AUTO_458 = $procs._$o__$o_(_t_["parse-float"], parse_float);
  let tmp_AUTO_459 = $procs._$o__$o_(_t_.replace, $procs._$n_str_$o_replace);
  let tmp_AUTO_460 = $procs._$o__$o_(_t_.split, $procs.split);
  let tmp_AUTO_461 = $procs._$o__$o_(_t_["split-lines"], $procs.split_lines);
  let tmp_AUTO_462 = $procs._$o__$o_(_t_["starts-with?"], $procs.starts_with_$q_);
  let tmp_AUTO_463 = $procs._$o__$o_(_t_["strip-prefix"], strip_prefix);
  let tmp_AUTO_464 = $procs._$o__$o_(_t_["strip-suffix"], strip_suffix);
  let tmp_AUTO_465 = $procs._$o__$o_(_t_.slice, $procs._$n_str_$o_slice);
  let tmp_AUTO_466 = $procs._$o__$o_(_t_.trim, $procs.trim);
  let tmp_AUTO_467 = $procs._$o__$o_(_t_["empty?"], $procs._$n_str_$o_empty_$q_);
  let tmp_AUTO_468 = $procs._$o__$o_(_t_["contains?"], $procs._$n_str_$o_contains_$q_);
  let tmp_AUTO_469 = $procs._$o__$o_(_t_["includes?"], $procs._$n_str_$o_includes_$q_);
  let tmp_AUTO_470 = $procs._$o__$o_(_t_.nth, nth);
  let tmp_AUTO_471 = $procs._$o__$o_(_t_.first, first);
  let tmp_AUTO_472 = $procs._$o__$o_(_t_.last, last);
  let tmp_AUTO_473 = $procs._$o__$o_(_t_.rest, $procs._$n_str_$o_rest);
  let tmp_AUTO_474 = $procs._$o__$o_(_t_["pad-left"], $procs._$n_str_$o_pad_left);
  let tmp_AUTO_475 = $procs._$o__$o_(_t_["pad-right"], $procs._$n_str_$o_pad_right);
  let tmp_AUTO_476 = $procs._$o__$o_(_t_["find-index"], str_find_index);
  let tmp_AUTO_477 = $procs._$o__$o_(_t_["get-char-code"], $procs.get_char_code);
  let tmp_AUTO_478 = $procs._$o__$o_(_t_.escape, $procs._$n_str_$o_escape);
  let tmp_AUTO_479 = $procs._$o__$o_(_t_.mappend, $procs._$n_str_$o_concat);
  let tmp_AUTO_480 = $procs._$o__$o_(_t_.compare, $procs._$n_str_$o_compare);
  let tmp_AUTO_481 = $procs._$o__$o_(_t_["parse-cirru"], try_parse_cirru);
  let tmp_AUTO_482 = $procs._$o__$o_(_t_["parse-cirru-list"], try_parse_cirru_list);
  let tmp_AUTO_483 = $procs._$o__$o_(_t_["parse-cirru-edn"], try_parse_cirru_edn);
  let tmp_AUTO_484 = $procs._$o__$o_(_t_["parse-json"], try_parse_json);
  return $procs._$n_impl_$o__$o_new(_t_["&core-string-methods"], tmp_AUTO_452, tmp_AUTO_453, tmp_AUTO_454, tmp_AUTO_455, tmp_AUTO_456, tmp_AUTO_457, tmp_AUTO_458, tmp_AUTO_459, tmp_AUTO_460, tmp_AUTO_461, tmp_AUTO_462, tmp_AUTO_463, tmp_AUTO_464, tmp_AUTO_465, tmp_AUTO_466, tmp_AUTO_467, tmp_AUTO_468, tmp_AUTO_469, tmp_AUTO_470, tmp_AUTO_471, tmp_AUTO_472, tmp_AUTO_473, tmp_AUTO_474, tmp_AUTO_475, tmp_AUTO_476, tmp_AUTO_477, tmp_AUTO_478, tmp_AUTO_479, tmp_AUTO_480, tmp_AUTO_481, tmp_AUTO_482, tmp_AUTO_483, tmp_AUTO_484);
})();

export var _$n_core_string_impls = (function _fn_(){
  let tmp_AUTO_485 = $procs._$n_impl_$o__$o_new(Debug, $calcit_DOT_internal._$n_core_debug_impl);
  let tmp_AUTO_486 = $procs._$n_impl_$o__$o_new(Eq, $calcit_DOT_internal._$n_core_eq_impl);
  let tmp_AUTO_487 = $procs._$n_impl_$o__$o_new(Add, $calcit_DOT_internal._$n_core_add_string_impl);
  let tmp_AUTO_488 = $procs._$n_impl_$o__$o_new(Len, $calcit_DOT_internal._$n_core_len_string_impl);
  let tmp_AUTO_489 = $procs._$n_impl_$o__$o_new(Countable, $calcit_DOT_internal._$n_core_countable_string_impl);
  let tmp_AUTO_490 = $procs._$n_impl_$o__$o_new(Contains, $calcit_DOT_internal._$n_core_contains_string_impl);
  let tmp_AUTO_491 = $procs._$n_impl_$o__$o_new(Compare, $calcit_DOT_internal._$n_core_compare_string_impl);
  let tmp_AUTO_492 = $procs._$n_impl_$o__$o_new(Sliceable, $procs._$o__$o_(_t_.slice, $procs._$n_str_$o_slice));
  return $procs._$L_(_$n_core_string_methods, tmp_AUTO_485, tmp_AUTO_486, tmp_AUTO_487, tmp_AUTO_488, tmp_AUTO_489, tmp_AUTO_490, tmp_AUTO_491, tmp_AUTO_492);
})();

export var _$n_core_struct_methods = (function _fn_(){
  let tmp_AUTO_493 = $procs._$o__$o_(_t_.count, $procs._$n_struct_$o_count);
  let tmp_AUTO_494 = $procs._$o__$o_(_t_["contains?"], $procs._$n_struct_$o_contains_$q_);
  let tmp_AUTO_495 = $procs._$o__$o_(_t_.assoc, $procs._$n_struct_$o_assoc);
  let tmp_AUTO_496 = $procs._$o__$o_(_t_["to-map"], $procs._$n_struct_$o_to_map);
  let tmp_AUTO_497 = (function _fn_(){
    let tmp_AUTO_498 = function _$n_struct_$o_empty_$q__impl(x) {
      if (arguments.length !== 1) throw $procs._args_throw('&struct:empty?-impl', 1, arguments.length);
      let tmp_AUTO_499 = $procs._$n_struct_$o_count(x);
      return $procs._$n__$e_(0, tmp_AUTO_499)
    }
    ;
    return $procs._$o__$o_(_t_["empty?"], tmp_AUTO_498);
  })();
  return $procs._$n_impl_$o__$o_new(_t_["&core-struct-methods"], tmp_AUTO_493, tmp_AUTO_494, tmp_AUTO_495, tmp_AUTO_496, tmp_AUTO_497);
})();

export var _$n_core_struct_impls = (function _fn_(){
  let tmp_AUTO_500 = $procs._$n_impl_$o__$o_new(Debug, $calcit_DOT_internal._$n_core_debug_impl);
  let tmp_AUTO_501 = $procs._$n_impl_$o__$o_new(Eq, $calcit_DOT_internal._$n_core_eq_impl);
  let tmp_AUTO_502 = $procs._$n_impl_$o__$o_new(Countable, $calcit_DOT_internal._$n_core_countable_struct_impl);
  let tmp_AUTO_503 = $procs._$n_impl_$o__$o_new(Contains, $calcit_DOT_internal._$n_core_contains_struct_impl);
  return $procs._$L_(_$n_core_struct_methods, tmp_AUTO_500, tmp_AUTO_501, tmp_AUTO_502, tmp_AUTO_503);
})();

export var Show = $procs._$n_trait_$o__$o_new(_t_.Show, $procs._$L_($procs._$L_(_t_.show, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, _t_.string]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]))));

export var Deserialize = $procs._$n_trait_$o__$o_new(_t_.Deserialize, $procs._$L_($procs._$L_(_t_.deserialize, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), _t_.string])])])]))));

export var FfiResponseOps = $procs._$n_trait_$o__$o_new(_t_.FfiResponseOps, $procs._$L_($procs._$L_(_t_.resolve, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FfiResponse")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Unit")])])])])), $procs._$L_(_t_.reject, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FfiResponse")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Unit")])])])]))));

export var FfiResponseOpsImpl = $procs._$n_impl_$o__$o_new(FfiResponseOps, $procs._$L_(_t_.resolve, ffi_response_$o_resolve), $procs._$L_(_t_.reject, ffi_response_$o_reject));

export var FfiResponse = impl_traits($procs._$n_struct_def_$o_new(_t_.FfiResponse, $procs._$L_(_t_.raw, new CalcitSymbol("Dynamic"))), FfiResponseOpsImpl);

export var FfiTaskOps = $procs._$n_trait_$o__$o_new(_t_.FfiTaskOps, $procs._$L_($procs._$L_(_t_.cancel, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FfiTask")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Unit")])])])])), $procs._$L_(_t_["cancel-with"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FfiTask")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Unit")])])])]))));

export var FfiTaskOpsImpl = $procs._$n_impl_$o__$o_new(FfiTaskOps, $procs._$L_(_t_.cancel, ffi_task_$o_cancel), $procs._$L_(_t_["cancel-with"], ffi_task_$o_cancel_with));

export var FfiTask = impl_traits($procs._$n_struct_def_$o_new(_t_.FfiTask, $procs._$L_(_t_.raw, new CalcitSymbol("Dynamic"))), FfiTaskOpsImpl);

export var FsPathOps = $procs._$n_trait_$o__$o_new(_t_.FsPathOps, (function _fn_(){
  let tmp_AUTO_522 = $procs._$L_(_t_["read-text"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FsPath")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")])])])])]));
  let tmp_AUTO_523 = $procs._$L_(_t_["write-text"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FsPath")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Unit")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")])])])])]));
  let tmp_AUTO_524 = $procs._$L_(_t_["read-dir"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FsPath")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("List")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FsPath")])]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")])])])])]));
  let tmp_AUTO_525 = $procs._$L_(_t_["walk-dir"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FsPath")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Result")]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("List")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FsPath")])]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")])])])])]));
  let tmp_AUTO_526 = $procs._$L_(_t_["to-string"], new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Fn")]), new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("FsPath")])])]), new CalcitSliceList([_t_.return, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")])])])]));
  return $procs._$L_(tmp_AUTO_522, tmp_AUTO_523, tmp_AUTO_524, tmp_AUTO_525, tmp_AUTO_526);
})());

export var FsPathOpsImpl = (function _fn_(){
  let tmp_AUTO_537 = $procs._$L_(_t_["read-text"], fs_path_$o_read_text);
  let tmp_AUTO_538 = $procs._$L_(_t_["write-text"], fs_path_$o_write_text);
  let tmp_AUTO_539 = $procs._$L_(_t_["read-dir"], fs_path_$o_read_dir);
  let tmp_AUTO_540 = $procs._$L_(_t_["walk-dir"], fs_path_$o_walk_dir);
  let tmp_AUTO_541 = $procs._$L_(_t_["to-string"], fs_path_$o_to_string);
  return $procs._$n_impl_$o__$o_new(FsPathOps, tmp_AUTO_537, tmp_AUTO_538, tmp_AUTO_539, tmp_AUTO_540, tmp_AUTO_541);
})();

export var FsPath = impl_traits($procs._$n_struct_def_$o_new(_t_.FsPath, $procs._$L_(_t_.value, new CalcitSymbol("String"))), FsPathOpsImpl);

export var ListDestruct = $procs._$n_enum_def_$o_new(_t_.ListDestruct, $procs._$L_(new CalcitSymbol("T")), $procs._$L_(_t_.some, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")]), new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("List")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])), $procs._$L_(_t_.none));

export var MapEntryDecision = (function _fn_(){
  let tmp_AUTO_542 = $procs._$n_enum_def_$o_new(_t_.MapEntryDecision, $procs._$L_(new CalcitSymbol("K"), new CalcitSymbol("V")), $procs._$L_(_t_.keep, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("K")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("V")])), $procs._$L_(_t_.drop));
  return impl_traits(tmp_AUTO_542, $calcit_DOT_internal._$n_core_debug_impl, $calcit_DOT_internal._$n_core_eq_impl);
})();

export var ReadableByteStream = $procs._$n_struct_def_$o_new(_t_.ReadableByteStream);

export var RuntimeMapMeta = $procs._$n_struct_def_$o_new(_t_.RuntimeMapMeta, $procs._$L_(_t_.kind, new CalcitSymbol("Tag")));

export var RuntimeMapResponse = (function _fn_(){
  let tmp_AUTO_543 = $procs._$L_(_t_.code, new CalcitSymbol("Number"));
  let tmp_AUTO_544 = $procs._$L_(_t_.message, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")])]));
  let tmp_AUTO_545 = $procs._$L_(_t_.body, new CalcitSymbol("Dynamic"));
  let tmp_AUTO_546 = $procs._$L_(_t_.meta, new CalcitSliceList([new CalcitSymbol("::"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("Option")]), new CalcitSymbol("RuntimeMapMeta")]));
  return $procs._$n_struct_def_$o_new(_t_.RuntimeMapResponse, tmp_AUTO_543, tmp_AUTO_544, tmp_AUTO_545, tmp_AUTO_546);
})();

export var Serialize = $procs._$n_trait_$o__$o_new(_t_.Serialize, $procs._$L_($procs._$L_(_t_.serialize, new CalcitSliceList([new CalcitSymbol("::"), _t_.fn, new CalcitSliceList([new CalcitSymbol("{}"), new CalcitSliceList([_t_.return, _t_.string]), new CalcitSliceList([_t_.generics, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])]), new CalcitSliceList([_t_.args, new CalcitSliceList([new CalcitSymbol("[]"), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("T")])])])])]))));

export var StreamConsumeError = $procs._$n_enum_def_$o_new(_t_.StreamConsumeError, $procs._$L_(_t_["total-limit"]));

export var StringDestruct = $procs._$n_enum_def_$o_new(_t_.StringDestruct, $procs._$L_(_t_.some, new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")]), new CalcitSliceList([new CalcitSymbol('quote'), new CalcitSymbol("String")])), $procs._$L_(_t_.none));


$procs.register_calcit_builtin_impls({
  list: _$n_core_list_impls,
  map: _$n_core_map_impls,
  number: _$n_core_number_impls,
  set: _$n_core_set_impls,
  string: _$n_core_string_impls,
  fn: _$n_core_fn_impls,
  enum: _$n_core_enum_impls,
  struct: _$n_core_struct_impls,
  scalar: _$n_core_scalar_impls,
  ref: _$n_core_ref_impls,
});

let runtimeVersion = $procs.calcit_version;
let cli_version = '0.18.1';

if (runtimeVersion !== cli_version) {
  console.warn(`[Warning] versions mismatch, CLI using: ${cli_version}, runtime using: ${runtimeVersion}`)
}
