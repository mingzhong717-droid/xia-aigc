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
// 最后更新时间: 2026-07-09 02:41:33 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "同声传译一夜失业！GPT-Live瞬间翻译，老太太现场抬杠AI看傻全网",
    summary: "变成你最常用的入口",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/446425.html",
    date: "2026-07-09",
    category: "product",
  },
  {
    id: "news-002",
    title: "36氪首发 | 物理AI公司获晶科能源、国投创新等数亿融资，要做全球能源基础设施“大脑”",
    summary: "图源/企业 本文约2200字，建议阅读6分钟 作者丨欧雪 编辑丨袁斯来 硬氪获悉，物理AI企业深度智控（DeepCtrls）近期完成数亿元人民币B轮融资。本轮融资由晶科能源战略投资，国投创新、招银国际联合领投，红杉中国、源码资本、光远资本、招商局创投等老股东持续跟投。 本轮资金将主要用于核心物理AI",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3887726503688968?f=rss",
    date: "2026-07-09",
    category: "industry",
  },
  {
    id: "news-003",
    title: "8点1氪｜小米将发布澎程系列增程SUV；OpenAI首席未来学家宣布离职；张小龙辞任粉笔首席执行官、董事会主席",
    summary: "今日热点导览 工信部：AI编程工具Claude Code存在安全后门隐患，危害严重 字节绩效规则调整：加大半年激励，加强字节范与领导力考核 沙特阿美大降价吸引亚洲买家，国际机构看空下半年油价 欧盟法院驳回苹果上诉，维持App Store和iOS“看门人”认定 摩根大通：投资者低估了特斯拉与Space",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3887648675133960?f=rss",
    date: "2026-07-09",
    category: "product",
  },
  {
    id: "news-004",
    title: "派早报：GPT-5.6 即将开放使用、Nothing 发布 Phone (4b) 等",
    summary: "Notion 推出全新应用 Agents、Jolla Phone (2026) 手机正式发售等。<a href=&#34;https://sspai.com/post/112091&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112091",
    date: "2026-07-09",
    category: "product",
  },
  {
    id: "news-005",
    title: "50FPS、成本打掉70%，魔芯MoWorld把世界模型带进产业时代",
    summary: "华为联想都投了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/446411.html",
    date: "2026-07-08",
    category: "product",
  },
  {
    id: "news-006",
    title: "具身智能“高考”难疯了！人类100分，最强模型12.8",
    summary: "具身测评界的珠峰来了：RoboDojo",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/446363.html",
    date: "2026-07-08",
    category: "product",
  },
  {
    id: "news-007",
    title: "横跨淘天与ATH事业群，硬核少年技术节下周京杭同步开幕，四项AIGX硬核成果齐发",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/446356.html",
    date: "2026-07-08",
    category: "product",
  },
  {
    id: "news-008",
    title: "别让AI一上来就“进厂打螺丝”：智源悟界·Orca要先教模型理解世界如何变化",
    summary: "Hugging Face论文月榜第一",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/446075.html",
    date: "2026-07-08",
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
