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
// 最后更新时间: 2026-11-26 06:45:17 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "任少卿带着世界模型3.0来了！蔚来智驾训练提效5倍，座舱也用上强化学习",
    summary: "李斌坦言：不做AI变革可能活不下去",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512897.html",
    date: "2026-11-26",
    category: "product",
  },
  {
    id: "news-002",
    title: "沈向洋刚讲了好多AI非共识啊",
    summary: "“灵巧手是人类最后的尊严”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512840.html",
    date: "2026-11-26",
    category: "product",
  },
  {
    id: "news-003",
    title: "AI影视高地正在北影海淀一带崛起，「一人制片厂」基建搭好了",
    summary: "叠满海淀最强AI Buff。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512828.html",
    date: "2026-11-26",
    category: "product",
  },
  {
    id: "news-004",
    title: "我用AI做了一张两千年的中国历史地图",
    summary: "希望这张地图，能陪更多人走一遍故纸堆里的万里江山。<a href=&#34;https://sspai.com/post/117510&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117510",
    date: "2026-11-26",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "派早报：蔚来举办 2026 创新科技日、Tidal 将拒绝 AI 音乐等",
    summary: "阿里千问 Go 开放免费代打电话服务、Sand.ai 发布视频生成模型 MAGI-2 等。<a href=&#34;https://sspai.com/post/119560&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119560",
    date: "2026-11-26",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "我以为这是摄影作品，你告诉我这是最新的国产AI？！",
    summary: "商汤SenseNova U1.6",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512748.html",
    date: "2026-11-25",
    category: "product",
  },
  {
    id: "news-007",
    title: "丢个故事就行！直出15分钟AI短片，家里二舅也能上手",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512727.html",
    date: "2026-11-25",
    category: "product",
  },
  {
    id: "news-008",
    title: "翻开 2027， 值得入手的新年日历推荐",
    summary: "按照中国的农历纪年法，2027年是羊年，《说文解字》说「羊，祥也」。《诗经・小雅・无羊》云「尔羊来思，其角濈濈」，写羊群缓缓归野，安然相聚，恰合丁未岁的平和气象。一只吉羊，一册日历，便是收纳这一年日常 ...<a href=&#34;https://sspai.com/post/119264&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119264",
    date: "2026-11-25",
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
