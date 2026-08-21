
{} (:about "|Machine-generated snapshot. Do not edit directly — changes will be overwritten. Use `cr query` to inspect and `cr edit`/`cr tree` to modify. Run `cr docs agents --full` first. Manual edits must follow format and schema conventions, then run `cr edit format`.") (:package |regex)
  :entries $ {}
    :default $ {} (:description |) (:init-fn 'regex.test/main!) (:mode :native) (:reload-fn 'regex.test/main!)
      :feature-policy $ {}
      :modules $ []
      :type-slots $ {}
  :files $ {}
    |regex.core $ %{} 'FileEntry
      :defs $ {}
        |re-drop $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn re-drop (pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_drop pattern
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {} (:return 'Unit)
              :args $ [] 'Dynamic
        |re-find $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn re-find (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find s pattern
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {} (:return 'String)
              :args $ [] 'String 'Dynamic
        |re-find-all $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn re-find-all (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_all s pattern
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {}
              :args $ [] 'String 'Dynamic
              :return $ :: 'List 'String
        |re-find-index $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn re-find-index (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_index s pattern
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {} (:return 'Number)
              :args $ [] 'String 'Dynamic
        |re-matches $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn re-matches (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_matches s pattern
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {} (:return 'Bool)
              :args $ [] 'String 'Dynamic
        |re-pattern $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn re-pattern (pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_pattern pattern
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {} (:return 'Dynamic)
              :args $ [] 'String
        |re-replace-all $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn re-replace-all (s pattern next)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_replace_all s pattern next
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {} (:return 'String)
              :args $ [] 'String 'Dynamic 'String
        |re-split $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn re-split (s pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_split s pattern
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {}
              :args $ [] 'String 'Dynamic
              :return $ :: 'List 'String
      :ns $ %{} 'NsEntry (:doc |)
        :code $ quote
          ns regex.core $ :require
            regex.$meta :refer $ calcit-dirname
            regex.util :refer $ get-dylib-path
    |regex.test $ %{} 'FileEntry
      :defs $ {}
        |main! $ %{} 'CodeEntry (:doc |)
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
                println "|Regex tests passed"
          :examples $ []
          :schema $ :: 'Fn
            {} (:return 'Unit)
              :args $ []
      :ns $ %{} 'NsEntry (:doc |)
        :code $ quote
          ns regex.test $ :require
            regex.core :refer $ re-matches re-find-index re-find re-find-all re-split re-replace-all re-pattern
            regex.$meta :refer $ calcit-dirname calcit-filename
    |regex.util $ %{} 'FileEntry
      :defs $ {}
        |get-dylib-ext $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defmacro get-dylib-ext () $ case-default (&get-os) |.so (:macos |.dylib) (:windows |.dll)
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Dynamic
        |get-dylib-path $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn get-dylib-path (p)
              str (or-current-path calcit-dirname) p $ get-dylib-ext
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {} (:return 'String)
              :args $ [] 'String
        |or-current-path $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defn or-current-path (p)
              if (blank? p) |. p
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Fn
            {} (:return 'String)
              :args $ [] 'String
      :ns $ %{} 'NsEntry (:doc |)
        :code $ quote
          ns regex.util $ :require
            regex.$meta :refer $ calcit-dirname calcit-filename
