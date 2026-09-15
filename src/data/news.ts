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
// 最后更新时间: 2026-09-15 03:17:51 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：中国联通宣布支持所有国行设备 eSIM 业务办理、Homebrew 7.0.0 发布等",
    summary: "英伟达发布 RTX PRO 5500 Blackwell 专业显卡，阿凡途发布 AVENTHO Y 头戴式耳机等<a href=&#34;https://sspai.com/post/114593&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114593",
    date: "2026-09-15",
    category: "product",
  },
  {
    id: "news-002",
    title: "首届蚂蚁灵波具身大模型挑战赛正式启动",
    summary: "通过这场大赛，蚂蚁灵波希望将 LingBot-VLA 进一步推向更广泛的开发者社区和高校科研社区",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/489105.html",
    date: "2026-09-14",
    category: "product",
  },
  {
    id: "news-003",
    title: "全国唯一！商汤大装置临港AIDC获“算效+算电”双5A认证",
    summary: "业界首个5A算电协同认证",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/489106.html",
    date: "2026-09-14",
    category: "product",
  },
  {
    id: "news-004",
    title: "探索RSI，生数新世界模型让机器人开始自我进化",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/489037.html",
    date: "2026-09-14",
    category: "product",
  },
  {
    id: "news-005",
    title: "分子之心QuantaMind登Science Advances，让AI给分子世界&#8221;拍电影&#8221;",
    summary: "AI 蛋白质设计迈入“动态时代”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/489023.html",
    date: "2026-09-14",
    category: "product",
  },
  {
    id: "news-006",
    title: "端侧AI从「能跑」到「会进化」，元空智能跑进惠普预装",
    summary: "让模型和设备共同进化",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/488933.html",
    date: "2026-09-14",
    category: "product",
  },
  {
    id: "news-007",
    title: "派评｜近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/114577&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114577",
    date: "2026-09-14",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "Excel AI 辅助工作流横评：数据分析高手还是照葫芦画瓢？",
    summary: "用具体的测试数据和盲评结果，聊聊当下 AI 辅助制作 Excel 的真实水平，以及我使用 AI 辅助制作 Excel 的心得。<a href=&#34;https://sspai.com/prime/story/ai-assisted-spreadsheeting-a-survey&#34; tar",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/ai-assisted-spreadsheeting-a-survey",
    date: "2026-09-14",
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
