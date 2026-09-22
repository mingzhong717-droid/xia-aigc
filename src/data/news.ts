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
// 最后更新时间: 2026-09-22 03:12:29 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "阿里吴泳铭最新演讲：未来机器思考的总量将达到人类的1000倍以上",
    summary: "9月22日，在2026杭州云栖大会上，阿里巴巴集团CEO吴泳铭发表最新演讲，阐述了对“机器智能”时代的思考。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/493485.html",
    date: "2026-09-22",
    category: "product",
  },
  {
    id: "news-002",
    title: "AI算力之争不靠堆卡！浪潮信息捅破智算「能力天花板」，还瓦解了「产能焦虑」",
    summary: "弥补算力缺口，不能只靠堆料",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/493363.html",
    date: "2026-09-22",
    category: "product",
  },
  {
    id: "news-003",
    title: "派早报：vivo 发布 X500 系列，Google 推出首批 Googlebook 等",
    summary: "少数派的近期动态少数派会员2026周边现已开放兑换，点击兑换给电话加上「辅助驾驶」？我们想听听你的意见。我们将从提交的问卷中挑选40份用心回答，每份送出50元面值京东卡。参与调研口袋先知新版本1.3. ...<a href=&#34;https://sspai.com/post/114840&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114840",
    date: "2026-09-22",
    category: "product",
  },
  {
    id: "news-004",
    title: "啊啊啊GPT-6 Astra这么不安全！这次马斯克都瘫坐了",
    summary: "97%尝试危险行为",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/493241.html",
    date: "2026-09-21",
    category: "product",
  },
  {
    id: "news-005",
    title: "长三角安全人工智能安徽省实验室发布星界、星驭、星鉴三大AI安全解决方案",
    summary: "9月19日，第一届中国网络空间安全大会（CCSC 2026）的高水平专题论坛在安徽合肥正式举办。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/493235.html",
    date: "2026-09-21",
    category: "product",
  },
  {
    id: "news-006",
    title: "国产数据库跑出AI新能力！OceanBase登顶国际Data Agent榜单",
    summary: "OceanBase团队提交的Data Agent方案登顶国际数据智能体基准Data Agent Benchmark",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/493231.html",
    date: "2026-09-21",
    category: "product",
  },
  {
    id: "news-007",
    title: "一台主机，多重角色：新款 Mac mini 首发体验",
    summary: "Macmini虽然不是性能最强、体验最完整的Mac电脑，但在AI时代，它或许比以往任何时候都更适合家庭用户。从年初OpenClaw的现象级走红，到如今Codex引领Agent工作方式潮流，这台小巧精悍 ...<a href=&#34;https://sspai.com/post/114829&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114829",
    date: "2026-09-21",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/114815&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114815",
    date: "2026-09-21",
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
