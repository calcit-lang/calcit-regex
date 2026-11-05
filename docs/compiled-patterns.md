---
title: "Compiled regex patterns"
summary: "Choose one-shot or reusable regex APIs with typed Result compilation, Option matches, and automatically managed native resources"
scope: "module"
kind: "guide"
category: "text"
aliases:
  - "calcit regex"
  - "compiled regex"
  - "regex Option"
  - "regex Result"
  - "RegexTrait"
  - "re-find-option"
  - "正则表达式"
entry_for:
  - "regex.core/compile"
  - "regex.core/compile!"
  - "regex.core/Regex"
  - "regex.core/RegexTrait"
  - "regex.core/re-find-option"
  - "regex.core/re-find-index-option"
---

# Compiled regex patterns

Use the one-shot `re-*` functions for occasional matching. Compile once when the same pattern is applied repeatedly: `compile` validates syntax into `Result<Regex, String>`, while `compile!` raises on invalid syntax for fixed application-owned patterns.

```cirru.no-check
let
    compiled $ regex.core/compile |\\d+
  compiled.map $ fn (pattern) (pattern.find |item-42)
```

The nominal `Regex` value implements `RegexTrait`. Its methods expose `.matches?`, `.find`, `.find-index`, `.find-all`, `.split`, `.replace-all`, and `.source`. `.find` and `.find-index` return `Option`, so an empty match remains distinguishable from no match and indexes do not require a `-1` sentinel.

Code that previously wrote an explicit `regex.core/Regex0` annotation should
move to `regex.core/Regex`. `Regex0` is only the internal binding that holds the
base struct definition; `Regex` is the public nominal type with attached
methods.

For one-shot Pattern values, prefer `re-find-option` and `re-find-index-option` when absence is part of normal control flow. Legacy helpers remain useful for compatibility, but new typed business code should keep missing values explicit.

## Native resource lifetime

A compiled pattern is an opaque C-safe resource token. Calcit retains the lease while aliases exist and releases the native registry entry after the final reference is dropped. Do not serialize the token, store it in durable application state, or treat it as a cross-process identifier. Store the source string when persistence is needed and compile it again at the system boundary.

In a realtime application, compile stable validation or routing patterns during adapter initialization. Keep them outside the serial updater state; operations and projections should receive the validated text or typed result rather than native resource handles.

## Typed FFI contract

The public FFI metadata for `compile` and `re-source` records only the stable
native backend, base symbol, synchronous invocation, and `edn-buffer-v1`
transport. The handwritten adapter and runtime own the opaque token registry,
generation checks, leases, and final-reference release; callers do not declare
ownership or borrow state.

Maintainers can inspect the deterministic contract without loading the dylib:

```bash
calcit calcit.cirru ffi export --format json --ns regex.core
```

Calcit 0.35.1 reports the `Regex` resource field as `E_FFI_IR_DYNAMIC_TYPE` and
recognizes the declared `Pattern` union as `E_FFI_IR_UNSUPPORTED_TYPE`. The
handwritten adapter continues to manage the opaque resource. [Calcit #2536](https://github.com/calcit-lang/calcit/issues/2536)

`compile` 与 `re-source` 的 FFI 元数据记录 native backend、符号、调用方式和 `edn-buffer-v1`。
手写适配器和运行时管理资源租约、generation 检查与最终释放。0.35.1 识别 `Pattern` 的声明，
IR v3 仍无法为该 union 或 `Regex` 的不透明资源字段生成绑定。
