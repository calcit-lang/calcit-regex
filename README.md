## Calcit binding to Rust `regex`

> Rust library for Calcit runtime.

使用者注意：候选模块 **0.0.27** 配对正式 Calcit **0.30.1**，本库仅运行 native，
没有 npm runtime。需要重启原生进程并使用本机架构的动态库；不承诺 JS/WASM 支持。
本次 Snapshot、Rust、Cargo 依赖/lock、公开 API 与资源生命周期均不变。
版本号不代表已发布，精确正式验收和发布状态以 PR / Release 为准。

This candidate targets formal Calcit 0.30.1. Module 0.0.26 remains the previously
published version until the new tag is released.
The `Regex` constructor is declared `StructDef`, matching `impl-traits`, not `Impl`.
Strict type checking remains enabled;
the only remaining open schemas are the host-managed opaque regex resource
boundary, reported by the compiler's weak-type diagnostics.

本轮迁移清理九处旧 Option/Result 构造写法，保留原资源生命周期、错误和空匹配语义。
本轮进一步迁移平台 macro 和附带测试/示例中的 Option/Result helper；原断言和 ABI 不变。
RegexImpl 使用与 RegexTrait 一致的具体函数合同和名义字段访问。
三个原有 opaque resource 类型槽仍保留，废弃调用和 unsafe coercion 均为零。
原质量预算通过后退役；weak-types 只报告类型债务，不替代统计阈值。
CI 保留严格入口、全部公开 API、Rust 与原生动态库测试及文档检查；
不新增验证框架。此库没有前端部署，不添加 COS/CDN。Action 使用正式标签，标签可移动的供应链风险仍存在。

此前 `0.0.26` 已正式发布；以下源码迁移说明属于既有实现，不是本次重新改写。
本轮仅更新工具链、CI 和说明，不修改 Snapshot、Rust、Cargo 依赖/lock、公开 API
或资源生命周期，验收后另发模块 `0.0.27`。此前正式 Calcit 0.29.0 的嵌套 Option
方法合同与空 Option 泛型推断问题，现已由正式 Calcit 0.29.1 修复。
当前源码不依赖临时编译器；原有类型合同、断言、资源生命周期和 ABI 不变。
本轮从既有 alpha.5 配对升级到正式 Calcit 0.30.1；此前 alpha 的验证不能冒充本次
正式版本验收。本库仅运行 native，无 npm runtime 配对。
CI 显式读取 deps.cirru 并使用已有 Cargo.lock，新增全部定义检查，保留原 strict、
公开 API、Rust、动态库及文档测试，原 release 构建同时输出实际 ABI 导出供审阅。
完整 strict 明确要求 passed 且 diagnostics 为空，不增加编译器规则、验证脚本或类型预算。

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
