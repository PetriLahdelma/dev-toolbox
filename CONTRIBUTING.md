# Contributing

Thanks for improving `dev-toolbox`.

## Development workflow

1. Run baseline checks:

```bash
./scripts/doctor
./scripts/doctor-ci . --strict
```

2. Run functional checks:

```bash
./scripts/smoke .
```

3. If you change profiles/templates/scaffolding, validate generated repos:

```bash
tmpdir=$(mktemp -d)
./scripts/scaffold ci-node-cli node-cli "$tmpdir" --no-install --force
./scripts/scaffold ci-next next-app "$tmpdir" --no-install --force
./scripts/scaffold ci-action github-action "$tmpdir" --no-install --force
./scripts/doctor-ci "$tmpdir/ci-node-cli" --strict
./scripts/doctor-ci "$tmpdir/ci-next" --strict
./scripts/doctor-ci "$tmpdir/ci-action" --strict
```

## Pull request standards

- Keep PRs scoped to one clear outcome.
- Include rationale and tradeoffs for non-trivial changes.
- Update docs and changelog for user-facing behavior changes.
- Use semantic PR titles (`feat:`, `fix:`, `docs:`, `chore:` etc.).

## Commit guidance

Conventional commits are preferred:

- `feat:` new capability
- `fix:` bug fix
- `docs:` documentation updates
- `chore:` maintenance work

## Release notes

Use `./scripts/changelog --apply` to generate `[Unreleased]` notes before cutting releases.
