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
// 最后更新时间: 2026-10-14 03:26:56 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "已经能测夜间体征的 Apple Watch，为什么要再做一个睡眠呼吸暂停提醒",
    summary: "Apple Watch 打算让更多人意识到睡眠呼吸暂停的威胁，它是怎么做到的？<a href=&#34;https://sspai.com/post/92653&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/92653",
    date: "2026-10-14",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：Apple 发布 HomePod mini 2、HomeView 等新品",
    summary: "Apple Watch 在中国大陆推出睡眠呼吸暂停迹象提示功能、Google 发布 Gemini 4 Argon 等。<a href=&#34;https://sspai.com/post/116138&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116138",
    date: "2026-10-14",
    category: "product",
  },
  {
    id: "news-003",
    title: "魔法原子具身Agent框架拿下MolmoSpaces全球第一",
    summary: "让VLA从“演示可用”逼近“产线可用”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503107.html",
    date: "2026-10-13",
    category: "product",
  },
  {
    id: "news-004",
    title: "梁文锋投了Swin Transformer作者！DeepSeek开始布局具身大脑",
    summary: "Winverse AI",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503093.html",
    date: "2026-10-13",
    category: "product",
  },
  {
    id: "news-005",
    title: "Claude团队又搞事：实测AI全自主复制进智能家电",
    summary: "拉马克进化的幽灵",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502920.html",
    date: "2026-10-13",
    category: "product",
  },
  {
    id: "news-006",
    title: "“模态进化”：第八届亿邦产业互联网年会暨首届产业智能体大会双会合体定档",
    summary: "由亿邦动力主办的“2026第八届亿邦产业互联网年会暨首届产业智能体大会”正式定档",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502907.html",
    date: "2026-10-13",
    category: "product",
  },
  {
    id: "news-007",
    title: "9大赛道，23份企业真实考卷！上海具身智能大考，邀千队共解题",
    summary: "赢奖金、拿融资、送出海",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502784.html",
    date: "2026-10-13",
    category: "product",
  },
  {
    id: "news-008",
    title: "社区速递 161 | 小米手表 S5、EVA 联名香水与换机热议",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/116068&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116068",
    date: "2026-10-13",
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
