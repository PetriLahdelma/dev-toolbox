# Proof Logs

These logs are captured from a real scaffold and validation run.

## Captured commands

```bash
./scripts/scaffold demo-next next-app /tmp --all-next-extras --owner @PetriLahdelma --no-install --force
npm --prefix /tmp/demo-next install
./scripts/doctor-ci /tmp/demo-next --strict
./scripts/smoke /tmp/demo-next
```

## Artifacts

- `scaffold-next-app.log`
- `install-next-app.log`
- `doctor-ci-next-app.log`
- `smoke-next-app.log`
