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
// 最后更新时间: 2026-09-28 03:31:22 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "量子AI创业来了一支“清华梦之队”：10亿估值，用量子改造大模型底层",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/498633.html",
    date: "2026-09-27",
    category: "product",
  },
  {
    id: "news-002",
    title: "又快又能打！匿名模型玉兔模型杀上双榜第一，Coding实测全记录",
    summary: "中秋假期文具OpenRouter调用日榜榜首",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/498584.html",
    date: "2026-09-27",
    category: "product",
  },
  {
    id: "news-003",
    title: "啥题啊能干崩OpenAI最强模型训练…",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/498546.html",
    date: "2026-09-27",
    category: "product",
  },
  {
    id: "news-004",
    title: "派早报：OpenAI 称与苹果合作效果不佳",
    summary: "<p>OpenAI 称与苹果合作效果不佳</p><p>iPhone 4「天线门」媒体问答录像时隔十六年现身</p><p>F-Droid 2.0 发布</p><p>三星冰箱固件升级后罢工，影响韩国用户过中秋</p><p>Excel 单元格将支持数组</p><p>微软不再使用 Copilot+ PC 品",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115079",
    date: "2026-09-27",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "本月玩什么｜鬼武者 剑之道、火焰纹章 万缕千丝、轨道双子星等",
    summary: "《鬼武者》系列的惊艳复活，《风花雪月》的世界观延续，赛璐珞动画风格的双人历险……<a href=&#34;https://sspai.com/post/115056&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115056",
    date: "2026-09-27",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "索辰科技加码世界模型，与战略投资企业美梦空间联合发布具身模型与物理测评标准",
    summary: "“世界模型”开始成为具身智能跨越商业化“奇点”的新叙事。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/498478.html",
    date: "2026-09-26",
    category: "product",
  },
  {
    id: "news-007",
    title: "AI开始研究Physical AI：FSD级团队亮出首版模型Simate-beta，空降RoboDojo",
    summary: "Simate将训练、推理与评测全流程接入自研Infra，通过极致的任务编排与资源调度，同时并行推进数十条相互独立的研究路线。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/498271.html",
    date: "2026-09-26",
    category: "product",
  },
  {
    id: "news-008",
    title: "宜家 Matter 智能家居终于要来了？在中国市场它将如何破局",
    summary: "距离宜家首批Matter智能家居产品在海外上市已有大半年的时间，而中国市场则是许久未有消息。直到今年年中，多款宜家智能新品陆续出现在国家CCC认证数据库中，我们才得知：这批主打高性价比、支持新一代智能 ...<a href=&#34;https://sspai.com/post/114958&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114958",
    date: "2026-09-26",
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
