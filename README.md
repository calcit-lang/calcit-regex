## Calcit binding to Rust `regex`

> Rust library for Calcit runtime.

API 设计: https://github.com/calcit-lang/calcit_runner.rs/discussions/116 .

### Usages

APIs:

```cirru
calcit.std.regex/re-matches |2 |\d
; "returns bool"

; "find first matched item"
calcit.std.regex/re-find |a4 |\d
calcit.std.regex/re-find-index |a1 |\d

calcit.std.regex/re-find-all |123 |\d+


assert= |1abXcX3 $ re-replace-all |1ab22c333 |\d{2} "\"X"

assert= ([] "\"1ab" "\"c" "\"3") $ re-split |1ab22c333 |\d{2}
```

Install to `~/.config/calcit/modules/`, compile and provide `*.{dylib,so}` file with `./build.sh`.

### Workflow

https://github.com/calcit-lang/dylib-workflow

### License

MIT
