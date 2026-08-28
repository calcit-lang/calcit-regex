# 维护指南 / Maintainer guide

## 中文

- 修改 Calcit snapshot 前先运行 calcit docs agents --full，并只通过 calcit edit / calcit tree 修改 calcit.cirru。
- C-safe ABI descriptor、buffer ownership、Cirru EDN transport 与 adapter 由 calcit_native_ffi 维护；本仓库只保留模块业务逻辑，不复制协议模板。
- 提交前运行 cargo fmt --check、cargo test、cargo clippy --all-targets -- -D warnings、caps --strict --ci 与 calcit calcit.cirru --check-only，并检查 release dylib 导出符号。

## English

- Run calcit docs agents --full before changing the Calcit snapshot, and modify calcit.cirru only through calcit edit / calcit tree.
- calcit_native_ffi owns C-safe ABI descriptors, buffer ownership, Cirru EDN transport, and adapters. Keep only module behavior here; do not copy protocol templates.
- Before committing, run cargo fmt --check, cargo test, cargo clippy --all-targets -- -D warnings, caps --strict --ci, calcit calcit.cirru --check-only, and audit release-dylib exports.
