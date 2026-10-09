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
// 最后更新时间: 2026-10-09 04:28:23 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "清华具身模型登顶全球第一！突围GPT-6、英伟达，不靠外挂和额外数据",
    summary: "星动纪元选择将视频预测与动作学习分阶段训练，重点不是「视频、动作一锅炖」，而是把两者「解耦」，重新「排序」。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502125.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-002",
    title: "openJiuwen发布并开源企业级AgentOS，加速智能体规模落地企业",
    summary: "多Agent协同还能自我进化",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502106.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-003",
    title: "代码造世界，扩散绘现实：AgentGarten让智能体在实时试炼场中边玩边进化",
    summary: "让AI反复试错的“练兵场”来了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502096.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-004",
    title: "陶哲轩带头宣战！人类数学家联合抵制OpenAI",
    summary: "彻底撕破脸了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502089.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-005",
    title: "不等Gemini 4了！谷歌发布办公Agent，支持调用Claude",
    summary: "新的“缝合怪”已经出现，怎么能够停滞不前",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502083.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-006",
    title: "App+1｜所得即所见，更适合中文的字体预览工具：Anyway.Fonts",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/114869&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114869",
    date: "2026-10-09",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "派早报：英伟达 RTX Spark 新品一览、Anthropic 发布 Claude Haiku 5.5 模型等",
    summary: "XMG 发布 PRO 18 系列笔记本、OpenAI 宣布在 ChatGPT 上线 GPT-6 模型<a href=&#34;https://sspai.com/post/115532&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115532",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-008",
    title: "iPhone Duo：苹果，终究还是对强迫症下手了",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/115282&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115282",
    date: "2026-10-08",
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
