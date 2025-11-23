<<<<<<< HEAD
# azan
 # Azan  Spiritual Healing &amp; Ancestral Wisdom  This project is now maintained under the Azan organization. All references to previous owners have been removed.
=======
# GrandMasterHeal - Spiritual Healing Platform

An independent, self-hosted web platform for Chief Tanga Azan Wani's spiritual healing services. This project is fully decoupled from Replit and can be deployed anywhere.

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (local or remote)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd GrandMasterHeal
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your database URL and other configuration.

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5000`

6. **Type check your code**
   ```bash
   npm run check
   ```

## Project Structure

```
├── client/              # React frontend (Vite + React 18)
│   ├── src/
│   │   ├── App.tsx      # Main app component
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable UI components
│   │   └── index.css    # Global styles
│   └── index.html       # HTML entry point
│
├── server/              # Express backend
│   ├── app.ts           # Express app setup
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Database operations
│   ├── index-dev.ts     # Development server (with Vite middleware)
│   └── index-prod.ts    # Production server (static file serving)
│
├── shared/              # Shared code
│   └── schema.ts        # Database schema & validation
│
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Available Scripts

### Development
- `npm run dev` - Start development server with hot reload
- `npm run check` - Run TypeScript type checker

### Production
- `npm run build` - Build client and bundle server for production
- `npm run start` - Start production server (requires `npm run build` first)

### Database
- `npm run db:push` - Sync database schema with PostgreSQL

## Deployment

### Option 1: Deploy on Railway

Railway makes it easy to deploy Node.js apps with databases.

1. Push your code to GitHub
2. Go to [railway.app](https://railway.app)
3. Create new project → GitHub repo
4. Configure environment variables (DATABASE_URL, PORT)
5. Railway will auto-build and deploy

### Option 2: Deploy on Heroku

1. Install Heroku CLI
2. ```bash
   heroku create your-app-name
   heroku addons:create heroku-postgresql:hobby-dev
   git push heroku main
   ```

### Option 3: Deploy on DigitalOcean App Platform

1. Push code to GitHub
2. Go to DigitalOcean App Platform
3. Select GitHub repo
4. Configure environment variables
5. Deploy

### Option 4: Self-Hosted (VPS)

1. Set up a PostgreSQL database (or use managed PostgreSQL)
2. Clone repo on your server
3. Install Node.js and npm
4. Create `.env.local` with your database URL and PORT
5. Run:
   ```bash
   npm install
   npm run build
   npm run start
   ```
6. Use PM2 or systemd to keep the app running:
   ```bash
   npm install -g pm2
   pm2 start "npm run start" --name "grandmasterheal"
   pm2 save
   ```
7. Set up a reverse proxy (Nginx/Apache) to handle SSL and domain routing

## Database Setup

### Using Neon (Recommended for Development/Small Projects)

1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new PostgreSQL project
3. Copy the connection string (DATABASE_URL)
4. Add to `.env.local`

### Using Local PostgreSQL

```bash
# Create database locally
createdb grandmasterheal

# Set DATABASE_URL in .env.local:
DATABASE_URL=postgresql://localhost:5432/grandmasterheal
```

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express, Node.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Radix UI, shadcn/ui
- **Validation**: Zod
- **Build**: Vite, esbuild

## Configuration Files

- `.env.example` - Template for environment variables
- `vite.config.ts` - Frontend build configuration
- `tailwind.config.ts` - Tailwind CSS theme
- `tsconfig.json` - TypeScript configuration
- `drizzle.config.ts` - Database migration configuration

## Environment Variables

See `.env.example` for the complete list. Key variables:

- `DATABASE_URL` (required) - PostgreSQL connection string
- `PORT` (optional, default 5000) - Server port
- `NODE_ENV` (optional, default development) - Environment mode

## Features

✨ **What's Included**:
- Full-stack TypeScript application
- Responsive, modern UI with Tailwind CSS
- RESTful API backend
- PostgreSQL database with ORM
- Hot module reload in development
- Production build optimization
- Type-safe database operations

## Troubleshooting

### "Could not find the build directory" error
Run `npm run build` before `npm run start`

### Database connection error
- Verify DATABASE_URL is correct
- Check that PostgreSQL is running
- Run `npm run db:push` to sync schema

### Port already in use
- Change PORT in `.env.local` to a different value (e.g., 3000)
- Or kill the process using the current port

### Hot reload not working (dev)
- Ensure `npm run dev` is running
- Check that you're editing files in the `client/` or `server/` directories

## Contributing

This is a custom project for Chief Tanga Azan Wani Spiritual Healing. Modifications should follow the design guidelines in `design_guidelines.md`.

## License

MIT

## Support

For deployment support or configuration questions, refer to the documentation of your chosen hosting provider or database service.

---

**This project is fully independent and ready for self-hosted deployment!** 🚀
>>>>>>> 64a32a2 (chore: update header GitHub link and add GH Pages workflow + deployment docs)
