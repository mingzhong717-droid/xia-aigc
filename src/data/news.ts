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
// 最后更新时间: 2026-11-23 05:40:00 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "A社数学家用Claude又证明另一千禧难题，逼出一份写了12年的940页纯人类手稿",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511870.html",
    date: "2026-11-22",
    category: "product",
  },
  {
    id: "news-002",
    title: "派早报：Anthropic 研究员宣称用 Claude 证明黎曼猜想",
    summary: "<p>Anthropic 研究员宣称用 Claude 证明黎曼猜想</p><p>OpenAI 公布反蒸馏举措</p><p>黄仁勋据称将攻击下属作为管理方式</p><p>GTA 6 首日销售额近 40 亿美元</p><p>特斯拉升级 FSD，推出实景渲染功能</p><p>AMD 股票被做空</p><p",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119418",
    date: "2026-11-22",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "从深圳到上海，少数派的共创故事还在继续",
    summary: "11月20日，2026虹桥国际科技周在上海举行。作为聚焦科技创新、产业协作与未来趋势的交流平台，本届科技周汇聚了来自不同领域的创新者、创业者与行业观察者。少数派也在现场带来了主题论坛分享，与参与者一起 ...<a href=&#34;https://sspai.com/post/119318&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119318",
    date: "2026-11-22",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "AI给乐队现场搓MV，这是黑客松还是音乐节啊",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511855.html",
    date: "2026-11-21",
    category: "product",
  },
  {
    id: "news-005",
    title: "8万条群聊消息做成考卷：腾讯元宝×KCL发布首个基于群聊构建的Agent记忆基准",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511841.html",
    date: "2026-11-21",
    category: "product",
  },
  {
    id: "news-006",
    title: "反超Gemini之后，Karpo新作再开源，浏览器Agent速效双赢",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511791.html",
    date: "2026-11-21",
    category: "product",
  },
  {
    id: "news-007",
    title: "GPT-6.2 Astra再次暴击具身模型：16项任务成功率较GPT-6 Astra翻倍",
    summary: "还实现可变形物体操控全球首通",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511779.html",
    date: "2026-11-21",
    category: "product",
  },
  {
    id: "news-008",
    title: "这群在鸿蒙写应用的年轻人，只想做点「用得上」的",
    summary: "上周末，今年正式被列入「全国普通高校学科竞赛排行榜」的2026鸿蒙高校创新赛在南京大学迎来全国总决赛颁奖典礼。华为董事、终端BGCEO何刚出席现场致辞并为获奖选手颁奖。他在现场表示，HarmonyOS ...<a href=&#34;https://sspai.com/post/119291&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119291",
    date: "2026-11-21",
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
