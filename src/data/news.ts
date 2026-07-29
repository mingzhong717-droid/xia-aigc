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
// 最后更新时间: 2026-07-29 02:22:43 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：微软发布网络安全模型 MAI-Cyber-1-Flash、美团发布 AI Agent 平台等",
    summary: "少数派的近期动态那个让你放松娱乐、拥抱心流、逃离纷扰或找回真我的角落，是如何构建起来的？「角落新声」征文活动火热征稿中你可能错过的好文章社区速递151|派友的六月好物盘点、携程被重罚热议和tomtoc ...<a href=&#34;https://sspai.com/post/112837&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112837",
    date: "2026-07-29",
    category: "product",
  },
  {
    id: "news-002",
    title: "豆包搜索，走出了豆包",
    summary: "把搜索能力开放给Agent了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461961.html",
    date: "2026-07-28",
    category: "product",
  },
  {
    id: "news-003",
    title: "Kimi K3、Unlimited OCR包揽全球前二，中国开源模型持续刷屏海外",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461949.html",
    date: "2026-07-28",
    category: "product",
  },
  {
    id: "news-004",
    title: "当AI学会“仿真思维”，教师才能回归育人本质",
    summary: "从“工具效率”到“认知理解”，教育AI进入深水区",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461939.html",
    date: "2026-07-28",
    category: "product",
  },
  {
    id: "news-005",
    title: "世界模型有触觉了！50万小时视频，训出首个隐式触觉世界动作模型",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461827.html",
    date: "2026-07-28",
    category: "product",
  },
  {
    id: "news-006",
    title: "全球首个Agentic扩散模型来了：边行动边纠错，128K上下文追平自回归",
    summary: "扩散模型首次打通长程Agent任务",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/461650.html",
    date: "2026-07-28",
    category: "product",
  },
  {
    id: "news-007",
    title: "8点1氪丨韩国考虑为“借钱炒股”封顶20%；雷军打新长鑫科技浮盈7亿？小米高管回应；月之暗面Kimi K3正式开源",
    summary: "今日热点导览 李宁此前起诉多个网络账号名誉侵权案，已取得胜诉判决 小米已注册澎程关联商标 泡泡玛特城市乐园涨价 英伟达据悉签署价值高达500亿美元的得州数据中心租赁协议 “抱抱脸”向OpenAI索赔1亿美元算力 TOP 3 大新闻 韩国考虑为“借钱炒股”封顶20% 韩国KOSPI指数尾盘扩大跌幅，日",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3915953688604296?f=rss",
    date: "2026-07-28",
    category: "industry",
  },
  {
    id: "news-008",
    title: "36氪研究院 | 2026年中国智能硬件行业发展研究报告",
    summary: "当前，AI技术正加速向实体经济各领域渗透深化，智能硬件作为AI能力落地实体场景的核心载体，已进入产品能力升级与产业价值提升的关键发展阶段。腾讯研究院2026年3月的调研数据显示，国内已有80.8%的消费者购买或使用过至少一类AI相关硬件产品，其中32.0%的用户表示将在未来三个月增加相关消费支出，消",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3915066350327176?f=rss",
    date: "2026-07-28",
    category: "industry",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
