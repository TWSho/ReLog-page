#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/relog-site"
npm run build
echo "ローカルビルド完了。公開は main への push 後、GitHub Actions で行われます。"
echo "初回のみ GitHub Settings → Pages → Source を GitHub Actions に設定してください。"
