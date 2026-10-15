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
// 最后更新时间: 2026-10-15 03:05:51 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "7天几百元开一家店！用千问办公电商版，立省启动资金5万元",
    summary: "给企业Agent打了个样",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503303.html",
    date: "2026-10-15",
    category: "product",
  },
  {
    id: "news-002",
    title: "派早报：Mozilla 推出企业版火狐浏览器、DLSS 5 最新模型即将推送等",
    summary: "八位堂推出 Ultimate 3C+ 无线手柄、豆包手机助手将放开第三方应用屏幕自动化操作权限等。<a href=&#34;https://sspai.com/post/116193&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116193",
    date: "2026-10-15",
    category: "product",
  },
  {
    id: "news-003",
    title: "抢先盘点2026全球开发者先锋大会暨国际具身智能技能大赛十大亮点！",
    summary: "“具身进实景，劳动最光荣”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503294.html",
    date: "2026-10-14",
    category: "product",
  },
  {
    id: "news-004",
    title: "阶跃终端首款「Agent手机」STEPX Neo正式发布，创客先行",
    summary: "这妥妥是个物理版Agent啊！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503244.html",
    date: "2026-10-14",
    category: "product",
  },
  {
    id: "news-005",
    title: "智能不出彩的「领克」，刚靠一次坠崖事故出圈了",
    summary: "汽车竞争正在回归汽车本身",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503231.html",
    date: "2026-10-14",
    category: "product",
  },
  {
    id: "news-006",
    title: "《变形计》综艺赛博复活，AI版MrBeast爆火，LibTV下场「造星」了",
    summary: "从创意到成本，AI正在重写综艺的生产逻辑",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503211.html",
    date: "2026-10-14",
    category: "product",
  },
  {
    id: "news-007",
    title: "认知心理学背后的播客剪辑技巧",
    summary: "为什么剪辑时会时常出现爆音？为什么有些地方剪辑后意思接得上，听起来却觉得别扭？为什么有些地方稍微动一下就会不自然？<a href=&#34;https://sspai.com/post/114861&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114861",
    date: "2026-10-14",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "带给摄影师更多自由：Austin Mann 评 iPhone 18 Pro 影像体验",
    summary: "这些新技术将如何让我们的照片和视频更好？<a href=&#34;https://sspai.com/post/115426&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115426",
    date: "2026-10-14",
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
