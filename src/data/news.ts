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
// 最后更新时间: 2026-10-30 04:16:56 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "精确到秒的时间记录是怎样的？我的柳比歇夫法半年实践",
    summary: "就像一个运动员无法预计自己能否取得金牌，但能控制自己投入于训练的时间一样，我们无法决定性地控制工作和生活中每一项事项的成功与否，但可以控制自己投入更多还是更少的时间。<a href=&#34;https://sspai.com/post/116435&#34; target=&#34;_blank&",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116435",
    date: "2026-10-30",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：全球首款 Android XR 有线眼镜 XREAL AURA 发售等",
    summary: "腾讯与 Visa 签署合作备忘录，Bose 有线消噪耳塞国行上市等。<a href=&#34;https://sspai.com/post/117827&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117827",
    date: "2026-10-30",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "小雨智造与国家钢结构质检中心共建实验室，乔忠良：具身智能新质生产力已成事实",
    summary: "2026年10月27日，“工业具身智能焊接与检测技术联合实验室”正式揭牌成立。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506273.html",
    date: "2026-10-29",
    category: "product",
  },
  {
    id: "news-004",
    title: "刚刚，扩散模型杀进Agent主场！350亿参数，速度比Jev快一倍",
    summary: "用扩散模型怎么做做Agent？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/505934.html",
    date: "2026-10-29",
    category: "product",
  },
  {
    id: "news-005",
    title: "刚刚，Gemini 4 Carbon全面超越Opus 5.5！首发Token半价",
    summary: "能连肝数日修Bug，免疫提示词注入",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506227.html",
    date: "2026-10-29",
    category: "product",
  },
  {
    id: "news-006",
    title: "新玩意 254｜少数派的编辑们最近买了啥？",
    summary: "编注：很多读者都会好奇少数派的编辑们到底平时都「买了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。内容声明：《新玩意》栏目如含有 ...<a href=&#34;https://sspai.com/post/117791&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117791",
    date: "2026-10-29",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "如何成为不吃压力的「大心脏」？",
    summary: "适合别人的抗压方式为什么不适合自己？你也该知道的抗压方法论<a href=&#34;https://sspai.com/post/117244&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117244",
    date: "2026-10-29",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "让 Agent 读懂你的身体：数据处理篇",
    summary: "在上一篇文章《让Agent读懂你的身体：数据获取篇》中，我花了很大的篇幅讲清楚了第一个问题：Agent怎样拿到数据。如果照着实践完，你大概率已经收获了一份存储了运动健康数据的SQLite、Markdo ...<a href=&#34;https://sspai.com/prime/story/how",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/how-to-analyze-health-data-with-agent",
    date: "2026-10-29",
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
