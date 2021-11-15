## Calcit binding to Rust `regex`

> Rust library for Calcit runtime.

API 设计: https://github.com/calcit-lang/calcit_runner.rs/discussions/116 .

### Usages

APIs:

```cirru
calcit.std.regex/re-matches |2 |\d
calcit.std.regex/re-find |a4 |\d
calcit.std.regex/re-find-index |a1 |\d
calcit.std.regex/re-find-all |123 |\d+
```

Install to `~/.config/calcit/modules/`, compile and provide `*.{dylib,so}` file with `./build.sh`.

### Workflow

https://github.com/calcit-lang/dylib-workflow

### License

MIT
