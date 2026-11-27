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
// 最后更新时间: 2026-11-27 06:37:32 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "钛动科技 × 腾讯云达成战略合作，用AI打开企业全球增长新空间",
    summary: "企业需要有用的 AI",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513194.html",
    date: "2026-11-27",
    category: "product",
  },
  {
    id: "news-002",
    title: "蚂蚁灵波发布LingBot-Map 2.0，模型自己修正“空间记忆”，把地图画更准",
    summary: "11 月 27 日，蚂蚁灵波科技发布流式三维重建模型 LingBot-Map 2.0",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513211.html",
    date: "2026-11-27",
    category: "product",
  },
  {
    id: "news-003",
    title: "20个AI Agents组队，4天狂跑350次实验，超越ClickBench最佳公开成绩",
    summary: "Quickwit查询总耗时降31%，最高降87%",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513163.html",
    date: "2026-11-27",
    category: "product",
  },
  {
    id: "news-004",
    title: "具身公司抱团回应：通用大模型跨维打击？没那么简单",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513125.html",
    date: "2026-11-27",
    category: "product",
  },
  {
    id: "news-005",
    title: "第三批嘉宾来袭！速戳报名MEET2027，驭见AI新共识！",
    summary: "倒计时两周，报名从速！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/513091.html",
    date: "2026-11-27",
    category: "product",
  },
  {
    id: "news-006",
    title: "「黑五」值得买：不容错过的 App 和服务优惠",
    summary: "先预祝大家买得愉快、用得舒心。<a href=&#34;https://sspai.com/post/119601&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119601",
    date: "2026-11-27",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "派早报：1Password 确认内部系统遭入侵等",
    summary: "索尼 WH-1000XM4C 无线降噪耳机国行正式发售，微软公布 Windows Server 2028 功能清理计划等。<a href=&#34;https://sspai.com/post/119632&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119632",
    date: "2026-11-27",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "App+1｜Agora：开源、易用、好用，给 Android 用户的 LLM 聊天工具",
    summary: "如果你在通过 API 调用你喜欢的大模型，希望它们能像 Kimi 等商业 AI 客户端那样用着顺手，那 Agora 就是为你而来的。相信我，Agora 不会让你失望。<a href=&#34;https://sspai.com/post/116773&#34; target=&#34;_blank&",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116773",
    date: "2026-11-26",
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
