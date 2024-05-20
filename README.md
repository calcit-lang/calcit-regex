## Calcit binding to Rust `regex`

> Rust library for Calcit runtime.

API 设计: https://github.com/calcit-lang/calcit_runner.rs/discussions/116 .

### Usages

APIs:

```cirru
regex.core/re-matches |2 |\d
; "returns bool"

; "find first matched item"
regex.core/re-find |a4 |\d
regex.core/re-find-index |a1 |\d

regex.core/re-find-all |123 |\d+


regex.core/re-replace-all |1ab22c333 |\d{2} "\"X"
; |1abXcX3


regex.core/re-split |1ab22c333 |\d{2}
; [] "\"1ab" "\"c" "\"3"

regex.core/re-pattern |\d+
; "creates any-ref to hold a native regex pattern"
```

```cirru
let
    pattern $ regex.core/re-pattern "|\d+"
  regex.core/re-find |a4 |\d
```

Install to `~/.config/calcit/modules/`, compile and provide `*.{dylib,so}` file with `./build.sh`.

### Workflow

https://github.com/calcit-lang/dylib-workflow

### License

MIT
