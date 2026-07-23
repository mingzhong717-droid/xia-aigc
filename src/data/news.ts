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
// 最后更新时间: 2026-07-23 02:28:36 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "上海这场大赛有点“野”：让AI自主科研、控核聚变、认甲骨文",
    summary: "为科研OPC创业者铺就“最后一公里”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457249.html",
    date: "2026-07-23",
    category: "product",
  },
  {
    id: "news-002",
    title: "对话蚂蚁数科：打造商业智能体超级工厂，生态共建中国行业版Harness标准",
    summary: "7月17日，2026世界人工智能大会（WAIC）在上海开幕。作为36氪连续第三年深入WAIC现场的重要内容窗口，「氪话未来」直播间也在大会首日同步开启现场对话。蚂蚁数科副总裁、中国区业务发展部总经理孙磊在WAIC现场接受36氪「氪话未来」特邀专访，围绕商业智能体超级工厂、行业垂直大模型、AI工程化能",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3907590205085056?f=rss",
    date: "2026-07-23",
    category: "industry",
  },
  {
    id: "news-003",
    title: "36氪首发 | 同济博士做几何、物理AI重构设计制造，累计获超3亿元融资",
    summary: "图源/企业 本文约1400字，建议阅读3分钟 作者丨欧雪 编辑丨袁斯来 硬氪获悉，工业AI设计研发解决方案供应商「设序科技」于近日正式完成B轮超亿元融资，累计获超3亿元融资，投资方包括深产投、合鼎共及老股东涌铧投资等。融资将用于市场开拓（含出海）及核心模型技术研发。 设序科技成立于2020年，旗下产",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3907532622648453?f=rss",
    date: "2026-07-23",
    category: "industry",
  },
  {
    id: "news-004",
    title: "派早报：三星发布多款折叠屏新品、索尼发布 FX5 电影摄影机等",
    summary: "OpenAI 发布面向企业用户的 OpenAI Presence，耐克宣布重构大中华区市场生态等。<a href=&#34;https://sspai.com/post/112647&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112647",
    date: "2026-07-23",
    category: "product",
  },
  {
    id: "news-005",
    title: "美图拿出1亿元，面向全行业寻找AI影像Builder",
    summary: "美图产品挑战赛（Meitu Hatch Catch）火热报名中",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457223.html",
    date: "2026-07-22",
    category: "product",
  },
  {
    id: "news-006",
    title: "百度文心助手任务Agent登顶国际权威榜单，超越Claude、GPT拿下全球智能体冠军",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457117.html",
    date: "2026-07-22",
    category: "product",
  },
  {
    id: "news-007",
    title: "业内首款超算+智算的大规模计算底座，在WAIC上我们找到了",
    summary: "一颗“不走寻常路”的芯",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457054.html",
    date: "2026-07-22",
    category: "product",
  },
  {
    id: "news-008",
    title: "Halliday发布第二代AI眼镜Halliday G2，AI功能走向“实时参与会议”",
    summary: "通过Meeting Flow让实时智能融入会议与商务沟通场景",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457049.html",
    date: "2026-07-22",
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
