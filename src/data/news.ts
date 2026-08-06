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
// 最后更新时间: 2026-08-06 02:15:16 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：华为发布尊界 MPV 及多款新品等",
    summary: "英伟达宣布 Alpamayo 2 Super AI 开放商用、NVM Express 发布十一项规范集更新等。<a href=&#34;https://sspai.com/post/113110&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113110",
    date: "2026-08-06",
    category: "product",
  },
  {
    id: "news-002",
    title: "别再吹AI生图了，不能图层编辑的AI都是“画饼”",
    summary: "兔展智能发布RabbitVis，让AI真正走完设计全流程",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467034.html",
    date: "2026-08-05",
    category: "product",
  },
  {
    id: "news-003",
    title: "又一家AI基金暴雷了",
    summary: "开源改写游戏规则",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467001.html",
    date: "2026-08-05",
    category: "product",
  },
  {
    id: "news-004",
    title: "淘天开启2027届应届生招聘：AI技术类岗位占比超9成",
    summary: "阿里巴巴淘天集团开启2027届应届生招聘。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/466998.html",
    date: "2026-08-05",
    category: "product",
  },
  {
    id: "news-005",
    title: "114B参数、6B激活，Sand.ai刚刚开源全球首个千亿MoE视频生成模型",
    summary: "10秒1080P，成本只要5毛钱",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/466847.html",
    date: "2026-08-05",
    category: "product",
  },
  {
    id: "news-006",
    title: "微软叫停Tokenmaxxing！预算卡死，超限自负",
    summary: "内部默认用GPT-5.6",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/466739.html",
    date: "2026-08-05",
    category: "product",
  },
  {
    id: "news-007",
    title: "196 张盗版碟，和我的游戏启蒙史",
    summary: "游戏首先要传播出去才会具备被用户接受和讨论的价值，那些曾经陪伴你我的盗版游戏，是否也为今天的你埋下过一颗种子？<a href=&#34;https://sspai.com/post/112831&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112831",
    date: "2026-08-05",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "Bookology：从藏书到笔记，打造你的私人阅读档案",
    summary: "作为长期阅读的用户，多年以来，我一直在使用Kindle、AppleBooks、PDF等多种工具读书。在管理阅读方面，我使用多款应用来进行：管理书籍我使用的是Calibre；追踪阅读和数据统计，我使用计 ...<a href=&#34;https://sspai.com/post/112953&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112953",
    date: "2026-08-05",
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
