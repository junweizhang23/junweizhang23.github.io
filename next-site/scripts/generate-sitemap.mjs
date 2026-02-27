import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://junweizhang23.github.io';

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/blog/', priority: '0.9', changefreq: 'weekly' },
  { url: '/speaking/', priority: '0.8', changefreq: 'monthly' },
  { url: '/media-kit/', priority: '0.7', changefreq: 'monthly' },
];

// Get blog posts
const postsDir = path.join(__dirname, '..', '_posts');
let blogPages = [];
if (fs.existsSync(postsDir)) {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  blogPages = files.map(f => ({
    url: `/blog/${f.replace('.md', '')}/`,
    priority: '0.7',
    changefreq: 'monthly',
  }));
}

const allPages = [...staticPages, ...blogPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const outDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
console.log('✓ sitemap.xml generated');
