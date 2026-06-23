# Git hooks

This repository uses custom hooks to keep commits author-only (no AI co-author trailers).

Hooks are enabled automatically via:

```bash
git config core.hooksPath .githooks
```

The `prepare-commit-msg` hook removes `Co-authored-by: Cursor` lines if your editor or agent adds them.

On Windows, Git for Windows runs these hooks through Git Bash.
