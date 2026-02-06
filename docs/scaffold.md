# Scaffolding

Use scaffolding to bootstrap a new repository with profile defaults and maintainer baseline.

## Examples

```bash
# Node CLI project
./scripts/scaffold my-cli node-cli . --owner @PetriLahdelma

# Next.js app in /tmp without installing deps
./scripts/scaffold my-next next-app /tmp --no-install --owner @PetriLahdelma

# Next.js app with feature packs
./scripts/scaffold my-next-pro next-app . --owner @PetriLahdelma --motion --remotion --vercel-agents --storybook --claude --stripe --supabase --fumadocs

# Composite GitHub Action project
./scripts/scaffold my-action github-action . --owner @PetriLahdelma
```

## What scaffold does

1. Copies profile starter files from `templates/projects/<profile>/`.
2. Applies baseline standards via `scripts/profile-apply`.
3. Initializes git on `main`.
4. Installs npm dependencies (unless `--no-install`).
5. Prints follow-up commands.

Generated defaults include:

- CI workflow with explicit permissions + concurrency controls.
- Release Please workflow with explicit permissions + concurrency controls.
- Dependency Review workflow for pull requests to `main`.

## Next app feature flags

- `--motion`: Adds Framer Motion starter components and route.
- `--remotion`: Adds Remotion composition starter and video scripts.
- `--vercel-agents`: Adds Vercel AI SDK route + chat demo page.
- `--storybook`: Adds Storybook with a11y/docs/links/themes/onboarding addons.
- `--claude` or `--claude-code`: Adds `CLAUDE.md` starter guidance.
- `--stripe`: Adds Stripe checkout starter route + billing page.
- `--supabase`: Adds Supabase server/browser client starter helpers + route.
- `--fumadocs`: Adds Fumadocs + Shiki docs starter route and content source.
- `--all-next-extras`: Enables all Next app feature flags at once.

## Validation recommendation

After scaffolding:

```bash
./scripts/doctor-ci <new-repo-path> --strict
```
