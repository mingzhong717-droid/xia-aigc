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
// 最后更新时间: 2026-10-03 03:42:34 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "openJiuwen X-Router自演进模型路由技术首发，昇腾亲和，Agent越跑越省，实测减少50+%Token消耗",
    summary: "让每一次请求选对模型，让每一次反馈都成为下一次更优、更省的选择",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/500098.html",
    date: "2026-10-02",
    category: "product",
  },
  {
    id: "news-002",
    title: "丘成桐新论文致谢了GPT和Claude",
    summary: "44年前被亲自列入问题清单",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/499991.html",
    date: "2026-10-02",
    category: "product",
  },
  {
    id: "news-003",
    title: "本周看什么 | 最近值得一看的 8 部作品",
    summary: "📅本周新预告《泥面人》终极预告9月24日，DC新片《泥面人》发布了终极预告，将于10月23日在北美上映。詹姆斯·瓦特金斯执导，汤姆·里斯·哈里斯主演，隆重介绍哥谭市的新面孔，一位意外毁容的演员在注射了 ...<a href=&#34;https://sspai.com/post/115211&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115211",
    date: "2026-10-02",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "何恺明团队新作：看猫片就能学会ARC挑战",
    summary: "用ImageNet训练encoder",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/499812.html",
    date: "2026-10-01",
    category: "product",
  },
  {
    id: "news-005",
    title: "谷歌Gemini 4突然发布！RSI加持，GPT和Opus都让让",
    summary: "价格只有Astra一半",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/499663.html",
    date: "2026-10-01",
    category: "product",
  },
  {
    id: "news-006",
    title: "OpenAI推理之父最新访谈！数学只是多智能体时代的开胃菜",
    summary: "千禧年难题的突破，10000个Agent最多占了10%的功劳。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499654.html",
    date: "2026-09-30",
    category: "product",
  },
  {
    id: "news-007",
    title: "从玩家的世界掠过：Bungie 的「列车」如何驶向终焉",
    summary: "Bungie 究竟是在和时间赛跑，还是在和自己赛跑？<a href=&#34;https://sspai.com/post/115070&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115070",
    date: "2026-09-30",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "经典任务管理软件的现代重构：新版 2Do 详解",
    summary: "完全重构的 2Do 是我的心目中最佳的任务管理工具。<a href=&#34;https://sspai.com/post/115166&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115166",
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
