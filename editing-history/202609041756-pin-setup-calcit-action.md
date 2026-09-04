# Pin setup-calcit action / 固定 setup-calcit Action

- Pin `calcit-lang/setup-calcit` v1.4.0 to its immutable release commit.
- Keep the semantic version as a maintenance comment for future upgrades.

- 将 `calcit-lang/setup-calcit` v1.4.0 固定到不可变的 release commit。
- 保留语义版本注释，便于后续升级维护。

## Validation / 验证

- verified the annotated `v1.4.0` tag resolves to commit
  `704b3f5cd6f9ce3bd1e0c926dbdd1d181adb8180`
- `cargo test`
- `cargo clippy --all-targets -- -D warnings`
- `cargo build --release`
- Calcit snapshot, type, weak-type, deprecated, Caps, and trace-FFI checks
