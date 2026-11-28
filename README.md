## Calcit binding to Rust `regex`

> Rust library for Calcit runtime.

### 使用者影响

候选模块 **0.1.7** 配对正式 Calcit **0.47.1**，尚未发布对应的模块 tag。已发布 **0.1.6** 配对 Calcit **0.45.1**，**0.1.5** 配对 **0.44.0**。请同步本地和 CI 的版本，并用锁定的 Cargo 依赖重建目标架构的动态库。

`Pattern = String | Regex` 仍接受源码字符串和完整的编译对象。`re-pattern` 返回 `Regex`，原匹配结果、空匹配、缺失值和资源生命周期保持原有合同。`Regex.handle` 从 Dynamic 收窄为 `FfiResource`，编译结果在边界进行受检解码；直接构造 Regex 的调用方须提供有效资源句柄。

编译后的句柄由原生 FFI 管理。公开的 `String | Regex` 继续由具名 union 表达，句柄仍由原生资源协议校验。内部传输返回 `String | FfiResource` 的尝试仍受 [Calcit #2938](https://github.com/calcit-lang/calcit/issues/2938) 阻塞，因此保留原受检宿主边界。

0.46.0 的 FFI IR v4 已支持表达 union 和不透明资源，但本模块导出仍因 `RegexTrait` 实现字段报告缺失声明。本模块继续使用原有手写原生适配器；`FfiResource` 不能序列化，也不支持 JS/WASM 目标。

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

该命令只读导出 Interface IR v4 的调用边界：backend、symbol、invoke 与
transport。资源 registry、generation check 与最终引用自动 release 由模块和运行时
adapter 内部管理，不要求 Calcit 调用方声明 ownership/borrow 元数据。当前导出仍将
`Regex` 的实现 trait 误当作字段并报告缺失声明，详见 [Calcit #2939](https://github.com/calcit-lang/calcit/issues/2939)；不要将当前输出视为可生成的完整接口。

Install to `~/.config/calcit/modules/`, compile and provide `*.{dylib,so}` file with `./build.sh`.

### Workflow

https://github.com/calcit-lang/dylib-workflow

### License

MIT
