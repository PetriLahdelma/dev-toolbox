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

## 5) Validate scaffold output

```bash
./scripts/doctor-ci ./my-cli --strict
```

## 5) Optional wrappers

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
