## Calcit binding to Rust `regex`

> Rust library for Calcit runtime.

### 0.0.30 候选：使用者影响

本候选要求正式 Calcit **0.32.1**；仍使用 0.32.0 的消费者可保留正式 0.0.29。仅支持 native，没有 npm runtime 或 JS/WASM 后端；下游须重启原生进程并重新构建目标架构 dylib。候选版本不代表已有正式 tag，本 PR 不发版或部署。

本次只对齐工具链与候选模块版本，Snapshot、22 个定义的 schema/实现/测试、正则语义、opaque resource 生命周期和 C-safe ABI 不变。Cargo crate 仍为 0.0.17，Cargo 依赖及 lock 不变；共享 `calcit_native_ffi` 继续使用正式 0.1.3。既有 strict、公开 API、Rust、dylib、示例与文档门禁全部保留，不新增验证脚本或预算。

RegexImpl 保持与 RegexTrait 一致的具体函数合同和名义字段访问；三个原有 opaque resource 动态边界继续报告，不把门禁通过称为零类型债务。`Regex` 构造器是 `StructDef`，不是 `Impl`。`compile!` 的原 Option 匹配断言保持可执行。

Actions 使用精确正式 tag；维护者已接受 tag 可移动风险。复用 setup-rust-toolchain，替代浮动 stable action 和主版本缓存 action，不新增 pin checker。canonical 门禁使用 quiet 输出，失败条件保持。

开发时运行 `caps --strict --ci`、`caps verify --toolchain`、`sh build.sh`，再执行原完整 CI 中的 Rust、类型、示例和 native 回归。build.sh 按 Cargo.lock 构建，失败停止且不清空现有 dylibs；本库没有前端，不添加 COS/CDN。Linux 验证不构成全部平台承诺。

Current candidate module 0.0.30 pairs with Calcit 0.32.1. Rebuild the native library
for the target architecture. The Snapshot, regex behavior, resource ownership and
C-safe ABI remain unchanged; Cargo crate metadata stays at 0.0.17. No npm runtime,
JS/WASM backend, frontend deployment or release is introduced by this PR.

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
