# Compiled regex method API

- Added a nominal `Regex0` wrapper with typed methods for matching, optional
  first-match lookup, splitting, replacement, and source inspection.
- `compile` returns `Result<Regex0, String>` while `compile!` preserves the
  convenient raising form. Native compile errors cross the dylib boundary as
  ordinary `:ok` / `:err` data.
- The legacy `re-pattern` constructor now raises from that data result on the
  Calcit side, so invalid patterns do not propagate a Rust `Err` through FFI.
- Optional find entrypoints distinguish a legitimate empty match from absence;
  legacy `re-find` and `re-find-index` retain their existing sentinels.
- Native operations share one string-or-compiled-pattern resolver, and compiled
  handle equality now compares regex source instead of always returning false.
- The project now targets Calcit 0.13.40.
