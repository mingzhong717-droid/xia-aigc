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
// 最后更新时间: 2026-11-08 04:19:31 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "苹果产品那些不够颠覆，却值得被学习的细节",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/118114&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118114",
    date: "2026-11-08",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "抢跑DeepSeek！硅谷华人把下一代Agent Harness造出来了！？",
    summary: "苦单Session久矣，两大Agent玩家不谋而合。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508264.html",
    date: "2026-11-07",
    category: "product",
  },
  {
    id: "news-003",
    title: "AGENTS.MD，危险危险危险！！！",
    summary: "全新的电脑病毒",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508244.html",
    date: "2026-11-07",
    category: "product",
  },
  {
    id: "news-004",
    title: "一个 05 后的个人数码编年史",
    summary: "我只想回应自己的感受，自己的记忆，只是因为那时候我满腔少年心气，对一切都充满好奇，对未来充满憧憬。<a href=&#34;https://sspai.com/post/116750&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116750",
    date: "2026-11-07",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "A\三大内部模型曝光！领先Opus5.5三个月，RSI缩短80%实验时间",
    summary: "Dario刚喊减速…",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508184.html",
    date: "2026-11-06",
    category: "product",
  },
  {
    id: "news-006",
    title: "为什么每个 Personal Agent 背后，都必须配备一台“云电脑”？",
    summary: "PPIO 沙箱，把“云电脑”做成开箱即用的 API",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508174.html",
    date: "2026-11-06",
    category: "product",
  },
  {
    id: "news-007",
    title: "阶跃终端 STEPX Neo 智能体手机亮相进博会高通展台，软硬模一体打造智能体新体验",
    summary: "阶跃终端旗下 STEPX Neo 智能体手机首次亮相",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508170.html",
    date: "2026-11-06",
    category: "product",
  },
  {
    id: "news-008",
    title: "本周看什么 | 最近值得一看的 9 部作品",
    summary: "📅本周新预告《戴高乐之战》确认引进11月2日，电影《戴高乐之战》确认引进。该系列分为《戴高乐之战：淬炼时代》《戴高乐之战：我写下你的名字》上下两部曲。由法国百代公司出品，制作成本高达7520万欧元。作 ...<a href=&#34;https://sspai.com/post/118623&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118623",
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
