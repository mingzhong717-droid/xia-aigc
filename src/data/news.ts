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
// 最后更新时间: 2026-11-10 05:52:20 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "今年双十一，这些鼠标值得一看",
    summary: "介绍点值得买的鼠标，顺便推荐一点鼠标垫和耳机。<a href=&#34;https://sspai.com/post/111065&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111065",
    date: "2026-11-10",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：火山引擎发布 Seedream 5.5，苹果研究团队用仿真训练人形机器人等",
    summary: "少数派的近期动态我们已开设专页，汇总展示「优秀作者评选」奖项及结果。「优秀作者评选」是编辑部自2023年起实行的机制，于每季度结束后，评选该季度贡献突出的现有作者，以及涌现出的有潜力新作者。获奖者会获 ...<a href=&#34;https://sspai.com/post/118854&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118854",
    date: "2026-11-10",
    category: "product",
  },
  {
    id: "news-003",
    title: "“AI毁了我的计算机学位”",
    summary: "教授也用Claude糊弄…",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508706.html",
    date: "2026-11-09",
    category: "product",
  },
  {
    id: "news-004",
    title: "腾讯混元跻身最强开源模型！一手实测Hy4：搭配WorkBuddy，多模态Agent交付力拉满",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507843.html",
    date: "2026-11-09",
    category: "product",
  },
  {
    id: "news-005",
    title: "千问办公2.0发布，首个支持多人与Agent协作的Team Agent来了",
    summary: "11月9日，千问办公发布2.0版本",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508694.html",
    date: "2026-11-09",
    category: "product",
  },
  {
    id: "news-006",
    title: "AI接管一家8万Star开源公司，写代码、派任务、查Bug全包了",
    summary: "Worker不够了主管Agent还能自己招！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508607.html",
    date: "2026-11-09",
    category: "product",
  },
  {
    id: "news-007",
    title: "基元律动发布NeoHorse-1.5-Flash Preview，Agent模型RSI进入第二轮迭代",
    summary: "11月5日，基元律动（TokenRhythm）发布Agent原生模型NeoHorse-1.5-Flash Preview。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508603.html",
    date: "2026-11-09",
    category: "product",
  },
  {
    id: "news-008",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/118833&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118833",
    date: "2026-11-09",
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
