#!/usr/bin/env bash
set -euo pipefail

if [[ "${1:-}" == "--self-test" ]]; then
  echo "self-test ok"
  exit 0
fi

echo "action message: ${1:-hello}"
