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
// 最后更新时间: 2026-10-21 03:13:33 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：美国政府指示各机构停用 DeepSeek、理想发布「连山」自研三电体系等",
    summary: "工信部就自动泊车等五项强制性国标征求意见，万事达卡 Apple Pay 新增 3 家合作银行等。<a href=&#34;https://sspai.com/post/116887&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116887",
    date: "2026-10-21",
    category: "product",
  },
  {
    id: "news-002",
    title: "Claude新模型曝光！能跳出思维定势，修Bug治标又治本",
    summary: "OpenAI只掏出一个6.1 Terra…",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504314.html",
    date: "2026-10-20",
    category: "product",
  },
  {
    id: "news-003",
    title: "具透 Plus：Firefox 被「中途喝止」的界面现代化改造；Pixel 不再为 VoLTE 发愁",
    summary: "FirefoxNova：被「中途喝止」的界面现代化改造@PlatyHsu:9月29日，Mozilla随Firefox157推出了代号为Nova的全新设计。这是继2021年Proton改版以来，Fire ...<a href=&#34;https://sspai.com/prime/story/ins",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/inside-release-notes-261020",
    date: "2026-10-20",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "TDS REVIEW｜vivo Buds Clip 耳夹式无线耳机体验",
    summary: "在 TWS 5 系列获得我们不错评价之后，Buds Clip 能否延续他们「来得晚但完成度更高」的特点呢？<a href=&#34;https://sspai.com/post/115475&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115475",
    date: "2026-10-20",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "从「空间扩展」到「等比放大」：我如何为 MacBook Pro 搭建双屏桌面",
    summary: "原厂屏幕之外最省心的搭档。<a href=&#34;https://sspai.com/post/116661&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116661",
    date: "2026-10-20",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "App+1 | 紫毫：基于 Rime 引擎、支持双拼纠错的 iOS 输入法",
    summary: "简单干净、支持双拼纠错的 iOS 输入法。<a href=&#34;https://sspai.com/post/116430&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116430",
    date: "2026-10-20",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "通研院孵化的团队，也盯上了RSI",
    summary: "当AI越来越懂你，如何让智能真正属于你？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504294.html",
    date: "2026-10-19",
    category: "product",
  },
  {
    id: "news-008",
    title: "2026物理AI与世界模型大会医疗健康世界模型分会场在南京举行",
    summary: "2026年10月19日下午，医疗健康世界模型分会场在南京国际博览中心钟山厅举行",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504266.html",
    date: "2026-10-19",
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
