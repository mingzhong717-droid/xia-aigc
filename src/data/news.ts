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
// 最后更新时间: 2026-11-13 04:57:39 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "在快 AI 时代，我是怎么把 Mole 做成一款「慢产品」的？",
    summary: "距离写完上一篇在少数派发的《从开源清理工具到付费Mac应用，用户教会了我如何做产品》已经过去两个多月。这段时间里，Mole从1.13一路发到了1.19，加上了AI工具清理和系统数据清理，Windows ...<a href=&#34;https://sspai.com/post/118512&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118512",
    date: "2026-11-13",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：英伟达 CEO 黄仁勋宣布辞职等",
    summary: "2026 年金摇杆奖获奖名单公布，Apex Compute 推出跨平台 AI 帧生成技术 ANR 等。<a href=&#34;https://sspai.com/post/118966&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118966",
    date: "2026-11-13",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "多模态“源神”！MiniMax开源SOTA生图模型，原生4K，一张两毛",
    summary: "「CAD拆解」",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509440.html",
    date: "2026-11-12",
    category: "product",
  },
  {
    id: "news-004",
    title: "从通用大模型到学习过程智能，AI如何真正进入课堂？",
    summary: "银河智学首席科学家邓澍军博士发表主题演讲",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509404.html",
    date: "2026-11-12",
    category: "product",
  },
  {
    id: "news-005",
    title: "Anthropic启动IPO路演，估值已缩水6000亿美元",
    summary: "全世界都在踩刹车，达里奥一个人踩油门",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509381.html",
    date: "2026-11-12",
    category: "product",
  },
  {
    id: "news-006",
    title: "让AI真正懂业务：璇玑如何成为企业AI的语义基础设施",
    summary: "企业 AI 的难题，不只是模型够不够强",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509349.html",
    date: "2026-11-12",
    category: "product",
  },
  {
    id: "news-007",
    title: "Anthropic玻璃翼计划被质疑！近4万个候补漏洞，只修了217条",
    summary: "只管挖不管埋。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509291.html",
    date: "2026-11-12",
    category: "product",
  },
  {
    id: "news-008",
    title: "城市漫步指南｜夏末大阪，「青黄不接」的时节刚刚好",
    summary: "在炎热但逐渐清爽的夏末，我和女朋友去了一趟日本。我尝试用眼用心记录下所见所感，转写成文字。当我重新阅读这些词句，闭上眼睛，仿佛又回到了关西。我希望能把这份心情与光景，也分享给你。4:3/3:4比例的图 ...<a href=&#34;https://sspai.com/post/118366&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118366",
    date: "2026-11-12",
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
