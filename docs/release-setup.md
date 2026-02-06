# Release Setup

`dev-toolbox` uses `release-please` workflows.

## Required repository secret

Set this secret in each repo using release workflows:

- `RELEASE_PLEASE_TOKEN`

Use a PAT with permissions to open PRs and create releases/tags.

## Required repository Actions permissions

In repository settings:

- `Actions` -> `General` -> `Workflow permissions`: set to **Read and write permissions**
- Enable **Allow GitHub Actions to create and approve pull requests**

## Why not only `GITHUB_TOKEN`

`GITHUB_TOKEN` is sometimes insufficient for triggering downstream workflows on generated tags/releases in stricter org settings.

The workflow includes fallback:

```yaml
token: ${{ secrets.RELEASE_PLEASE_TOKEN || secrets.GITHUB_TOKEN }}
```

## Release flow summary

1. Merge PRs with semantic titles/commits.
2. `release-please` opens/updates release PRs.
3. Merge release PR.
4. GitHub release + tag are created automatically.
5. Downstream tag-based workflows (e.g. publish) run.

## Pre-release checklist

- `./scripts/doctor-ci . --strict`
- `./scripts/smoke .`
- `./scripts/changelog . --apply`
