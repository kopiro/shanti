#!/usr/bin/env sh
set -eu

PORT="${PORT:-8000}"

cd "$(dirname "$0")"
exec python3 -m http.server "$PORT" --directory static
