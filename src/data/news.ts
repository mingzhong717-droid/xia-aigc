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
// 最后更新时间: 2026-08-24 01:05:33 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "前保安杀进了AI决赛，高中生拿走25万！这AI比赛办得有点绝",
    summary: "Tim和胡彦斌亲自颁奖",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478358.html",
    date: "2026-08-23",
    category: "product",
  },
  {
    id: "news-002",
    title: "匿名牛来大模型被扒出智谱血缘，也有人怀疑Cursor拿开源GLM训的",
    summary: "Tokenizer、视频编码、API报错全扒一遍",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478191.html",
    date: "2026-08-23",
    category: "product",
  },
  {
    id: "news-003",
    title: "英伟达AI服务器将涨价15%！1GW数据中心成本激增50亿美元",
    summary: "内存成本飙升逼涨硬件",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478164.html",
    date: "2026-08-23",
    category: "product",
  },
  {
    id: "news-004",
    title: "从世界模型到现实生产力，无界动力深度参与WRC主论坛及多场同期活动",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478007.html",
    date: "2026-08-23",
    category: "product",
  },
  {
    id: "news-005",
    title: "派早报：九家车企召回近 430 万辆不易识别应急拉手汽车",
    summary: "<p>九家车企召回近 430 万辆不易识别应急拉手汽车</p><p>英伟达达成 70 亿美元合作，研发顶级开放权重模型</p><p>高院发布著作权新司法解释，网络转载不允许先转后付</p><p>买家利用仅退款漏洞倒卖 13 万元火鸡面被刑拘</p><p>国际加紧制定统一月球时间</p><p>个人消费",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113767",
    date: "2026-08-23",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "AI 时代的 Surface Pro 7 改造指南：看板、轻量工作站与 Linux 笔记本",
    summary: "手头这台闲置的SurfacePro7在桌角放了挺长一段时间。当年买它看重的是二合一的便携形态，但放在Windows11下只要长时间亮屏就一定会过热、偶尔跳屏，基本处于不可用的状态。直到前阵子在网上看到 ...<a href=&#34;https://sspai.com/prime/story/sur",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/surface-pro-7-linux-ai-dashboard",
    date: "2026-08-23",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "让 PC 与 HomePod 互联：音频串流工具 WinAirCast",
    summary: "打破生态壁垒，让好的设备发挥出它应有的价值，这就是 WinAirCast 的初衷。我们希望为 Windows 用户提供一款稳定、低延迟且现代化的音频串流工具。<a href=&#34;https://sspai.com/post/113002&#34; target=&#34;_blank&#34;",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113002",
    date: "2026-08-23",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "线下活动｜Echoes Remain：迈克尔杰克逊 68 周年诞辰唱片展",
    summary: "又一年8月29日如期而至，MichaelJackson的诞辰来到了第68个年头，我们决定在少数派广州线下店举办一场MJ唱片展。少数派广州店一直想做一处能让数码和音乐爱好者都能自在落脚的空间，不必拘谨落 ...<a href=&#34;https://sspai.com/post/113675&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113675",
    date: "2026-08-22",
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
