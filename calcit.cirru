
{} (:package |regex)
  :configs $ {} (:init-fn |regex.test/main!) (:port 6001) (:reload-fn |regex.test/reload!) (:version |0.0.3)
    :modules $ []
  :entries $ {}
  :files $ {}
    |regex.core $ %{} :FileEntry
      :defs $ {}
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
                      |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text "|\"/dylibs/libcalcit_std")
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
                      |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text "|\"/dylibs/libcalcit_std")
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
                      |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text "|\"/dylibs/libcalcit_std")
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
                      |j $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text "|\"/dylibs/libcalcit_std")
                  |r $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text "|\"re_matches")
                  |v $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |s)
                  |x $ %{} :Leaf (:at 1636960151241) (:by |u0) (:text |pattern)
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
                      |j $ %{} :Leaf (:at 1637157540472) (:by |u0) (:text "|\"/dylibs/libcalcit_std")
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
                      |j $ %{} :Leaf (:at 1637157527168) (:by |u0) (:text "|\"/dylibs/libcalcit_std")
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
