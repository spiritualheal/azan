# Azan Spiritual Healing & Ancestral Wisdom

This project is now maintained under the Azan organization. All references to previous owners have been removed.

## Project Overview

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
