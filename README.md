# Dr. Junwei Zhang - Academic & Professional Website

> **Live Site**: [https://junweizhang23.github.io/](https://junweizhang23.github.io/)

Professional academic website showcasing research contributions, editorial leadership, and cutting-edge industry innovations in smart glass GenAI multi-modal systems.

## 🏆 About Dr. Junwei Zhang

**Academic Leadership & Global Recognition:**
- 🎖️ **IEEE Senior Member** - Professional recognition for significant contributions
- 🏆 **IEEE T-CSVT Associate Editor** (Impact Factor: 8.4, CiteScore: 13.8)
- 🚀 **TGO Elite Tech Leader** - Member of 鲲鹏会 (1700+ CTOs & Tech VPs)
- 🎓 **Stanford CS Master Program** - Currently enrolled

**Professional Excellence:**
- 💼 **Meta** - Smart Glass GenAI Multi-Modal Systems Engineer
- 🥽 **Research Focus**: AR/VR, Computer Vision, Multi-Modal AI
- 📊 **Academic Impact**: 152 citations, h-index: 6, 10+ publications

## 🏗️ Technical Architecture

This repository contains a modern academic website built with professional development practices:

### **Technology Stack:**
- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with dark/light mode
- **Deployment**: GitHub Pages with static export
- **Analytics**: Automated visitor tracking with fallbacks
- **Metrics**: Real-time Google Scholar integration

### **Project Structure:**
```
├── next-site/                    # Source code directory
│   ├── src/app/                  # Next.js application
│   │   ├── components/           # Modular React components
│   │   │   ├── Header.tsx        # Navigation header
│   │   │   ├── Sidebar.tsx       # Analytics & stats
│   │   │   ├── Footer.tsx        # Site footer
│   │   │   ├── VisitorAnalytics.tsx # Visitor tracking
│   │   │   └── sections/         # Content sections
│   │   │       ├── HeroSection.tsx
│   │   │       ├── ExperienceSection.tsx
│   │   │       ├── ResearchSection.tsx
│   │   │       ├── LeadershipSection.tsx
│   │   │       ├── ContentSection.tsx
│   │   │       ├── PublicationsSection.tsx
│   │   │       ├── ContactSection.tsx
│   │   │       └── CommentsSection.tsx
│   │   ├── layout.tsx            # Root layout with SEO
│   │   ├── page.tsx              # Main page (modular)
│   │   └── globals.css           # Global styles
│   ├── scripts/                  # Automation scripts
│   │   └── update-scholar-metrics.js
│   ├── public/                   # Static assets
│   ├── package.json              # Dependencies
│   └── next.config.ts            # Next.js configuration
├── .github/workflows/            # GitHub Actions
│   ├── deploy.yml                # Site deployment
│   └── update-scholar-metrics.yml # Daily metrics update
├── index.html                    # Built site (GitHub Pages)
├── _next/                        # Built assets
├── CLAUDE.md                     # Development guide
├── cleanup-and-deploy.sh         # Deployment script
└── README.md                     # This file
```

## 🚀 Development

### **Quick Start:**
```bash
# Navigate to source directory
cd next-site

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Update Scholar metrics and build
npm run update-and-build
```

### **Available Scripts:**
- `npm run dev` - Development server with Turbopack
- `npm run build` - Production build
- `npm run lint` - Code linting
- `npm run update-scholar` - Update Google Scholar metrics
- `npm run update-and-build` - Update metrics and build

### **Deployment:**
```bash
# Clean and deploy new version
./cleanup-and-deploy.sh
```

## 🎯 Features

### **Professional Academic Design:**
- ✅ **Modular Architecture**: Easy to maintain and analyze
- ✅ **Responsive Design**: Optimized for all devices
- ✅ **SEO Optimized**: Comprehensive metadata and structured data
- ✅ **Performance**: Static generation for fast loading
- ✅ **Accessibility**: Professional academic styling

### **Automated Systems:**
- ✅ **Google Scholar Integration**: Real-time citation metrics
- ✅ **Visitor Analytics**: Multi-provider tracking with fallbacks
- ✅ **GitHub Actions**: Automated deployments and updates
- ✅ **Daily Updates**: Scheduled Scholar metrics refresh

### **Content Sections:**
- 🎓 Academic leadership and editorial roles
- 💼 Professional experience at Meta, DoorDash, Microsoft, Uber
- 🔬 Research areas and cutting-edge projects
- 📚 Publications with citation metrics
- 📺 YouTube and Bilibili content creation
- 🤝 Contact and collaboration opportunities

## 📊 Automated Features

- **Daily Scholar Updates**: Citations and metrics refreshed automatically
- **Visitor Tracking**: Multiple analytics providers with fallback mechanisms
- **SEO Maintenance**: Automated sitemap and robots.txt generation
- **Performance Monitoring**: Build optimization and asset management

## 🤝 Contributing

This is a personal academic website. For collaboration opportunities or suggestions:

- **Academic Collaborations**: Contact via website
- **Technical Issues**: Open an issue in this repository
- **Content Updates**: All content is automatically updated via automation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

### 📈 Current Metrics (Auto-Updated)
- **Citations**: 152
- **h-index**: 6
- **Publications**: 10+
- **Last Updated**: Auto-updated daily

**Built with modern web technologies for the academic community** 🎓✨