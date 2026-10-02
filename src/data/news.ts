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
// 最后更新时间: 2026-10-02 03:57:42 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "何恺明团队新作：看猫片就能学会ARC挑战",
    summary: "用ImageNet训练encoder",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/499812.html",
    date: "2026-10-01",
    category: "product",
  },
  {
    id: "news-002",
    title: "谷歌Gemini 4突然发布！RSI加持，GPT和Opus都让让",
    summary: "价格只有Astra一半",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/499663.html",
    date: "2026-10-01",
    category: "product",
  },
  {
    id: "news-003",
    title: "OpenAI推理之父最新访谈！数学只是多智能体时代的开胃菜",
    summary: "千禧年难题的突破，10000个Agent最多占了10%的功劳。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499654.html",
    date: "2026-09-30",
    category: "product",
  },
  {
    id: "news-004",
    title: "直播回顾：工业AI的下一个机会在哪？",
    summary: "什么样的AI才适合工业现场？企业真正开始做工业AI时，又该从哪里下手？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499605.html",
    date: "2026-09-30",
    category: "product",
  },
  {
    id: "news-005",
    title: "Anthropic，你是来给智谱打广告的吧！",
    summary: "实测说GLM-5.3很强",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499597.html",
    date: "2026-09-30",
    category: "product",
  },
  {
    id: "news-006",
    title: "从玩家的世界掠过：Bungie 的「列车」如何驶向终焉",
    summary: "Bungie 究竟是在和时间赛跑，还是在和自己赛跑？<a href=&#34;https://sspai.com/post/115070&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115070",
    date: "2026-09-30",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "经典任务管理软件的现代重构：新版 2Do 详解",
    summary: "完全重构的 2Do 是我的心目中最佳的任务管理工具。<a href=&#34;https://sspai.com/post/115166&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115166",
    date: "2026-09-30",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "别再把攻略全甩给 AI：国庆七天河南自驾，我是这样用 Agent 的",
    summary: "祝你旅途顺遂，假期自由。<a href=&#34;https://sspai.com/post/114945&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114945",
    date: "2026-09-30",
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
