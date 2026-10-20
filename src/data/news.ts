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
// 最后更新时间: 2026-10-20 03:18:17 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：MiniMax 发布 M3.1 Flash 模型等",
    summary: "索尼发布三款高端 Walkman 播放器，掌阅推出 Ocean 6 Pro 电纸书等。<a href=&#34;https://sspai.com/post/116758&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116758",
    date: "2026-10-20",
    category: "product",
  },
  {
    id: "news-002",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/116705&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116705",
    date: "2026-10-19",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "与 Tim Cook 走进「蓝盒子」，了解 Mac 如何助力中国企业成长",
    summary: "离开了北京之后，TimCook上周四来到了位于上海市闵行区的「蓝盒子」办公室，开启了此次访华行程的上海之行。蓝盒子是一家成立于2019年的床垫及家居品牌，旗下产品以简洁并具有辨识度的设计，以及「一百天 ...<a href=&#34;https://sspai.com/post/116585&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116585",
    date: "2026-10-19",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "9 月音乐精选：用这 8 张新专辑，激发人生新可能",
    summary: "编者注：2026年我们将重启少数派音乐推荐栏目FM3.14，特邀资深音乐从业者及爱好者为大家推荐优质的华语独立、流行音乐，今年我们也很荣幸邀请到老朋友飞傲，为本栏目冠名。飞傲目前拥有品牌以音乐发烧友为 ...<a href=&#34;https://sspai.com/post/116699&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116699",
    date: "2026-10-19",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "开源掌机的文化线索",
    summary: "在开源掌机这个特定的产品类型背后，都有哪些故事值得讲？<a href=&#34;https://sspai.com/post/115125&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115125",
    date: "2026-10-19",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "VAST开源实时世界模型EdenLive！单消费级显卡、720P超24FPS",
    summary: "让人人都能自由创造并体验可交互世界",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504136.html",
    date: "2026-10-18",
    category: "product",
  },
  {
    id: "news-007",
    title: "突发！DeepSeek新模型发布，超级性价比斩杀一切",
    summary: "新版本V4.1-Flash-1017，还开放了自研搜索API",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504067.html",
    date: "2026-10-17",
    category: "product",
  },
  {
    id: "news-008",
    title: "智谱新模型，懂法方面全球第一了",
    summary: "AI的风还是刮到了法律圈",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503965.html",
    date: "2026-10-17",
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
