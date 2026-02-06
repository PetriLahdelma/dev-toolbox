# Getting Started

## 1) Clone and verify prerequisites

```bash
git clone https://github.com/PetriLahdelma/dev-toolbox.git
cd dev-toolbox
./scripts/doctor
```

## 2) Validate repository baseline

```bash
./scripts/doctor-ci . --strict
```

## 3) Run full toolbox self-test (recommended)

```bash
./scripts/self-test
```

## 4) Scaffold your first repo

```bash
./scripts/scaffold my-cli node-cli . --owner @PetriLahdelma
```

Or scaffold the full Next.js stack:

```bash
./scripts/scaffold my-next next-app . --owner @PetriLahdelma --all-next-extras
```

Or choose specific Next.js extras:

```bash
./scripts/scaffold my-next next-app . --owner @PetriLahdelma --motion --remotion --vercel-agents --storybook --claude --stripe --supabase --fumadocs
```

## 5) Validate scaffold output

```bash
./scripts/doctor-ci ./my-cli --strict
```

If you scaffolded a Next app, validate that repo path instead:

```bash
./scripts/doctor-ci ./my-next --strict
```

## 6) Configure env vars for feature packs (if used)

Some extras inject placeholders into `.env.example`:

- `--vercel-agents`: `OPENAI_API_KEY`
- `--stripe`: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_APP_URL`
- `--supabase`: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`

Apply them locally:

```bash
cp my-next/.env.example my-next/.env.local
```

## 7) Optional wrappers

If you use `just`:

```bash
just doctor
just doctor-ci
just scaffold my-cli node-cli .
```

If you use `make`:

```bash
make doctor
make doctor-ci
make scaffold NAME=my-cli PROFILE=node-cli PARENT=.
```
