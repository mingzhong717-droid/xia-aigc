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
// 最后更新时间: 2026-08-12 01:41:12 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "一家新能源大厂，如何撑起全球最大AI算力超级单体？",
    summary: "算力竞赛的天平，正在向电力倾斜",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/470621.html",
    date: "2026-08-11",
    category: "product",
  },
  {
    id: "news-002",
    title: "谷歌创始人布林紧急接管Gemini团队，但“3.5 Pro已被取消”",
    summary: "谷歌算力分配内耗严重",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/470576.html",
    date: "2026-08-11",
    category: "product",
  },
  {
    id: "news-003",
    title: "百年黎曼猜想被Claude破了新纪录！是个未公开新模型",
    summary: "把下界推高了一大截",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/470485.html",
    date: "2026-08-11",
    category: "product",
  },
  {
    id: "news-004",
    title: "Claude骂声中启动「隐形水印」：新模型全量嵌入，标记所有文字",
    summary: "大水印时代来了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/470228.html",
    date: "2026-08-11",
    category: "product",
  },
  {
    id: "news-005",
    title: "当AI开始“自作主张”，谁来为智能体戴上“项圈”？全球AI安全实战化大考，中国方案打入前三",
    summary: "全球AI安全实战化测评，中国方案DoGNAVY位列前三",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/469869.html",
    date: "2026-08-11",
    category: "product",
  },
  {
    id: "news-006",
    title: "社区速递 153 | 派友们的吃灰工作流、太空美学复古落地灯与实用帆布钱包",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/113304&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113304",
    date: "2026-08-11",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "走通上架流程，拥抱新兴生态：《鸿蒙应用上架指南》上线",
    summary: "随着HarmonyOSNEXT的日渐成熟，越来越多的独立开发者和小团队开始将目光投向这片新的生态。借助日益强大的AI辅助编程工具，写出能跑通的代码、画出漂亮的UI界面，门槛已经变得前所未有地低。但当你 ...<a href=&#34;https://sspai.com/post/112887&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112887",
    date: "2026-08-11",
    category: "product",
  },
  {
    id: "news-008",
    title: "从内容工坊到 Dot Skill，Quote/0 开始把屏幕交还给你",
    summary: "从最初的测试与共创算起，Quote/0（摘录）已经陪伴大家近一年半的时间。最初我们只想做一块安静的墨水屏：不推送、不闪烁，只把真正重要的信息留在抬眼可见的地方。后来Quote/0进入了许多我们没有预设 ...<a href=&#34;https://sspai.com/post/113288&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113288",
    date: "2026-08-11",
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
