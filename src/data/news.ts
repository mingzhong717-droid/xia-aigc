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
// 最后更新时间: 2026-07-12 02:29:14 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "老黄RTX Spark真机现身Bilibili World！CPU和GPU直接焊在一起，笔记本跑120B大模型",
    summary: "老黄在ComputeX发布的“超级芯片”，已经在真机中落地了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/447981.html",
    date: "2026-07-12",
    category: "product",
  },
  {
    id: "news-002",
    title: "近百名玩家涌入具身数据 : 一年融资44.7亿，谁能真靠“卖数据”赚钱？",
    summary: "林方舟 发自 凹非寺 在湖南郴州，一家中国移动营业厅挂牌“具身数据采集5S店”，普通顾客领一套夹爪、手套和头戴相机，经过简单培训，就能边做家务，边采集机器人训练数据。 首期投放的1000套设备，满产状态下每年能采集100万小时数据。我仿佛听到了商家心里打的小算盘：既采了数据，又赚了眼球，4A广告公司",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3892027841362694?f=rss",
    date: "2026-07-12",
    category: "industry",
  },
  {
    id: "news-003",
    title: "GPT-5.6一小时解开50年数学猜想，700词Prompt驾驭64个子Agent",
    summary: "神话级大模型驾驭宝典",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/447873.html",
    date: "2026-07-11",
    category: "product",
  },
  {
    id: "news-004",
    title: "独家 | 智谱创始人唐杰发内部信：「GLM 时刻」之后，什么是更重要的事",
    summary: "文 | 周鑫雨 编辑 | 张雨忻 《智能涌现》独家获悉，2026 年 7 月 11 日，智谱创始人唐杰，在智谱发布了主题为《巨浪已来》的内部信。 过去半年来，智谱收获了创立以来的高光时刻：市值较半年前上市初期涨了 10 倍，并在 2026 年 6 月，跻身“万亿港元俱乐部”——这个数字，是百度市值的",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3891132709206784?f=rss",
    date: "2026-07-11",
    category: "industry",
  },
  {
    id: "news-005",
    title: "9点1氪丨“国产存储第一股”长鑫科技公布承销团阵容；SK海力士登陆美股，上市首日大涨近13%；OpenAI推出ChatGPT智能体",
    summary: "今日热点导览 “全球首款智能体手机”已备货8万至10万台？知情人士：假的 百亿私募数量达142家，再次刷新历史纪录 三星李在镕拟于7月底赴美会晤英伟达黄仁勋 德国大众拟大裁员，最高或裁减12万个岗位 OpenAI高管层再现变动，首席运营官因病离职 TOP3大新闻 长鑫科技，承销团阵容公布 长鑫科技I",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3890553690192384?f=rss",
    date: "2026-07-11",
    category: "product",
  },
  {
    id: "news-006",
    title: "36氪首发 | 三个月融三轮，上交大00后博士让具身智能仿生扑翼机器人理解并驾驭流体",
    summary: "图源/企业 本文约2400字，建议阅读6分钟 作者丨欧雪 编辑丨袁斯来 硬氪获悉，具身智能仿生扑翼飞行机器人公司「鹰瞰智翼」已于近期完成数千万元A轮融资。本轮融资是公司在三个月内完成的第三轮融资，由元禾璞华领投，孚腾资本、厚雪资本跟投。资金将主要用于首款消费级产品的量产备货、市场拓展，团队扩充以及下",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3889516712065799?f=rss",
    date: "2026-07-11",
    category: "industry",
  },
  {
    id: "news-007",
    title: "暴雨和洪涝的季节，这些技巧助你从容自保",
    summary: "面对暴雨、内涝等自然灾害，你应该做什么准备？有人溺水时，该如何正确救援？这篇文章帮你掌握一些必要的知识，面对危情不再慌乱。<a href=&#34;https://sspai.com/post/68024&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/68024",
    date: "2026-07-11",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "AI生物研发进入“操作系统时代”，许锦波团队MoleculeOS正式开放",
    summary: "AI变为研发流程的“组织者”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/447832.html",
    date: "2026-07-10",
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
