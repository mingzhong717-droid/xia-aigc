// Generate sitemap.xml from tools data
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://aigc778.top";

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

// Static pages with their priorities
const staticPages = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/news/", changefreq: "daily", priority: "0.9" },
  { path: "/guide/", changefreq: "weekly", priority: "0.8" },
  { path: "/tutorials/", changefreq: "weekly", priority: "0.8" },
  { path: "/rankings/", changefreq: "weekly", priority: "0.8" },
  { path: "/reviews/", changefreq: "weekly", priority: "0.8" },
  { path: "/compare/", changefreq: "weekly", priority: "0.7" },
  { path: "/solutions/", changefreq: "weekly", priority: "0.8" },
  { path: "/prompts/", changefreq: "weekly", priority: "0.7" },
  { path: "/quiz/", changefreq: "monthly", priority: "0.6" },
  { path: "/roadmap/", changefreq: "weekly", priority: "0.7" },
  { path: "/changelog/", changefreq: "daily", priority: "0.7" },
];

// Build sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
for (const page of staticPages) {
  sitemap += `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

// Add tool detail pages
for (const id of toolIds) {
  sitemap += `  <url>
    <loc>${BASE_URL}/tool/${id}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

sitemap += `</urlset>
`;

// Write to public directory
const outputPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, sitemap, "utf8");

const totalUrls = staticPages.length + toolIds.length;
console.log(
  `Sitemap generated: ${staticPages.length} static pages + ${toolIds.length} tool pages = ${totalUrls} URLs`
);
