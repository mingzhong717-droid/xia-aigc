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
// 最后更新时间: 2026-10-27 03:37:22 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：Apple 发布 iPad mini (A20 Pro) 等",
    summary: "少数派的近期动态全新设计复古设备鼠标垫上架，会员可使用点数兑换。前往选购iPhone少数派共创配件上新，自由选择保护、充电、线缆和支架组合。欢迎选购你可能错过的文章少数派×红树林基金会｜候鸟季公益直播 ...<a href=&#34;https://sspai.com/post/117600&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117600",
    date: "2026-10-27",
    category: "product",
  },
  {
    id: "news-002",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/117529&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117529",
    date: "2026-10-26",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "秋冬换季护肤买什么，双 11 选购推荐",
    summary: "双 11 到来之际的秋冬护肤选购与搭配建议。<a href=&#34;https://sspai.com/post/117414&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117414",
    date: "2026-10-26",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "曲高和寡、终成绝唱：傲腾 P5800X 测试报告",
    summary: "一起来看看 3D XPoint 这夸张的性能表现吧。<a href=&#34;https://sspai.com/post/115074&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115074",
    date: "2026-10-26",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "少数派×红树林基金会｜候鸟季公益直播，邀你共护湿地",
    summary: "每年秋冬，深圳湾都会迎来一批特殊的「旅客」。它们从北方出发，沿着迁徙路线飞越山海，有的在这里短暂停歇，有的则留下越冬。随着潮水涨落，水鸟在滩涂上低头觅食，鸟群掠过海面，也让我们熟悉的海湾多了几分热闹。 ...<a href=&#34;https://sspai.com/post/117180&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117180",
    date: "2026-10-26",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "企业AI需要两个世界模型",
    summary: "特赞想让企业Agent真正懂业务",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/505032.html",
    date: "2026-10-23",
    category: "product",
  },
  {
    id: "news-007",
    title: "一张5090跑起34B实时世界模型，国产玩家拿下英伟达大奖！",
    summary: "房间秒变草原，抬手就能下雪",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504931.html",
    date: "2026-10-23",
    category: "product",
  },
  {
    id: "news-008",
    title: "国产5B生图模型海外突然爆火，4天超百万下载",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504930.html",
    date: "2026-10-23",
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
