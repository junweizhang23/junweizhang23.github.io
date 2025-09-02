# Next.js Academic Website - Development Guide

This directory contains the source code for Dr. Junwei Zhang's academic website built with Next.js 15 and modular component architecture.

## 🎯 Purpose

Professional academic website featuring:
- **Modular React Components**: Easy to maintain and analyze
- **Real-time Scholar Metrics**: Automated Google Scholar integration  
- **Professional Design**: IEEE Associate Editor & TGO Tech Leader profile
- **Advanced Analytics**: Multi-provider visitor tracking
- **SEO Optimized**: Comprehensive metadata and structured data

## 🚀 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Navigate to source directory
cd next-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands
```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Update Google Scholar metrics
npm run update-scholar

# Update metrics and build
npm run update-and-build
```

## 📁 Modular Architecture

```
src/app/
├── components/              # Modular React components
│   ├── Header.tsx          # Navigation header
│   ├── Sidebar.tsx         # Analytics & stats sidebar
│   ├── Footer.tsx          # Site footer
│   ├── VisitorAnalytics.tsx # Visitor tracking component
│   └── sections/           # Content sections (50-150 lines each)
│       ├── HeroSection.tsx         # About/intro
│       ├── ExperienceSection.tsx   # Professional experience
│       ├── ResearchSection.tsx     # Research areas
│       ├── LeadershipSection.tsx   # Academic leadership
│       ├── ContentSection.tsx      # YouTube/Bilibili
│       ├── PublicationsSection.tsx # Publications
│       ├── ContactSection.tsx      # Contact info
│       └── CommentsSection.tsx     # Discussion section
├── layout.tsx              # Root layout with SEO metadata
├── page.tsx               # Main page (39 lines - imports components)
└── globals.css            # Global styles
```

## 🎨 Component Benefits

- **Easy Analysis**: Each component is focused and manageable
- **Token Efficient**: No more large file token limits  
- **Professional Structure**: Industry-standard React patterns
- **Maintainable**: Update sections independently
- **Reusable**: Components can be modified or reused

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with dark/light mode
- **Analytics**: Multi-provider visitor tracking
- **Metrics**: Real-time Google Scholar integration
- **Deployment**: Static export for GitHub Pages

## 🔧 Key Features

- **Automated Scholar Metrics**: Real-time citation updates
- **Professional Design**: Academic leadership showcase
- **Visitor Analytics**: Multiple tracking providers with fallbacks  
- **SEO Optimized**: Structured data, Open Graph, Twitter cards
- **Performance**: Static generation, optimized assets
- **Responsive**: Mobile-first professional design

## 🚀 Deployment

### Automated Deployment (Recommended)
```bash
# From repository root
./cleanup-and-deploy.sh
```

### Manual Deployment
```bash
npm run build
cp -r out/* ../
```

### GitHub Actions
- **Daily Scholar Updates**: Automated metrics refresh
- **Site Deployment**: Automatic builds and deployment
- **Performance Monitoring**: Build optimization

## 📊 Automated Systems

- **Google Scholar Integration**: Real-time citation metrics
- **Visitor Analytics**: Multi-provider tracking with fallbacks
- **SEO Maintenance**: Automated sitemap and robots.txt
- **Performance Monitoring**: Build optimization and asset management

## 🤝 Development Workflow

1. **Edit Components**: Modify individual sections in `src/app/components/sections/`
2. **Test Locally**: `npm run dev` for development server
3. **Update Metrics**: `npm run update-scholar` for latest Scholar data
4. **Build & Deploy**: `./cleanup-and-deploy.sh` for production

## 📄 License

Open source under MIT License.
