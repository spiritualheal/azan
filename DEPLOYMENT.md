# GrandMasterHeal Deployment Guide

This guide covers deploying GrandMasterHeal to various hosting platforms. This project is **fully independent** and not tied to any platform like Replit.

## Table of Contents
1. [Local Development](#local-development)
2. [Railway Deployment](#railway-deployment)
3. [Heroku Deployment](#heroku-deployment)
4. [DigitalOcean Deployment](#digitalocean-deployment)
5. [VPS/Self-Hosted](#vpsvelf-hosted)
6. [Database Setup](#database-setup)
7. [SSL/HTTPS Setup](#sslhttps-setup)

---

## Local Development

### Prerequisites
- Node.js 18.0 or higher ([download](https://nodejs.org/))
- npm or yarn
- PostgreSQL (local or remote)
- Git

### Setup Steps

1. **Clone and install**
   ```bash
   git clone <repository-url>
   cd GrandMasterHeal
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your DATABASE_URL
   ```

3. **Initialize database**
   ```bash
   npm run db:push
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5000`

5. **Type check**
   ```bash
   npm run check
   ```

---

## Railway Deployment

Railway is the easiest option for Node.js + PostgreSQL deployment.

### Steps

1. **Push to GitHub**
   - Ensure your code is on GitHub (public or private)

2. **Create Railway Project**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub"
   - Select your repository

3. **Add PostgreSQL**
   - In Railway dashboard, click "Add Service" → "PostgreSQL"
   - Railway auto-sets `DATABASE_URL` environment variable

4. **Configure Build**
   - Railway auto-detects `package.json` and runs:
     ```
     npm install
     npm run build
     ```
   - Sets start command to `npm start` (from package.json)

5. **Deploy**
   - Click "Deploy" — Railway builds and deploys automatically
   - Your app is live at `https://<project-name>.up.railway.app`

### Environment Variables
Railway automatically sets `DATABASE_URL`. Add others in Railway dashboard:
- `NODE_ENV=production`
- `PORT=8000` (Railway assigns port automatically)

---

## GitHub Pages (Frontend-only)

This repo contains a full-stack app (Express backend + Vite frontend). GitHub Pages can host the prebuilt *frontend* (static assets) while the backend must be deployed elsewhere (Railway, Heroku, VPS, etc.). The repository includes a GitHub Actions workflow that will build the project and publish the frontend to the `gh-pages` branch.

How it works:
- Workflow: `.github/workflows/deploy-gh-pages.yml` runs on pushes to `main`/`master`.
- It runs `npm ci` and `npm run build`, then publishes the `dist/public` directory to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

Steps to enable GitHub Pages deployment:
1. Push your repo to GitHub on the `main` (or `master`) branch.
2. Ensure `dist/public` is the correct directory containing the built client (the workflow uses `npm run build`).
3. In your GitHub repository settings → Pages, set the source to the `gh-pages` branch (root). GitHub will serve the static client.
4. To use a custom domain, copy `CNAME.example` to `CNAME`, replace with your domain, and commit it to the root of the repository; the workflow will publish it to the `gh-pages` branch so GitHub Pages picks it up.

Limitations:
- The backend is not hosted on GitHub Pages. Keep your API hosted separately and update the client-side API base URLs (via environment variables or runtime configuration) to point to the deployed API.


---

## Heroku Deployment

### Prerequisites
- Heroku account (free tier available)
- Heroku CLI ([install](https://devcenter.heroku.com/articles/heroku-cli))

### Steps

1. **Login to Heroku**
   ```bash
   heroku login
   ```

2. **Create Heroku app**
   ```bash
   heroku create grandmasterheal-app
   ```

3. **Add PostgreSQL database**
   ```bash
   heroku addons:create heroku-postgresql:hobby-dev
   ```
   This sets `DATABASE_URL` automatically.

4. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   ```

5. **Deploy code**
   ```bash
   git push heroku main
   # or: git push heroku <your-branch>
   ```

6. **Initialize database** (if needed)
   ```bash
   heroku run npm run db:push
   ```

7. **View your app**
   ```bash
   heroku open
   ```
   Your app is live at `https://grandmasterheal-app.herokuapp.com`

### View Logs
```bash
heroku logs --tail
```

---

## DigitalOcean Deployment

### Option A: App Platform (Managed)

1. **Push to GitHub**
   - Ensure your code is on GitHub

2. **Create App**
   - Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
   - Click "Create App" → Select GitHub repo

3. **Configure Build**
   - App Platform auto-detects `package.json`
   - Build command: `npm run build`
   - Start command: `npm start`

4. **Add Database**
   - In app spec, add PostgreSQL database
   - Set `DATABASE_URL` environment variable

5. **Deploy**
   - Click "Deploy" — DigitalOcean builds and deploys

### Option B: Droplet (Virtual Machine)

See [VPS/Self-Hosted](#vpsvelf-hosted) section below.

---

## VPS/Self-Hosted

### Prerequisites
- Linux VPS (Ubuntu 20.04+ recommended)
- SSH access
- Domain name (optional but recommended)

### Step-by-Step Setup

#### 1. SSH into VPS
```bash
ssh root@your-vps-ip
```

#### 2. Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 3. Install PostgreSQL
```bash
sudo apt-get update
sudo apt-get install -y postgresql postgresql-contrib
```

#### 4. Create PostgreSQL User & Database
```bash
sudo -u postgres createuser grandmaster
sudo -u postgres createdb -O grandmaster grandmasterheal
```

#### 5. Clone Repository
```bash
cd /var/www
git clone <your-repo-url> grandmasterheal
cd grandmasterheal
npm install
```

#### 6. Configure Environment
```bash
nano .env.local
```
Add:
```
DATABASE_URL=postgresql://grandmaster:password@localhost:5432/grandmasterheal
PORT=3000
NODE_ENV=production
```

#### 7. Build Application
```bash
npm run build
npm run db:push
```

#### 8. Install & Configure PM2
```bash
sudo npm install -g pm2
pm2 start "npm run start" --name "grandmasterheal"
pm2 save
pm2 startup
```

#### 9. Install & Configure Nginx (Reverse Proxy)
```bash
sudo apt-get install -y nginx
```

Create `/etc/nginx/sites-available/grandmasterheal`:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/grandmasterheal /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 10. Set Up SSL with Let's Encrypt
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

#### 11. Enable Auto-Updates
```bash
cd /var/www/grandmasterheal
git pull origin main
npm install
npm run build
npm run db:push
pm2 restart grandmasterheal
```

---

## Database Setup

### Option 1: Neon (Recommended for Development)

Free, serverless PostgreSQL:

1. Go to [neon.tech](https://neon.tech)
2. Create account and project
3. Copy connection string
4. Add to `.env.local`:
   ```
   DATABASE_URL=postgresql://user:password@ep-xxx.neon.tech/database
   ```

### Option 2: Railway PostgreSQL
- Added automatically when deploying on Railway

### Option 3: DigitalOcean Managed Database
- More stable for production
- Go to [Managed Databases](https://cloud.digitalocean.com/databases)
- Create PostgreSQL database
- Copy connection URI

### Option 4: Local PostgreSQL
```bash
# macOS
brew install postgresql
brew services start postgresql

# Ubuntu
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql

# Create database
createdb grandmasterheal

# Add to .env.local
DATABASE_URL=postgresql://localhost:5432/grandmasterheal
```

---

## SSL/HTTPS Setup

### Using Let's Encrypt (Free)

#### On VPS with Nginx
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

#### On VPS with Apache
```bash
sudo apt-get install certbot python3-certbot-apache
sudo certbot --apache -d yourdomain.com
```

### Using Cloudflare (Simple)
1. Go to [Cloudflare](https://cloudflare.com)
2. Add your domain
3. Update nameservers at your registrar
4. Enable Full SSL in Cloudflare dashboard

### Automatic Renewal
```bash
sudo certbot renew --dry-run
# Auto-renewal runs via cron daily
```

---

## Environment Variables Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `DATABASE_URL` | Yes | - | PostgreSQL connection string |
| `PORT` | No | 5000 | Server port |
| `NODE_ENV` | No | development | 'development' or 'production' |

Full list in `.env.example`

---

## Common Issues & Fixes

### Build fails: "DATABASE_URL not found"
- Set `DATABASE_URL` in your platform's environment variables before deploying
- On Railway/Heroku/DO: database is auto-set when you add PostgreSQL

### App crashes on start: "Could not find the build directory"
- Run `npm run build` before deployment
- Most platforms auto-run this — check build logs

### Port 3000/5000 already in use locally
```bash
# Change PORT in .env.local
PORT=8000
npm run dev
```

### Database migration fails
```bash
# Run migrations manually
npm run db:push

# Check connection
psql $DATABASE_URL -c "\dt"
```

### Logs not showing errors
```bash
# View platform-specific logs:

# Railway
railway logs -f

# Heroku
heroku logs --tail

# PM2
pm2 logs grandmasterheal
```

---

## Monitoring & Maintenance

### Check App Status
```bash
# Railway
railway status

# Heroku
heroku ps

# PM2 (self-hosted)
pm2 status
```

### View Logs
```bash
# Railway
railway logs -f

# Heroku
heroku logs --tail

# PM2
pm2 logs grandmasterheal
```

### Restart App
```bash
# Railway
railway down && railway up

# Heroku
heroku restart

# PM2
pm2 restart grandmasterheal
```

---

## Scaling & Performance

### For Small Traffic (< 1,000 DAU)
- Railway Hobby plan or Heroku free tier
- Free tier PostgreSQL (Neon hobby)
- Single Node.js process

### For Medium Traffic (1,000 - 10,000 DAU)
- Heroku Professional Dyos or Railway Production
- PostgreSQL Standard instance
- Add caching/CDN if needed

### For Large Traffic (> 10,000 DAU)
- DigitalOcean App Platform with multiple replicas
- DigitalOcean Managed PostgreSQL
- Redis cache layer
- CDN (Cloudflare, AWS CloudFront)

---

## Backup & Recovery

### Backup Database
```bash
# Neon auto-backs up
# Railway auto-backs up

# DigitalOcean Managed DB
pg_dump -h dbhost -U user -d database -F c > backup.sql

# Local PostgreSQL
pg_dump -U postgres grandmasterheal > backup.sql
```

### Restore Database
```bash
pg_restore -d grandmasterheal backup.sql
```

---

## Additional Resources

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

---

**Your application is fully independent and ready for production deployment!** 🚀
