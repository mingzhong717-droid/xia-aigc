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
// 最后更新时间: 2026-08-28 08:57:17 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "Łukasz Kaiser领衔，2026 奇点智能技术大会北京站正式官宣",
    summary: "11 月 20 -21 日，由奇点智能研究院与 CSDN 联合主办的「奇点智能大会北京站」正式举行",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480482.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-002",
    title: "Claude开始接管物理世界！能用机械臂阻拦5000万美元打款了",
    summary: "Claude觉醒超体",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480487.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-003",
    title: "被高估的视触觉：容易复制的生意，有多大投资价值？",
    summary: "重新审视触视觉",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480236.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-004",
    title: "智谱 GLM-5.3-Flash上线，商汤大装置提供国产算力支持",
    summary: "国产异构助力前沿智能进入普惠时代",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480223.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-005",
    title: "高德发布首个无长程依赖的万帧级流式3D重建模型ABot-Recon，以12帧重建万帧3D场景",
    summary: "8月28日，阿里巴巴集团旗下高德正式发布首个无长程依赖的万帧级流式3D重建模型ABot-Recon。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480208.html",
    date: "2026-08-28",
    category: "product",
  },
  {
    id: "news-006",
    title: "开学季 | 学习不止在课堂：这些方法和技巧帮你做好知识管理",
    summary: "这些内容，即使毕了业也能有所帮助。<a href=&#34;https://sspai.com/post/68623&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/68623",
    date: "2026-08-28",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "全球首款阔直板探索计划：华为 Pura X View 新品有奖体验",
    summary: "继创新形态的阔折叠手机取得了市场的广泛好评后，华为延续阔屏设计，带来全球首款阔直板旗舰HUAWEIPuraXView。HUAWEIPuraXView薄至6.68mm，轻至201g，拥有7000mAh超 ...<a href=&#34;https://sspai.com/post/113883&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113883",
    date: "2026-08-28",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "桌面升级，灯也要跟着进化：明基 iScreenBar 与 ScreenBar Max 体验",
    summary: "2017年，明基推出第一代ScreenBar，把原本占据桌面的灯座挪到屏幕上方，再用非对称光路照亮桌面、避开屏幕，由此创造了世界上第一盏屏幕挂灯。此后近十年的产品迭代，大致沿着物理结构和智能体验两个方 ...<a href=&#34;https://sspai.com/post/113909&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113909",
    date: "2026-08-28",
    category: "update",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
