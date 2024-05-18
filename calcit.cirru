
{} (:package |regex)
  :configs $ {} (:init-fn |regex.test/main!) (:port 6001) (:reload-fn |regex.test/reload!) (:version |0.0.5-a1)
    :modules $ []
  :entries $ {}
  :files $ {}
    |regex.core $ %{} :FileEntry
      :defs $ {}
        |re-drop $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1715964831711) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1715964831711) (:by |u0) (:text |defn)
              |b $ %{} :Leaf (:at 1715964831711) (:by |u0) (:text |re-drop)
              |h $ %{} :Expr (:at 1715964838668) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1715964838668) (:by |u0) (:text |pattern)
              |l $ %{} :Expr (:at 1715964838668) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1715964838668) (:by |u0) (:text |&call-dylib-edn)
                  |b $ %{} :Expr (:at 1715964838668) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1715964838668) (:by |u0) (:text |get-dylib-path)
                      |b $ %{} :Leaf (:at 1715964838668) (:by |u0) (:text "|\"/dylibs/libcalcit_regex")
                  |h $ %{} :Leaf (:at 1715964846736) (:by |u0) (:text "|\"re_drop")
                  |l $ %{} :Leaf (:at 1715964838668) (:by |u0) (:text |pattern)
        |re-find $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1636960151241) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |defn)
              |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |re-find)
              |r $ %{} :Expr (:at 1636960151241) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |s)
                  |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |pattern)
              |v $ %{} :Expr (:at 1636960151241) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |&call-dylib-edn)
                  |j $ %{} :Expr (:at 1636960151241) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |get-dylib-path)
                      |j $ %{} :Leaf (:at 1715883726895) (:by |u0) (:text "|\"/dylibs/libcalcit_regex")
                  |r $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text "|\"re_find")
                  |v $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |s)
                  |x $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |pattern)
        |re-find-all $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1636960151241) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |defn)
              |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |re-find-all)
              |r $ %{} :Expr (:at 1636960151241) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |s)
                  |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |pattern)
              |v $ %{} :Expr (:at 1636960151241) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |&call-dylib-edn)
                  |j $ %{} :Expr (:at 1636960151241) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |get-dylib-path)
                      |j $ %{} :Leaf (:at 1715883745892) (:by |u0) (:text "|\"/dylibs/libcalcit_regex")
                  |r $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text "|\"re_find_all")
                  |v $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |s)
                  |x $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |pattern)
        |re-find-index $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1636960151241) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |defn)
              |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |re-find-index)
              |r $ %{} :Expr (:at 1636960151241) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |s)
                  |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |pattern)
              |v $ %{} :Expr (:at 1636960151241) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |&call-dylib-edn)
                  |j $ %{} :Expr (:at 1636960151241) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |get-dylib-path)
                      |j $ %{} :Leaf (:at 1715883751340) (:by |u0) (:text "|\"/dylibs/libcalcit_regex")
                  |r $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text "|\"re_find_index")
                  |v $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |s)
                  |x $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |pattern)
        |re-matches $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1636960151241) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |defn)
              |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |re-matches)
              |r $ %{} :Expr (:at 1636960151241) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |s)
                  |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |pattern)
              |v $ %{} :Expr (:at 1636960151241) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |&call-dylib-edn)
                  |j $ %{} :Expr (:at 1636960151241) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |get-dylib-path)
                      |j $ %{} :Leaf (:at 1715883754761) (:by |u0) (:text "|\"/dylibs/libcalcit_regex")
                  |r $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text "|\"re_matches")
                  |v $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |s)
                  |x $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |pattern)
        |re-pattern $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1715795933947) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1715795933947) (:by |u0) (:text |defn)
              |b $ %{} :Leaf (:at 1715795933947) (:by |u0) (:text |re-pattern)
              |h $ %{} :Expr (:at 1715795940312) (:by |u0)
                :data $ {}
                  |b $ %{} :Leaf (:at 1715795940312) (:by |u0) (:text |pattern)
              |l $ %{} :Expr (:at 1715795940312) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1715795940312) (:by |u0) (:text |&call-dylib-edn)
                  |b $ %{} :Expr (:at 1715795940312) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1715795940312) (:by |u0) (:text |get-dylib-path)
                      |b $ %{} :Leaf (:at 1715883759286) (:by |u0) (:text "|\"/dylibs/libcalcit_regex")
                  |h $ %{} :Leaf (:at 1715795950203) (:by |u0) (:text "|\"re_pattern")
                  |o $ %{} :Leaf (:at 1715795940312) (:by |u0) (:text |pattern)
        |re-replace-all $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1637157516835) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1637157516835) (:by |u0) (:text |defn)
              |j $ %{} :Leaf (:at 1637157516835) (:by |u0) (:text |re-replace-all)
              |r $ %{} :Expr (:at 1637157540472) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1637157540472) (:by |u0) (:text |s)
                  |j $ %{} :Leaf (:at 1637157540472) (:by |u0) (:text |pattern)
                  |r $ %{} :Leaf (:at 1637157547063) (:by |u0) (:text |next)
              |v $ %{} :Expr (:at 1637157540472) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1637157540472) (:by |u0) (:text |&call-dylib-edn)
                  |j $ %{} :Expr (:at 1637157540472) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1637157540472) (:by |u0) (:text |get-dylib-path)
                      |j $ %{} :Leaf (:at 1715883763269) (:by |u0) (:text "|\"/dylibs/libcalcit_regex")
                  |r $ %{} :Leaf (:at 1637157553738) (:by |u0) (:text "|\"re_replace_all")
                  |v $ %{} :Leaf (:at 1637157540472) (:by |u0) (:text |s)
                  |x $ %{} :Leaf (:at 1637157540472) (:by |u0) (:text |pattern)
                  |y $ %{} :Leaf (:at 1637157556670) (:by |u0) (:text |next)
        |re-split $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1637157509604) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1637157509604) (:by |u0) (:text |defn)
              |j $ %{} :Leaf (:at 1637157509604) (:by |u0) (:text |re-split)
              |r $ %{} :Expr (:at 1637157527168) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1637157527168) (:by |u0) (:text |s)
                  |j $ %{} :Leaf (:at 1637157527168) (:by |u0) (:text |pattern)
              |v $ %{} :Expr (:at 1637157527168) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1637157527168) (:by |u0) (:text |&call-dylib-edn)
                  |j $ %{} :Expr (:at 1637157527168) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1637157527168) (:by |u0) (:text |get-dylib-path)
                      |j $ %{} :Leaf (:at 1715883766379) (:by |u0) (:text "|\"/dylibs/libcalcit_regex")
                  |r $ %{} :Leaf (:at 1637157535118) (:by |u0) (:text "|\"re_split")
                  |v $ %{} :Leaf (:at 1637157527168) (:by |u0) (:text |s)
                  |x $ %{} :Leaf (:at 1637157527168) (:by |u0) (:text |pattern)
      :ns $ %{} :CodeEntry (:doc |)
        :code $ %{} :Expr (:at 1636960151241) (:by |u0)
          :data $ {}
            |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |ns)
            |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |regex.core)
            |r $ %{} :Expr (:at 1636960151241) (:by |u0)
              :data $ {}
                |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |:require)
                |j $ %{} :Expr (:at 1636960151241) (:by |u0)
                  :data $ {}
                    |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |regex.$meta)
                    |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |:refer)
                    |r $ %{} :Expr (:at 1636960151241) (:by |u0)
                      :data $ {}
                        |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |calcit-dirname)
                |r $ %{} :Expr (:at 1636960151241) (:by |u0)
                  :data $ {}
                    |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |regex.util)
                    |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |:refer)
                    |r $ %{} :Expr (:at 1636960151241) (:by |u0)
                      :data $ {}
                        |T $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |get-dylib-path)
    |regex.test $ %{} :FileEntry
      :defs $ {}
        |main! $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1636960219938) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |defn)
              |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |main!)
              |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
              |v $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |println)
                  |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text "|\"%%%% test for regex")
              |x $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |println)
                  |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text "||Test regular expression")
              |y $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |true)
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-matches)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||2)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d)
              |yT $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |true)
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-matches)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||23)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d+)
              |yj $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |false)
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-matches)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||a)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d)
              |yr $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text "|\"4")
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||a4)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d)
              |yv $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |1)
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find-index)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||a1)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d)
              |yx $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |-1)
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find-index)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||aa)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d)
              |yy $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |[])
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||1)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||2)
                      |v $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||3)
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find-all)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||123)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d)
              |yyT $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |[])
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||123)
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find-all)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||123)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d+)
              |yyj $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |[])
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||1)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||2)
                      |v $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||3)
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find-all)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||1a2a3)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d+)
              |yyr $ %{} :Expr (:at 1636960219938) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |assert=)
                  |j $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |[])
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||1)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||2)
                      |v $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||34)
                  |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find-all)
                      |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||1a2a34)
                      |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text ||\d+)
              |yyv $ %{} :Expr (:at 1637157564769) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1637157566683) (:by |u0) (:text |assert=)
                  |j $ %{} :Leaf (:at 1637157612595) (:by |u0) (:text ||1abXcX3)
                  |r $ %{} :Expr (:at 1637157570399) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1637157576826) (:by |u0) (:text |re-replace-all)
                      |j $ %{} :Leaf (:at 1637157591536) (:by |u0) (:text ||1ab22c333)
                      |r $ %{} :Leaf (:at 1637157596985) (:by |u0) (:text ||\d{2})
                      |v $ %{} :Leaf (:at 1637157603611) (:by |u0) (:text "|\"X")
              |yyx $ %{} :Expr (:at 1637157564769) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1637157566683) (:by |u0) (:text |assert=)
                  |f $ %{} :Expr (:at 1637157629847) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1637157630274) (:by |u0) (:text |[])
                      |j $ %{} :Leaf (:at 1637157635843) (:by |u0) (:text "|\"1ab")
                      |r $ %{} :Leaf (:at 1637157639002) (:by |u0) (:text "|\"c")
                      |v $ %{} :Leaf (:at 1637157640155) (:by |u0) (:text "|\"3")
                  |r $ %{} :Expr (:at 1637157570399) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1637157620368) (:by |u0) (:text |re-split)
                      |j $ %{} :Leaf (:at 1637157591536) (:by |u0) (:text ||1ab22c333)
                      |r $ %{} :Leaf (:at 1637157596985) (:by |u0) (:text ||\d{2})
              |yz $ %{} :Expr (:at 1715796182324) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1715796183478) (:by |u0) (:text |println)
                  |b $ %{} :Leaf (:at 1715796196505) (:by |u0) (:text "|\"%%% test variable holding regex")
              |z $ %{} :Expr (:at 1715795960911) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1715795963731) (:by |u0) (:text |let)
                  |b $ %{} :Expr (:at 1715795964022) (:by |u0)
                    :data $ {}
                      |T $ %{} :Expr (:at 1715795964146) (:by |u0)
                        :data $ {}
                          |T $ %{} :Leaf (:at 1715795966487) (:by |u0) (:text |pattern)
                          |b $ %{} :Expr (:at 1715795969557) (:by |u0)
                            :data $ {}
                              |T $ %{} :Leaf (:at 1715795972580) (:by |u0) (:text |re-pattern)
                              |b $ %{} :Leaf (:at 1715795974817) (:by |u0) (:text "|\"\\d+")
                  |e $ %{} :Expr (:at 1715797292331) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1715797294062) (:by |u0) (:text |println)
                      |X $ %{} :Leaf (:at 1715797301485) (:by |u0) (:text "|\"Pattern is:")
                      |b $ %{} :Leaf (:at 1715797296817) (:by |u0) (:text |pattern)
                  |h $ %{} :Expr (:at 1715796117788) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1715796117788) (:by |u0) (:text |assert=)
                      |b $ %{} :Leaf (:at 1715796117788) (:by |u0) (:text |true)
                      |h $ %{} :Expr (:at 1715796117788) (:by |u0)
                        :data $ {}
                          |T $ %{} :Leaf (:at 1715796117788) (:by |u0) (:text |re-matches)
                          |b $ %{} :Leaf (:at 1715796117788) (:by |u0) (:text ||2)
                          |h $ %{} :Leaf (:at 1715796124899) (:by |u0) (:text |pattern)
                  |j $ %{} :Expr (:at 1715796117788) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1715796117788) (:by |u0) (:text |assert=)
                      |b $ %{} :Leaf (:at 1715796117788) (:by |u0) (:text |true)
                      |h $ %{} :Expr (:at 1715796117788) (:by |u0)
                        :data $ {}
                          |T $ %{} :Leaf (:at 1715796117788) (:by |u0) (:text |re-matches)
                          |b $ %{} :Leaf (:at 1715796136285) (:by |u0) (:text ||23)
                          |h $ %{} :Leaf (:at 1715796124899) (:by |u0) (:text |pattern)
                  |l $ %{} :Expr (:at 1715796117788) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1715796117788) (:by |u0) (:text |assert=)
                      |b $ %{} :Leaf (:at 1715796171969) (:by |u0) (:text |false)
                      |h $ %{} :Expr (:at 1715796117788) (:by |u0)
                        :data $ {}
                          |T $ %{} :Leaf (:at 1715796117788) (:by |u0) (:text |re-matches)
                          |b $ %{} :Leaf (:at 1715796130255) (:by |u0) (:text ||qq)
                          |h $ %{} :Leaf (:at 1715796124899) (:by |u0) (:text |pattern)
                  |o $ %{} :Expr (:at 1715796202090) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1715796204524) (:by |u0) (:text |assert=)
                      |b $ %{} :Leaf (:at 1715796236610) (:by |u0) (:text "|\"22")
                      |h $ %{} :Expr (:at 1715796212276) (:by |u0)
                        :data $ {}
                          |T $ %{} :Leaf (:at 1715796226879) (:by |u0) (:text |re-find)
                          |b $ %{} :Leaf (:at 1715796215253) (:by |u0) (:text ||q22)
                          |h $ %{} :Leaf (:at 1715796212276) (:by |u0) (:text |pattern)
                  |q $ %{} :Expr (:at 1715796244650) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1715796244650) (:by |u0) (:text |assert=)
                      |b $ %{} :Expr (:at 1715796244650) (:by |u0)
                        :data $ {}
                          |T $ %{} :Leaf (:at 1715796244650) (:by |u0) (:text |[])
                          |b $ %{} :Leaf (:at 1715796244650) (:by |u0) (:text ||1)
                          |h $ %{} :Leaf (:at 1715796244650) (:by |u0) (:text ||2)
                          |l $ %{} :Leaf (:at 1715796244650) (:by |u0) (:text ||3)
                      |h $ %{} :Expr (:at 1715796244650) (:by |u0)
                        :data $ {}
                          |T $ %{} :Leaf (:at 1715796244650) (:by |u0) (:text |re-find-all)
                          |b $ %{} :Leaf (:at 1715796249538) (:by |u0) (:text ||1q2q3)
                          |h $ %{} :Leaf (:at 1715796253498) (:by |u0) (:text |pattern)
                  |s $ %{} :Expr (:at 1715796262291) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1715796262291) (:by |u0) (:text |assert=)
                      |b $ %{} :Leaf (:at 1715796290165) (:by |u0) (:text ||XabXcX)
                      |h $ %{} :Expr (:at 1715796262291) (:by |u0)
                        :data $ {}
                          |T $ %{} :Leaf (:at 1715796262291) (:by |u0) (:text |re-replace-all)
                          |b $ %{} :Leaf (:at 1715796262291) (:by |u0) (:text ||1ab22c333)
                          |h $ %{} :Leaf (:at 1715796267870) (:by |u0) (:text |pattern)
                          |l $ %{} :Leaf (:at 1715796262291) (:by |u0) (:text "|\"X")
      :ns $ %{} :CodeEntry (:doc |)
        :code $ %{} :Expr (:at 1636960219938) (:by |u0)
          :data $ {}
            |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |ns)
            |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |regex.test)
            |r $ %{} :Expr (:at 1636960219938) (:by |u0)
              :data $ {}
                |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |:require)
                |j $ %{} :Expr (:at 1636960219938) (:by |u0)
                  :data $ {}
                    |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |regex.core)
                    |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |:refer)
                    |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                      :data $ {}
                        |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-matches)
                        |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find-index)
                        |r $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find)
                        |v $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |re-find-all)
                        |x $ %{} :Leaf (:at 1637157659783) (:by |u0) (:text |re-split)
                        |y $ %{} :Leaf (:at 1637157663541) (:by |u0) (:text |re-replace-all)
                        |z $ %{} :Leaf (:at 1715795979178) (:by |u0) (:text |re-pattern)
                |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                  :data $ {}
                    |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |regex.$meta)
                    |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |:refer)
                    |r $ %{} :Expr (:at 1636960219938) (:by |u0)
                      :data $ {}
                        |T $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |calcit-dirname)
                        |j $ %{} :Leaf (:at 1636960219938) (:by |u0) (:text |calcit-filename)
    |regex.util $ %{} :FileEntry
      :defs $ {}
        |get-dylib-ext $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1630231398718) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1630231418304) (:by |u0) (:text |defmacro)
              |j $ %{} :Leaf (:at 1633181058353) (:by |u0) (:text |get-dylib-ext)
              |r $ %{} :Expr (:at 1630231398718) (:by |u0)
                :data $ {}
              |v $ %{} :Expr (:at 1630231403270) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1630231423910) (:by |u0) (:text |case-default)
                  |b $ %{} :Expr (:at 1630231429893) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1630231433951) (:by |u0) (:text |&get-os)
                  |j $ %{} :Leaf (:at 1630231427453) (:by |u0) (:text "|\".so")
                  |r $ %{} :Expr (:at 1630231437150) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1630231439152) (:by |u0) (:text |:macos)
                      |j $ %{} :Leaf (:at 1630231447585) (:by |u0) (:text "|\".dylib")
                  |v $ %{} :Expr (:at 1630231448478) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1630231449901) (:by |u0) (:text |:windows)
                      |j $ %{} :Leaf (:at 1630231461388) (:by |u0) (:text "|\".dll")
        |get-dylib-path $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1634804142034) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1634804142034) (:by |u0) (:text |defn)
              |j $ %{} :Leaf (:at 1634804142034) (:by |u0) (:text |get-dylib-path)
              |n $ %{} :Expr (:at 1634804146574) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1634804230294) (:by |u0) (:text |p)
              |r $ %{} :Expr (:at 1634804145483) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1634804145483) (:by |u0) (:text |str)
                  |j $ %{} :Expr (:at 1634804145483) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1634804145483) (:by |u0) (:text |or-current-path)
                      |j $ %{} :Leaf (:at 1634804145483) (:by |u0) (:text |calcit-dirname)
                  |r $ %{} :Leaf (:at 1634804157377) (:by |u0) (:text |p)
                  |v $ %{} :Expr (:at 1634804145483) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1634804145483) (:by |u0) (:text |get-dylib-ext)
        |or-current-path $ %{} :CodeEntry (:doc |)
          :code $ %{} :Expr (:at 1630245582276) (:by |u0)
            :data $ {}
              |T $ %{} :Leaf (:at 1630245583936) (:by |u0) (:text |defn)
              |j $ %{} :Leaf (:at 1633181131099) (:by |u0) (:text |or-current-path)
              |r $ %{} :Expr (:at 1630245582276) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1630245585364) (:by |u0) (:text |p)
              |v $ %{} :Expr (:at 1630245585942) (:by |u0)
                :data $ {}
                  |T $ %{} :Leaf (:at 1630245586336) (:by |u0) (:text |if)
                  |j $ %{} :Expr (:at 1630245586894) (:by |u0)
                    :data $ {}
                      |T $ %{} :Leaf (:at 1630245614560) (:by |u0) (:text |blank?)
                      |j $ %{} :Leaf (:at 1630245615061) (:by |u0) (:text |p)
                  |r $ %{} :Leaf (:at 1630245616843) (:by |u0) (:text "|\".")
                  |v $ %{} :Leaf (:at 1630245618366) (:by |u0) (:text |p)
      :ns $ %{} :CodeEntry (:doc |)
        :code $ %{} :Expr (:at 1633181044360) (:by |u0)
          :data $ {}
            |T $ %{} :Leaf (:at 1633181044360) (:by |u0) (:text |ns)
            |j $ %{} :Leaf (:at 1633181044360) (:by |u0) (:text |regex.util)
            |r $ %{} :Expr (:at 1634804160546) (:by |u0)
              :data $ {}
                |T $ %{} :Leaf (:at 1634804161330) (:by |u0) (:text |:require)
                |j $ %{} :Expr (:at 1634804162771) (:by |u0)
                  :data $ {}
                    |T $ %{} :Leaf (:at 1636960076571) (:by |u0) (:text |regex.$meta)
                    |j $ %{} :Leaf (:at 1634804168120) (:by |u0) (:text |:refer)
                    |r $ %{} :Expr (:at 1634804168421) (:by |u0)
                      :data $ {}
                        |T $ %{} :Leaf (:at 1634804171748) (:by |u0) (:text |calcit-dirname)
                        |j $ %{} :Leaf (:at 1634804175462) (:by |u0) (:text |calcit-filename)
  :users $ {}
    |u0 $ {} (:avatar nil) (:id |u0) (:name |chen) (:nickname |chen) (:password |d41d8cd98f00b204e9800998ecf8427e) (:theme :star-trail)
