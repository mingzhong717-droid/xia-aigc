/**
 * RSS 快讯自动抓取脚本
 * 从多个 AI 资讯源抓取最新文章，更新 src/data/news.ts
 * 
 * 通过 GitHub Actions 每天自动运行，无需手动操作
 * 不依赖任何 API Key，纯公开 RSS 数据
 */

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// RSS 源配置
const RSS_SOURCES = [
  {
    name: "量子位",
    feedUrl: "https://www.qbitai.com/feed",
    sourceUrl: "https://www.qbitai.com",
    category: "product",
  },
  {
    name: "机器之心",
    feedUrl: "https://www.jiqizhixin.com/rss",
    sourceUrl: "https://www.jiqizhixin.com",
    category: "industry",
  },
  {
    name: "36kr",
    feedUrl: "https://36kr.com/feed",
    sourceUrl: "https://36kr.com",
    category: "industry",
  },
  {
    name: "少数派",
    feedUrl: "https://sspai.com/feed",
    sourceUrl: "https://sspai.com",
    category: "tutorial",
  },
  {
    name: "InfoQ",
    feedUrl: "https://www.infoq.cn/feed",
    sourceUrl: "https://www.infoq.cn",
    category: "update",
  },
];

// 备用源（如果主源抓不到足够内容）
const FALLBACK_SOURCES = [
  {
    name: "AI工具集",
    feedUrl: "https://ai-bot.cn/feed/",
    sourceUrl: "https://ai-bot.cn",
    category: "product",
  },
];

/**
 * 简易 XML 解析器 - 从 RSS XML 中提取文章
 * 不依赖第三方库，纯正则解析
 */
function parseRSSItems(xml) {
  const items = [];
  // 匹配 <item>...</item> 或 <entry>...</entry>（Atom格式）
  const itemRegex = /<item[\s>]([\s\S]*?)<\/item>|<entry[\s>]([\s\S]*?)<\/entry>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const content = match[1] || match[2];
    if (!content) continue;

    const title = extractTag(content, "title");
    const link = extractLink(content);
    const description = extractDescription(content);
    const pubDate = extractTag(content, "pubDate") || extractTag(content, "published") || extractTag(content, "updated");

    if (title && title.length > 0) {
      items.push({
        title: cleanHTML(title).slice(0, 100),
        url: link || "",
        summary: cleanHTML(description).slice(0, 150),
        pubDate: pubDate ? parseDate(pubDate) : new Date().toISOString().split("T")[0],
      });
    }
  }

  return items;
}

function extractTag(content, tagName) {
  // 处理 CDATA
  const cdataRegex = new RegExp(`<${tagName}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tagName}>`, "i");
  const cdataMatch = content.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1];

  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = content.match(regex);
  return match ? match[1].trim() : "";
}

function extractLink(content) {
  // <link>url</link>
  const linkTag = extractTag(content, "link");
  if (linkTag && linkTag.startsWith("http")) return linkTag;

  // <link href="url" />（Atom格式）
  const hrefRegex = /<link[^>]*href=["']([^"']+)["'][^>]*\/?>/i;
  const hrefMatch = content.match(hrefRegex);
  if (hrefMatch) return hrefMatch[1];

  return linkTag || "";
}

function extractDescription(content) {
  return extractTag(content, "description") || 
         extractTag(content, "summary") || 
         extractTag(content, "content") || 
         "";
}

function cleanHTML(str) {
  if (!str) return "";
  return str
    .replace(/<[^>]+>/g, "") // 去 HTML 标签
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function parseDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return new Date().toISOString().split("T")[0];
    return d.toISOString().split("T")[0];
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}

/**
 * 判断文章是否与 AI 相关
 */
function isAIRelated(title, summary) {
  const keywords = [
    "AI", "人工智能", "大模型", "GPT", "Claude", "LLM", "机器学习",
    "深度学习", "生成式", "AIGC", "ChatGPT", "Midjourney", "Stable Diffusion",
    "智能", "模型", "Gemini", "DeepSeek", "Sora", "视觉", "语言模型",
    "算法", "训练", "推理", "Agent", "RAG", "向量", "embedding",
    "OpenAI", "Anthropic", "Google AI", "百度", "阿里", "字节",
    "通义", "文心", "豆包", "Kimi", "可灵", "即梦", "Copilot",
  ];
  const text = `${title} ${summary}`.toLowerCase();
  return keywords.some(kw => text.toLowerCase().includes(kw.toLowerCase()));
}

/**
 * 根据标题内容猜测分类
 */
function guessCategory(title, defaultCategory) {
  const lower = title.toLowerCase();
  if (lower.includes("发布") || lower.includes("上线") || lower.includes("推出") || lower.includes("launch")) {
    return "product";
  }
  if (lower.includes("更新") || lower.includes("升级") || lower.includes("update") || lower.includes("版本")) {
    return "update";
  }
  if (lower.includes("教程") || lower.includes("指南") || lower.includes("入门") || lower.includes("怎么")) {
    return "tutorial";
  }
  return defaultCategory;
}

/**
 * 抓取单个 RSS 源
 */
async function fetchFeed(source) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s 超时

    const response = await fetch(source.feedUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; RenrenAI-Bot/1.0; +https://aigc778.top)",
      },
    });
    clearTimeout(timeout);

    if (!response.ok) {
      console.log(`  ⚠ ${source.name}: HTTP ${response.status}`);
      return [];
    }

    const xml = await response.text();
    const items = parseRSSItems(xml);

    // 过滤 AI 相关文章
    const aiItems = items
      .filter(item => isAIRelated(item.title, item.summary))
      .slice(0, 5) // 每个源最多取 5 条
      .map(item => ({
        ...item,
        source: source.name,
        sourceUrl: source.sourceUrl,
        category: guessCategory(item.title, source.category),
      }));

    console.log(`  ✓ ${source.name}: 获取 ${items.length} 篇，AI相关 ${aiItems.length} 篇`);
    return aiItems;
  } catch (error) {
    console.log(`  ✗ ${source.name}: ${error.message || "请求失败"}`);
    return [];
  }
}

/**
 * 生成 news.ts 文件内容
 */
function generateNewsTS(articles) {
  const newsItems = articles.map((item, index) => {
    const id = `news-${String(index + 1).padStart(3, "0")}`;
    return `  {
    id: "${id}",
    title: "${item.title.replace(/"/g, '\\"')}",
    summary: "${item.summary.replace(/"/g, '\\"')}",
    source: "${item.source}",
    sourceUrl: "${item.sourceUrl}",
    url: "${item.url}",
    date: "${item.pubDate}",
    category: "${item.category}",
  }`;
  });

  return `export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  url: string;
  date: string;
  category: "product" | "update" | "industry" | "tutorial";
}

// 快讯数据 - 由 scripts/fetch-news.mjs 自动更新
// 最后更新时间: ${new Date().toISOString().replace("T", " ").slice(0, 19)} UTC
export const news: NewsItem[] = [
${newsItems.join(",\n")}
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
`;
}

// ===== 主流程 =====
async function main() {
  console.log("🚀 开始抓取 AI 快讯...\n");

  let allArticles = [];

  // 抓取主源
  for (const source of RSS_SOURCES) {
    const articles = await fetchFeed(source);
    allArticles.push(...articles);
  }

  // 如果主源内容不足，抓取备用源
  if (allArticles.length < 6) {
    console.log("\n📎 主源内容不足，尝试备用源...");
    for (const source of FALLBACK_SOURCES) {
      const articles = await fetchFeed(source);
      allArticles.push(...articles);
    }
  }

  // 按日期排序，取最新的 8 条
  allArticles.sort((a, b) => b.pubDate.localeCompare(a.pubDate));
  allArticles = allArticles.slice(0, 8);

  console.log(`\n📰 共获取 ${allArticles.length} 条 AI 快讯`);

  // 如果一条都抓不到，保留原有数据不更新
  if (allArticles.length === 0) {
    console.log("⚠ 未获取到任何内容，保留原有数据不变");
    process.exit(0);
  }

  // 写入文件
  const outputPath = resolve(__dirname, "../src/data/news.ts");
  const content = generateNewsTS(allArticles);
  writeFileSync(outputPath, content, "utf-8");

  console.log(`\n✅ 已更新 ${outputPath}`);
  console.log("📋 文章列表:");
  allArticles.forEach((a, i) => {
    console.log(`   ${i + 1}. [${a.source}] ${a.title}`);
  });
}

main().catch((err) => {
  console.error("❌ 脚本执行失败:", err);
  process.exit(1);
});
