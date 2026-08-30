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
