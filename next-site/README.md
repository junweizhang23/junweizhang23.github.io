# Junwei Zhang - Academic Website

A modern, responsive personal academic website built with Next.js and Tailwind CSS.

## 🎯 Purpose

This website serves as a digital academic profile showcasing:
- Research contributions and publications
- Professional background and experience
- Contact information for collaboration opportunities
- Academic networking and visibility

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/junweizhang23/junweizhang23.github.io.git
cd junweizhang23.github.io/next-site
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
next-site/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx            # Home page
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Optimized for GitHub Pages

## 📝 Customization

### Content Updates
1. **Personal Information**: Edit `src/app/page.tsx` to update your bio, research areas, and contact details
2. **Metadata**: Update `src/app/layout.tsx` for SEO and social sharing
3. **Profile Photo**: Add your image to `public/` and update the placeholder
4. **Publications**: Replace the example publications with your actual work

### Styling
- Tailwind CSS classes for responsive design
- Dark/light mode support included
- Customizable color scheme via CSS variables

## 🚀 Deployment

### GitHub Pages
This site is optimized for deployment on GitHub Pages:

1. Build the static site:
```bash
npm run build
npm run export
```

2. Deploy the `out/` directory to your GitHub Pages repository

### Alternative Deployment
The site can also be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## 📧 Contact

For questions about this website or academic collaboration opportunities, please reach out via the contact information provided on the site.

## 📄 License

This project is open source and available under the MIT License.
