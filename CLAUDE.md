# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is an academic personal website for Dr. Junwei Zhang built with Next.js 15 and deployed to GitHub Pages. The project uses a modular component architecture for better maintainability and analysis:

- `/next-site/` - Main Next.js application directory
- `/next-site/src/app/` - Next.js App Router pages and components
- `/next-site/src/app/page.tsx` - Main homepage (modular, ~40 lines)
- `/next-site/src/app/layout.tsx` - Root layout with SEO metadata and structured data
- `/next-site/src/app/components/` - Modular React components:
  - `Header.tsx` - Navigation header with EN/中文 language toggle
  - `Sidebar.tsx` - Google Scholar metrics and recent activity sidebar
  - `Footer.tsx` - Site footer
  - `/sections/` - Page content sections:
    - `HeroSection.tsx` - About/intro section with badges
    - `ResearchSection.tsx` - Research areas
    - `LeadershipSection.tsx` - Academic leadership (IEEE, TGO)
    - `ContentSection.tsx` - YouTube/Bilibili content
    - `PublicationsSection.tsx` - Research publications  
    - `ContactSection.tsx` - Contact information
    - `CommentsSection.tsx` - Giscus discussion section
- `/next-site/scripts/` - Utility scripts for automated updates

## Hidden Content (Pending Confirmation)

The following content is commented out and can be re-enabled when confirmed:
- **Stanford CS Master Program**: All references are hidden with `{/* HIDDEN: Stanford ... */}` comments
  - Search for "HIDDEN: Stanford" across all files to find and uncomment
  - Affected files: HeroSection.tsx, LeadershipSection.tsx, Sidebar.tsx, Footer.tsx, ContactSection.tsx, layout.tsx, LanguageContext.tsx
- **ORCID link**: Placeholder ID needs to be replaced with actual ORCID ID before enabling
  - Located in ContactSection.tsx

## Key Configuration

- **Static Export**: Configured for GitHub Pages deployment with `output: 'export'` in `next.config.js`
- **Tailwind CSS**: Used for styling with dark/light mode support
- **TypeScript**: Full TypeScript setup with Next.js 15
- **SEO Optimization**: Comprehensive metadata, structured data, and Open Graph tags in layout

## Development Commands

Run these commands from the `/next-site/` directory:

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Update Google Scholar metrics and build
npm run update-and-build

# Update Scholar metrics only
npm run update-scholar
```

## Automated Scholar Metrics

The site includes automated Google Scholar metrics updates:
- `/next-site/scripts/update-scholar-metrics.js` - Script to fetch and update academic metrics
- **IMPORTANT**: The script extracts "All" column values (not "Since 2021") from Google Scholar
- Updates citations, h-index, i10-index in `scholar-metadata.json`
- GitHub Actions workflow runs daily to keep metrics current
- Metrics are stored in `/next-site/public/scholar-metadata.json` and copied to root

## Deployment

- Site deploys to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- Build artifacts are generated in `/next-site/out/` and deployed to the root directory
- Static export configuration ensures compatibility with GitHub Pages
- Automated daily metrics updates trigger redeployment

## Content Areas

The main page (`page.tsx`) contains these sections:
- Hero/About section with academic credentials
- Research areas and focus
- Leadership roles (IEEE Senior Member, IEEE T-CSVT Associate Editor, TGO membership)
- Knowledge sharing (YouTube, Bilibili)
- Publications list
- Contact information
- Academic discussions (Giscus)

When editing content, maintain the existing Tailwind CSS classes and responsive design patterns.
