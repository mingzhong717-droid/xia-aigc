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
// 最后更新时间: 2026-09-12 03:01:14 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "银行Agent上岗：4200万小微经营者可用，信贷、票据、财税一把梭",
    summary: "看清「一个真正的人」",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487631.html",
    date: "2026-09-11",
    category: "product",
  },
  {
    id: "news-002",
    title: "啊？Anthropic最高320万招销售，只为服务Meta",
    summary: "原来你俩互相下单呢",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487573.html",
    date: "2026-09-11",
    category: "product",
  },
  {
    id: "news-003",
    title: "百度秒哒再升级！让最懂业务的人，亲手造自己的系统",
    summary: "把开发、交付和接单全打通了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487415.html",
    date: "2026-09-11",
    category: "update",
  },
  {
    id: "news-004",
    title: "不简单，“吃货快乐榜”也全面AI化了",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487282.html",
    date: "2026-09-11",
    category: "product",
  },
  {
    id: "news-005",
    title: "墨芯人工智能亮相2026 Inclusion·外滩大会：以专用稀疏推理芯片提升算力效能，共创AI新经济",
    summary: "9月9日，墨芯人工智能亮相以\"共创AI新经济\"为主题的2026 Inclusion·外滩大会。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/487273.html",
    date: "2026-09-11",
    category: "product",
  },
  {
    id: "news-006",
    title: "本周看什么 | 最近值得一看的 7 部作品",
    summary: "📅本周新预告《哥斯拉-0.0》正式预告9月8日，电影《哥斯拉-0.0》发布了正式预告，将于11月3日在日本上映、11月6日在北美上映。山崎贵回归担任导演、编剧和特效总监，神木隆之介、滨边美波回归出演， ...<a href=&#34;https://sspai.com/post/114458&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114458",
    date: "2026-09-11",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "iPhone 18 和 Duo 发布会上，Apple 没告诉你的那些事",
    summary: "新品尚未发货，我们继续整理了一些发布会中未提及的细节，不妨一起来看看有没有你感兴趣的。<a href=&#34;https://sspai.com/post/114449&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114449",
    date: "2026-09-11",
    category: "product",
  },
  {
    id: "news-008",
    title: "「正常」已是不易：聊聊不那么标新立异的理想 i6",
    summary: "如果你想买一辆能够长期持有、同时又足够「正常」的新能源车，我还是非常推荐去试试理想 i6。<a href=&#34;https://sspai.com/post/113605&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113605",
    date: "2026-09-11",
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
