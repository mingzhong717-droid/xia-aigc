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
// 最后更新时间: 2026-08-30 03:30:14 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "AI本地部署不如官方版的元凶找到了：734个依赖包，每一个都可能坑",
    summary: "推理软件栈的微小差异，就能改变输出token",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481372.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-002",
    title: "去年归国的徐梦迪，成了清华姚班班主任",
    summary: "本科读车辆工程，如今教AI第一班",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481318.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-003",
    title: "Claude开始训练Claude！4美元一小时，跑赢150美元人类研究员",
    summary: "AI「自进化」，越来越近了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481223.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-004",
    title: "Coding不再是程序员专属！阿里Qoder这波有点绝",
    summary: "Coding正在变成Al世界的数字执行力",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480940.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-005",
    title: "32GB大显存加持，英特尔锐炫Pro B70搞定AI漫剧创作",
    summary: "从剧本到成片",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480787.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-006",
    title: "2026 烟灶选购指南",
    summary: "如何在新老国标换代这一年买到合适自己的烟机灶具呢？<a href=&#34;https://sspai.com/post/112775&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112775",
    date: "2026-08-29",
    category: "tutorial",
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
