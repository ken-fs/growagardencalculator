# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Grow A Garden Calculator** - a comprehensive web application for Roblox's Grow A Garden farming game. It provides calculators for crop values, pet weights, trade analysis, and complete wiki guides for mutations, crops, pets, and gears.

## Tech Stack

- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript 5
- **Tailwind CSS v4** for styling
- **next-intl** for internationalization (English/Chinese support)
- **Radix UI** components (@radix-ui/react-dialog, select, tabs, tooltip)
- **Lucide React** for icons
- **pnpm** as package manager

## Development Commands

### Setup
```bash
pnpm install     # Install all project dependencies
```

### Core Commands
```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production with Turbopack
pnpm start        # Start production server
pnpm lint         # Run ESLint on all TypeScript/JavaScript files
pnpm lint:fix     # Auto-fix linting issues
pnpm type-check   # Run TypeScript compiler without emitting files
```

### Additional Commands
```bash
pnpm clean        # Remove .next and out directories
pnpm analyze      # Build with bundle analyzer
pnpm export       # Build and export static files
```

## Project Architecture

### Core Data Structure
The application is built around game entities with specific type definitions:

- **Crops**: baseValue, category (fruit/vegetable/flower/special), rarity levels
- **Mutations**: multiplier-based system with categories (growth/temperature/environmental)
- **Pets**: baseValue with farm/wild/special categories
- **Gears**: equipment items with various categories

### Calculator Logic (`src/utils/calculator.ts`)
The core calculation engine handles:

- **Crop Value Calculation**: `calculateCropValue()` - combines base value, weight, quantity, mutations, and friend boost
- **Mutation Validation**: Only one growth mutation and one temperature mutation allowed per combination
- **Trade Analysis**: `analyzeTrade()` - determines Win/Fair/Loss status based on value comparison
- **Mutation Recommendations**: Suggests optimal mutations based on crop rarity

### Key Architecture Patterns

1. **Data Layer**: Static data files in `/src/data/` (crops.ts, mutations.ts, pets.ts, gears.ts)
2. **Type System**: Comprehensive TypeScript interfaces in `/src/types/index.ts`
3. **Calculator Components**: Modular calculators in `/src/components/calculator/`
4. **UI Components**: Custom component library in `/src/components/ui/`

### App Router Structure
```
src/app/
├── [locale]/             # Internationalized routes (en, zh)
│   ├── layout.tsx        # Localized root layout
│   ├── page.tsx          # Main calculator page
│   ├── trade/page.tsx    # Trade analyzer
│   ├── wiki/             # Wiki section
│   │   ├── layout.tsx    # Wiki layout with SEO
│   │   ├── page.tsx      # Wiki hub page
│   │   ├── mutations/    # Mutation wiki with structured data
│   │   ├── crops/        # Crop wiki
│   │   ├── pets/         # Pet wiki
│   │   └── gears/        # Gear wiki
│   ├── pets/page.tsx     # Pet calculator
│   └── blog/page.tsx     # Blog/guides
├── layout.tsx            # Legacy layout (to be migrated)
├── globals.css           # Global styles
└── middleware.ts         # i18n middleware
```

## Key Business Logic

### Mutation System
- **Growth Mutations**: Only ONE can be selected (Golden 20x, Rainbow 50x)
- **Temperature Mutations**: Only ONE can be selected (Wet 2x, Chilled 2x, Drenched 5x, Frozen 10x)
- **Environmental Mutations**: Multiple allowed, multiply together

### Value Calculation Formula
```
totalValue = (baseValue * weight * quantity * mutationMultiplier) + friendBoostValue
```

### Trade Analysis Thresholds
- **Win**: >10% profit
- **Fair**: -10% to +10% profit  
- **Loss**: <-10% profit

## Internationalization (i18n)

### Multi-language Support
- **English** (`en`) - Default locale, no prefix in URL
- **Chinese** (`zh`) - Accessible at `/zh/*` routes
- Messages stored in `/messages/en.json` and `/messages/zh.json`
- **next-intl** handles translation and routing
- Language switcher component in navigation
- SEO optimized with proper hreflang attributes

### URL Structure
```
English: /wiki/mutations
Chinese: /zh/wiki/mutations
```

### Translation Keys
- Navigation: `nav.*`
- Meta tags: `meta.title.*`, `meta.description.*`
- Wiki content: `wiki.mutations.*`, `wiki.crops.*`
- Calculator UI: `calculator.crop.*`, `calculator.trade.*`

## SEO Optimization

### Wiki Pages Feature
- **Structured Data**: JSON-LD for breadcrumbs, FAQs, and articles
- **Meta Optimization**: Localized titles, descriptions, and keywords
- **Content Hierarchy**: Proper H1-H6 structure with semantic sections
- **Internal Linking**: Cross-referenced wiki sections
- **Canonical URLs**: Prevent duplicate content issues
- **Open Graph**: Social media optimization for all pages

### Content Strategy
- Comprehensive wiki sections with detailed game information
- SEO-optimized content blocks with relevant keywords
- Expert guides and strategy sections
- FAQ structured data for rich snippets

## Development Notes

- Uses **Turbopack** for faster builds and development
- **Standalone output** configured for deployment optimization
- **Image optimization** enabled with WebP/AVIF formats
- Security headers configured (X-Frame-Options, X-Content-Type-Options, etc.)
- Redirects `/calculator` → `/` for SEO
- Uses custom hooks for localStorage (`useLocalStorage`) and performance monitoring (`usePerformance`)
- **Middleware** handles i18n routing and locale detection

## Data Management

All game data is maintained in static TypeScript files with getter functions:
- `getCropById()`, `getMutationById()` for data retrieval
- Data includes Chinese names and descriptions for localization
- Comprehensive rarity system (common → legendary) affects recommended mutations
- Translation files organized by feature namespaces