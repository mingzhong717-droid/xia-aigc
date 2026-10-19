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
// 最后更新时间: 2026-10-19 03:09:12 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "Quote/0 妙用 +1，把墨水屏变成点餐助手",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/115241&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115241",
    date: "2026-10-18",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "突发！DeepSeek新模型发布，超级性价比斩杀一切",
    summary: "新版本V4.1-Flash-1017，还开放了自研搜索API",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504067.html",
    date: "2026-10-17",
    category: "product",
  },
  {
    id: "news-003",
    title: "智谱新模型，懂法方面全球第一了",
    summary: "AI的风还是刮到了法律圈",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503965.html",
    date: "2026-10-17",
    category: "product",
  },
  {
    id: "news-004",
    title: "清华开源！智能体操作系统任务成本降83%，AI记忆可查可改",
    summary: "整套系统原生支持MCP",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503935.html",
    date: "2026-10-17",
    category: "product",
  },
  {
    id: "news-005",
    title: "Claude半小时解开密码学悬案，学界集体走偏20年",
    summary: "谜底指向时间",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503910.html",
    date: "2026-10-17",
    category: "product",
  },
  {
    id: "news-006",
    title: "被量化的心跳：HRV 是身体的晴雨表，还是制造焦虑的数字游戏？",
    summary: "这些设备最好的用途，不是让你更依赖它们，而是帮助你重新学会倾听自己。然后，在某个清晨，你不再需要看任何数字，就知道今天会是美好的一天。<a href=&#34;https://sspai.com/post/104231&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/104231",
    date: "2026-10-17",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "清华特奖得主AI创业再+1：GeoPT一作入局物理世界模型",
    summary: "从搭载物理建模能力的世界模型切入",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503880.html",
    date: "2026-10-16",
    category: "product",
  },
  {
    id: "news-008",
    title: "本周看什么 | 最近值得一看的 13 部作品",
    summary: "📅本周新预告《哥斯拉-0.0》终极预告10月11日，电影《哥斯拉-0.0》发布了终极预告，将于11月3日在日本上映、11月6日在北美上映。该片为首部为IMAX拍摄的日本电影，山崎贵执导、编剧，神木隆之 ...<a href=&#34;https://sspai.com/post/116423&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116423",
    date: "2026-10-16",
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
