# __REPO_NAME__

Production-ready Node CLI starter scaffolded by `dev-toolbox`.

## Features

- ESM-based CLI entrypoint with structured command routing
- Built-in `--help` and `--version`
- Testable `run(args, io)` function for deterministic tests
- CI-ready scripts (`lint`, `typecheck`, `test`, `build`)

## Quickstart

```bash
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

## Usage

```bash
# Show help
node dist/index.js --help

# Show version
node dist/index.js --version

# Greet command
node dist/index.js greet Petra

# Lightweight runtime diagnostics
node dist/index.js doctor
```

## Scripts

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm run clean`

## Notes

- Update package metadata (`description`, `keywords`, `author`, `repository`) before publishing.
- Add real command handlers under `src/index.js` as your CLI grows.
