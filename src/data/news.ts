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
// 最后更新时间: 2026-11-25 06:54:42 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "怀旧手记｜Palm Pre：内藏「划时代」系统的手机",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/118791&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118791",
    date: "2026-11-25",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：华为发布 Mate X8 与 MateBook Fold S、微软将推出自研驱动等",
    summary: "豆包 AI 个人助理「小豆」开启公测，Teenage Engineering 推出复古 CD 播放器 EP / BC-1 等。<a href=&#34;https://sspai.com/post/119527&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119527",
    date: "2026-11-25",
    category: "product",
  },
  {
    id: "news-003",
    title: "业界首提“端侧超节点”，让端侧AI组队计算：AI效率暴涨270%，不用换芯片或模型",
    summary: "端侧老炮辛米尔，打通物理AI规模化落地之路",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512362.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-004",
    title: "文心 5.5 Flash Preview正式开源，采用 Apache 2.0 协议",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512354.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-005",
    title: "报名从速｜来MEET2027！听AI前沿实践者交出“判断”",
    summary: "12.9 北京，来MEET2027现场",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512329.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-006",
    title: "蚂蚁OceanBase发布湖库一体AI数据平台OceanLake，核心引擎向全球开源",
    summary: "中国AI数据平台加速崛起",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512330.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-007",
    title: "释放AI与出海强预期，近1500人参与亿邦产业互联网年会暨首届产业智能体大会",
    summary: "2026年11月20日，第八届亿邦产业互联网年会与首届产业智能体大会在北京国贸大酒店首次合体举行。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512305.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-008",
    title: "社区速递 167｜迪卡侬折叠车、静电白板贴与跨系统设备协同",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/119492&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119492",
    date: "2026-11-24",
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
