#!/usr/bin/env bash
# One-time VPS setup for medexacaresolutions.com (Ubuntu 22.04 / 24.04). Run as root:
#   bash setup-server.sh
set -euo pipefail

DOMAIN="medexacaresolutions.com"
REPO="https://github.com/quantumsynergysols-web/Medexa-Care-Solution.git"
APP_USER="medexa"
APP_DIR="/var/www/medexa"

echo "==> System packages"
apt-get update
apt-get install -y curl git nginx ufw certbot python3-certbot-nginx

echo "==> Node.js 22 LTS"
if ! command -v node >/dev/null || [ "$(node -p 'process.versions.node.split(".")[0]')" -lt 20 ]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi
npm install -g pm2

echo "==> App user and code"
id -u "$APP_USER" >/dev/null 2>&1 || adduser --disabled-password --gecos "" "$APP_USER"
mkdir -p "$APP_DIR"
chown "$APP_USER":"$APP_USER" "$APP_DIR"
if [ ! -d "$APP_DIR/.git" ]; then
  sudo -u "$APP_USER" git clone "$REPO" "$APP_DIR"
fi

echo "==> Firewall"
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "==> Nginx site"
cp "$APP_DIR/deploy/nginx/$DOMAIN.conf" "/etc/nginx/sites-available/$DOMAIN"
ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

echo "==> PM2 on boot"
pm2 startup systemd -u "$APP_USER" --hp "/home/$APP_USER" >/dev/null

cat <<NEXT

Server is ready. Next steps (see DEPLOY.md):
  1. Create $APP_DIR/.env.production from .env.example (owner $APP_USER, chmod 600).
  2. sudo -u $APP_USER bash $APP_DIR/deploy/deploy.sh
  3. certbot --nginx -d $DOMAIN -d www.$DOMAIN --redirect -m <your-email> --agree-tos
NEXT
