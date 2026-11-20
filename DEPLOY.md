# Deploying to the Hostinger VPS — medexacaresolutions.com

The site runs as a Node.js app (Next.js) under PM2, behind Nginx, with a free Let's Encrypt certificate.

```
Visitor ──HTTPS──> Nginx :443 ──> Next.js :3000 (PM2, user "medexa") ──> .data/leads.jsonl
                                                                   └──> SMTP (Hostinger mail) → lead emails
```

You need: the VPS IP address, root SSH access, and access to hPanel for DNS and email.
Every command below runs **on the VPS** unless it says otherwise.

---

## 1. Point the domain at the VPS (hPanel)

hPanel → **Domains → medexacaresolutions.com → DNS / Nameservers → DNS records**

| Type | Name | Points to | TTL |
| --- | --- | --- | --- |
| A | `@` | your VPS IP | 3600 |
| A | `www` | your VPS IP | 3600 |

Delete any other `A` or `CNAME` record for `@` or `www` (Hostinger adds a parking record by default).
Check it from your PC — both must print the VPS IP before step 5:

```bash
nslookup medexacaresolutions.com
```

## 2. Create the mailbox for lead emails (hPanel)

hPanel → **Emails** → create `info@medexacaresolutions.com` (or the address you prefer) and note its password.
Add the MX/SPF/DKIM records hPanel offers, so emails from the site are not marked as spam.

## 3. Prepare the server (one time)

SSH in as root (Hostinger VPS panel shows the command), then:

```bash
curl -fsSL https://raw.githubusercontent.com/quantumsynergysols-web/Medexa-Care-Solution/main/deploy/setup-server.sh -o setup-server.sh
bash setup-server.sh
```

This installs Node.js 22, Nginx, PM2, Certbot and the firewall, creates the `medexa` user and clones the code
into `/var/www/medexa`.

## 4. Add the secrets and start the site

```bash
cd /var/www/medexa
sudo -u medexa cp .env.example .env.production
sudo -u medexa nano .env.production      # fill SMTP_PASS, check the email addresses
chmod 600 .env.production
sudo -u medexa bash deploy/deploy.sh
```

The last line installs, builds, starts the app and ends with `Home page answered HTTP 200`.

## 5. Turn on HTTPS

Once the DNS from step 1 resolves to the VPS:

```bash
certbot --nginx -d medexacaresolutions.com -d www.medexacaresolutions.com --redirect -m info@medexacaresolutions.com --agree-tos
```

Certificates renew automatically.

## 6. Check it live

- `https://medexacaresolutions.com` opens; `http://` and `www.` both redirect to it.
- Submit the contact form with your own email: the team mailbox gets the alert, you get the acknowledgement.
- `https://medexacaresolutions.com/sitemap.xml` lists 30 pages.

---

## Updating the site later

Push changes to the `main` branch on GitHub, then on the VPS:

```bash
sudo -u medexa bash /var/www/medexa/deploy/deploy.sh
```

## Day-to-day commands

| Task | Command |
| --- | --- |
| App status | `sudo -u medexa pm2 status` |
| App logs (email errors show here) | `sudo -u medexa pm2 logs medexa-web --lines 100` |
| Restart | `sudo -u medexa pm2 restart medexa-web` |
| All leads received | `cat /var/www/medexa/.data/leads.jsonl` |
| Nginx errors | `tail -n 50 /var/log/nginx/error.log` |

## Backups

`/var/www/medexa/.data/leads.jsonl` is the only data on the server. Turn on Hostinger's weekly VPS snapshot
(VPS panel → **Backups**), or copy that file off the server regularly.
