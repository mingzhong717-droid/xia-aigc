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
// 最后更新时间: 2026-07-21 02:25:00 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "6000万用户的情感陪伴APP，营收数亿后做了款家庭机器人｜产品观察",
    summary: "作者 | 黄楠 编辑 | 袁斯来 在旗下App每年创造数亿元营收、日均百万用户打开量的时候，心言集团创始人兼CEO任永亮做了一个令所有人都觉得“不理性”的决定：把AI情感陪伴能力塞进一个硬件的模具里——造机器人。 心言集团最有名的产品叫测测，来自上一个互联网时代，2013年上线，主要为用户提供泛心理",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3904049563731849?f=rss",
    date: "2026-07-21",
    category: "industry",
  },
  {
    id: "news-002",
    title: "速腾聚创第二代全固态感知平台发布，要做物理AI数据入口｜最前线",
    summary: "作者｜黄楠 编辑｜袁斯来 当下具身智能赛道正完成一轮关键转型。此前行业大量研发、展示集中在人形、四足机器人舞台演示，如今产业评判标准落地到工厂、园区、家庭等真实场景的长期稳定作业能力。 但一个现实的问题是：多数基础模型仅依托二维图像、仿真虚拟数据训练，缺少真实三维空间里物体距离、材质、受力、动态交互",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3903885834028931?f=rss",
    date: "2026-07-21",
    category: "product",
  },
  {
    id: "news-003",
    title: "派早报：京沪高铁与京沪铁路试点提前 60 天预约购票等",
    summary: "少数派的近期动态那个让你放松娱乐、拥抱心流、逃离纷扰或找回真我的角落，是如何构建起来的？「角落新声」征文活动火热征稿中少数派×AKKO灵犀Linx68键盘预售开启。看看新键盘你可能错过的文章2026年 ...<a href=&#34;https://sspai.com/post/112565&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112565",
    date: "2026-07-21",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "WAIC 2026收官｜范式大会亮点集锦，见证AI 2.0从技术突破走向产业实践",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/455963.html",
    date: "2026-07-20",
    category: "product",
  },
  {
    id: "news-005",
    title: "不同模型厂同一家Agentic Infra，AGI时代的地基终于浮出水面",
    summary: "大模型时代的共同选择",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/455805.html",
    date: "2026-07-20",
    category: "product",
  },
  {
    id: "news-006",
    title: "当AI进入最依赖“人”的行业：一家四线城市康复机构利润增长40%",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/455791.html",
    date: "2026-07-20",
    category: "product",
  },
  {
    id: "news-007",
    title: "全球首发技术路线+全域联盟双轮破局，AI for ADANES释放先进核能新质生产力",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/455729.html",
    date: "2026-07-20",
    category: "product",
  },
  {
    id: "news-008",
    title: "启鸣达人首发《世界模型驱动的教育AGI白皮书》&#124; WAIC 2026",
    summary: "从理论探索到体系构建",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/455730.html",
    date: "2026-07-20",
    category: "product",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
