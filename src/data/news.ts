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
// 最后更新时间: 2026-11-28 06:11:44 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "「黑五」值得买：不容错过的数码硬件优惠",
    summary: "除了软件服务，这个黑五还有这些硬件值得一看。<a href=&#34;https://sspai.com/post/119651&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119651",
    date: "2026-11-28",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "本月玩什么｜GTA VI、塞尔达传说 时之笛、魔兽世界：无限",
    summary: "以上便是部分近期值得探讨的新游信息汇总，个人角度仅供参考。本期不设特定有奖互动话题，欢迎你在评论区分享11月新作游玩体验，可以是本文出现的，也可以是本文未提及、但你特别想推荐给派友的。我们下期再见！> ...<a href=&#34;https://sspai.com/post/119686&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119686",
    date: "2026-11-28",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "DeepSeek APP突然更新账单，网友：要收费了？",
    summary: "网页App双端亮出聊天账单",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513305.html",
    date: "2026-11-27",
    category: "update",
  },
  {
    id: "news-004",
    title: "钛动科技 × 腾讯云达成战略合作，用AI打开企业全球增长新空间",
    summary: "企业需要有用的 AI",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513194.html",
    date: "2026-11-27",
    category: "product",
  },
  {
    id: "news-005",
    title: "蚂蚁灵波发布LingBot-Map 2.0，模型自己修正“空间记忆”，把地图画更准",
    summary: "11 月 27 日，蚂蚁灵波科技发布流式三维重建模型 LingBot-Map 2.0",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513211.html",
    date: "2026-11-27",
    category: "product",
  },
  {
    id: "news-006",
    title: "20个AI Agents组队，4天狂跑350次实验，超越ClickBench最佳公开成绩",
    summary: "Quickwit查询总耗时降31%，最高降87%",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513163.html",
    date: "2026-11-27",
    category: "product",
  },
  {
    id: "news-007",
    title: "具身公司抱团回应：通用大模型跨维打击？没那么简单",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513125.html",
    date: "2026-11-27",
    category: "product",
  },
  {
    id: "news-008",
    title: "本周看什么 | 最近值得一看的 8 部作品",
    summary: "☕️TL;DR近期佳作推荐：[电影]泥面人、[电影]峡湾、[电影]童话继姊妹、[英剧]警之光第四季、[加拿大]槲寄生谋杀案第三季、[国产]今天是太阳雨、[纪录片]一切如你所见、[真人秀]魔鬼的计谋：死 ...<a href=&#34;https://sspai.com/post/119658&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119658",
    date: "2026-11-27",
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
