
{} (:about "|Machine-generated snapshot. Do not edit directly — changes will be overwritten. Use `cr query` to inspect and `cr edit`/`cr tree` to modify. Run `cr docs agents --full` first. Manual edits must follow format and schema conventions, then run `cr edit format`.") (:package |regex)
  :configs $ {} (:init-fn |regex.test/main!) (:reload-fn |regex.test/reload!) (:version |0.0.11)
    :modules $ []
  :entries $ {}
  :files $ {}
    |regex.core $ %{} :FileEntry
      :defs $ {}
        |re-drop $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn re-drop (pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_drop pattern
          :examples $ []
        |re-find $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn re-find (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find s pattern
          :examples $ []
        |re-find-all $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn re-find-all (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_all s pattern
          :examples $ []
        |re-find-index $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn re-find-index (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_index s pattern
          :examples $ []
        |re-matches $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn re-matches (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_matches s pattern
          :examples $ []
        |re-pattern $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn re-pattern (pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_pattern pattern
          :examples $ []
        |re-replace-all $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn re-replace-all (s pattern next)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_replace_all s pattern next
          :examples $ []
        |re-split $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn re-split (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_split s pattern
          :examples $ []
      :ns $ %{} :NsEntry (:doc |)
        :code $ quote
          ns regex.core $ :require
            regex.$meta :refer $ calcit-dirname
            regex.util :refer $ get-dylib-path
    |regex.test $ %{} :FileEntry
      :defs $ {}
        |main! $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn main! () (println "|%%%% test for regex") (println "|Test regular expression")
              assert= true $ re-matches |2 |\d
              assert= true $ re-matches |23 |\d+
              assert= false $ re-matches |a |\d
              assert= |4 $ re-find |a4 |\d
              assert= 1 $ re-find-index |a1 |\d
              assert= -1 $ re-find-index |aa |\d
              assert= ([] |1 |2 |3) (re-find-all |123 |\d)
              assert= ([] |123) (re-find-all |123 |\d+)
              assert= ([] |1 |2 |3) (re-find-all |1a2a3 |\d+)
              assert= ([] |1 |2 |34) (re-find-all |1a2a34 |\d+)
              assert= |1abXcX3 $ re-replace-all |1ab22c333 |\d{2} |X
              assert= ([] |1ab |c |3) (re-split |1ab22c333 |\d{2})
              println "|%%% test variable holding regex"
              let
                  pattern $ re-pattern |\d+
                println "|Pattern is:" pattern
                assert= true $ re-matches |2 pattern
                assert= true $ re-matches |23 pattern
                assert= false $ re-matches |qq pattern
                assert= |22 $ re-find |q22 pattern
                assert= ([] |1 |2 |3) (re-find-all |1q2q3 pattern)
                assert= |XabXcX $ re-replace-all |1ab22c333 pattern |X
          :examples $ []
      :ns $ %{} :NsEntry (:doc |)
        :code $ quote
          ns regex.test $ :require
            regex.core :refer $ re-matches re-find-index re-find re-find-all re-split re-replace-all re-pattern
            regex.$meta :refer $ calcit-dirname calcit-filename
    |regex.util $ %{} :FileEntry
      :defs $ {}
        |get-dylib-ext $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defmacro get-dylib-ext () $ case-default (&get-os) |.so (:macos |.dylib) (:windows |.dll)
          :examples $ []
        |get-dylib-path $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn get-dylib-path (p)
              str (or-current-path calcit-dirname) p $ get-dylib-ext
          :examples $ []
        |or-current-path $ %{} :CodeEntry (:doc |) (:schema :dynamic)
          :code $ quote
            defn or-current-path (p)
              if (blank? p) |. p
          :examples $ []
      :ns $ %{} :NsEntry (:doc |)
        :code $ quote
          ns regex.util $ :require
            regex.$meta :refer $ calcit-dirname calcit-filename
