#!/usr/bin/env sh
set -eu

PORT="${PORT:-8000}"
HOST="${HOST:-0.0.0.0}"

cd "$(dirname "$0")"
exec python3 -m http.server "$PORT" --bind "$HOST" --directory static
