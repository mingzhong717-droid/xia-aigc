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
// 最后更新时间: 2026-09-23 03:12:34 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "陆川手搓历史现场，王珞丹熬夜抽卡，阿里全模态开始兜底生产",
    summary: "阿里：三年之内会出现一个原生的全模态统一生成模型，未来体验将不再受限于模态边界。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/494429.html",
    date: "2026-09-22",
    category: "product",
  },
  {
    id: "news-002",
    title: "Agent时代，CPU的价值该重估了",
    summary: "CPU与GPU趋近1∶1",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/494430.html",
    date: "2026-09-22",
    category: "product",
  },
  {
    id: "news-003",
    title: "直播预告：未来两三年，哪些工业AI场景会率先爆发？",
    summary: "从真实工厂到产品复制，再到生态和下一批机会，两位嘉宾会把工业AI从「能用」走向「规模化」的关键问题一层层拆开。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/494420.html",
    date: "2026-09-22",
    category: "product",
  },
  {
    id: "news-004",
    title: "讲真，我没看出这图是AI做的，更没想到是国产AI做的",
    summary: "商汤U1 Pro，正式发布",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/494263.html",
    date: "2026-09-22",
    category: "product",
  },
  {
    id: "news-005",
    title: "WebArena作者Shuyan Zhou入职Meta超级智能实验室",
    summary: "梦想是做能帮妈妈订机票的AI浏览器。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/493653.html",
    date: "2026-09-22",
    category: "product",
  },
  {
    id: "news-006",
    title: "派早报：OPPO Find X10 系列发布、Beats 360 头戴式耳机发布等",
    summary: "高通发布两款第六代骁龙 8 旗舰芯片，Claude Opus 5.5 与 GPT-6 Sol/Luna 发布等。<a href=&#34;https://sspai.com/post/114889&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114889",
    date: "2026-09-22",
    category: "product",
  },
  {
    id: "news-007",
    title: "可定制、更出彩，头戴式耳机新选择：Beats 360 首发体验",
    summary: "在BeatsStudioPro发布3年之后，Beats终于想起来要更新一下自家头戴式耳机的旗舰款了，推出了全新的Beats360。值得一提的是，Beats不久前刚刚度过了成立后的20周年生日，Beat ...<a href=&#34;https://sspai.com/post/114878&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114878",
    date: "2026-09-22",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "怀旧手记｜25 年前的笔记本，如何兼顾轻薄、时尚与性能？",
    summary: "黄金时代「时尚与科技结合」的浪漫。<a href=&#34;https://sspai.com/post/114551&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114551",
    date: "2026-09-22",
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
