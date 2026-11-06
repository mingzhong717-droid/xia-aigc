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
// 最后更新时间: 2026-11-06 04:59:18 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "更高能效比，带来新惊喜：M6 款 MacBook Pro 初探",
    summary: "M6 芯片提供了足够的性能保障，无论修图、视频剪辑还是运行入门级的 AI 大模型，它都能应对。在此基础上，你原本可能需要加在 Pro 级 SoC 上的预算就能省下来，花给内存或者硬盘。<a href=&#34;https://sspai.com/post/118570&#34; target=&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118570",
    date: "2026-11-06",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：国务院办公厅发布 2027 年部分节假日放假安排等",
    summary: "OpenAI 推出 Images 2.6 模型，Nothing CMF Speaker S/M 音箱国行上市等。<a href=&#34;https://sspai.com/post/118587&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118587",
    date: "2026-11-06",
    category: "product",
  },
  {
    id: "news-003",
    title: "百度开源文心5.5 Flash Base，多基准测试刷新同尺寸模型 SOTA",
    summary: "11月5日，百度正式开源最新基座模型文心5.5 Flash Base",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507787.html",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-004",
    title: "基于本体+知识+Harness+Datat Agent的智能体完整落地链路！",
    summary: "Data + AI 技术实践巡展 · 上海站",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507696.html",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-005",
    title: "GPT-Image-2.6全量上线！直出GIF和SVG，6.2 Astra也现身了",
    summary: "最快6秒出图",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507707.html",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-006",
    title: "Linux内核被挖出948个漏洞！OpenAI花120万美元找到的",
    summary: "被轰成筛子了…",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507697.html",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-007",
    title: "从3D生成到世界模型，这家AI公司想和年轻人一起定义问题",
    summary: "薪资+期权不限！实习生也能训核心模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507675.html",
    date: "2026-11-05",
    category: "product",
  },
  {
    id: "news-008",
    title: "开启 Mac 的下一世代：MacBook Pro (PROLED XDR) 首发体验",
    summary: "全新 MacBook Pro，开启 Mac 的下一个世代。<a href=&#34;https://sspai.com/post/118546&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118546",
    date: "2026-11-05",
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
