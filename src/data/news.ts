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
// 最后更新时间: 2026-10-08 04:24:05 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "大模型原生智能体手机STEPX Neo将于10月13日正式发布",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501915.html",
    date: "2026-10-08",
    category: "product",
  },
  {
    id: "news-002",
    title: "GPT-6今起免费用！拒答变少，话变多了",
    summary: "ChatGPT聊天框长出界面",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501834.html",
    date: "2026-10-08",
    category: "product",
  },
  {
    id: "news-003",
    title: "Claude新模型发布！跑分暴击GPT-6 Luna，价格比梁文谷还便宜，OpenAI只能送重置卡挽尊",
    summary: "小模型新守门员",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501832.html",
    date: "2026-10-08",
    category: "product",
  },
  {
    id: "news-004",
    title: "App Store 生态规模五年翻倍，助力中国开发者走向全球",
    summary: "10月8日，Apple发布《中国AppStore生态系统——2025年开发者与用户价值研究》。这份由Apple提供支持、上海财经大学商学院副教授居恒与安诺析思国际咨询公司经济学家MarkusvonWa ...<a href=&#34;https://sspai.com/post/115462&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115462",
    date: "2026-10-08",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "派早报：微软发布 Windows 相关新品、Google AI 新闻两则等",
    summary: "Anthropic 推出 Claude for Google Workspace、Reflection 发布首个开放权重模型 Beam 等。<a href=&#34;https://sspai.com/post/115455&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115455",
    date: "2026-10-08",
    category: "product",
  },
  {
    id: "news-006",
    title: "《怪物史莱克》编剧也来了！这家AI影视公司，视频模型全球第二！",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501803.html",
    date: "2026-10-07",
    category: "product",
  },
  {
    id: "news-007",
    title: "晕…这年头还有说人话的AI不",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501796.html",
    date: "2026-10-07",
    category: "product",
  },
  {
    id: "news-008",
    title: "罗马：永恒之城，永恒于世",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/114845&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114845",
    date: "2026-10-07",
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
