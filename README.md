## Calcit binding to Rust `regex`

> Rust library for Calcit runtime.

### 0.1.0 迁移草稿：使用者影响

候选拟配对正式 Calcit **0.34.0**，用 `Pattern` union 将 `re-*` 的 pattern 收窄为字符串或公开 `Regex` 构造值。`re-pattern` 拟返回同一 `Regex` 封装，调用其结果做匹配的写法保持；依赖旧裸原生 token 形状的调用方需要迁移，不再直接传 token 或未收窄的 Dynamic。这是非 patch 类型/API 变更，尚不可作为已发布依赖使用。

**当前等待正式编译器修复，未验收完成。** 官方 0.34.0 的 union 别名模式解析失败（[calcit#2529](https://github.com/calcit-lang/calcit/issues/2529)）。类型合同保存在 metadata schema；此前编辑失败来自 JSON AST 额外 quote 的输入错误，已更正，原 #2528 误报已关闭。未发布的核心修复候选可检查全部 26 个定义并执行原生回归，但这些结果不能冒充官方版本验收或发布。

原有 native Rust 实现、Cargo crate 0.0.17、依赖与 lock、opaque lease 生命周期及 C-safe ABI 保持。原 5 项 Rust 测试、fmt、all-targets Clippy 与锁定 release 构建已通过。未发布的核心候选也通过完整 strict、公开 API、两项附带测试、原生 FFI 入口、示例和文档；正式工具链验收仍待完成，门禁没有放宽。`Regex` 内部的原生 handle 和传输投影仍是明确的 Dynamic 边界，不宣称类型债务清零。

仅支持 native，没有 npm runtime、JS/WASM 或前端；下游升级后需重建目标架构 dylib。此草稿不合并、不发布 tag/crates.io，也不部署。

Draft 0.1.0 targets official Calcit 0.34.0 with a closed source-string/compiled-Regex Pattern union. It changes re-pattern from a raw token to the existing Regex wrapper. This non-patch candidate awaits the upstream alias-pattern fix in an official release. Metadata schemas are retained; the earlier schema-writer report was incorrect JSON transport input and has been closed. Unreleased-compiler checks do not establish official acceptance; no gate is relaxed or release available. Rust sources, dependencies, lock and native resource ownership remain unchanged.

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

; "creates an automatically managed native regex resource"
```

```cirru
let
    pattern $ regex.core/re-pattern |\d+
  regex.core/re-find |a4 pattern
```

For repeated matching, the nominal compiled API avoids recompiling the pattern
and exposes typed methods. Missing matches use `Option` rather than empty-string
or `-1` sentinels:

```cirru
let
    pattern $ regex.core/compile! |\d+
  assert |finds-digit $ &= |4 $
    .find pattern |a4
    , .unwrap
  assert |missing-digit $
    .find pattern |abc
    , .none?
  assert |finds-index $ &= 1 $
    .find-index pattern |a4
    , .unwrap
  assert |finds-all $ &= ([] |1 |2) (.find-all pattern |a1b2)

; "invalid syntax stays in typed error flow"

regex.core/compile |[
```

See [Compiled regex patterns](docs/compiled-patterns.md) for choosing the
one-shot and compiled APIs, handling `Option`/`Result`, and retaining native
resource ownership safely. The page is indexed by `calcit docs read/search`.

Compiled patterns use Calcit C-safe opaque resource v1. The dylib keeps each
`Regex` in a generation-checked registry; Calcit owns the resource lease and
releases it automatically after the final reference is dropped. No Rust
`AnyRef`, allocator-owned container, or trait object crosses the dylib boundary.

编译后的 pattern 使用 Calcit C-safe opaque resource v1。动态库通过带 generation
校验的 registry 保存 `Regex`，Calcit 在最后一个引用释放后自动回收资源；Rust
`AnyRef`、allocator-owned container 和 trait object 都不会跨越 dylib 边界。

Buffer-v1 descriptor、buffer ownership、Cirru EDN transport 与 adapter 来自
共享的 [`calcit_native_ffi`](https://github.com/calcit-lang/calcit-native-ffi)，
本仓库只维护 regex 业务逻辑和 opaque-resource registry。

Buffer-v1 descriptors, buffer ownership, Cirru EDN transport, and adapters
come from the shared
[`calcit_native_ffi`](https://github.com/calcit-lang/calcit-native-ffi). This
repository keeps only regex behavior and the opaque-resource registry.

The typed native contract can be audited without loading the dylib:

```bash
calcit calcit.cirru ffi export --format json --ns regex.core
```

该命令只读导出 Interface IR v3 的稳定调用边界：backend、symbol、invoke 与
transport。资源 registry、generation check 与最终引用自动 release 由模块和运行时
adapter 内部管理，不要求 Calcit 调用方声明 ownership/borrow 元数据；`Regex` 和
动态 one-shot 输入继续作为暂不可生成的显式 diagnostic。

Install to `~/.config/calcit/modules/`, compile and provide `*.{dylib,so}` file with `./build.sh`.

### Workflow

https://github.com/calcit-lang/dylib-workflow

### License

MIT
