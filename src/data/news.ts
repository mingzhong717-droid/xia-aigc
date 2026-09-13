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
// 最后更新时间: 2026-09-13 03:01:45 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "A社承认Claude安全对齐存在缺陷，但“尚无解决方案”",
    summary: "Claude越界攻击真实系统，并非只是测试系统的设置问题，模型本身的安全问题也出了问题。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487796.html",
    date: "2026-09-12",
    category: "product",
  },
  {
    id: "news-002",
    title: "探索RSI，生数新世界模型让机器人开始自我进化",
    summary: "触觉、记忆、Ego数据、自进化……这个世界模型全都有",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487752.html",
    date: "2026-09-12",
    category: "product",
  },
  {
    id: "news-003",
    title: "AI数学的最后一道高墙，塌了！GPT-6 Astra刷穿FrontierMath Tier 4",
    summary: "FrontierMath Tier 4，饱和了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487701.html",
    date: "2026-09-12",
    category: "product",
  },
  {
    id: "news-004",
    title: "Kimi突发K2.8：性能逼近K3，百万上下文全员开放",
    summary: "冲刺港股IPO",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487688.html",
    date: "2026-09-12",
    category: "product",
  },
  {
    id: "news-005",
    title: "陶哲轩邓煜究竟在反对什么：AI暴力解题摧毁人类数学精神",
    summary: "25位菲尔兹奖得主联名吹哨",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487653.html",
    date: "2026-09-12",
    category: "product",
  },
  {
    id: "news-006",
    title: "与 AI 搏斗失败后重新开始找工作：经验分享与半可靠避雷指南",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/114461&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114461",
    date: "2026-09-12",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 7 部作品",
    summary: "📅本周新预告《哥斯拉-0.0》正式预告9月8日，电影《哥斯拉-0.0》发布了正式预告，将于11月3日在日本上映、11月6日在北美上映。山崎贵回归担任导演、编剧和特效总监，神木隆之介、滨边美波回归出演， ...<a href=&#34;https://sspai.com/post/114458&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114458",
    date: "2026-09-11",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "iPhone 18 和 Duo 发布会上，Apple 没告诉你的那些事",
    summary: "新品尚未发货，我们继续整理了一些发布会中未提及的细节，不妨一起来看看有没有你感兴趣的。<a href=&#34;https://sspai.com/post/114449&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114449",
    date: "2026-09-11",
    category: "product",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
