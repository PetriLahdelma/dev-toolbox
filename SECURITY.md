# Security Policy

## Scope

This repository contains automation scripts and templates used to scaffold and maintain repositories.

## Reporting a vulnerability

Do not open public issues for security problems.

Report privately:

- GitHub advisories: https://github.com/PetriLahdelma/dev-toolbox/security/advisories/new
- Email: mail@digitaltableteur.com

Please include:

- Clear description of the issue
- Reproduction steps
- Potential impact
- Suggested remediation (if known)

## Response targets

- Initial acknowledgement: within 48 hours
- Triage/update: within 7 days
- Fix timeline: based on severity and blast radius

## Security considerations

- Generated templates should not leak secrets or hardcode private credentials.
- Scripts should prefer explicit, deterministic behavior.
- `--apply` actions should remain opt-in where destructive behavior could occur.
