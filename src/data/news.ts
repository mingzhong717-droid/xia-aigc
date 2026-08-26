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
// 最后更新时间: 2026-08-26 01:06:29 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "从开源走向共建：范式联合优必选等十余家具身巨头发布PhanthyMotus新计划",
    summary: "近日，范式正式举办 PhanthyMotus 生态社区共建计划发布会，宣布其首个通用具身Agent底座从“开源”迈入“多方共建”新阶段。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/479314.html",
    date: "2026-08-25",
    category: "product",
  },
  {
    id: "news-002",
    title: "开源国产8B模型，比肩闭源Image 2了！",
    summary: "SenseNova U1.5 Lite",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/479192.html",
    date: "2026-08-25",
    category: "product",
  },
  {
    id: "news-003",
    title: "半年3轮10亿，他们都投了这家已经把机器人卖到500个家庭的公司",
    summary: "字节、汇川等已入股未来不远机器人最新一轮融资",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/479132.html",
    date: "2026-08-25",
    category: "product",
  },
  {
    id: "news-004",
    title: "AI4S开始进入「项目时代」：紫东太初把AI从做Task推向做Project",
    summary: "AI科研能力从工具级转向系统级",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/479096.html",
    date: "2026-08-25",
    category: "product",
  },
  {
    id: "news-005",
    title: "赛博义父Tibo最新访谈：专门实体按钮搞重置，“我想重置就重置”",
    summary: "下一代Agent天然会走向云端和更大规模的计算资源",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478996.html",
    date: "2026-08-25",
    category: "product",
  },
  {
    id: "news-006",
    title: "社区速递 155 | 适马千元人像神头与七月派友剁手清单",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/113828&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113828",
    date: "2026-08-25",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "台湾打工换宿｜用人与人的喜好串起淡水的地图",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/113673&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113673",
    date: "2026-08-25",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "App+1｜ArkFlow：满足你的卡面收集癖，给信用卡做个卡面墙",
    summary: "你会把它当成一个金融账户，还是一件属于自己人生的收藏品？<a href=&#34;https://sspai.com/post/112442&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112442",
    date: "2026-08-25",
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
