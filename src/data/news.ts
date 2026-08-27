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
// 最后更新时间: 2026-08-27 07:10:18 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "基元律动累计融资数千万美元，推出“中国版OpenRouter”",
    summary: "近日，AI基础设施公司基元律动（TokenRhythm）宣布完成新一轮融资，融资额达数千万美元。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480079.html",
    date: "2026-08-27",
    category: "product",
  },
  {
    id: "news-002",
    title: "工业Agent不是“套壳”大模型！西门子百年经验灌进工业AI",
    summary: "西门子Xcelerator与普通软件货架最本质的区别。货架解决的是「把产品卖出去」，西门子Xcelerator要解决的是「让产品在真实工业场景中持续生长」。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480005.html",
    date: "2026-08-27",
    category: "product",
  },
  {
    id: "news-003",
    title: "千问办公首发上线Qwen3.8-Flash，生成速度提升100%，Token消耗减少75%",
    summary: "8月26日晚，千问办公首发上线刚刚发布的Qwen3.8-Flash模型，同时推出标准模式。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/480001.html",
    date: "2026-08-27",
    category: "product",
  },
  {
    id: "news-004",
    title: "来自 1997 年的迷你笔记本电脑，东芝 Libretto 50M 怀旧手记",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/113222&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113222",
    date: "2026-08-27",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "神秘「牛来」模型果然是智谱！GLM首个原生多模态，还用的国产卡",
    summary: "GLM-5.3 Flash",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/479919.html",
    date: "2026-08-26",
    category: "product",
  },
  {
    id: "news-006",
    title: "AI视频应用井喷，美图打开新的增长空间",
    summary: "从图像到视频，美图找到了一门更赚钱的生意",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/479895.html",
    date: "2026-08-26",
    category: "product",
  },
  {
    id: "news-007",
    title: "派早报：Apple 调整妙控键盘的键帽符号、闪迪推出宝可梦纪念款产品等",
    summary: "OpenAI 发布 ChatGPT Admin 插件、Commodore 推出《赛博朋克 2077》主题复古电脑等。<a href=&#34;https://sspai.com/post/113873&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113873",
    date: "2026-08-26",
    category: "product",
  },
  {
    id: "news-008",
    title: "开学季 | 这些软件和服务的教育优惠，能帮你省下不少钱",
    summary: "学生党到底有哪些专享福利？看这一篇就对了。<a href=&#34;https://sspai.com/post/68227&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/68227",
    date: "2026-08-26",
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
