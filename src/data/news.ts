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
// 最后更新时间: 2026-08-29 05:32:11 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "2026 烟灶选购指南",
    summary: "如何在新老国标换代这一年买到合适自己的烟机灶具呢？<a href=&#34;https://sspai.com/post/112775&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112775",
    date: "2026-08-29",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "《时代》周刊全球AI 100放榜，精准捕获稚晖君最“想低调”的幕后老板",
    summary: "久久不愿来到台前的智元掌舵人",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480666.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-003",
    title: "刚刚，港股AGI第一股杀疯了！Agent业务半年进账近5亿，Token收入Q2暴涨500%",
    summary: "企业智能化服务撑起基本盘，第二增长曲线冒头",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480600.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-004",
    title: "Łukasz Kaiser领衔，2026 奇点智能技术大会北京站正式官宣",
    summary: "11 月 20 -21 日，由奇点智能研究院与 CSDN 联合主办的「奇点智能大会北京站」正式举行",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480482.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-005",
    title: "Claude开始接管物理世界！能用机械臂阻拦5000万美元打款了",
    summary: "Claude觉醒超体",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480487.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-006",
    title: "被高估的视触觉：容易复制的生意，有多大投资价值？",
    summary: "重新审视触视觉",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480236.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 10 部作品",
    summary: "📅本周新预告《社交清算》新预告8月27日，电影《社交清算》发布了新预告，将于10月9日在北美上映。凭借《社交网络》斩获奥斯卡金像奖的艾伦・索金带来全新姐妹篇，当科技巨头以「言论自由」为名逃避责任，当算 ...<a href=&#34;https://sspai.com/post/113944&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113944",
    date: "2026-08-28",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "开学季 | 学习不止在课堂：这些方法和技巧帮你做好知识管理",
    summary: "这些内容，即使毕了业也能有所帮助。<a href=&#34;https://sspai.com/post/68623&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/68623",
    date: "2026-08-28",
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
