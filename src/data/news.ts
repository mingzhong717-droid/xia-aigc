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
// 最后更新时间: 2026-08-31 03:28:41 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：GTA 6 引发请假玩游戏热潮",
    summary: "<p>GTA 6 引发请假玩游戏热潮</p><p>Sam Altman 为 OpenAI 高管定制豪华表</p><p>海信发布 A10 系列墨水屏手机</p><p>Pixel 11 削减内存安全特性，GrapheneOS 考虑放弃支持</p><p>「承重」等 Claude 滥用词在 GitHub 蔓",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114022",
    date: "2026-08-30",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "城市漫步指南 | 佛罗伦萨：来自六月的梦幻艺术夏令营",
    summary: "我种草佛罗伦萨的理由绝对是世所罕见：因为SEVENTEEN的NanaTour有很大一部分是在佛罗伦萨及其周边拍摄的。从去年夏天看了这个综艺开始，我就一直对这个地方念念不忘，心想夏日的意大利到底是有何种 ...<a href=&#34;https://sspai.com/post/113974&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113974",
    date: "2026-08-30",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "AI本地部署不如官方版的元凶找到了：734个依赖包，每一个都可能坑",
    summary: "推理软件栈的微小差异，就能改变输出token",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481372.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-004",
    title: "去年归国的徐梦迪，成了清华姚班班主任",
    summary: "本科读车辆工程，如今教AI第一班",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481318.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-005",
    title: "Claude开始训练Claude！4美元一小时，跑赢150美元人类研究员",
    summary: "AI「自进化」，越来越近了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481223.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-006",
    title: "Coding不再是程序员专属！阿里Qoder这波有点绝",
    summary: "Coding正在变成Al世界的数字执行力",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480940.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-007",
    title: "32GB大显存加持，英特尔锐炫Pro B70搞定AI漫剧创作",
    summary: "从剧本到成片",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480787.html",
    date: "2026-08-29",
    category: "product",
  },
  {
    id: "news-008",
    title: "2026 烟灶选购指南",
    summary: "如何在新老国标换代这一年买到合适自己的烟机灶具呢？<a href=&#34;https://sspai.com/post/112775&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112775",
    date: "2026-08-29",
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
