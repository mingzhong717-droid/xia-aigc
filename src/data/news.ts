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
// 最后更新时间: 2026-07-04 02:37:54 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "9点1氪｜阿里内部全面禁用Claude Code；FF洛杉矶总部人去楼空？公司回应：不实；微软砸25亿美元组建6000人AI新公司",
    summary: "今日热点导览 三部门：调整节能汽车、新能源汽车车船税优惠政策 三星传获Meta超10万亿韩元AI芯片代工订单 茉莉奶白小程序更换彩色Logo Meta打算出售富余算力引发科技股回落 英伟达前光互连技术高管Ashkan Seyedi加入艾迈斯欧司朗 TOP3大新闻 因存在植入后门风险，阿里内部全面禁用",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3880629882679301?f=rss",
    date: "2026-07-04",
    category: "industry",
  },
  {
    id: "news-002",
    title: "从LLM到JEPA，中国团队正在把“世界模型”搬进细胞内部",
    summary: "四年前LeCun提出JEPA时，大概不会想到，这套架构有一天会被用来理解：一颗细胞。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442746.html",
    date: "2026-07-03",
    category: "product",
  },
  {
    id: "news-003",
    title: "AI找出4种全新超导体，只用28个GPU时！人类此前完全未知",
    summary: "超越人类超导体发现100年效率",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442452.html",
    date: "2026-07-03",
    category: "product",
  },
  {
    id: "news-004",
    title: "WorldClaw与百度智能云达成战略合作，文心5.0系列登陆WorldRouter",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442447.html",
    date: "2026-07-03",
    category: "product",
  },
  {
    id: "news-005",
    title: "黄仁勋说的Physical AI，被这家中国跨界选手带进了生命科学实验室",
    summary: "第三方测评超越OpenAI最强旗舰GPT-5.6 Sol",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442311.html",
    date: "2026-07-03",
    category: "product",
  },
  {
    id: "news-006",
    title: "基石筑底｜WAIC 2026算力：超节点与光互连，能否绕过单芯片的物理天花板？",
    summary: "7月17-7月20",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442167.html",
    date: "2026-07-03",
    category: "product",
  },
  {
    id: "news-007",
    title: "秋声 | 袁进辉新公司冲港股IPO，成立不到三年",
    summary: "本文约2700字，建议阅读6分钟 作者 | 彭孝秋 编者按：AI大爆发之际，越来越多公司走向资本市场。每一份招股书翻动的声音里，都藏着一家公司想说与未曾明说的全部。 鉴于此，硬氪特推出「秋声」专栏。秋声取自欧阳修《秋声赋》，借“听秋声”之意，产业冷暖，辨公司成色，记录企业冲刺IPO途中那些被写下与被",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3879814941437956?f=rss",
    date: "2026-07-03",
    category: "industry",
  },
  {
    id: "news-008",
    title: "氪星晚报｜西贝餐饮集团退出小女当家；FF洛杉矶总部人去楼空？公司回应：不实",
    summary: "大公司： 德银：Meta云业务或打开千亿美元级AI投入变现通道，2027年收入最高增300亿美元 针对Meta拟向外部客户出售AI算力及模型访问权限的消息，德意志银行认为，这并不意味着Meta削弱前沿模型或“超级智能”布局，而更可能是将较旧、非核心或阶段性闲置的算力对外变现，同时保留最新一代芯片用于",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3879796756754694?f=rss",
    date: "2026-07-03",
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
