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
// 最后更新时间: 2026-09-29 04:06:50 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "李飞飞创业公司被苏姿丰550亿收购！世界模型最大交易落地",
    summary: "李飞飞将入职AMD首席科学家",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499098.html",
    date: "2026-09-29",
    category: "product",
  },
  {
    id: "news-002",
    title: "派早报：荣耀发布荣耀 Magic9 系列，鸿蒙智行发布智界 RX 等",
    summary: "少数派的近期动态给电话加上「辅助驾驶」？我们想听听你的意见。我们将从提交的问卷中挑选40份用心回答，每份送出50元面值京东卡。参与调研泡泡骚LowPro碳纹黑少数派独家款上架，把握持与支撑收进2.6m ...<a href=&#34;https://sspai.com/post/115134&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115134",
    date: "2026-09-29",
    category: "product",
  },
  {
    id: "news-003",
    title: "工业创新进入“组队局”，拆解西门子Xcelerator开放生态的赋能链路",
    summary: "工业平台已经卷到帮伙伴拿线索、做Agent、出海了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/498877.html",
    date: "2026-09-28",
    category: "product",
  },
  {
    id: "news-004",
    title: "HC归来，华为正重新定义AIDC基础设施",
    summary: "AI基础设施下一站：算电协同",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/498787.html",
    date: "2026-09-28",
    category: "product",
  },
  {
    id: "news-005",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/115094&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115094",
    date: "2026-09-28",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "基于 Termux 的 Android 手机开发服务器实操",
    summary: "不 root、不刷机，在随身设备上跑通 AI Agent 与微型 Linux 环境。<a href=&#34;https://sspai.com/prime/story/dev-env-on-android-with-termux&#34; target=&#34;_blank&#34;>查看全文<",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/dev-env-on-android-with-termux",
    date: "2026-09-28",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "比起折痕， iPhone Duo 的交互设计更加令人着迷",
    summary: "一起来看看 Apple 是如何围绕一块会改变形状的屏幕，重新思考人与界面的关系。<a href=&#34;https://sspai.com/post/114972&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114972",
    date: "2026-09-28",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "摸鱼+3 | 还剩三天班，一天一个解谜游戏",
    summary: "节后再说！<a href=&#34;https://sspai.com/post/114967&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114967",
    date: "2026-09-28",
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
