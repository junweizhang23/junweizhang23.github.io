# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is an academic personal website for Dr. Junwei Zhang built with Next.js 15 and deployed to GitHub Pages. The project uses a modular component architecture for better maintainability and analysis:

- `/next-site/` - Main Next.js application directory
- `/next-site/src/app/` - Next.js App Router pages and components
- `/next-site/src/app/page.tsx` - Main homepage (now modular, ~40 lines)
- `/next-site/src/app/layout.tsx` - Root layout with SEO metadata and structured data
- `/next-site/src/app/components/` - Modular React components:
  - `Header.tsx` - Navigation header
  - `Sidebar.tsx` - Analytics and quick stats sidebar
  - `Footer.tsx` - Site footer
  - `VisitorAnalytics.tsx` - Visitor tracking component
  - `/sections/` - Page content sections:
    - `HeroSection.tsx` - About/intro section
    - `ExperienceSection.tsx` - Professional experience
    - `ResearchSection.tsx` - Research areas
    - `LeadershipSection.tsx` - Academic leadership
    - `ContentSection.tsx` - YouTube/Bilibili content
    - `PublicationsSection.tsx` - Research publications  
    - `ContactSection.tsx` - Contact information
    - `CommentsSection.tsx` - Discussion section
- `/next-site/scripts/` - Utility scripts for automated updates

## Key Configuration

- **Static Export**: Configured for GitHub Pages deployment with `output: 'export'` in `next.config.ts`
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
- Updates citations, h-index, i10-index, and publication counts in `page.tsx`
- GitHub Actions workflow runs daily to keep metrics current
- Metrics are stored in `/next-site/public/scholar-metadata.json`

## Deployment

- Site deploys to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- Build artifacts are generated in `/next-site/out/` and deployed to the root directory
- Static export configuration ensures compatibility with GitHub Pages
- Automated daily metrics updates trigger redeployment

## Content Areas

The main page (`page.tsx`) contains these sections:
- Hero/About section with academic credentials
- Leadership roles (IEEE Associate Editor, TGO membership)
- Professional experience timeline
- Research areas and focus
- Publications list
- Contact information

When editing content, maintain the existing Tailwind CSS classes and responsive design patterns.