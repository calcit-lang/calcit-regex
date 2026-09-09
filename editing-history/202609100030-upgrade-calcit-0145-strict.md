# Upgrade calcit-regex to Calcit 0.14.5 strict checking

- Upgrade the required Calcit toolchain to 0.14.5 and prepare module 0.0.20.
- Replace eight legacy Dynamic pattern arguments with explicit generic pattern
  contracts while preserving support for both strings and compiled resources.
- Keep only the host-managed opaque resource boundary open: `re-pattern`,
  `re-drop`, `re-source`, and the private `Regex0.handle` storage. The Calcit
  runtime currently exposes this resource as an opaque AnyRef without a
  runtime-validatable nominal schema.
- Decode optional FFI results through explicit String/Number assertions and
  migrate equality tests away from the unsafe legacy `assert=` expansion.
- Extend CI with exact toolchain verification, public API preprocessing,
  dynamic-method and quality gates, runnable examples, attached tests, and
  Markdown validation.

Validation covers Rust tests, clippy, release dylib creation, native FFI
behavior, resource lifetime tracing, examples, and public API preprocessing.
