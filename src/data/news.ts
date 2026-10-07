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
// 最后更新时间: 2026-10-07 04:11:37 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "OpenAI一夜甩出722篇数学论文！黎曼霍奇BSD全上阵，数学家：读不过来",
    summary: "三位菲尔兹奖得主：不代表认可",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501749.html",
    date: "2026-10-07",
    category: "product",
  },
  {
    id: "news-002",
    title: "罗马：永恒之城，永恒于世",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/114845&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114845",
    date: "2026-10-07",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "不er，咋陶哲轩也成AI减速派了？？",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501736.html",
    date: "2026-10-06",
    category: "product",
  },
  {
    id: "news-004",
    title: "OpenAI「疯狂28天」首日，这都发了些啥啊…",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501726.html",
    date: "2026-10-06",
    category: "product",
  },
  {
    id: "news-005",
    title: "基于 Vaultwarden 和 Keyguard 的自托管密码管理实践",
    summary: "密码管理服务的数据，当然要掌握在自己手里。<a href=&#34;https://sspai.com/post/115416&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115416",
    date: "2026-10-06",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "刚刚，Hinton发了首篇RSI论文",
    summary: "AI已经开始真正进入「造下一代AI」的流水线",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501705.html",
    date: "2026-10-05",
    category: "product",
  },
  {
    id: "news-007",
    title: "限时28天！OpenAI承诺没新功能就重置，网友：只想要Opus",
    summary: "有改进就体验，没改进就重置，横竖不亏。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501700.html",
    date: "2026-10-05",
    category: "product",
  },
  {
    id: "news-008",
    title: "十个案例助你轻松上手 iOS 27 通知自动化",
    summary: "iOS 27 通知自动化改变了通知的处理方式，快捷指令也迎来了不少的新玩法。<a href=&#34;https://sspai.com/post/114536&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114536",
    date: "2026-10-05",
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
