
import * as $clt from "./calcit.core.mjs";
import { _$n_regex_$o_find } from "./regex.core.mjs";
import { _$n_regex_$o_find_all } from "./regex.core.mjs";
import { _$n_regex_$o_find_index } from "./regex.core.mjs";
import { _$n_regex_$o_matches_$q_ } from "./regex.core.mjs";
import { _$n_regex_$o_replace_all } from "./regex.core.mjs";
import { _$n_regex_$o_source } from "./regex.core.mjs";
import { _$n_regex_$o_split } from "./regex.core.mjs";
import { compile_$x_ } from "./regex.core.mjs";
import { re_find } from "./regex.core.mjs";
import { re_find_all } from "./regex.core.mjs";
import { re_find_index } from "./regex.core.mjs";
import { re_matches } from "./regex.core.mjs";
import { re_pattern } from "./regex.core.mjs";
import { re_replace_all } from "./regex.core.mjs";
import { re_split } from "./regex.core.mjs";
const _t_ = $clt.init_tags([]);

export function check_equal(expected, actual) {
  if (arguments.length !== 2) throw $clt._args_throw('check-equal', 2, arguments.length);
  {

  if ($clt.not(true)) { let err_AUTO_1 = new Error($clt.str_spaced("expects 1st argument to be string, got:", "values-should-equal"));
  err_AUTO_1.data = null;
  throw err_AUTO_1; } else {  null; };
  }

  if ($clt._$n__$e_(expected, actual)) { return void 0 } else { {
  console.error($clt.printable("Failed assertion:", $clt.format_to_lisp(new $clt.CalcitSliceList([new $clt.CalcitSymbol("&="), new $clt.CalcitSymbol("expected"), new $clt.CalcitSymbol("actual")]))));
  }
  let err_AUTO_2 = new Error("values-should-equal (&= expected actual)");
  err_AUTO_2.data = null;
  throw err_AUTO_2;
   }

}

export function main_$x_() {
  if (arguments.length !== 0) throw $clt._args_throw('main!', 0, arguments.length);
  {
    console.log($clt.printable("%%%% test for regex"));
  }
  {
    console.log($clt.printable("Test regular expression"));
  }
  {
    let tmp_AUTO_3 = re_matches("2", "\\d");
    check_equal(true, tmp_AUTO_3);
  }
  {
    let tmp_AUTO_4 = re_matches("23", "\\d+");
    check_equal(true, tmp_AUTO_4);
  }
  {
    let tmp_AUTO_5 = re_matches("a", "\\d");
    check_equal(false, tmp_AUTO_5);
  }
  {
    let tmp_AUTO_6 = re_find("a4", "\\d");
    check_equal("4", tmp_AUTO_6);
  }
  {
    let tmp_AUTO_7 = re_find_index("a1", "\\d");
    check_equal(1, tmp_AUTO_7);
  }
  {
    let tmp_AUTO_8 = re_find_index("aa", "\\d");
    check_equal(-1, tmp_AUTO_8);
  }
  {
    let tmp_AUTO_9 = $clt._$L_("1", "2", "3");
    let tmp_AUTO_10 = re_find_all("123", "\\d");
    check_equal(tmp_AUTO_9, tmp_AUTO_10);
  }
  {
    let tmp_AUTO_11 = $clt._$L_("123");
    let tmp_AUTO_12 = re_find_all("123", "\\d+");
    check_equal(tmp_AUTO_11, tmp_AUTO_12);
  }
  {
    let tmp_AUTO_13 = $clt._$L_("1", "2", "3");
    let tmp_AUTO_14 = re_find_all("1a2a3", "\\d+");
    check_equal(tmp_AUTO_13, tmp_AUTO_14);
  }
  {
    let tmp_AUTO_15 = $clt._$L_("1", "2", "34");
    let tmp_AUTO_16 = re_find_all("1a2a34", "\\d+");
    check_equal(tmp_AUTO_15, tmp_AUTO_16);
  }
  {
    let tmp_AUTO_17 = re_replace_all("1ab22c333", "\\d{2}", "X");
    check_equal("1abXcX3", tmp_AUTO_17);
  }
  {
    let tmp_AUTO_18 = $clt._$L_("1ab", "c", "3");
    let tmp_AUTO_19 = re_split("1ab22c333", "\\d{2}");
    check_equal(tmp_AUTO_18, tmp_AUTO_19);
  }
  {
    console.log($clt.printable("%%% test variable holding regex"));
  }
  {
    let pattern = re_pattern("\\d+");
    console.log($clt.printable("Pattern is:", pattern));
    check_equal(true, re_matches("2", pattern));
    check_equal(true, re_matches("23", pattern));
    check_equal(false, re_matches("qq", pattern));
    check_equal("22", re_find("q22", pattern));
    check_equal($clt._$L_("1", "2", "3"), re_find_all("1q2q3", pattern));
    check_equal("XabXcX", re_replace_all("1ab22c333", pattern, "X"));
    console.log($clt.printable("Regex tests passed"));
  }
  let compiled = compile_$x_("\\d+");
  check_equal(true, _$n_regex_$o_matches_$q_(compiled, "a4"));
  check_equal($clt._PCT_some("4"), _$n_regex_$o_find(compiled, "a4"));
  check_equal($clt._PCT_none(), _$n_regex_$o_find(compiled, "abc"));
  check_equal($clt._PCT_some(1), _$n_regex_$o_find_index(compiled, "a4"));
  check_equal($clt._$L_("1", "2"), _$n_regex_$o_find_all(compiled, "a1b2"));
  check_equal($clt._$L_("a", "b", ""), _$n_regex_$o_split(compiled, "a1b2"));
  check_equal("aXbX", _$n_regex_$o_replace_all(compiled, "a1b2", "X"));
  check_equal("\\d+", _$n_regex_$o_source(compiled));
  console.log($clt.printable("Compiled-regex-methods-passed"))

}



