// Generate sitemap.xml from tools data
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://mingzhong717-droid.github.io/xia-aigc";

// Read tools.ts and extract tool IDs
const toolsFile = fs.readFileSync(
  path.join(__dirname, "../src/data/tools.ts"),
  "utf8"
);
const idRegex = /id:\s*["']([^"']+)["']/g;
const categoryRegex = /export const categories[\s\S]*?\];/;

// Extract tool IDs (skip category IDs)
const catMatch = toolsFile.match(categoryRegex);
const catEnd = catMatch ? catMatch.index + catMatch[0].length : 0;
const toolsSection = toolsFile.substring(catEnd);

const toolIds = [];
let match;
while ((match = idRegex.exec(toolsSection)) !== null) {
  toolIds.push(match[1]);
}

const today = new Date().toISOString().split("T")[0];

// Build sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

for (const id of toolIds) {
  sitemap += `  <url>
    <loc>${BASE_URL}/tool/${id}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

sitemap += `</urlset>
`;

// Write to public directory
const outputPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, sitemap, "utf8");
console.log(
  `Sitemap generated: ${toolIds.length} tool pages + 1 homepage = ${toolIds.length + 1} URLs`
);
