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
// 最后更新时间: 2026-07-10 02:44:10 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "广东：拟加快6G、光通信、卫星通信等关键前沿领域技术攻关",
    summary: "36氪获悉，，近日，《广东省信息通信业“十五五”规划（征求意见稿）》向社会公开征求意见。其中提到，支持基础电信企业等积极参与省重点领域研发计划专项，依托鹏城国家实验室等战略科技力量和龙头企业，助力广东省信息通信业建立健全全过程创新生态链，加快6G、光通信、卫星通信、量子通信、智能体通信等关键前沿领域",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/newsflashes/3889202354076161?f=rss",
    date: "2026-07-10",
    category: "industry",
  },
  {
    id: "news-002",
    title: "广东：拟推动5G-A网络规模部署，加快推进万兆光网规模部署",
    summary: "36氪获悉，近日，《广东省信息通信业“十五五”规划（征求意见稿）》向社会公开征求意见。其中提到，拟推动5G-A网络规模部署。统筹推进全省5G-A规模化部署，深化载波聚合、上行增强、通智融合等技术应用，持续提升5G-A综合网络供给能力，依托网络智能迭代巩固广东5G全国领先优势。持续监测广东5G-A基站",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/newsflashes/3889199948249863?f=rss",
    date: "2026-07-10",
    category: "industry",
  },
  {
    id: "news-003",
    title: "派早报：蔚来 ES8 大五座版正式上市等",
    summary: "OpenAI 发布 GPT-5.6 系列模型等，SpaceXAI 发布编程智能体模型 Grok 4.5。<a href=&#34;https://sspai.com/post/112143&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112143",
    date: "2026-07-10",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "刚刚，OpenAI首席未来学家离职！曾被马斯克骂蠢驴",
    summary: "To safe AGI.",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/446658.html",
    date: "2026-07-09",
    category: "product",
  },
  {
    id: "news-005",
    title: "刚刚，全球首个具身专属的MoE视频模型，开源了！",
    summary: "视频生成的下一站，或是机器人大脑",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/446568.html",
    date: "2026-07-09",
    category: "product",
  },
  {
    id: "news-006",
    title: "2026年世界人工智能大会，7月17-7月20上海举办",
    summary: "180家企业携成果入驻",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/436498.html",
    date: "2026-07-09",
    category: "product",
  },
  {
    id: "news-007",
    title: "获联合国机构点赞！天立启鸣“AI+教育”方案入选AI for Good",
    summary: "“一生一案”书写优质教育",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/446562.html",
    date: "2026-07-09",
    category: "product",
  },
  {
    id: "news-008",
    title: "世界模型首次迎来“小时级”生成！蚂蚁灵波开源LingBot-World 2.0，支持AI原生多人交互",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/446548.html",
    date: "2026-07-09",
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
