## Calcit binding to Rust `regex`

> Rust library for Calcit runtime.

### 0.1.0 候选：使用者影响

候选配对正式 Calcit **0.34.1**。十个 one-shot pattern 参数从无约束泛型 `P` 或 `Dynamic`
收紧为 `Pattern = String | Regex`；传字符串和完整 `Regex` 封装的常规匹配写法保持。
`re-pattern` 现在返回公开 `Regex`，依赖旧裸原生 token 形状、把 `:handle` 传入 API，
或传未收窄 Dynamic 的调用方需要迁移：传整个 Regex，或调用其 typed methods。
这是非 patch 类型/API 变更；候选尚未发布，正式依赖以实际 Git tag 为准。

原 Rust 实现、Cargo crate 0.0.17、依赖/lock、opaque lease 生命周期和 C-safe ABI 保持。
原生 handle 字段和内部传输投影仍是明确 Dynamic 边界。仅支持 native，没有 npm runtime、
JS/WASM 或前端部署；下游需重建目标架构 dylib，不将本机验收当作全平台保证。

正式0.34.1已通过全部26个定义、完整strict和公开API检查、原native入口、5个Rust测试、
fmt、all-targets Clippy、locked release构建与ABI导出检查。原compile附加测试保持，
新增一项Pattern测试覆盖字符串/编译值一致性及空匹配、缺失、re-drop兼容行为，合计2项通过。
隔离负例 `re-find |a1 7` 在进入FFI前即被原静态门禁拒绝，不增加验证脚本或放宽预算。

手写 native adapter 可正常使用。FFI Interface IR v3 对 Regex 的 Dynamic resource 字段
仍明确拒绝生成；对已声明 Pattern union 的导出还会误报缺失声明，见
[calcit #2536](https://github.com/calcit-lang/calcit/issues/2536)。这不代表支持自动生成绑定，
也不通过伪造资源类型隐藏该边界。本候选不发布 crates.io 或 npm，不部署应用。

The 0.1.0 candidate requires official Calcit 0.34.1. Ten one-shot pattern inputs now accept
only a source String or the public Regex wrapper, replacing unconstrained P/Dynamic inputs.
re-pattern returns that wrapper; callers forwarding raw resource tokens must pass the whole
Regex or use its typed methods. This is a non-patch API change, not an available release yet.
Rust code, dependency locks, the C-safe ABI and lease ownership are unchanged. Native tests and
strict checks pass; generated FFI bindings remain unsupported, with the named-union diagnostic
tracked in #2536. There is no npm, JS/WASM or deployment claim.

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
adapter 内部管理，不要求 Calcit 调用方声明 ownership/borrow 元数据；`Regex` 的开放资源字段和
`Pattern` 联合输入继续保留不可生成的显式 diagnostic。

Install to `~/.config/calcit/modules/`, compile and provide `*.{dylib,so}` file with `./build.sh`.

### Workflow

https://github.com/calcit-lang/dylib-workflow

### License

MIT
