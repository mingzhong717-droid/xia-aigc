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
// 最后更新时间: 2026-08-22 01:02:20 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "明略科技携手海康机器人亮相世界机器人大会，以“Agent+具身”联合进入商业机器人场景",
    summary: "明略科技（2718.HK）与海康机器人联合参展2026WRC，聚焦商业服务领域展示具身智能落地进展。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/476733.html",
    date: "2026-08-21",
    category: "product",
  },
  {
    id: "news-002",
    title: "雷鸟iO发布：两天续航、全天候主动式AI，轻至34g",
    summary: "8月21日，全球领先的消费级AR品牌雷鸟创新（RayNeo）举办2026雷鸟AI眼镜新品发布会",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/476628.html",
    date: "2026-08-21",
    category: "product",
  },
  {
    id: "news-003",
    title: "机器人的GPT-3时刻真·来了！卡卡西上身，看3秒就学会新动作",
    summary: "机器人看3秒演示就能学会",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/476596.html",
    date: "2026-08-21",
    category: "product",
  },
  {
    id: "news-004",
    title: "科学家只管提问题，AI负责跑实验：深势科技把科研全流程搬进桌面",
    summary: "让科学家的时间回到科学创造",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/476591.html",
    date: "2026-08-21",
    category: "product",
  },
  {
    id: "news-005",
    title: "本周看什么 | 最近值得一看的 10 部作品",
    summary: "📅本周新预告《复仇者联盟5》新预告8月15日，电影《复仇者联盟5：毁灭之日》发布了新预告，将于12月全球献映。罗素兄弟执导，克里斯·埃文斯、克里斯·海姆斯沃斯、佩德罗·帕斯卡等主演，小罗伯特·唐尼回归 ...<a href=&#34;https://sspai.com/post/113693&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113693",
    date: "2026-08-21",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "TDS REVIEW | Nothing Ear (3a) 降噪真无线耳机体验",
    summary: "Nothing Ear (3a) 保持了它作为 Nothing 产品的精良做工和标志性的外观设计，在操作等方面也做得不错，单元素质也在水平线之上，降噪等方面也并不差，至少在中价位产品中绝对不能算落后。<a href=&#34;https://sspai.com/post/113586&#34; ta",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113586",
    date: "2026-08-21",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "派早报：华为发布 Pura X View、享界 G9 等多款新品",
    summary: "影石推出竖拍云台相机 Luna Pro，森海塞尔发布 MOMENTUM True Wireless 5 真无线耳机等。<a href=&#34;https://sspai.com/post/113666&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113666",
    date: "2026-08-20",
    category: "product",
  },
  {
    id: "news-008",
    title: "新玩意 249｜少数派的编辑们最近买了啥？",
    summary: "编注：很多读者都会好奇少数派的编辑们到底平时都「买了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。内容声明：《新玩意》栏目如含有 ...<a href=&#34;https://sspai.com/post/113650&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113650",
    date: "2026-08-20",
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
