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
// 最后更新时间: 2026-09-10 02:59:00 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "刚刚，苹果首款折叠屏发布！15999元起，AI参与设计",
    summary: "一比根号二的小胖折叠",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486450.html",
    date: "2026-09-09",
    category: "product",
  },
  {
    id: "news-002",
    title: "国产AI4S计算平台登场亮相2026外滩大会 算力技术与人才布局双向发力",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486370.html",
    date: "2026-09-09",
    category: "product",
  },
  {
    id: "news-003",
    title: "蚂蚁百灵发布首个金融增强模型，AI开始进入真实投研工作流",
    summary: "蚂蚁集团百灵首个金融增强开放模型 Ling-3.0-flash-Fin发布。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486288.html",
    date: "2026-09-09",
    category: "product",
  },
  {
    id: "news-004",
    title: "具身机器人能搞定超市盘点吗？全球七万门店正在给出答案",
    summary: "从Demo到货架，这两家公司要让具身智能算得过账",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486280.html",
    date: "2026-09-09",
    category: "product",
  },
  {
    id: "news-005",
    title: "SkyProduction限免活动第二期：MiniMax H3会员限时免费无限用！",
    summary: "8月28日-9月1日，SkyProduction（天工工作台）联合阿里巴巴通义万相，推出了Wan 3.0模型限时免费活动",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486052.html",
    date: "2026-09-09",
    category: "product",
  },
  {
    id: "news-006",
    title: "派早报：Apple 发布 iPhone Duo 折叠屏等",
    summary: "奥之心发布 OM SYSTEM PEN 相机、Sonos 更新音频系统等。<a href=&#34;https://sspai.com/post/114394&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114394",
    date: "2026-09-09",
    category: "product",
  },
  {
    id: "news-007",
    title: "一图流 | 一张图带你看完 2026 Apple 秋季发布会",
    summary: "9 月 10 日凌晨，Apple 召开新品发布会。推出了新一代的 iPhone 18 Pro 系列、Apple Watch Series 12、Apple Watch Ultra 4 以及 AirPods 5 系列。<a href=&#34;https://sspai.com/post/114393",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114393",
    date: "2026-09-09",
    category: "product",
  },
  {
    id: "news-008",
    title: "可以「折」的 iPhone 正式亮相：Apple 发布会看点回顾",
    summary: "9 月 10 日凌晨，Apple 召开新品发布会。推出了新一代的 iPhone 18 Pro 系列、Apple Watch Series 12、Apple Watch Ultra 4 以及 AirPods 5 系列。<a href=&#34;https://sspai.com/post/114392",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114392",
    date: "2026-09-09",
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
