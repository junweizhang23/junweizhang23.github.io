/**
 * Generate RSS Feed for the website
 * This script generates a static RSS feed from updates data
 */

const fs = require('fs').promises;
const path = require('path');

// RSS Feed data - manually maintained updates
const updates = [
  {
    date: "2025-01-02",
    type: "paper",
    title: "New Publication in IEEE T-CSVT",
    description: "Our latest research on smart glass multi-modal systems has been accepted for publication.",
    link: "https://junweizhang23.github.io/#publications"
  },
  {
    date: "2024-12-28",
    type: "youtube",
    title: "New YouTube Video: GenAI Smart Glass Systems",
    description: "Deep dive into the technical architecture of next-generation smart glass interfaces.",
    link: "https://www.youtube.com/@junweizhang"
  },
  {
    date: "2024-12-20",
    type: "twitter",
    title: "IEEE Senior Member Achievement",
    description: "Honored to be recognized as IEEE Senior Member for contributions to the engineering field.",
    link: "https://twitter.com/junweizhang"
  },
  {
    date: "2024-12-15",
    type: "bilibili",
    title: "Bilibili中文讲解：多模态AI系统",
    description: "在B站分享了最新的多模态AI系统研究成果和技术解析。",
    link: "https://www.bilibili.com/video/BV1QfoGYgERZ/"
  }
];

async function generateRSS() {
  const siteUrl = 'https://junweizhang23.github.io';
  const currentDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dr. Junwei Zhang - Academic &amp; Professional Updates</title>
    <link>${siteUrl}</link>
    <description>Latest updates, publications, and activities from Dr. Junwei Zhang - Meta Smart Glass GenAI Engineer, IEEE T-CSVT Associate Editor, Stanford CS Master</description>
    <language>en-US</language>
    <managingEditor>junwei.zhang@stonybrook.edu (Dr. Junwei Zhang)</managingEditor>
    <webMaster>junwei.zhang@stonybrook.edu (Dr. Junwei Zhang)</webMaster>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${updates.map(update => {
      const pubDate = new Date(update.date).toUTCString();
      return `    <item>
      <title><![CDATA[${update.title}]]></title>
      <link>${update.link}</link>
      <description><![CDATA[${update.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="false">${update.date}-${update.type}</guid>
      <category>${update.type}</category>
    </item>`;
    }).join('\n')}
  </channel>
</rss>`;

  // Write to public directory for static export
  const publicPath = path.join(__dirname, '../public/feed.xml');
  await fs.writeFile(publicPath, rss, 'utf8');
  console.log('✅ RSS feed generated successfully at:', publicPath);
}

// Run if called directly
if (require.main === module) {
  generateRSS().catch(console.error);
}

module.exports = { generateRSS };
