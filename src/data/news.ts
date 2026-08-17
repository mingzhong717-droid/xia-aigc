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
// 最后更新时间: 2026-08-17 01:03:46 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "杭州95后小伙，5亿买走硅谷城堡",
    summary: "辞别马斯克xAI半年之后…",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474245.html",
    date: "2026-08-16",
    category: "product",
  },
  {
    id: "news-002",
    title: "李飞飞最新访谈：AI咋能代替人呢？",
    summary: "AI不是替代者，而是个人能力的放大镜",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474140.html",
    date: "2026-08-16",
    category: "product",
  },
  {
    id: "news-003",
    title: "“B站教AI”爆火后，北航90后副教授何静回应一切",
    summary: "“错过种一棵树最好的时间”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474064.html",
    date: "2026-08-16",
    category: "product",
  },
  {
    id: "news-004",
    title: "WorkSwarm：引领办公智能体新范式，让AI从一个助手，进化为一支与你并肩作战的团队",
    summary: "背后是四项关键能力",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473972.html",
    date: "2026-08-16",
    category: "product",
  },
  {
    id: "news-005",
    title: "派早报：😭（放声大哭）成为最流行 emoji",
    summary: "<p>😭（放声大哭）成为最流行 emoji</p><p>美国要求合作方在中美 AI 竞赛中「选边站」</p><p>ChatGPT 上线使用历史记录功能</p><p>美国政府敦促苹果不要购买中国内存芯片</p><p>uBlock Origin 放弃维护 Facebook 广告规则</p><p>索尼加",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113524",
    date: "2026-08-16",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "浏览器扩展合集： 我们为你找到了这 6 款实用、 有趣的「新玩意」",
    summary: "在浏览器扩展这边，近期又有哪些好用、有趣的「新玩意」呢？<a href=&#34;https://sspai.com/post/113495&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113495",
    date: "2026-08-16",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "至知研究院提出大模型可解释性新路线：拆权重，数据成本不到1%",
    summary: "理解大模型，无需再训练一个替代网络",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473876.html",
    date: "2026-08-15",
    category: "product",
  },
  {
    id: "news-008",
    title: "有毒职场正在炼成：OKR 变成 KPI，敏捷开发变成切碎的瀑布",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/111974&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111974",
    date: "2026-08-15",
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
