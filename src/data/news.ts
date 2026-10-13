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
// 最后更新时间: 2026-10-13 05:22:41 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "迈上生态新台阶，首期 Apple 应用孵化器顺利收官",
    summary: "为成熟的开发者、设计师和创业者，提供一片走向广阔商业市场的沃土。<a href=&#34;https://sspai.com/post/116028&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116028",
    date: "2026-10-13",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "高端，不只是材质而已：Apple Watch Edition 的前世今生",
    summary: "Apple Watch Edition 留下来的，不是一种材料，而是一套做材料的方式。<a href=&#34;https://sspai.com/post/114561&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114561",
    date: "2026-10-13",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "派早报：一加发布一加 16，Google 推出 Fitbit Edge 等",
    summary: "少数派的近期动态给电话加上「辅助驾驶」？我们想听听你的意见。我们将从提交的问卷中挑选40份用心回答，每份送出50元面值京东卡。参与调研能让AI助手通过自然语言指令直接与您的Quote/0摘录墨水屏交互 ...<a href=&#34;https://sspai.com/post/116033&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116033",
    date: "2026-10-13",
    category: "product",
  },
  {
    id: "news-004",
    title: "华为AI靠RSI通关25款游戏！操作次数比人类少56%",
    summary: "游戏打到21:0，AI甚至不用再调用大模型了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502654.html",
    date: "2026-10-12",
    category: "product",
  },
  {
    id: "news-005",
    title: "智谱新模型，490 tokens/s！",
    summary: "GLM「速度仙人」来了？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502649.html",
    date: "2026-10-12",
    category: "product",
  },
  {
    id: "news-006",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/115934&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115934",
    date: "2026-10-12",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "iOS 27 推出全新家长控制与儿童安全功能，这些变化值得关注",
    summary: "iOS 27 对家长控制和儿童账户体系进行了进一步完善，让对儿童的设备管理从过去偏重「限制监控」，逐步转向更加系统级别的「管理保护」。<a href=&#34;https://sspai.com/post/115242&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115242",
    date: "2026-10-12",
    category: "product",
  },
  {
    id: "news-008",
    title: "用不着Ctrl+F了！全新AI论文工具，帮你在原文献里海里捞针",
    summary: "一套生成论文初稿的多智能体工作流",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502644.html",
    date: "2026-10-11",
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
