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
// 最后更新时间: 2026-08-14 01:41:45 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "深度体验DeepSeek Harness，我原谅它涨价了",
    summary: "欢迎，为后人种点树",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/472208.html",
    date: "2026-08-13",
    category: "product",
  },
  {
    id: "news-002",
    title: "4.8亿美元砸向端侧算力！Agent芯片新贵冲出重围",
    summary: "首颗AI芯片已进入量产",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/472059.html",
    date: "2026-08-13",
    category: "product",
  },
  {
    id: "news-003",
    title: "具身数据来了实战派！40天2轮融资数千万，瞄准物理AI基础设施",
    summary: "重新定义物理AI数据基础设施",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/472060.html",
    date: "2026-08-13",
    category: "product",
  },
  {
    id: "news-004",
    title: "Claude一举扫清2000阶以下哈达玛矩阵！AI开始清空数学待解列表",
    summary: "好数学家不挑AI模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/472016.html",
    date: "2026-08-13",
    category: "product",
  },
  {
    id: "news-005",
    title: "刚刚！Ilya首个模型曝光了",
    summary: "SSI第一剑，劈向持续学习",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/471701.html",
    date: "2026-08-13",
    category: "product",
  },
  {
    id: "news-006",
    title: "不用改签名，给 Mac 微信聊天记录「搬个家」",
    summary: "对长期把 Mac 放在固定位置、外置硬盘常年连接的用户来说，它可以让体积庞大的聊天记录不再挤占有限的内置存储。<a href=&#34;https://sspai.com/post/113225&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113225",
    date: "2026-08-13",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "从原理出发，高效搞定夏日营养冷食",
    summary: "不知道多少人和我一样，夏天吃饭的纠结项往往从「今晚到底吃什么」，变成了「太热了到底要不要吃呢」。天气太闷太热、厨房又没有空调，在想到开火的那一刻又心生畏惧，最后还是点外卖或者随便吃点东西凑合了事。但也 ...<a href=&#34;https://sspai.com/prime/story/sum",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/summer-cold-meal-guide",
    date: "2026-08-13",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "TDS REVIEW | 铁三角 ATH-SQ1TW2NC 降噪真无线耳机体验",
    summary: "SQ1TW2NC 的声音素质、编码配置和降噪综合能力，应该都算是在国内同价位甚至更低价位主流新产品面前不太拿得出手的水平，没有特别明显的功能层面的长板，但你会发现即使如此，它依然有一些点值得国内品牌学习。<a href=&#34;https://sspai.com/post/113338&#34; ",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113338",
    date: "2026-08-13",
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
