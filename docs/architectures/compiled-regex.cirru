
{}
  :schema-version 1
  :feature 'compiled-regex
  :doc "|Expose reusable compiled patterns as a nominal, method-oriented API with typed compile errors and optional match results."
  :roots $ #{} 'regex.core/compile 'regex.core/compile!
  :definitions $ {}
    'regex.core/Regex0 $ {}
      :mode :ensure
      :kind :data
      :doc "|Base struct definition for the public Regex type."
      :schema $ :: 'StructDef
      :code $ quote (defstruct Regex (:handle 'Dynamic))
    'regex.core/compile $ {}
      :mode :ensure
      :kind :fn
      :doc "|Compile a regex pattern into Result<Regex, String> without raising on invalid syntax."
      :params $ [] 'pattern
      :schema $ :: :fn
        {}
          :args $ [] 'String
          :return $ :: 'Result 'regex.core/Regex 'String
    'regex.core/compile! $ {}
      :mode :ensure
      :kind :fn
      :doc "|Compile a regex pattern and raise its validation message on failure."
      :params $ [] 'pattern
      :schema $ :: :fn
        {}
          :args $ [] 'String
          :return 'regex.core/Regex
  :edges $ #{}
    :: :type 'regex.core/compile 'regex.core/Regex
    :: :type 'regex.core/compile! 'regex.core/Regex
    :: :call 'regex.core/compile! 'regex.core/compile
