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
// 最后更新时间: 2026-08-10 01:26:20 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "180万刀，连亚马逊都烧不起Claude了",
    summary: "Claude不是我说你，钱真不能这么花",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/469010.html",
    date: "2026-08-09",
    category: "product",
  },
  {
    id: "news-002",
    title: "GPT-5.6和Fable联手，解决了一道悬了25年的数学难题",
    summary: "作者读博时就在研究，17年后被AI解开了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468913.html",
    date: "2026-08-09",
    category: "product",
  },
  {
    id: "news-003",
    title: "当题库追不上模型，AI开始给自己出题：中国这支团队跑通了数据层RSI",
    summary: "AI参与创造下一代AI",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468782.html",
    date: "2026-08-09",
    category: "product",
  },
  {
    id: "news-004",
    title: "Opus 5狂烧6.9亿token做游戏，GPT-5.6用5美元复刻了",
    summary: "据说GPT-5.6很适合拿来做游戏",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468766.html",
    date: "2026-08-09",
    category: "product",
  },
  {
    id: "news-005",
    title: "派早报：央视曝光酒店评级标识消费陷阱",
    summary: "<p> 央视曝光酒店评级标识消费陷阱</p><p>《时代》网站展示仅 AI 可见广告</p><p>Edge 浏览器将禁用 Manifest V2 扩展</p><p>油价上涨致美国混动车需求激增</p><p>廉价手机壳存在毒性隐患</p><p>美国调查中国 AI 企业使用海外英伟达芯片</p><p>看",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113268",
    date: "2026-08-09",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "我做了一个 Quote/0 看板，把 F1 赛程、积分和结果留在桌面",
    summary: "特别声明本文的项目构思、结构设计及相关素材整理均由人工完成。在产品开发与调试过程中，使用GPT-5.6Sol模型作为辅助工具，参与方案讨论、代码编写与问题排查。文章内容基于实际开发过程中的经验与记录， ...<a href=&#34;https://sspai.com/post/113158&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113158",
    date: "2026-08-09",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "奥特曼的ChatGPT育儿大法，捅了马蜂窝",
    summary: "这就有些尴尬了。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468631.html",
    date: "2026-08-08",
    category: "product",
  },
  {
    id: "news-008",
    title: "就内容创作而言，说话还是替代不了打字",
    summary: "创作本就不是一个「速度为先」的行为——而打字，本质上是一个思考的过程。<a href=&#34;https://sspai.com/post/112901&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112901",
    date: "2026-08-08",
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
