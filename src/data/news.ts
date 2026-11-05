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
// 最后更新时间: 2026-11-05 04:59:42 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "基于本体+知识+Harness+Datat Agent的智能体完整落地链路！",
    summary: "Data + AI 技术实践巡展 · 上海站",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507696.html",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-002",
    title: "GPT-Image-2.6全量上线！直出GIF和SVG，6.2 Astra也现身了",
    summary: "最快6秒出图",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507707.html",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-003",
    title: "Linux内核被挖出948个漏洞！OpenAI花120万美元找到的",
    summary: "被轰成筛子了…",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507697.html",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-004",
    title: "从3D生成到世界模型，这家AI公司想和年轻人一起定义问题",
    summary: "薪资+期权不限！实习生也能训核心模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507675.html",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-005",
    title: "Apple 官网排版细节鉴赏",
    summary: "Apple 独一无二的品牌价值，正是从这些细节中凝聚的。<a href=&#34;https://sspai.com/post/115399&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115399",
    date: "2026-11-05",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "派早报：腾讯发布混元 Hy4 正式版，Google 调整 K-12 教育 AI 政策等",
    summary: "少数派的近期动态全新设计复古设备鼠标垫上架，会员可使用点数兑换。前往选购iPhone少数派共创配件上新，自由选择保护、充电、线缆和支架组合。欢迎选购你可能错过的文章国行Apple智能上手：这些功能已经 ...<a href=&#34;https://sspai.com/post/118498&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118498",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-007",
    title: "百度无人车搞出“黑客帝国”！世界模型实时推演全局，跑一天抵三年",
    summary: "连路人都有自己的想法",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507647.html",
    date: "2026-11-04",
    category: "product",
  },
  {
    id: "news-008",
    title: "你不知道的客户端开发：AI 时代下的选型、原生与借力",
    summary: "选型选得好只是锦上添花，最终还是要先把用户最真实的需求解决好。<a href=&#34;https://sspai.com/post/117713&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117713",
    date: "2026-11-04",
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
