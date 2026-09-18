export interface NewsItem {
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
// 最后更新时间: 2026-09-18 03:05:25 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "刚刚，Claude Code大重构！内部3万Agent管理技术免费开放",
    summary: "Git白学了？？？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/491711.html",
    date: "2026-09-18",
    category: "product",
  },
  {
    id: "news-002",
    title: "派早报：欧盟拟禁止 13 岁以下儿童使用社交媒体等",
    summary: "少数派的近期动态口袋先知新版本1.3.3上线，你可以自定义任何你想展示的屏幕效果。了解更多能让AI助手通过自然语言指令直接与您的Quote/0摘录墨水屏交互的DotSkill已上线。点击了解八月买了什 ...<a href=&#34;https://sspai.com/post/114699&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114699",
    date: "2026-09-18",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "从“会回答”到“会办事”，vivo如何解AI手机这道题？",
    summary: "构建个体专属AI助理",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/491649.html",
    date: "2026-09-17",
    category: "product",
  },
  {
    id: "news-004",
    title: "Claude Code团队讲究啊，这都往外说",
    summary: "工程师的核心永远是Problem Solving。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/491596.html",
    date: "2026-09-17",
    category: "product",
  },
  {
    id: "news-005",
    title: "图形学宗师童欣加盟Meshy，要做“AI for Fun”的头号玩家",
    summary: "他要和这一代最富有想象力的年轻人一起，去创造一个新的图形学。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/491522.html",
    date: "2026-09-17",
    category: "product",
  },
  {
    id: "news-006",
    title: "央企做了个通用Agent，直接杀进IDC实测前三！",
    summary: "中国电信，TeleAgent",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/491454.html",
    date: "2026-09-17",
    category: "product",
  },
  {
    id: "news-007",
    title: "城市漫步指南｜威海初秋，看海玩沙",
    summary: "9 月刚开渔，避开暑假，正是玩沙吃海鲜的好时节。而威海，胶东半岛尖端上的海滨小城，有历史厚重的一面，也有现代休闲的一面。多留几天给它，会有很丰富的度假体验。<a href=&#34;https://sspai.com/post/114557&#34; target=&#34;_blank&#34;>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114557",
    date: "2026-09-17",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "具透 | macOS 27 正式版来了，这些是你值得了解新细节",
    summary: "除了只支持 Apple Silicon，macOS 27 Golden Gate 还有这些变化。<a href=&#34;https://sspai.com/post/114643&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114643",
    date: "2026-09-17",
    category: "tutorial",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
