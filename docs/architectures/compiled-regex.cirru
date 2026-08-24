
{}
  :schema-version 1
  :feature 'compiled-regex
  :doc "|Expose reusable compiled patterns as a nominal, method-oriented API with typed compile errors and optional match results."
  :roots $ #{} 'regex.core/compile 'regex.core/compile!
  :definitions $ {}
    'regex.core/Regex0 $ {}
      :mode :ensure
      :kind :data
      :doc "|Nominal wrapper around an immutable compiled regex handle."
      :schema $ :: 'Dynamic
      :code $ quote (defstruct Regex0 (:handle 'Dynamic))
    'regex.core/compile $ {}
      :mode :ensure
      :kind :fn
      :doc "|Compile a regex pattern into Result<Regex0, String> without raising on invalid syntax."
      :params $ [] 'pattern
      :schema $ :: :fn
        {}
          :args $ [] 'String
          :return $ :: 'Result 'regex.core/Regex0 'String
    'regex.core/compile! $ {}
      :mode :ensure
      :kind :fn
      :doc "|Compile a regex pattern and raise its validation message on failure."
      :params $ [] 'pattern
      :schema $ :: :fn
        {}
          :args $ [] 'String
          :return 'regex.core/Regex0
  :edges $ #{}
    :: :type 'regex.core/compile 'regex.core/Regex0
    :: :type 'regex.core/compile! 'regex.core/Regex0
    :: :call 'regex.core/compile! 'regex.core/compile
