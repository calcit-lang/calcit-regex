# Typed FFI resource contract / 类型化 FFI 资源契约

- Upgrade the project toolchain declaration to Calcit 0.13.69.
- Enrich the compiled-regex constructor and resource method lowering metadata
  with synchronous EDN buffer transport and explicit own/borrow semantics.
- Keep dynamic one-shot string-or-resource inputs visible as unsupported
  bindgen boundaries instead of claiming they are generator-safe.
- Document deterministic `calcit ffi export` auditing for maintainers.

- 将项目工具链声明升级到 Calcit 0.13.69。
- 为 compiled-regex constructor 与资源方法补充同步 EDN buffer transport
  以及明确的 own/borrow lowering 元数据。
- 动态 one-shot 字符串或资源联合输入继续作为 bindgen 不支持边界显式展示，
  不冒充可安全生成的契约。
- 记录维护者使用 `calcit ffi export` 进行确定性审计的方法。
