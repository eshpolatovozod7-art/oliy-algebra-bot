#!/usr/bin/env bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

if [ ! -d "venv" ]; then
    echo "Virtual muhit yaratilmoqda..."
    python3 -m venv venv
    ./venv/bin/pip install -r requirements.txt
fi

echo "🚀 Oliy Algebra Bot ishga tushirilmoqda..."
./venv/bin/python3 bot/main.py
