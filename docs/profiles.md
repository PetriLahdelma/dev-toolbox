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
- Baseline includes dependency review workflow for pull requests.
