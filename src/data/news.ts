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
// 最后更新时间: 2026-07-11 02:24:19 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "9点1氪丨“国产存储第一股”长鑫科技公布承销团阵容；SK海力士登陆美股，上市首日大涨近13%；OpenAI推出ChatGPT智能体",
    summary: "今日热点导览 “全球首款智能体手机”已备货8万至10万台？知情人士：假的 百亿私募数量达142家，再次刷新历史纪录 三星李在镕拟于7月底赴美会晤英伟达黄仁勋 德国大众拟大裁员，最高或裁减12万个岗位 OpenAI高管层再现变动，首席运营官因病离职 TOP3大新闻 长鑫科技，承销团阵容公布 长鑫科技I",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3890553690192384?f=rss",
    date: "2026-07-11",
    category: "product",
  },
  {
    id: "news-002",
    title: "36氪首发 | 三个月融三轮，上交大00后博士让具身智能仿生扑翼机器人理解并驾驭流体",
    summary: "图源/企业 本文约2400字，建议阅读6分钟 作者丨欧雪 编辑丨袁斯来 硬氪获悉，具身智能仿生扑翼飞行机器人公司「鹰瞰智翼」已于近期完成数千万元A轮融资。本轮融资是公司在三个月内完成的第三轮融资，由元禾璞华领投，孚腾资本、厚雪资本跟投。资金将主要用于首款消费级产品的量产备货、市场拓展，团队扩充以及下",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3889516712065799?f=rss",
    date: "2026-07-11",
    category: "industry",
  },
  {
    id: "news-003",
    title: "AI生物研发进入“操作系统时代”，许锦波团队MoleculeOS正式开放",
    summary: "AI变为研发流程的“组织者”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/447832.html",
    date: "2026-07-10",
    category: "product",
  },
  {
    id: "news-004",
    title: "GPT-5.6一发布，Claude终于舍得重置Fable 5额度了",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/447691.html",
    date: "2026-07-10",
    category: "product",
  },
  {
    id: "news-005",
    title: "AI聪明够了，行动呢？WAIC首夜，来聊点下一步的真实判断｜活动报名",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/447682.html",
    date: "2026-07-10",
    category: "product",
  },
  {
    id: "news-006",
    title: "日均提问次数暴增 20 倍！百度搭子宣布重磅升级，企业版同步发布",
    summary: "agent时代来了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/447681.html",
    date: "2026-07-10",
    category: "product",
  },
  {
    id: "news-007",
    title: "全球首个「具身原生」预训练模型发布，从物理世界出发为机器人造大脑！",
    summary: "开源第四弹：LingBot-VA 2.0",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/447627.html",
    date: "2026-07-10",
    category: "product",
  },
  {
    id: "news-008",
    title: "赢官司、融新钱，他想把百万「抗癌针」变平价",
    summary: "文 | 胡香赟 编辑 | 海若镜 36氪获悉，前传奇生物创始人/首席科学家范晓虎创办的生物科技公司深圳湾岛细胞，近日完成1.4亿人民币A轮融资，本轮融资由松禾资本领投、东方富海跟投。 过去一年，AI像一束强光照亮着资本市场。光芒之外，很多赛道在阴影中被重新定价，创新药板块正是其中之一。潮水褪去，人群",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3888284244720131?f=rss",
    date: "2026-07-10",
    category: "industry",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
