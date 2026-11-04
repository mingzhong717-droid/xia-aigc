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
// 最后更新时间: 2026-11-04 04:44:54 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "让Agent首次拥有“视听双流记忆”：openJiuwen Agent-Memory看懂长视频，关键事件一个不落",
    summary: "长视频记忆精度飙升，问答时延最高降97%",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507533.html",
    date: "2026-11-04",
    category: "product",
  },
  {
    id: "news-002",
    title: "国行 Apple 智能上手：这些功能已经准备好",
    summary: "iOS 27.3 Beta 带来了姗姗来迟的国行版 Apple 智能，这些细节你值得了解。<a href=&#34;https://sspai.com/post/118404&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118404",
    date: "2026-11-04",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "派早报：Apple 智能国行版开放测试、拓竹发布 H3C 3D 打印机等",
    summary: "Surface 鼠标第 2 代国行预售，Windows 11 优化 8 GB 内存表现等。<a href=&#34;https://sspai.com/post/118402&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118402",
    date: "2026-11-04",
    category: "product",
  },
  {
    id: "news-004",
    title: "机器人干活，AI当厂长！这家巨头要造下一代自主智能仓",
    summary: "AI接管调度运营，仓库越干越聪明",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507507.html",
    date: "2026-11-03",
    category: "product",
  },
  {
    id: "news-005",
    title: "模型谁都买得到，拉开差距的是AI生产力系统",
    summary: "AI的下一程是生产力系统之争",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507448.html",
    date: "2026-11-03",
    category: "product",
  },
  {
    id: "news-006",
    title: "纯语音Personal Agent来了！或许，这就是乔布斯心中的Siri",
    summary: "终于，有了一个可以触摸的起点",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507419.html",
    date: "2026-11-03",
    category: "product",
  },
  {
    id: "news-007",
    title: "苹果被曝的新产品，中国央企8个月前已装进公共卫生间",
    summary: "TeleAI智慧看护助手",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507410.html",
    date: "2026-11-03",
    category: "product",
  },
  {
    id: "news-008",
    title: "一眼的熟悉，满眼的惊喜：新款 iPad mini 首发体验",
    summary: "更轻、更薄、更好「看」，依然是那台纯粹的 iPad mini。<a href=&#34;https://sspai.com/post/118263&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118263",
    date: "2026-11-03",
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
