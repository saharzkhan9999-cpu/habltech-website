const fs = require('fs');
const path = require('path');

console.log('🚀 Creating SEO files...\n');

// Create robots.txt
const robotsContent = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://habltech.com/sitemap.xml`;

fs.writeFileSync(path.join(__dirname, 'robots.txt'), robotsContent);
console.log('✅ Created robots.txt');

// Create sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://habltech.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapContent);
console.log('✅ Created sitemap.xml');

console.log('\n🎉 SEO files created successfully!');
console.log('\n📋 Next: Run "npm run build" to build your project');
