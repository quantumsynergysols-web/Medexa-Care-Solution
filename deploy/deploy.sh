#!/usr/bin/env bash
# Build and (re)start the site. Run as the app user on the VPS:
#   sudo -u medexa bash /var/www/medexa/deploy/deploy.sh
set -euo pipefail

APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$APP_DIR"

if [ ! -f .env.production ]; then
  echo "Missing $APP_DIR/.env.production — copy .env.example and fill it in first." >&2
  exit 1
fi

echo "==> Pulling latest code"
git pull --ff-only

echo "==> Installing dependencies"
npm ci

echo "==> Building"
npm run build

echo "==> Starting / reloading"
if pm2 describe medexa-web >/dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi
pm2 save

echo "==> Health check"
sleep 3
code=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/)
echo "Home page answered HTTP $code"
[ "$code" = "200" ]
