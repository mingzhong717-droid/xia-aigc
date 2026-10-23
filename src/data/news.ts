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
// 最后更新时间: 2026-10-23 03:17:45 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：Insta360 发布 Insta360 Mic，Anthropic 推出 Claude Duet 等",
    summary: "少数派的近期动态和少数派一起，在海口明日公园来一场创造之约吧。活动详情iPhone少数派共创配件上新，自由选择保护、充电、线缆和支架组合。欢迎选购你可能错过的文章终于吃到了那颗梦寐以求的小药丸：我的A ...<a href=&#34;https://sspai.com/post/117104&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117104",
    date: "2026-10-23",
    category: "product",
  },
  {
    id: "news-002",
    title: "既能“做选择题”，也能“做填空题”——星辰意图理解模型Xing4.0-29B-Intent发布",
    summary: "中电信人工智能科技有限公司星辰通用人工智能实验室正式发布并开源意图理解专用模型 Xing4.0-29B-Intent",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504832.html",
    date: "2026-10-22",
    category: "product",
  },
  {
    id: "news-003",
    title: "谁在给OpenAI供应具身数据？",
    summary: "挤进全球Physical AI核心供应链",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504800.html",
    date: "2026-10-22",
    category: "product",
  },
  {
    id: "news-004",
    title: "把 Muse 装进 ESP-Mosaico：做一个没用的东西，证明 Vibe Coding 也在硬件领域快速成长",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/115437&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115437",
    date: "2026-10-22",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "前瞻｜Apple 新品看点：MacBook 或将推出 OLED 触屏版本",
    summary: "配备触摸屏的 OLED 版 MacBook 型号很可能是这次活动的主角。<a href=&#34;https://sspai.com/post/116923&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116923",
    date: "2026-10-22",
    category: "product",
  },
  {
    id: "news-006",
    title: "终于吃到了那颗梦寐以求的小药丸：我的 ADHD 诊疗记",
    summary: "药物不能解决所有问题，这是是我学到的重要一课。<a href=&#34;https://sspai.com/post/115090&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115090",
    date: "2026-10-22",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "派早报：荣耀发布 WIN2 系列新品、Google 开源 TorchTPU 等",
    summary: "OpenBSD 8.0 正式发布、腾讯宣布元宝搜索对外开放等。<a href=&#34;https://sspai.com/post/116953&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116953",
    date: "2026-10-22",
    category: "product",
  },
  {
    id: "news-008",
    title: "多智能体协同重构医疗AI！清华AIR孵化：医生AI分身“坐诊”医院",
    summary: "医疗AI质变时刻",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504734.html",
    date: "2026-10-21",
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
