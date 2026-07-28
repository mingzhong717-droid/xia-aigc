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
// 最后更新时间: 2026-07-28 02:13:13 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "智能体走向终端，个人AI时代正在到来",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461565.html",
    date: "2026-07-28",
    category: "product",
  },
  {
    id: "news-002",
    title: "微软AI发布网络安全模型MAI-Cyber-1-Flash，漏洞检测性能提升并降低50%成本",
    summary: "微软AI（Microsoft AI）当地时间7月27日发布首款网络安全专用模型MAI-Cyber-1-Flash，并将其集成至多智能体漏洞识别与修复平台MDASH。微软表示，该组合在CyberGym漏洞检测基准测试中取得95.95%的成绩，超过Mythos、Gemini和GPT系列模型，同时相比现有",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/newsflashes/3914672335295874?f=rss",
    date: "2026-07-28",
    category: "product",
  },
  {
    id: "news-003",
    title: "派早报：月之暗面开源 Kimi K3 模型等",
    summary: "少数派的近期动态那个让你放松娱乐、拥抱心流、逃离纷扰或找回真我的角落，是如何构建起来的？「角落新声」征文活动火热征稿中你可能错过的文章角落新声｜不再烧Hi-Fi后，我在走步机上给音乐留了一小时Wind ...<a href=&#34;https://sspai.com/post/112805&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112805",
    date: "2026-07-28",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "超维动力携手北大医疗：务实构建具身智能医疗落地路径",
    summary: "一次技术与场景的深度耦合",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461444.html",
    date: "2026-07-27",
    category: "product",
  },
  {
    id: "news-005",
    title: "与AI共生：2026微信小程序开发大赛WAIC官宣启动",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461392.html",
    date: "2026-07-27",
    category: "product",
  },
  {
    id: "news-006",
    title: "AI最尴尬的短板，中国科学院出手了",
    summary: "把“情商”做成了一套可测可训的工程",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461160.html",
    date: "2026-07-27",
    category: "product",
  },
  {
    id: "news-007",
    title: "出海企业苦等的可信任AI营销产品，飞书深诺做出来了",
    summary: "让中国品牌赢在全球",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461226.html",
    date: "2026-07-27",
    category: "product",
  },
  {
    id: "news-008",
    title: "氪星晚报｜美国大型企业告别裁员潮重启招聘；英伟达、微软、IBM等数十家企业成立新联盟，旨在共同保障AI安全；《光伏行业成本核算模型通则》发布，引导行业有序竞争",
    summary: "大公司： 汇丰控股将在新加坡设全球人工智能卓越中心，并招聘超100名AI专家 汇丰控股7月27日宣布，将于今年下半年在新加坡设立全球人工智能卓越中心（CoE），旨在开发可扩展至集团全球网络的AI能力，并计划招聘100多名AI专家。声明称，该卓越中心初期将专注于提升客户财富管理体验、引入智能化的财资解",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3913320648971395?f=rss",
    date: "2026-07-27",
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
