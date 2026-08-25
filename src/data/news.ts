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
// 最后更新时间: 2026-08-25 01:04:44 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "AI重塑商业，信任决定未来商业能走多远丨Visa大中华区总裁张文翊",
    summary: "Visa看到的AI未来",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478670.html",
    date: "2026-08-24",
    category: "product",
  },
  {
    id: "news-002",
    title: "一篇论文改写AI科研评价规则！中国公司拿出实践数据，双榜第一",
    summary: "全球大厂开始押注的AI科研，终于有了统一标准",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478568.html",
    date: "2026-08-24",
    category: "product",
  },
  {
    id: "news-003",
    title: "阿里达摩院推出肝癌AI模型，精准识别1厘米微小肿瘤",
    summary: "8月24日消息，阿里巴巴达摩院联合中国医科大学附属盛京医院等机构研发出肝癌诊断AI模型DAMO LiON",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478473.html",
    date: "2026-08-24",
    category: "product",
  },
  {
    id: "news-004",
    title: "单芯片到万卡集群体系化突破 中诚华隆HL200推理芯片及超节点集群重磅发布",
    summary: "定义国产推理算力新范式 赋能万卡级AI推理算力规模化落地",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478469.html",
    date: "2026-08-24",
    category: "product",
  },
  {
    id: "news-005",
    title: "8月25日直播预告 &#124; AFAC2026金融智能创新大赛，总决赛路演倒计时来啦！",
    summary: "AFAC2026总决赛路演将于8月25-26日在上海阿纳迪酒店（长宁区临虹路7号）举办。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/478447.html",
    date: "2026-08-24",
    category: "product",
  },
  {
    id: "news-006",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派2.0客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/113795&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113795",
    date: "2026-08-24",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "Windows On ARM 原生应用少？你可以试试这些改造方法",
    summary: "相比大家熟知的基于Intel或AMD处理器的传统x86架构Windows，不少人以为WindowsonARM是近几年的新产物。事实上，微软早在2012年就曾通过WindowsRT尝试探索ARM设备，但 ...<a href=&#34;https://sspai.com/prime/story/cre",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/create-your-own-windows-apps",
    date: "2026-08-24",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "AI 助力改造非智能升降桌：智能升降、语音控制、多端联动……",
    summary: "把非智能的双电机升降桌，改成我梦想中的智能升降中枢。<a href=&#34;https://sspai.com/post/113563&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113563",
    date: "2026-08-24",
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
