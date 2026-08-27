# C-safe opaque regex resource v1

- 将 compiled regex 从 Rust `AnyRef<Arc<Regex>>` 跨 dylib 改为 C-safe `(handle, generation)` token。
- 使用线程安全 generation registry，支持并发匹配，并确定性拒绝 stale/invalid handle 与重复 release。
- 所有 regex 方法迁移到同步 buffer v1，crate 改为 `cdylib`，导出表只保留固定 C ABI。
- 保留 Calcit `Regex0` 和方法 API；资源由宿主最后引用自动释放，兼容 `re-drop` 仅保留为校验型 no-op。
- 使用 Calcit 0.13.51 结构化迁移 `get-dylib-ext` strict macro schema，并恢复 `calcit.cirru` 的可审阅 diff。
- CI 固定 `setup-calcit@v1.3.0`，增加 Rust tests 与 strict clippy。
