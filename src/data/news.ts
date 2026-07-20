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
// 最后更新时间: 2026-07-20 02:41:49 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "腾讯云ADP 4.0海外版发布，要把企业级智能体带到全球市场 | 最前线",
    summary: "腾讯云的企业级智能体平台，正式出海了。 7月18日，在2026世界人工智能大会上，腾讯云正式发布了智能体开发平台 ADP 4.0海外版，同步升级智能工作台、Claw 模式、Skill 广场三大核心模块，围绕触达、交互、生态、连接四大能力做了全面国际化适配。 ADP 的全称是 Agent Develo",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3901396207584902?f=rss",
    date: "2026-07-20",
    category: "product",
  },
  {
    id: "news-002",
    title: "从烤披萨到拿快递，满场跑的机器人终于要进你家了｜WAIC 2026全面探展",
    summary: "史上最热的WAIC都整了哪些活？看这一篇就够了。 文｜邓咏仪 周鑫雨 王欣逸 温丽虹 编辑｜张雨忻 如果你想知道今年的AI圈第一盛事热度如何，只要来上海感受逼近40度的高温，就能同频共振。 没有很热，只有更热。 7月17日，2026年世界人工智能大会在上海世博展览馆正式开幕。展览面积首次突破10万平",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3902007640459145?f=rss",
    date: "2026-07-20",
    category: "industry",
  },
  {
    id: "news-003",
    title: "红熊AI完成数亿元A+轮融资，基于AI“记忆科学”从To B服务延伸至To C应用｜36氪首发",
    summary: "36氪获悉，红熊AI今日宣布完成数亿元人民币A+轮融资，投后估值接近30亿元人民币。本轮融资由浙江九纬私募基金、嘉兴彰元创业投资与老股东格睿丰联合投资。这是红熊AI在短短15个月内完成的第6轮融资。 据了解，本轮融资资金将主要用于持续深化AI记忆科学的类人大脑基础研究、加速OpenBear通用大模型",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3899612612494976?f=rss",
    date: "2026-07-20",
    category: "industry",
  },
  {
    id: "news-004",
    title: "冷门的哲学，成了“治”AI的热门",
    summary: "智能进了社会，治理不能慢半拍",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/455041.html",
    date: "2026-07-19",
    category: "product",
  },
  {
    id: "news-005",
    title: "围观WAIC模型「读心术」！现场火火火火火",
    summary: "主观世界模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/455031.html",
    date: "2026-07-19",
    category: "product",
  },
  {
    id: "news-006",
    title: "不靠英伟达网卡，国产GPU直通方案实测出炉：吞吐飙升、延迟砍半",
    summary: "奇异摩尔首次亮相WAIC 2026",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/454932.html",
    date: "2026-07-19",
    category: "product",
  },
  {
    id: "news-007",
    title: "逛了趟WAIC，我只想说，AI在物理世界都快卷疯了……",
    summary: "还得是AI圈春晚",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/454802.html",
    date: "2026-07-19",
    category: "product",
  },
  {
    id: "news-008",
    title: "聚焦WAIC｜端侧原生架构获产业共识，Om AI联汇正式发起物理AI协同发展倡议",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/454791.html",
    date: "2026-07-19",
    category: "product",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
