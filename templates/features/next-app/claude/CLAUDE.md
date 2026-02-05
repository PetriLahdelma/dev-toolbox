# Claude Code Working Notes

## Objective

Capture repository-specific collaboration rules and high-signal context for Claude Code sessions.

## Project map

- `app/`: Next.js routes and layouts
- `components/`: UI and feature components
- `lib/`: shared helpers and utilities
- `tests/`: smoke and unit tests

## Local commands

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Engineering guardrails

- Keep diffs focused and composable.
- Avoid hidden side effects in shared utilities.
- Add or update tests for behavior changes.
- Prefer explicit typing over inferred `any` in public surfaces.
