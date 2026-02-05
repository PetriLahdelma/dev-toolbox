<p align="center">
  <img src="./assets/dev-toolbox.svg" alt="dev-toolbox logo" width="287" />
</p>

# dev-toolbox

<p align="center">
  <a href="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/ci.yml/badge.svg" /></a>
  <a href="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/release.yml"><img alt="Release" src="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/release.yml/badge.svg" /></a>
  <a href="./LICENSE"><img alt="License" src="https://img.shields.io/github/license/PetriLahdelma/dev-toolbox" /></a>
</p>

A practical toolkit for running repositories like real products.

`dev-toolbox` gives you scripts, profile presets, and templates to keep release hygiene, CI standards, and project scaffolding consistent across repos.

## Why this exists

- New repos should start with quality defaults, not TODO checklists.
- Maintainer hygiene should be automatic and repeatable.
- A single command should scaffold a usable baseline for common project types.

## What you get

- `scripts/`: automation for doctor checks, smoke checks, changelogs, benchmarks, profile application, and scaffolding.
- `profiles/`: reusable presets for `node-cli`, `next-app`, and `github-action`.
- `templates/baseline/`: CODEOWNERS, issue/PR templates, Dependabot, release workflows, and maintainer docs.
- `templates/projects/`: starter code for each profile.
- `templates/features/`: optional profile feature packs (e.g., motion, remotion, AI agent, Claude context).

## Quickstart

```bash
# 1) Validate your machine
./scripts/doctor

# 2) Validate this repository baseline
./scripts/doctor-ci . --strict

# 3) Run full e2e toolbox checks
./scripts/self-test

# 4) Scaffold a new production-ready repo
./scripts/scaffold my-cli node-cli . --owner @PetriLahdelma

# 5) Run strict baseline checks on the new repo
./scripts/doctor-ci ./my-cli --strict
```

## Common flows

### Scaffold

```bash
# Node CLI
./scripts/scaffold my-tool node-cli . --owner @PetriLahdelma

# Next.js app
./scripts/scaffold my-app next-app . --owner @PetriLahdelma

# Next.js app + all optional extras
./scripts/scaffold my-app-pro next-app . --owner @PetriLahdelma --all-next-extras

# Composite GitHub Action
./scripts/scaffold my-action github-action . --owner @PetriLahdelma
```

### Apply profile to existing repo

```bash
./scripts/profile-apply node-cli ../existing-repo --owner @PetriLahdelma
```

### Generate changelog block from commits

```bash
# Preview
./scripts/changelog ../existing-repo

# Apply under [Unreleased]
./scripts/changelog ../existing-repo --apply
```

### Benchmark a command

```bash
./scripts/bench "npm test" 10 .toolbox/bench
```

## Commands

| Command | Purpose |
| --- | --- |
| `scripts/doctor` | Validate required and optional local tooling |
| `scripts/lint-shell` | Run shellcheck against toolkit scripts/templates |
| `scripts/doctor-ci` | Check repository baseline quality and output report |
| `scripts/self-test` | Execute end-to-end scaffold/profile/benchmark validation |
| `scripts/smoke` | Run `lint`, `typecheck`, `test`, `build` if present |
| `scripts/changelog` | Build/apply changelog sections from commit history |
| `scripts/bench` | Benchmark commands and export report artifacts |
| `scripts/release` | Guarded release dry-run and optional apply flow |
| `scripts/profile-show` | Inspect a profile definition |
| `scripts/profile-apply` | Apply profile templates/workflows to existing repo |
| `scripts/scaffold` | Create a new repo from profile template + baseline |
| `scripts/image-opt` | Optimize images with available local tools |
| `scripts/log-scan` | Extract high-signal errors from logs |

`justfile` and `Makefile` wrappers are included for teams that prefer command runners.

## Profiles

- `node-cli`: Node package conventions, full test gate, release type `node`.
- `next-app`: Next.js + Tailwind + shadcn-style UI + Radix + Vercel baseline.
- `github-action`: Composite action baseline with shell-focused CI.

`next-app` optional flags:

- `--motion`
- `--remotion`
- `--vercel-agents` (alias: `--vercel-agent-brovers`)
- `--claude` / `--claude-code`
- `--all-next-extras`

See `/docs/profiles.md` for details.

## Documentation

- `/docs/getting-started.md`
- `/docs/profiles.md`
- `/docs/scaffold.md`
- `/docs/release-setup.md`

## Local rituals

- Run `scripts/smoke` before pushing.
- Keep PRs focused and small.
- Prefer deterministic scripts over manual release steps.

## License

MIT. See `/LICENSE`.
