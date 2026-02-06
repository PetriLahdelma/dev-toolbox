<p align="center">
  <img src="./assets/dev-toolbox.svg" alt="dev-toolbox logo" width="190" />
</p>

<h1 align="center">dev-toolbox</h1>

<p align="center">A practical maintainer toolkit for scaffolding and running repositories like real products.</p>

<p align="center">
  <a href="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/ci.yml/badge.svg" /></a>
  <a href="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/release.yml"><img alt="Release Please" src="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/release.yml/badge.svg" /></a>
  <a href="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/dependency-review.yml"><img alt="Dependency Review" src="https://github.com/PetriLahdelma/dev-toolbox/actions/workflows/dependency-review.yml/badge.svg" /></a>
  <a href="./LICENSE"><img alt="License" src="https://img.shields.io/github/license/PetriLahdelma/dev-toolbox" /></a>
</p>

<p align="center">
  <a href="#quickstart">Quickstart</a> ·
  <a href="#proof--demos">Proof & Demos</a> ·
  <a href="#profiles">Profiles</a> ·
  <a href="#commands">Commands</a>
</p>

## Why this exists

- New repos should start with real defaults, not TODO checklists.
- Repository hygiene should be repeatable and script-first.
- Scaffold output should be deployable, testable, and maintainable on day one.

## Proof & demos

### Scaffold terminal transcript (`next-app --all-next-extras`)

```bash
$ ./scripts/scaffold demo-next next-app /tmp --all-next-extras --owner @PetriLahdelma --no-install --force
write: /tmp/demo-next/app/layout.tsx
write: /tmp/demo-next/app/page.tsx
write: /tmp/demo-next/app/globals.css
write: /tmp/demo-next/postcss.config.mjs
write: /tmp/demo-next/tests/smoke.test.js
write: /tmp/demo-next/next-env.d.ts
write: /tmp/demo-next/README.md
write: /tmp/demo-next/tailwind.config.ts
write: /tmp/demo-next/components/ui/button.tsx
write: /tmp/demo-next/package.json
write: /tmp/demo-next/lib/utils.ts
write: /tmp/demo-next/components.json
write: /tmp/demo-next/tsconfig.json
write: /tmp/demo-next/next.config.ts
write: /tmp/demo-next/app/motion/page.tsx
write: /tmp/demo-next/components/motion/fade-up.tsx
feature enabled: motion
write: /tmp/demo-next/video/IntroComposition.tsx
write: /tmp/demo-next/video/README.md
write: /tmp/demo-next/video/Root.tsx
write: /tmp/demo-next/video/index.ts
feature enabled: remotion
write: /tmp/demo-next/app/agent/page.tsx
write: /tmp/demo-next/app/api/agent/route.ts
write: /tmp/demo-next/.env.example
feature enabled: vercel-agents
write: /tmp/demo-next/.storybook/main.ts
write: /tmp/demo-next/.storybook/preview.ts
write: /tmp/demo-next/components/ui/button.stories.tsx
feature enabled: storybook
write: /tmp/demo-next/CLAUDE.md
feature enabled: claude
write: /tmp/demo-next/app/api/stripe/checkout/route.ts
write: /tmp/demo-next/app/billing/page.tsx
feature enabled: stripe
write: /tmp/demo-next/app/supabase/page.tsx
write: /tmp/demo-next/app/api/supabase/health/route.ts
write: /tmp/demo-next/lib/supabase/client.ts
write: /tmp/demo-next/lib/supabase/server.ts
feature enabled: supabase
write: /tmp/demo-next/app/docs/page.tsx
write: /tmp/demo-next/content/docs/getting-started.mdx
feature enabled: fumadocs
profile script expectations satisfied
Scaffold complete: /tmp/demo-next
```

### Install + quality gates transcript

```bash
$ npm --prefix /tmp/demo-next install
added 979 packages, and audited 981 packages in 2m

$ ./scripts/doctor-ci /tmp/demo-next --strict
Doctor CI summary: 26 pass, 0 warn, 0 fail
[ok] .github/CODEOWNERS
[ok] .github/PULL_REQUEST_TEMPLATE.md
[ok] .github/dependabot.yml
[ok] .github/workflows/dependency-review.yml
[ok] .github/workflows/release.yml
[ok] .github/workflows/semantic-pr-title.yml
[ok] .github/ISSUE_TEMPLATE/bug_report.yml
[ok] .github/ISSUE_TEMPLATE/feature_request.yml
[ok] CONTRIBUTING.md
[ok] SECURITY.md
[ok] CHANGELOG.md
[ok] LICENSE
[ok] CODE_OF_CONDUCT.md
[ok] mise.toml
[ok] ci workflow
[ok] style file: .editorconfig
[ok] style file: .gitattributes
[ok] project hygiene file: .gitignore
[ok] release workflow uses release-please
[ok] release token fallback configured
[ok] ci workflow has explicit permissions
[ok] ci workflow has concurrency control
[ok] package script: lint
[ok] package script: test
[ok] package script: build
[ok] package script: typecheck

$ ./scripts/smoke /tmp/demo-next
-> npm run lint
-> npm run typecheck
-> npm run test
-> npm run build
Smoke checks complete.
```

Full raw logs from this run:

- `docs/proof/scaffold-next-app.log`
- `docs/proof/install-next-app.log`
- `docs/proof/doctor-ci-next-app.log`
- `docs/proof/smoke-next-app.log`

### Scaffold output screenshots (`next-app --all-next-extras`)

<p>
  <img src="./assets/screenshots/demo-next-home.png" alt="Scaffolded Next app home" width="32%" />
  <img src="./assets/screenshots/demo-next-motion.png" alt="Scaffolded motion route" width="32%" />
  <img src="./assets/screenshots/demo-next-agent.png" alt="Scaffolded Vercel agent route" width="32%" />
</p>

```bash
./scripts/scaffold demo-next next-app /tmp/devtoolbox-visual-demo --all-next-extras --owner @PetriLahdelma --force
```

## Quickstart

```bash
# 1) Validate local toolchain
./scripts/doctor

# 2) Validate this repo baseline (strict)
./scripts/doctor-ci . --strict

# 3) Run end-to-end toolbox checks
./scripts/self-test

# 4) Scaffold a production-ready project
./scripts/scaffold my-app next-app . --owner @PetriLahdelma --all-next-extras

# 5) Validate the scaffolded project
./scripts/doctor-ci ./my-app --strict
```

## Profiles

| Profile | Best for | Output highlights |
| --- | --- | --- |
| `node-cli` | npm libraries and CLIs | Strict CI gates, release workflow, maintainer docs |
| `next-app` | Next.js products | Tailwind + shadcn-style UI + Radix + Vercel defaults + optional Storybook |
| `github-action` | Composite actions | Action starter with shell-focused CI and baseline docs |

`next-app` extras:

- `--motion`
- `--remotion`
- `--vercel-agents` (alias: `--vercel-agent-brovers`)
- `--storybook` (Storybook + a11y/docs/links/themes/onboarding addons)
- `--claude` / `--claude-code`
- `--stripe`
- `--supabase`
- `--fumadocs` (Fumadocs + Shiki docs starter)
- `--all-next-extras`

## Project standards included

Every scaffolded project gets a baseline from `templates/baseline/`:

- `CODEOWNERS`
- `CONTRIBUTING.md`
- `SECURITY.md`
- issue/PR templates
- Dependabot config
- CI + release workflows with explicit permissions
- dependency review workflow

## Commands

| Command | Purpose |
| --- | --- |
| `scripts/doctor` | Validate required and optional local tooling |
| `scripts/lint-shell` | Run shellcheck against scripts/templates |
| `scripts/doctor-ci` | Check repository baseline quality and output report |
| `scripts/self-test` | Execute scaffold/profile/benchmark validation matrix |
| `scripts/smoke` | Run `lint`, `typecheck`, `test`, `build` if present |
| `scripts/changelog` | Build/apply changelog sections from commit history |
| `scripts/bench` | Benchmark commands and export report artifacts |
| `scripts/release` | Guarded release dry-run and optional apply flow |
| `scripts/profile-show` | Inspect a profile definition |
| `scripts/profile-apply` | Apply profile templates/workflows to an existing repo |
| `scripts/scaffold` | Create a new repo from profile template + baseline |
| `scripts/image-opt` | Optimize image assets with local tools |
| `scripts/log-scan` | Extract high-signal errors from log files |

`justfile` and `Makefile` wrappers are included for teams that prefer command runners.

## Docs

- `docs/getting-started.md`
- `docs/profiles.md`
- `docs/scaffold.md`
- `docs/release-setup.md`
- `docs/proof/README.md`

## Local rituals

- Run `scripts/smoke` before pushing.
- Keep PRs focused and small.
- Prefer deterministic scripts over manual release steps.

## License

MIT. See `LICENSE`.
