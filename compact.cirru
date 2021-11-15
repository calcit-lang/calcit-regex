
{} (:package |regex)
  :configs $ {} (:init-fn |regex.test/main!) (:reload-fn |regex.test/reload!)
    :modules $ []
    :version |0.0.1
  :entries $ {}
  :files $ {}
    |regex.core $ {}
      :ns $ quote
        ns regex.core $ :require
          regex.$meta :refer $ calcit-dirname
          regex.util :refer $ get-dylib-path
      :defs $ {}
        |re-find-all $ quote
          defn re-find-all (s pattern)
            &call-dylib-edn (get-dylib-path "\"/dylibs/libcalcit_std") "\"re_find_all" s pattern
        |re-matches $ quote
          defn re-matches (s pattern)
            &call-dylib-edn (get-dylib-path "\"/dylibs/libcalcit_std") "\"re_matches" s pattern
        |re-find-index $ quote
          defn re-find-index (s pattern)
            &call-dylib-edn (get-dylib-path "\"/dylibs/libcalcit_std") "\"re_find_index" s pattern
        |re-find $ quote
          defn re-find (s pattern)
            &call-dylib-edn (get-dylib-path "\"/dylibs/libcalcit_std") "\"re_find" s pattern
    |regex.util $ {}
      :ns $ quote
        ns regex.util $ :require
          regex.$meta :refer $ calcit-dirname calcit-filename
      :defs $ {}
        |get-dylib-ext $ quote
          defmacro get-dylib-ext () $ case-default (&get-os) "\".so" (:macos "\".dylib") (:windows "\".dll")
        |get-dylib-path $ quote
          defn get-dylib-path (p)
            str (or-current-path calcit-dirname) p $ get-dylib-ext
        |or-current-path $ quote
          defn or-current-path (p)
            if (blank? p) "\"." p
    |regex.test $ {}
      :ns $ quote
        ns regex.test $ :require
          regex.core :refer $ re-matches re-find-index re-find re-find-all
          regex.$meta :refer $ calcit-dirname calcit-filename
      :defs $ {}
        |main! $ quote
          defn main! () (println "\"%%%% test for regex") (println "|Test regular expression")
            assert= true $ re-matches |2 |\d
            assert= true $ re-matches |23 |\d+
            assert= false $ re-matches |a |\d
            assert= "\"4" $ re-find |a4 |\d
            assert= 1 $ re-find-index |a1 |\d
            assert= -1 $ re-find-index |aa |\d
            assert= ([] |1 |2 |3) (re-find-all |123 |\d)
            assert= ([] |123) (re-find-all |123 |\d+)
            assert= ([] |1 |2 |3) (re-find-all |1a2a3 |\d+)
            assert= ([] |1 |2 |34) (re-find-all |1a2a34 |\d+)
