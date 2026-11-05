## Calcit binding to Rust `regex`

> Rust library for Calcit runtime.

### 使用者影响

0.1.1 要求正式 Calcit **0.34.2**；升级模块前请同步本地和 CI 的 Calcit 版本。

已发布的 0.1.0 使用 `Pattern = String | Regex`：十个 one-shot pattern 参数接受
字符串或完整的 `Regex` 封装。`re-pattern` 返回公开 `Regex`；从更早版本升级、
依赖旧裸原生 token 形状、把 `:handle` 直接传入 API，或传未收窄 Dynamic 的调用方，
需要改为传整个 Regex，或调用其 typed methods。

0.1.1 延续上述公开合同。原生 handle 字段和内部传输投影保留为明确的 Dynamic 边界；
Rust 实现、Cargo crate 0.0.17、依赖/lock、opaque lease 生命周期和 C-safe ABI 沿用现有实现。
模块仅支持 native；请为目标架构构建 dylib。本地验收不代表全平台运行保证。

维护验收包括完整 strict、公开定义、原 native 入口与附加测试、Rust 测试、fmt、
all-targets Clippy、locked release 构建和 ABI 导出检查。`Pattern` 附加测试覆盖
字符串/编译值一致性及空匹配、缺失、`re-drop` 兼容行为。

手写 native adapter 可正常使用。0.34.2 的 FFI Interface IR v3 对 Regex 的 Dynamic
resource 字段拒绝生成；对已声明 Pattern union 的导出仍会误报缺失声明，见
[calcit #2536](https://github.com/calcit-lang/calcit/issues/2536)。不能把这次工具链升级
当作自动生成绑定的支持声明，也不能通过伪造资源类型隐藏边界。

Module 0.1.1 requires official Calcit 0.34.2. The published 0.1.0 release introduced
`Pattern = String | Regex` for one-shot inputs and made `re-pattern` return the public
Regex wrapper. Callers upgrading from older versions must pass the complete wrapper
instead of raw native tokens, or use its typed methods. The native resource boundary,
C-safe ABI and lease ownership remain as implemented. The module targets native only;
FFI binding generation is still limited as described in #2536.

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
