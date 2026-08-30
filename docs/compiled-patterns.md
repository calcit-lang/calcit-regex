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

Use the one-shot `re-*` functions for occasional matching. Compile once when the same pattern is applied repeatedly: `compile` validates syntax into `Result<Regex0, String>`, while `compile!` raises on invalid syntax for fixed application-owned patterns.

```cirru.no-check
let
    compiled $ regex.core/compile |\\d+
  compiled.map $ fn (pattern)
    pattern.find |item-42
```

The nominal `Regex0` value implements `RegexTrait`. Its methods expose `.matches?`, `.find`, `.find-index`, `.find-all`, `.split`, `.replace-all`, and `.source`. `.find` and `.find-index` return `Option`, so an empty match remains distinguishable from no match and indexes do not require a `-1` sentinel.

For dynamic one-shot patterns, prefer `re-find-option` and `re-find-index-option` when absence is part of normal control flow. Legacy helpers remain useful for compatibility, but new typed business code should keep missing values explicit.

## Native resource lifetime

A compiled pattern is an opaque C-safe resource token. Calcit retains the lease while aliases exist and releases the native registry entry after the final reference is dropped. Do not serialize the token, store it in durable application state, or treat it as a cross-process identifier. Store the source string when persistence is needed and compile it again at the system boundary.

In a realtime application, compile stable validation or routing patterns during adapter initialization. Keep them outside the serial updater state; operations and projections should receive the validated text or typed result rather than native resource handles.

## Typed FFI contract

The `compile` adapter declares a native synchronous `resource-constructor`
lowered through `edn-buffer-v1`. Its contract records that the successful
result owns an `opaque-resource-v1` lease. `re-source` is the matching
resource method and borrows parameter 0; ownership remains with Calcit.

Maintainers can inspect the deterministic contract without loading the dylib:

```bash
calcit calcit.cirru ffi export --json --ns regex.core
```

The one-shot helpers intentionally accept either source strings or compiled
handles today, so their `Dynamic` union remains an explicit unsupported
diagnostic for strict bindgen. It must not be silently generated as an
untyped boundary.

`compile` 适配器声明为经 `edn-buffer-v1` 调用的同步
`resource-constructor`，并记录成功结果持有一个 `opaque-resource-v1`
lease；`re-source` 是对应的资源方法，对参数 0 只借用、不转移所有权。
当前 one-shot helper 仍兼容源码字符串和 compiled handle，因此其 `Dynamic`
联合输入会继续显示为严格 bindgen 的显式 unsupported diagnostic，不能静默
生成无类型边界。
