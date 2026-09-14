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
// 最后更新时间: 2026-09-14 03:15:50 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "智谱提前剧透GLM-6.0：完全自训练方法公开了",
    summary: "模型、论文都还没出，没想到先从财务公告上剧透了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/488694.html",
    date: "2026-09-14",
    category: "product",
  },
  {
    id: "news-002",
    title: "2000+真实场景搬进仿真！一个导航模型零样本“通吃”四种机器人本体",
    summary: "亮源新创的Physical Al路线清晰了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/488672.html",
    date: "2026-09-13",
    category: "product",
  },
  {
    id: "news-003",
    title: "今年外滩最特别Agent：能干活，能陪聊，还会朋友圈拉黑你",
    summary: "Agent的下一步是关系型生产力",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/488447.html",
    date: "2026-09-13",
    category: "product",
  },
  {
    id: "news-004",
    title: "OpenAI年内不上市了！奥特曼支持对手Dario呼吁：AI该踩刹车了",
    summary: "RSI太危险，得管！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/488380.html",
    date: "2026-09-13",
    category: "product",
  },
  {
    id: "news-005",
    title: "派早报：美国 AI 高管呼吁放缓研发，特朗普反对",
    summary: "<p>美国 AI 高管呼吁放缓研发，特朗普反对</p><p>苹果解释 Apple Watch 不会持续录音</p><p>LG 否认智能电视监控用户</p><p>暴雪公布《魔兽世界》怀旧服</p><p>儿童贴身使用笔记本电脑导致皮肤灼伤</p><p>Android 开始支持密码管理器迁移</p><p>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114539",
    date: "2026-09-13",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "搭建自己的 HomeLab（一）：聊聊我的硬件清单",
    summary: "作为系列的第一篇，这里想把三件事讲清楚：什么是 HomeLab、我为什么愿意折腾它、以及这套东西需要哪些硬件、它们大概又要花多少钱。系列其他文章的目录放在文末。<a href=&#34;https://sspai.com/post/113880&#34; target=&#34;_blank&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113880",
    date: "2026-09-13",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "A社承认Claude安全对齐存在缺陷，但“尚无解决方案”",
    summary: "Claude越界攻击真实系统，并非只是测试系统的设置问题，模型本身的安全问题也出了问题。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487796.html",
    date: "2026-09-12",
    category: "product",
  },
  {
    id: "news-008",
    title: "与 AI 搏斗失败后重新开始找工作：经验分享与半可靠避雷指南",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/114461&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114461",
    date: "2026-09-12",
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
