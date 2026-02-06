# Profiles

Profiles define reusable CI/release presets and expected script contracts.

## Profile matrix

| Profile | Release type | Setup Node | CI command set | Expected scripts |
| --- | --- | --- | --- | --- |
| `node-cli` | `node` | yes | `npm ci`, `lint`, `typecheck`, `test`, `build` | `lint`, `typecheck`, `test`, `build` |
| `next-app` | `node` | yes | `npm ci`, `lint`, `typecheck`, `test`, `build` | `lint`, `typecheck`, `test`, `build` |
| `github-action` | `simple` | no | `bash -n scripts/main.sh`, `./scripts/main.sh --self-test` | none |

## Inspect a profile

```bash
./scripts/profile-show node-cli
```

## Apply a profile to an existing repository

```bash
./scripts/profile-apply next-app ../my-repo --owner @PetriLahdelma
```

## Notes

- Profiles generate `ci.yml` and `release.yml`.
- Dependabot config is profile-aware (Node profiles include npm updates).
- Existing files are preserved unless `--force` is used.
- `next-app` includes Next.js App Router + Tailwind + shadcn-style UI + Radix + Vercel defaults.
- `next-app` optional extras include motion, remotion, Vercel agents, Storybook, Claude, Stripe, Supabase, and Fumadocs + Shiki scaffolding.
- `--all-next-extras` enables every `next-app` extra flag in one command.
- Baseline includes dependency review workflow for pull requests.

## Next-app extras matrix

| Flag | Adds | Notes |
| --- | --- | --- |
| `--motion` | `app/motion/page.tsx`, `components/motion/fade-up.tsx` | Framer Motion route/components starter |
| `--remotion` | `video/*`, `video:dev`, `video:render` scripts | Remotion composition starter |
| `--vercel-agents` / `--vercel-agent-brovers` | `app/api/agent/route.ts`, `app/agent/page.tsx` | Adds `OPENAI_API_KEY` to `.env.example` |
| `--storybook` | `.storybook/*`, `components/ui/button.stories.tsx` | Adds Storybook addons: a11y/docs/links/themes/onboarding |
| `--claude` / `--claude-code` | `CLAUDE.md` | Collaboration scaffold for Claude Code workflows |
| `--stripe` | `app/api/stripe/checkout/route.ts`, `app/billing/page.tsx` | Adds Stripe env vars to `.env.example` |
| `--supabase` | `app/supabase/page.tsx`, `app/api/supabase/health/route.ts`, `lib/supabase/*` | Adds Supabase env vars to `.env.example` |
| `--fumadocs` | `app/docs/page.tsx`, `content/docs/getting-started.mdx` | Installs `fumadocs-core`, `fumadocs-mdx`, `shiki` |
