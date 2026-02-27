import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://junweizhang23.github.io';
const postsDir = path.join(__dirname, '..', '_posts');

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

let items = '';

if (fs.existsSync(postsDir)) {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  
  const posts = files.map(f => {
    const content = fs.readFileSync(path.join(postsDir, f), 'utf8');
    const { data } = matter(content);
    return {
      slug: f.replace('.md', ''),
      title: data.title || f.replace('.md', ''),
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  items = posts.map(post => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/blog/${post.slug}/</link>
      <guid>${BASE_URL}/blog/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`).join('\n');
}

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dr. Junwei Zhang - Blog</title>
    <link>${BASE_URL}</link>
    <description>Thoughts on smart glass technology, AI systems, and the intersection of academia and industry.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

const outDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'feed.xml'), rss);
console.log('✓ feed.xml generated');
