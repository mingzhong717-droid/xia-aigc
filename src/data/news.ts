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
// 最后更新时间: 2026-08-23 01:07:34 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "不是Demo！优必选把客户产线1:1搬进WRC，解锁具身智能真落地路径",
    summary: "端侧部署解决了具身大脑能否装进身体的问题。那么，同一个「大脑」，如何快速适配工业、商用和家庭三类机器人呢？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/477253.html",
    date: "2026-08-22",
    category: "product",
  },
  {
    id: "news-002",
    title: "魔法原子亮相WRC 2026，三大场景解决方案实景展示物理AI真·上岗",
    summary: "一脑驱动多形落地",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/477155.html",
    date: "2026-08-22",
    category: "product",
  },
  {
    id: "news-003",
    title: "不是Demo！优必选把客户产线1:1搬进WRC，解锁具身智能真落地路径",
    summary: "具身智能赛道壁垒不在出货量",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/477016.html",
    date: "2026-08-22",
    category: "product",
  },
  {
    id: "news-004",
    title: "从模型到生产力：星海图与产业朋友圈共探具身智能的下一站",
    summary: "让具身智能技术真正落地千行万业。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/476930.html",
    date: "2026-08-22",
    category: "product",
  },
  {
    id: "news-005",
    title: "线下活动｜Echoes Remain：迈克尔杰克逊 68 周年诞辰唱片展",
    summary: "又一年8月29日如期而至，MichaelJackson的诞辰来到了第68个年头，我们决定在少数派广州线下店举办一场MJ唱片展。少数派广州店一直想做一处能让数码和音乐爱好者都能自在落脚的空间，不必拘谨落 ...<a href=&#34;https://sspai.com/post/113675&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113675",
    date: "2026-08-22",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "明略科技携手海康机器人亮相世界机器人大会，以“Agent+具身”联合进入商业机器人场景",
    summary: "明略科技（2718.HK）与海康机器人联合参展2026WRC，聚焦商业服务领域展示具身智能落地进展。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/476733.html",
    date: "2026-08-21",
    category: "product",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 10 部作品",
    summary: "📅本周新预告《复仇者联盟5》新预告8月15日，电影《复仇者联盟5：毁灭之日》发布了新预告，将于12月全球献映。罗素兄弟执导，克里斯·埃文斯、克里斯·海姆斯沃斯、佩德罗·帕斯卡等主演，小罗伯特·唐尼回归 ...<a href=&#34;https://sspai.com/post/113693&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113693",
    date: "2026-08-21",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "TDS REVIEW | Nothing Ear (3a) 降噪真无线耳机体验",
    summary: "Nothing Ear (3a) 保持了它作为 Nothing 产品的精良做工和标志性的外观设计，在操作等方面也做得不错，单元素质也在水平线之上，降噪等方面也并不差，至少在中价位产品中绝对不能算落后。<a href=&#34;https://sspai.com/post/113586&#34; ta",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113586",
    date: "2026-08-21",
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
