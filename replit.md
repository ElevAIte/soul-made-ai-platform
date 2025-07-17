# replit.md

## Overview

This is a full-stack web application for a course marketplace called "Soul Made AI" that allows creators to monetize their skills and soul-led gifts. The platform emphasizes "One soulful product. One powerful path" - helping conscious creators focus on building one authentic offer rather than many. Features course creation, purchasing, and management capabilities with Stripe payment processing and Replit authentication.

Core messaging: "Follow Your Heart, Not Your Head" - guiding creators through intuition rather than market research or fear-based thinking.

## User Preferences

Preferred communication style: Simple, everyday language.

### Navigation Updates (COMPLETED ✓)
- Changed "Courses" to "Products" in header navigation ✓
- Added "Browse by Category" section with 4 product types ✓
- Restored footer with legal links and Beta Pricing notice ✓

### Page Development (COMPLETED ✓)
- Created functional Products page with category filtering ✓
- Built comprehensive Contact page with form and FAQ section ✓
- Created About page with Penelope Silver's story and mission ✓
- Made all category cards clickable and linked to products page ✓
- Added sticky filter bar for browsing by product type ✓
- Updated business contact info to penelope@soulmadeai.com ✓
- Created comprehensive legal documentation suite: Privacy Policy, Terms of Service, AI Policy, and Refund Policy ✓
- Built Success Stories page with creator testimonials, earnings statistics, and professional badges ✓

### Platform Architecture (FINALIZED ✓)
- Digital file marketplace: creators list products, buyers purchase, receive downloadable PDF files ✓
- No external hosting needed: customers get direct PDF downloads after purchase ✓
- Simple product listing: title, description, price, category, optional image ✓
- File upload: creators can upload PDF files that customers receive after purchase ✓
- Clean user journey: list product → purchase → download PDF ✓
- 10% platform fee structure with 90% going to creators ✓
- USER FEEDBACK: "Absolutely perfect you nailed it!!!" - architecture confirmed as ideal ✓
- USER FEEDBACK: "AMAIZNG!!!! IM SOOO HAPPPY" - aurora image implementation successful ✓
- USER FEEDBACK: "thank you its great!" - Success Stories page implementation successful ✓

### Accessibility Requirements (IMPLEMENTED ✓)
- Strong accessibility features required for autistic/ADHD creator who is 70% deaf
- Bionic reading support for improved text processing ✓
- Dark mode for reduced eye strain and sensory comfort ✓
- Clear visual hierarchy for better information processing ✓
- Video content accessibility with captions and visual cues ✓
- Floating accessibility toolbar with all controls ✓
- Enhanced focus indicators for keyboard navigation ✓
- Reduced motion options for ADHD/autism support ✓
- This authenticity is core to the 'soul-led creator' positioning

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives with custom styling
- **Payment Processing**: Stripe React components for checkout

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Replit OIDC integration with Passport.js
- **Session Management**: Express sessions with PostgreSQL storage
- **Payment Processing**: Stripe API for payment handling

### Build System
- **Frontend Bundler**: Vite with React plugin
- **Backend Bundler**: esbuild for production builds
- **Development**: Hot module replacement via Vite
- **TypeScript**: Shared types across client/server

## Key Components

### Database Schema
- **Users**: Stores user profiles with Replit auth integration, creator status, and Stripe customer data
- **Courses**: Course metadata including title, description, pricing, and creator information
- **Course Modules**: Individual lessons/modules within courses
- **Purchases**: Transaction records linking users to purchased courses
- **Reviews**: User feedback and ratings for courses
- **Sessions**: Session storage for authentication

### Authentication Flow
- Replit OIDC integration for seamless authentication
- Session-based authentication with PostgreSQL storage
- Automatic user creation/update on login
- Creator status management for course creation privileges

### Payment Processing
- Stripe integration for secure payment handling
- 10% platform fee structure (configurable)
- Subscription and one-time payment support
- Automatic creator payout calculation

### API Structure
- RESTful endpoints under `/api/` prefix
- Authentication middleware for protected routes
- Course CRUD operations
- Purchase and payment intent creation
- Creator dashboard analytics

## Data Flow

1. **User Authentication**: Replit OIDC → Session creation → User profile upsert
2. **Course Discovery**: Public course listing → Course details → Purchase flow
3. **Payment Processing**: Stripe payment intent → Confirmation → Purchase record
4. **Creator Management**: Dashboard analytics → Course creation/editing → Revenue tracking

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **stripe**: Payment processing
- **passport**: Authentication middleware
- **openid-client**: OIDC authentication

### UI Dependencies
- **@radix-ui/***: Headless UI components
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Frontend build tool
- **tsx**: TypeScript execution
- **esbuild**: Backend bundling

## Deployment Strategy

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `STRIPE_SECRET_KEY`: Stripe API secret key
- `VITE_STRIPE_PUBLIC_KEY`: Stripe publishable key (frontend)
- `SESSION_SECRET`: Session encryption secret
- `REPL_ID`: Replit environment identifier
- `ISSUER_URL`: OIDC issuer URL (defaults to Replit)

### Build Process
1. Frontend assets built with Vite to `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Database migrations applied via Drizzle Kit
4. Static assets served by Express in production

### Database Setup
- PostgreSQL database with Drizzle schema
- Migrations stored in `./migrations` directory
- Session table for authentication storage
- Indexes on frequently queried fields

### Platform Integration
- Designed for Replit deployment with built-in authentication
- Cartographer plugin for development environment
- Error overlay for debugging
- Automatic HTTPS in production environment

The application follows a monorepo structure with shared TypeScript types between client and server, enabling full-stack type safety and efficient development workflows.