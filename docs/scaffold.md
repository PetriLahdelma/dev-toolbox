# Scaffolding

Use scaffolding to bootstrap a new repository with profile defaults and maintainer baseline.

## Examples

```bash
# Node CLI project
./scripts/scaffold my-cli node-cli . --owner @PetriLahdelma

# Next.js app in /tmp without installing deps
./scripts/scaffold my-next next-app /tmp --no-install --owner @PetriLahdelma

# Composite GitHub Action project
./scripts/scaffold my-action github-action . --owner @PetriLahdelma
```

## What scaffold does

1. Copies profile starter files from `templates/projects/<profile>/`.
2. Applies baseline standards via `scripts/profile-apply`.
3. Initializes git on `main`.
4. Installs npm dependencies (unless `--no-install`).
5. Prints follow-up commands.

## Validation recommendation

After scaffolding:

```bash
./scripts/doctor-ci <new-repo-path> --strict
```
