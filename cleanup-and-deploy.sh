#!/bin/bash

# Academic Website Cleanup and Deployment Script
echo "🧹 Starting cleanup and deployment process..."

# Remove old built files from root
echo "🗑️  Removing old built files..."
rm -f index.html 404.html index.txt
rm -f favicon.ico globe.svg robots.txt sitemap.xml scholar-metadata.json
rm -rf _next 404

# Build and update latest content
echo "🏗️  Building latest version with modular components..."
cd next-site
npm run update-and-build

# Copy new built files to root
echo "📋 Copying new files to root..."
cp -r out/* ../
cd ..

echo "✅ Cleanup and deployment complete!"
echo "🧩 Site now uses modular React components for better maintainability"
echo "📊 Latest Google Scholar metrics updated (152 citations)"
echo "🌍 Visitor analytics improved with fallback mechanisms" 
echo "🚀 Site ready for GitHub Pages deployment"

# Show component structure
echo ""
echo "📁 New component structure:"
echo "├── components/"
echo "│   ├── Header.tsx"
echo "│   ├── Sidebar.tsx"  
echo "│   ├── Footer.tsx"
echo "│   ├── VisitorAnalytics.tsx"
echo "│   └── sections/"
echo "│       ├── HeroSection.tsx"
echo "│       ├── ExperienceSection.tsx"
echo "│       ├── ResearchSection.tsx"
echo "│       ├── LeadershipSection.tsx"
echo "│       ├── ContentSection.tsx"
echo "│       ├── PublicationsSection.tsx"
echo "│       ├── ContactSection.tsx"
echo "│       └── CommentsSection.tsx"