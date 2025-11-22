# Chief Tanga Azan Wani - Spiritual Healing Website

## Overview

This is a full-stack web application for Chief Tanga Azan Wani's spiritual healing practice. The site provides information about ancestral healing services, allows users to submit contact inquiries, and displays testimonials from clients. Built as a modern single-page application with React frontend and Express backend.

**Core Purpose**: Professional spiritual healing services website with contact forms, service descriptions, testimonials, and educational content about ancestral healing practices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool

**Routing**: Wouter for client-side routing (lightweight alternative to React Router)

**UI Component System**: 
- shadcn/ui components built on Radix UI primitives
- Tailwind CSS for styling with custom design system
- "New York" style variant from shadcn
- Component aliases configured for clean imports (@/components, @/lib, etc.)

**State Management**:
- TanStack Query (React Query) for server state and data fetching
- React Hook Form with Zod validation for form handling
- React Context for theme management (dark/light mode)

**Design System**:
- Custom color scheme with CSS variables for theming
- Automatic dark/light mode detection via `prefers-color-scheme`
- Manual theme toggle with localStorage persistence
- Typography: Playfair Display (serif) for headings, Inter (sans-serif) for body
- Spiritual/wellness aesthetic with deep purples, midnight blues, and warm earth tones

**Key Pages**:
- Home with service overview
- About Chief Tanga
- Individual service detail pages (9 services)
- Testimonials with filtering
- Contact form
- FAQ, Gallery, Blog, Privacy, Terms

### Backend Architecture

**Framework**: Express.js on Node.js

**API Structure**:
- RESTful endpoints under `/api` prefix
- POST `/api/contact` - Submit contact form
- GET `/api/testimonials` - Retrieve testimonials

**Development vs Production**:
- Development: Vite dev server middleware for HMR
- Production: Static file serving from dist/public
- Separate entry points (index-dev.ts vs index-prod.ts)

**Data Validation**: Zod schemas shared between frontend and backend via `@shared` module

**Current Storage**: In-memory storage implementation (MemStorage class) with pre-seeded testimonial data

### Data Storage Solutions

**ORM**: Drizzle ORM configured for PostgreSQL

**Schema Definition** (shared/schema.ts):
- `contact_submissions` table - stores contact form inquiries (id, name, email, phone, serviceInterest, message, createdAt)
- `testimonials` table - stores client testimonials (id, name, service, rating, testimonial, location, featured, createdAt)

**Database Setup**:
- PostgreSQL via Neon serverless driver (@neondatabase/serverless)
- Drizzle Kit for migrations (output to ./migrations)
- Environment variable: DATABASE_URL required for connection
- Schema uses UUID primary keys with PostgreSQL's gen_random_uuid()

**Note**: The application currently uses in-memory storage (MemStorage class) but has database schemas and ORM configuration ready for PostgreSQL integration. The storage interface (IStorage) allows easy swapping between memory and database implementations.

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives (accordion, dialog, dropdown, navigation, etc.)
- embla-carousel-react for image carousels
- cmdk for command palette functionality
- lucide-react for icons
- react-icons for social media icons (SiWhatsapp, SiFacebook)

**Form & Validation**:
- react-hook-form for form state management
- @hookform/resolvers for Zod integration
- zod for schema validation
- drizzle-zod for automatic schema generation from database tables

**Styling**:
- Tailwind CSS with PostCSS
- class-variance-authority for component variants
- clsx and tailwind-merge for conditional classes

**Date Handling**: date-fns for date formatting

**Database**:
- Drizzle ORM (drizzle-orm)
- Neon serverless PostgreSQL (@neondatabase/serverless)
- Drizzle Kit (drizzle-kit) for migrations

**Session Management**: connect-pg-simple (PostgreSQL session store, currently unused but available)

**Development Tools**:
- Replit-specific plugins for development banner, error overlay, and cartographer
- tsx for TypeScript execution
- esbuild for production builds

**Third-party Integrations Configured**:
- WhatsApp contact links
- Facebook Messenger contact links
- Social media links (Facebook, Instagram - placeholders)
- Google Fonts (Playfair Display, Inter)

**Asset Management**: 
- Generated spiritual-themed images stored in attached_assets directory
- Vite alias configured for @assets imports
- Images include: hero backgrounds, energy visualizations, consultation spaces