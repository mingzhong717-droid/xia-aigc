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
// 最后更新时间: 2026-11-24 08:17:53 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "业界首提“端侧超节点”，让端侧AI组队计算：AI效率暴涨270%，不用换芯片或模型",
    summary: "端侧老炮辛米尔，打通物理AI规模化落地之路",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512362.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-002",
    title: "文心 5.5 Flash Preview正式开源，采用 Apache 2.0 协议",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512354.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-003",
    title: "报名从速｜来MEET2027！听AI前沿实践者交出“判断”",
    summary: "12.9 北京，来MEET2027现场",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512329.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-004",
    title: "蚂蚁OceanBase发布湖库一体AI数据平台OceanLake，核心引擎向全球开源",
    summary: "中国AI数据平台加速崛起",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512330.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-005",
    title: "释放AI与出海强预期，近1500人参与亿邦产业互联网年会暨首届产业智能体大会",
    summary: "2026年11月20日，第八届亿邦产业互联网年会与首届产业智能体大会在北京国贸大酒店首次合体举行。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/512305.html",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-006",
    title: "写在动荡之后：漫步巴黎的寻常一日",
    summary: "巴黎市徽上的那艘船，依然留着它的格言：「任凭风浪，亦不沉没。」<a href=&#34;https://sspai.com/post/119412&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119412",
    date: "2026-11-24",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "派早报：黄仁勋重回英伟达，荣耀发布荣耀 700 系列新机等",
    summary: "少数派的近期动态我们已开设专页，汇总展示「优秀作者评选」奖项及结果。「优秀作者评选」是编辑部自2023年起实行的机制，于每季度结束后，评选该季度贡献突出的现有作者，以及涌现出的有潜力新作者。获奖者会获 ...<a href=&#34;https://sspai.com/post/119460&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119460",
    date: "2026-11-24",
    category: "product",
  },
  {
    id: "news-008",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/119438&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119438",
    date: "2026-11-23",
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
