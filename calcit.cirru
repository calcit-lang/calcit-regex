
{}
  :about "|Machine-generated snapshot. Do not edit directly — changes will be overwritten. Use `calcit query` to inspect and `calcit edit`/`calcit tree` to modify. Run `calcit docs agents --contract` before mutations; use `--full` for first orientation or changed contract digest. Manual edits must follow format and schema conventions, then run `calcit edit format`."
  :package |regex
  :entries $ {} $ :default
    {} (:description |) (:init-fn 'regex.test/main!) (:mode :native) (:reload-fn 'regex.test/main!) (:target :native)
      :feature-policy $ {}
      :modules $ []
      :type-slots $ {}
  :files $ {}
    'regex.core $ %{} 'FileEntry
      :defs $ {}
        'Regex $ %{} 'CodeEntry
          :doc "|Compiled regex constructor with RegexTrait methods attached."
          :code $ quote $ def Regex (impl-traits Regex0 RegexImpl)
          :examples $ []
          :schema $ quote StructDef
        'Regex0 $ %{} 'CodeEntry
          :doc "|Base struct definition for the public Regex type; attach RegexImpl through the Regex constructor."
          :code $ quote $ defstruct Regex (:handle 'Dynamic)
          :examples $ []
          :schema $ quote StructDef
        'RegexImpl $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defimpl RegexImpl RegexTrait
            .matches? $ fn (self text)
              hint-fn $ Fn regex.core/Regex String $ -> Bool
              re-matches text $ :handle self
            .find $ fn (self text)
              hint-fn $ Fn regex.core/Regex String $ -> (Option String)
              re-find-option text $ :handle self
            .find-index $ fn (self text)
              hint-fn $ Fn regex.core/Regex String $ -> (Option Number)
              re-find-index-option text $ :handle self
            .find-all $ fn (self text)
              hint-fn $ Fn regex.core/Regex String $ -> (List String)
              re-find-all text $ :handle self
            .split $ fn (self text)
              hint-fn $ Fn regex.core/Regex String $ -> (List String)
              re-split text $ :handle self
            .replace-all $ fn (self text replacement)
              hint-fn $ Fn regex.core/Regex String String $ -> String
              re-replace-all text (:handle self) replacement
            .source $ fn (self)
              hint-fn $ Fn regex.core/Regex $ -> String
              re-source $ :handle self
          :examples $ []
          :schema $ quote Impl
        'RegexTrait $ %{} 'CodeEntry
          :doc "|Typed methods for reusable compiled regex patterns."
          :code $ quote $ deftrait RegexTrait
            .matches? $ quote $ Fn regex.core/Regex String (-> Bool)
            .find $ quote $ Fn regex.core/Regex String
              -> $ Option String
            .find-index $ quote $ Fn regex.core/Regex String
              -> $ Option Number
            .find-all $ quote $ Fn regex.core/Regex String
              -> $ List String
            .split $ quote $ Fn regex.core/Regex String
              -> $ List String
            .replace-all $ quote $ Fn regex.core/Regex String String (-> String)
            .source $ quote $ Fn regex.core/Regex (-> String)
          :examples $ []
          :schema $ quote Trait
        'compile $ %{} 'CodeEntry
          :doc "|Compile a regex pattern into Result<Regex, String> without raising on invalid syntax."
          :code $ quote $ defn compile (pattern)
            match
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_compile_result pattern
              (:ok handle)
                Result :ok $ %{} Regex $ :handle handle
              (:err message)
                Result :err $ decode-map-as message 'String
          :examples $ [] $ quote
            assert |invalid-pattern-should-return-err $ .err? $ compile |[
          :ffi $ {} (:backend :native) (:invoke :sync) (:symbol |re_compile_result) (:transport :edn-buffer-v1)
          :schema $ quote $ Fn String
            -> $ Result regex.core/Regex String
            :features :js-ffi
          :tests $ [] $ %{} 'TestEntry (:name |compiled-methods-preserve-option-semantics)
            :code $ quote $ do
              assert |invalid-pattern-should-return-err $ .err? $ compile |[
              let
                  digits $ compile! |\d+
                  start $ compile! |^
                assert |find-digit $ &= |4 $ .unwrap (.find digits |a4)
                assert |missing-digit $ .none? $ .find digits |abc
                assert |empty-start-match $ &= | $ .unwrap (.find start |abc)
                assert |find-index $ &= 1 $ .unwrap (.find-index digits |a4)
                assert |find-all $ &= ([] |1 |2) (.find-all digits |a1b2)
                assert |replace-all $ &= |aXbX $ .replace-all digits |a1b2 |X
                assert |source $ &= |\d+ $ .source digits
        'compile! $ %{} 'CodeEntry
          :doc "|Compile a regex pattern and raise its validation message on failure."
          :code $ quote $ defn compile! (pattern)
            match (compile pattern)
              (:ok value) value
              (:err message) (raise message)
          :examples $ [] $ quote
            let
                pattern $ compile! |\d+
              assert |compiled-pattern-finds-digit $ &= (Option :some |4) (.find pattern |a4)
          :schema $ quote $ Fn String (-> regex.core/Regex)
        're-drop $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn re-drop (pattern)
            &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_drop pattern
            , &unit
          :examples $ []
          :schema $ quote $ Fn Dynamic (-> Unit)
        're-find $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn re-find (s pattern)
            decode-map-as
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find s pattern
              , 'String
          :examples $ []
          :schema $ quote $ Fn String P (-> String) (:generics P)
        're-find-all $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn re-find-all (s pattern)
            decode-map-as
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_all s pattern
              :: 'List 'String
          :examples $ []
          :schema $ quote $ Fn String P
            -> $ List String
            :generics P
        're-find-index $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn re-find-index (s pattern)
            decode-map-as
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_index s pattern
              , 'Number
          :examples $ []
          :schema $ quote $ Fn String P (-> Number) (:generics P)
        're-find-index-option $ %{} 'CodeEntry
          :doc "|Find the first match index as Option<Number> instead of using -1 as a sentinel."
          :code $ quote $ defn re-find-index-option (text pattern)
            let
                found $ &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_index_optional text pattern
              if (nil? found) (Option :none)
                Option :some $ decode-map-as found 'Number
          :examples $ []
          :ffi $ {} (:backend :native) (:invoke :sync) (:symbol |re_find_index_optional) (:transport :edn-buffer-v1)
          :schema $ quote $ Fn String P
            -> $ Option Number
            :generics P
            :features :js-ffi
        're-find-option $ %{} 'CodeEntry
          :doc "|Find the first match as Option<String>, preserving an empty match as Some empty-string."
          :code $ quote $ defn re-find-option (text pattern)
            let
                found $ &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_find_optional text pattern
              if (nil? found) (Option :none)
                Option :some $ decode-map-as found 'String
          :examples $ []
          :ffi $ {} (:backend :native) (:invoke :sync) (:symbol |re_find_optional) (:transport :edn-buffer-v1)
          :schema $ quote $ Fn String P
            -> $ Option String
            :generics P
            :features :js-ffi
        're-matches $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn re-matches (s pattern)
            decode-map-as
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_matches s pattern
              , 'Bool
          :examples $ []
          :schema $ quote $ Fn String P (-> Bool) (:generics P)
        're-pattern $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn re-pattern (pattern)
            match
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_compile_result pattern
              (:ok handle) handle
              (:err message) (raise message)
          :examples $ []
          :schema $ quote $ Fn String (-> Dynamic)
        're-replace-all $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn re-replace-all (s pattern next)
            decode-map-as
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_replace_all s pattern next
              , 'String
          :examples $ []
          :schema $ quote $ Fn String P String (-> String) (:generics P)
        're-source $ %{} 'CodeEntry
          :doc "|Read the source string from a compiled regex pattern."
          :code $ quote $ defn re-source (pattern)
            decode-map-as
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_source pattern
              , 'String
          :examples $ []
          :ffi $ {} (:backend :native) (:invoke :sync) (:symbol |re_source) (:transport :edn-buffer-v1)
          :schema $ quote $ Fn Dynamic (-> String)
        're-split $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn re-split (s pattern)
            decode-map-as
              &call-dylib-edn (get-dylib-path |/dylibs/libcalcit_regex) |re_split s pattern
              :: 'List 'String
          :examples $ []
          :schema $ quote $ Fn String P
            -> $ List String
            :generics P
      :ns $ %{} 'NsEntry (:doc |)
        :code $ quote $ ns regex.core
          :require
            regex.$meta :refer $ calcit-dirname
            regex.util :refer $ get-dylib-path
    'regex.test $ %{} 'FileEntry
      :defs $ {}
        'check-equal $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn check-equal (expected actual)
            assert |values-should-equal $ &= expected actual
          :examples $ []
          :schema $ quote $ Fn T T (-> Unit) (:generics T)
        'main! $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn main! () (println "|%%%% test for regex") (println "|Test regular expression")
            check-equal true $ re-matches |2 |\d
            check-equal true $ re-matches |23 |\d+
            check-equal false $ re-matches |a |\d
            check-equal |4 $ re-find |a4 |\d
            check-equal 1 $ re-find-index |a1 |\d
            check-equal -1 $ re-find-index |aa |\d
            check-equal ([] |1 |2 |3) (re-find-all |123 |\d)
            check-equal ([] |123) (re-find-all |123 |\d+)
            check-equal ([] |1 |2 |3) (re-find-all |1a2a3 |\d+)
            check-equal ([] |1 |2 |34) (re-find-all |1a2a34 |\d+)
            check-equal |1abXcX3 $ re-replace-all |1ab22c333 |\d{2} |X
            check-equal ([] |1ab |c |3) (re-split |1ab22c333 |\d{2})
            println "|%%% test variable holding regex"
            let
                pattern $ re-pattern |\d+
              println "|Pattern is:" pattern
              check-equal true $ re-matches |2 pattern
              check-equal true $ re-matches |23 pattern
              check-equal false $ re-matches |qq pattern
              check-equal |22 $ re-find |q22 pattern
              check-equal ([] |1 |2 |3) (re-find-all |1q2q3 pattern)
              check-equal |XabXcX $ re-replace-all |1ab22c333 pattern |X
              println "|Regex tests passed"
            let
                compiled $ compile! |\d+
              check-equal true $ .matches? compiled |a4
              check-equal (Option :some |4) (.find compiled |a4)
              check-equal (Option :none) (.find compiled |abc)
              check-equal (Option :some 1) (.find-index compiled |a4)
              check-equal ([] |1 |2) (.find-all compiled |a1b2)
              check-equal ([] |a |b |) (.split compiled |a1b2)
              check-equal |aXbX $ .replace-all compiled |a1b2 |X
              check-equal |\d+ $ .source compiled
              println |Compiled-regex-methods-passed
            , &unit
          :examples $ []
          :schema $ quote $ Fn (-> Unit)
      :ns $ %{} 'NsEntry (:doc |)
        :code $ quote $ ns regex.test
          :require
            regex.core :refer $ re-matches re-find-index re-find re-find-all re-split re-replace-all re-pattern compile compile!
            regex.$meta :refer $ calcit-dirname calcit-filename
    'regex.util $ %{} 'FileEntry
      :defs $ {}
        'get-dylib-ext $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defmacro get-dylib-ext ()
            match (&get-os) (:macos |.dylib) (:windows |.dll) (_ |.so)
          :examples $ []
          :ffi $ {} $ :features (#{} :js-ffi)
          :schema $ quote $ Macro
            -> $ Expr String
            :capabilities :platform-read
        'get-dylib-path $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn get-dylib-path (p)
            str (or-current-path calcit-dirname) p $ get-dylib-ext
          :examples $ []
          :ffi $ {} $ :features (#{} :js-ffi)
          :schema $ quote $ Fn String (-> String)
        'or-current-path $ %{} 'CodeEntry (:doc |)
          :code $ quote $ defn or-current-path (p)
            if (blank? p) |. p
          :examples $ []
          :ffi $ {} $ :features (#{} :js-ffi)
          :schema $ quote $ Fn String (-> String)
      :ns $ %{} 'NsEntry (:doc |)
        :code $ quote $ ns regex.util
          :require $ regex.$meta :refer $ calcit-dirname calcit-filename
