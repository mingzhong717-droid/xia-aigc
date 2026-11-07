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
// 最后更新时间: 2026-11-07 04:32:52 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "DeepSeek带火稀疏计算，国产芯片公司加速突围：这家公司又融近10亿",
    summary: "Q3营收实现数倍增长",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508155.html",
    date: "2026-11-06",
    category: "product",
  },
  {
    id: "news-002",
    title: "一边赛博修仙，一边卖家电！AI短剧开始冲双11业绩了？",
    summary: "挑战商业视频的高难度场景",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508118.html",
    date: "2026-11-06",
    category: "product",
  },
  {
    id: "news-003",
    title: "从RSI、Agent、Physical AI到整个系统栈，2026 奇点智能技术大会最新日程公布！",
    summary: "11 月 20—21 日，2026 奇点智能技术大会将在北京万达文华酒店举行。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508143.html",
    date: "2026-11-06",
    category: "product",
  },
  {
    id: "news-004",
    title: "99.4%登顶全球第一！这个中国AI师承世界冠军",
    summary: "一举刷新「AI安全世界杯」CyberGym世界纪录",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508107.html",
    date: "2026-11-06",
    category: "product",
  },
  {
    id: "news-005",
    title: "香港金融科技周 x StartmeupHK 2026主论坛：以「金融+」、「AI+」及全球拓展开拓新机遇",
    summary: "香港金融科技周 x StartmeupHK 2026踏入第11届",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507988.html",
    date: "2026-11-06",
    category: "product",
  },
  {
    id: "news-006",
    title: "本周看什么 | 最近值得一看的 9 部作品",
    summary: "📅本周新预告《戴高乐之战》确认引进11月2日，电影《戴高乐之战》确认引进。该系列分为《戴高乐之战：淬炼时代》《戴高乐之战：我写下你的名字》上下两部曲。由法国百代公司出品，制作成本高达7520万欧元。作 ...<a href=&#34;https://sspai.com/post/118623&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118623",
    date: "2026-11-06",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "iPhone 变强了，但我没有",
    summary: "我们把 iPhone 18 Pro Max 带到了深圳、香港和吉隆坡，带入了形形色色的街头。在这个过程里，我们记录了使用 iPhone 拍到的美好画面，也借此描绘了自己的心情变化和生活感悟。<a href=&#34;https://sspai.com/post/118250&#34; target=",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118250",
    date: "2026-11-06",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "更高能效比，带来新惊喜：M6 款 MacBook Pro 初探",
    summary: "M6 芯片提供了足够的性能保障，无论修图、视频剪辑还是运行入门级的 AI 大模型，它都能应对。在此基础上，你原本可能需要加在 Pro 级 SoC 上的预算就能省下来，花给内存或者硬盘。<a href=&#34;https://sspai.com/post/118570&#34; target=&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118570",
    date: "2026-11-06",
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
