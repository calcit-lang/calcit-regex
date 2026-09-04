# Simplify typed FFI metadata / 精简 typed FFI 元数据

- Upgrade the declared Calcit toolchain to 0.13.76 and CI setup action to
  `calcit-lang/setup-calcit@v1.4.0` for Interface IR v2 validation.
- Keep only backend, symbol, invocation, and transport in the public compiled
  regex FFI metadata.
- Remove speculative resource kind, result ownership, and parameter borrow
  declarations. The existing registry, generation checks, lease, and release
  implementation remains inside the module/runtime adapter.
- Update guidance to describe the real v2 unsupported diagnostics instead of a
  lifecycle schema that no production generator consumes.
- Align the base struct's nominal name and public function contracts on
  `Regex`, so Calcit 0.13.76 can retain the attached `RegexTrait` method set
  across `compile` / `compile!` return boundaries.

- 将声明的 Calcit 工具链升级到 0.13.76，并将 CI setup action 升级到
  `calcit-lang/setup-calcit@v1.4.0`，验证 Interface IR v2。
- compiled regex 的公开 FFI 元数据只保留 backend、symbol、invoke 与 transport。
- 删除推测性的 resource kind、result ownership 与参数 borrow 声明；现有 registry、
  generation check、lease 和 release 继续由模块/运行时 adapter 内部实现。
- 更新指南，描述真实的 v2 unsupported diagnostics，不再声称存在生产生成器未消费的
  lifecycle schema。
- 将 base struct 的 nominal 名称与公开函数返回契约统一为 `Regex`，让 Calcit
  0.13.76 在 `compile` / `compile!` 返回边界继续保留 `RegexTrait` method evidence。

## Validation / 验证

- `calcit ffi export --json --ns regex.core` (stable lowering fields only;
  nominal lookup gap tracked in calcit#634)
- `calcit edit format`
- `calcit --check-only`
- `calcit analyze check-types --summary-only` (no definitions at `none`)
- `calcit analyze weak-types --only schema-dynamic,code-dynamic --intent unresolved --summary-only`
- `calcit analyze deprecated --summary-only`
- README and compiled-pattern guide `docs check-md`
- `cargo fmt --check`
- `cargo test` (5 passed, including stale-generation rejection)
- `cargo clippy --all-targets -- -D warnings`
- `cargo build --release`
- `caps --strict --ci`
- `calcit --trace-ffi calcit.cirru` (resource create/release and generation reuse)
- release dylib export audit with `nm -gU`
