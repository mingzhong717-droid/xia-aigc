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
// 最后更新时间: 2026-10-25 03:06:13 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "在硅谷，遇见个人计算机历史",
    summary: "从硅谷计算机历史博物馆出发，让书里的故事变得更加具体。<a href=&#34;https://sspai.com/post/116128&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116128",
    date: "2026-10-24",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "百度世界2026前瞻：10+重磅分论坛，全面解码AI时代的智能组织进化路径",
    summary: "10月21日，百度官方公众号发文披露了百度世界2026分论坛的更多议程信息。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504901.html",
    date: "2026-10-23",
    category: "product",
  },
  {
    id: "news-003",
    title: "本周看什么 | 最近值得一看的 12 部作品",
    summary: "📅本周新预告《指环王：力量之戒第三季》正式预告10月22日，剧集《指环王：力量之戒第三季》发布了正式预告，将于11月11日上线PrimeVideo。故事发生在第二季事件的数年之后，正值精灵与索伦之战的 ...<a href=&#34;https://sspai.com/post/117169&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117169",
    date: "2026-10-23",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "TDS REVIEW｜OPPO Enco X4 降噪真无线耳机体验",
    summary: "放在欧加体系里，Enco X4 显然是值得买的：它在千元档有着第一档的降噪综合能力且没有明显短板，有着手机厂产品里不错的素质和相对饱满、流行化但不过分两头翘的调音，同时操作和细节体验没有明显问题……<a href=&#34;https://sspai.com/post/116398&#34; tar",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116398",
    date: "2026-10-23",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "破与立：设计视角下的 iPhone Duo",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/116979&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116979",
    date: "2026-10-23",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "派早报：Insta360 发布 Insta360 Mic，Anthropic 推出 Claude Duet 等",
    summary: "少数派的近期动态和少数派一起，在海口明日公园来一场创造之约吧。活动详情iPhone少数派共创配件上新，自由选择保护、充电、线缆和支架组合。欢迎选购你可能错过的文章终于吃到了那颗梦寐以求的小药丸：我的A ...<a href=&#34;https://sspai.com/post/117104&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117104",
    date: "2026-10-23",
    category: "product",
  },
  {
    id: "news-007",
    title: "又一国产决策模型发布！准确率超过微软和Jev等决策模型",
    summary: "10月22日，蚂蚁数科正式发布决策模型 LingDT-Decision-1.0。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504879.html",
    date: "2026-10-22",
    category: "product",
  },
  {
    id: "news-008",
    title: "既能“做选择题”，也能“做填空题”——星辰意图理解模型Xing4.0-29B-Intent发布",
    summary: "中电信人工智能科技有限公司星辰通用人工智能实验室正式发布并开源意图理解专用模型 Xing4.0-29B-Intent",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504832.html",
    date: "2026-10-22",
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
