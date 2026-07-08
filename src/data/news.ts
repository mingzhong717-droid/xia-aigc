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
// 最后更新时间: 2026-07-08 02:26:51 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "36氪首发 | 获上海国投领投，这家量子传感企业产品已落地惯性导航、气体监测等",
    summary: "图源/企业 作者丨欧雪 编辑丨袁斯来 硬氪获悉，上海量感智能科技有限公司（以下简称“量感智能”）近日已完成数千万元天使轮融资，由孚腾资本（上海国投旗下）领投，六禾创投跟投。 量感智能公司于2023年9月成立，由上海交通大学量子感知研究所成员孵化。公司聚焦量子传感方向，已推出的产品覆盖惯性导航、气体监",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3886301334630407?f=rss",
    date: "2026-07-08",
    category: "industry",
  },
  {
    id: "news-002",
    title: "8点1氪丨前华为天才少年吐槽DeepSeek面试，称面试官质疑他抄袭；苹果折叠屏已在量产；特朗普呼吁购买戴尔电脑，引发戴尔暴涨百亿美元",
    summary: "今日热点导览 网传“7月1日新规：新车智驾芯片自主化率不低于70%”系谣言 商业银行不良处置仍在加速，上半年全行业转让核销合计至少5000亿 国家外汇管理局：截至2026年6月末，中国外汇储备规模为34163亿美元 汇丰暂停向风险较高的私募信贷客户提供贷款 SpaceX公布AI数据中心计划，同步推进",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3886238403129353?f=rss",
    date: "2026-07-08",
    category: "industry",
  },
  {
    id: "news-003",
    title: "「德睿智药」获5200万美元B轮融资，AI设计的减肥药已进入3期临床｜36氪首发",
    summary: "文｜胡香赟 编辑｜海若镜 36 氪获悉，德睿智药近期已完成 5200 万美元B轮融资，投资方包括头部人民币和美元基金，凯乘资本为独家财务顾问。募集资金将用于AI制药引擎Molecule Arts Platform（MAP）升级迭代，完善其多智能体（Multi-Agent）协同体系与临床数据闭环（Cl",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3885479689465858?f=rss",
    date: "2026-07-08",
    category: "industry",
  },
  {
    id: "news-004",
    title: "DeepSeek招聘被「华为天才少年」公开吐槽，“面到最不专业的”",
    summary: "难怪DeepSeek要着重强调招HR（doge）",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/445608.html",
    date: "2026-07-07",
    category: "product",
  },
  {
    id: "news-005",
    title: "从共识到非共识：科技有「联想」沙龙首场活动直击具身智能产业化“三大困惑”",
    summary: "“共识与非共识”的深度思辨",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/445443.html",
    date: "2026-07-07",
    category: "product",
  },
  {
    id: "news-006",
    title: "刚刚，首个空间原生的具身视觉基模开源！机器人更会看我们的世界了",
    summary: "来自蚂蚁灵波",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/445230.html",
    date: "2026-07-07",
    category: "product",
  },
  {
    id: "news-007",
    title: "机器人视觉迎来新突破！蚂蚁灵波空间感知模型LingBot-Depth 2.0正式发布",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/445184.html",
    date: "2026-07-07",
    category: "product",
  },
  {
    id: "news-008",
    title: "征程赶超｜WAIC 2026科学智能：AI4S从“辅助计算”到“自主发现”，中国如何重塑全球科研版图？",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/445067.html",
    date: "2026-07-07",
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
