
{} (:about "|Machine-generated snapshot. Do not edit directly — changes will be overwritten. Use `calcit query` to inspect and `calcit edit`/`calcit tree` to modify. Run `calcit docs agents --full` first. Manual edits must follow format and schema conventions, then run `calcit edit format`.") (:package |regex)
  :entries $ {}
    :default $ {} (:description |) (:init-fn 'regex.test/main!) (:mode :native) (:reload-fn 'regex.test/main!)
      :feature-policy $ {}
      :modules $ []
      :type-slots $ {}
  :files $ {}
    |regex.core $ %{} 'FileEntry
      :defs $ {}
        |Regex $ %{} 'CodeEntry (:doc "|Compiled regex constructor with RegexTrait methods attached.")
          :code $ quote
            def Regex $ impl-traits Regex0 RegexImpl
          :examples $ []
          :schema $ :: 'Dynamic
        |Regex0 $ %{} 'CodeEntry (:doc "|Nominal wrapper around an immutable compiled regex handle.")
          :code $ quote
            defstruct Regex0 $ :handle 'Dynamic
          :examples $ []
          :schema $ :: 'StructDef
        |RegexImpl $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defimpl RegexImpl RegexTrait
              .matches? $ fn (self text)
                re-matches text $ &struct:get self :handle
              .find $ fn (self text)
                re-find-option text $ &struct:get self :handle
              .find-index $ fn (self text)
                re-find-index-option text $ &struct:get self :handle
              .find-all $ fn (self text)
                re-find-all text $ &struct:get self :handle
              .split $ fn (self text)
                re-split text $ &struct:get self :handle
              .replace-all $ fn (self text replacement)
                re-replace-all text (&struct:get self :handle) replacement
              .source $ fn (self)
                re-source $ &struct:get self :handle
          :examples $ []
          :schema $ :: 'Impl
        |RegexTrait $ %{} 'CodeEntry (:doc "|Typed methods for reusable compiled regex patterns.")
          :code $ quote
            deftrait RegexTrait
              .matches? $ :: 'Fn
                {}
                  :args $ [] 'regex.core/Regex0 'String
                  :return 'Bool
              .find $ :: 'Fn
                {}
                  :args $ [] 'regex.core/Regex0 'String
                  :return $ :: 'Option 'String
              .find-index $ :: 'Fn
                {}
                  :args $ [] 'regex.core/Regex0 'String
                  :return $ :: 'Option 'Number
              .find-all $ :: 'Fn
                {}
                  :args $ [] 'regex.core/Regex0 'String
                  :return $ :: 'List 'String
              .split $ :: 'Fn
                {}
                  :args $ [] 'regex.core/Regex0 'String
                  :return $ :: 'List 'String
              .replace-all $ :: 'Fn
                {}
                  :args $ [] 'regex.core/Regex0 'String 'String
                  :return 'String
              .source $ :: 'Fn
                {}
                  :args $ [] 'regex.core/Regex0
                  :return 'String
          :examples $ []
          :schema $ :: 'Trait
        |compile $ %{} 'CodeEntry (:doc "|Compile a regex pattern into Result<Regex0, String> without raising on invalid syntax.")
          :code $ quote
            defn compile (pattern)
              tag-match
                &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_compile_result pattern
                (:ok handle)
                  %ok $ %{} Regex (:handle handle)
                (:err message) (%err message)
          :examples $ []
            quote $ assert |invalid-pattern-should-return-err
              result:err? $ compile |[
          :ffi $ {} (:backend :native) (:symbol |re_compile_result)
          :schema $ :: 'Fn
            {}
              :args $ [] 'String
              :return $ :: 'Result 'regex.core/Regex0 'String
          :tests $ []
            %{} 'TestEntry (:name |compiled-methods-preserve-option-semantics)
              :code $ quote
                do
                  assert |invalid-pattern-should-return-err $ result:err? (compile |[)
                  let
                      digits $ compile! |\d+
                      start $ compile! |^
                    assert= (%some |4) (.find digits |a4)
                    assert= (%none) (.find digits |abc)
                    assert= (%some |) (.find start |abc)
                    assert= (%some 1) (.find-index digits |a4)
                    assert= ([] |1 |2) (.find-all digits |a1b2)
                    assert= |aXbX $ .replace-all digits |a1b2 |X
                    assert= |\d+ $ .source digits
              :tags $ #{} :unit
        |compile! $ %{} 'CodeEntry (:doc "|Compile a regex pattern and raise its validation message on failure.")
          :code $ quote
            defn compile! (pattern)
              tag-match (compile pattern)
                (:ok value) value
                (:err message) (raise message)
          :examples $ []
            quote $ let
                pattern $ compile! |\d+
              assert= (%some |4) (.find pattern |a4)
          :schema $ :: 'Fn
            {} (:return 'regex.core/Regex0)
              :args $ [] 'String
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
        |re-find-index-option $ %{} 'CodeEntry (:doc "|Find the first match index as Option<Number> instead of using -1 as a sentinel.")
          :code $ quote
            defn re-find-index-option (text pattern)
              let
                  found $ &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_index_optional text pattern
                if (nil? found) (%none) (%some found)
          :examples $ []
          :ffi $ {} (:backend :native) (:symbol |re_find_index_optional)
          :schema $ :: 'Fn
            {}
              :args $ [] 'String 'Dynamic
              :return $ :: 'Option 'Number
        |re-find-option $ %{} 'CodeEntry (:doc "|Find the first match as Option<String>, preserving an empty match as Some empty-string.")
          :code $ quote
            defn re-find-option (text pattern)
              let
                  found $ &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_optional text pattern
                if (nil? found) (%none) (%some found)
          :examples $ []
          :ffi $ {} (:backend :native) (:symbol |re_find_optional)
          :schema $ :: 'Fn
            {}
              :args $ [] 'String 'Dynamic
              :return $ :: 'Option 'String
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
              tag-match
                &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_compile_result pattern
                (:ok handle) handle
                (:err message) (raise message)
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
        |re-source $ %{} 'CodeEntry (:doc "|Read the source string from a compiled regex pattern.")
          :code $ quote
            defn re-source (pattern)
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_source pattern
          :examples $ []
          :ffi $ {} (:backend :native) (:symbol |re_source)
          :schema $ :: 'Fn
            {} (:return 'String)
              :args $ [] 'Dynamic
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
              let
                  compiled $ compile! |\d+
                assert= true $ .matches? compiled |a4
                assert= (%some |4) (.find compiled |a4)
                assert= (%none) (.find compiled |abc)
                assert= (%some 1) (.find-index compiled |a4)
                assert= ([] |1 |2) (.find-all compiled |a1b2)
                assert= ([] |a |b |) (.split compiled |a1b2)
                assert= |aXbX $ .replace-all compiled |a1b2 |X
                assert= |\d+ $ .source compiled
                println |Compiled-regex-methods-passed
          :examples $ []
          :schema $ :: 'Fn
            {} (:return 'Unit)
              :args $ []
      :ns $ %{} 'NsEntry (:doc |)
        :code $ quote
          ns regex.test $ :require
            regex.core :refer $ re-matches re-find-index re-find re-find-all re-split re-replace-all re-pattern compile compile!
            regex.$meta :refer $ calcit-dirname calcit-filename
    |regex.util $ %{} 'FileEntry
      :defs $ {}
        |get-dylib-ext $ %{} 'CodeEntry (:doc |)
          :code $ quote
            defmacro get-dylib-ext () $ case-default (&get-os) |.so (:macos |.dylib) (:windows |.dll)
          :examples $ []
          :ffi $ {}
            :features $ #{} :js-ffi
          :schema $ :: 'Macro
            {}
              :capabilities $ #{} :platform-read
              :expansion $ :: 'Expr 'String
              :required $ []
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
