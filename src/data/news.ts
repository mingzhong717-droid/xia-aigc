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
// 最后更新时间: 2026-07-03 02:41:45 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "世界模型的新用途：不做选手，去当裁判",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442138.html",
    date: "2026-07-03",
    category: "product",
  },
  {
    id: "news-002",
    title: "36氪首发 | 获宁德时代旗下基金领投数千万美元，智能出行公司上市首月已成印尼电摩品类订单第一",
    summary: "作者 | 张子怡 编辑 | 袁斯来 硬氪获悉，智能两轮出行企业「OMOWAY」（目蔚科技）近期连续完成A轮和A+轮融资，单轮融资金额均为数千万美元。其中，A+轮由宁德时代支持设立的美元基金Lochpine Capital领投，A轮由Monolith领投，中金资本旗下基金及老股东真格基金跟投。 成立不",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3877990989819909?f=rss",
    date: "2026-07-03",
    category: "industry",
  },
  {
    id: "news-003",
    title: "8点1氪丨“具身智能第一股” 宇树科技上市申请通过；SK海力士单日市值蒸发10000亿元；配置失误引发0元抢购潮，霸王茶姬致歉",
    summary: "今日热点导览 苹果拟于今明两年推出至少五款新iPhone AI版支付宝开放公测，上线72项办事技能 特朗普回应“利用职位牟利”：股市在涨，大家都在赚钱 LV起诉茉莉奶白，茉莉奶白被判赔1030万元 6月赴日航班取消1488个 安克创新港股上市首日破发 TOP3大新闻 证监会同意宇树科技科创板IPO注",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3879158039834629?f=rss",
    date: "2026-07-03",
    category: "industry",
  },
  {
    id: "news-004",
    title: "派早报：大疆发布 DJI Mic Mini 2S 迷你无线麦克风等",
    summary: "Apple「隐藏邮件地址」功能存在隐私漏洞，System76 推出 Linux 轻薄本 Lemur Pro 等。<a href=&#34;https://sspai.com/post/111898&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111898",
    date: "2026-07-03",
    category: "product",
  },
  {
    id: "news-005",
    title: "让Agent越用越强：AReaL 2.0开源，打造面向自演进智能体的RL基础设施",
    summary: "与社区共同推进自演进智能体生态发展",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442134.html",
    date: "2026-07-02",
    category: "product",
  },
  {
    id: "news-006",
    title: "全球首个英伟达含量为0的万亿模型，成了海外开发者的抢手货",
    summary: "霸榜OpenR ou",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442047.html",
    date: "2026-07-02",
    category: "product",
  },
  {
    id: "news-007",
    title: "科大讯飞举办智能交互生态发布会，三大平台同步升级",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442048.html",
    date: "2026-07-02",
    category: "product",
  },
  {
    id: "news-008",
    title: "论坛预告｜夯！AI企业家论坛首发阵容公开，更有千亿级实业巨头突袭",
    summary: "7月17日至7月20日",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442037.html",
    date: "2026-07-02",
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
