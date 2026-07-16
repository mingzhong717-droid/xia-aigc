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
// 最后更新时间: 2026-07-16 02:21:46 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "大厂医疗AI战，开始“卷”减重",
    summary: "文｜胡香赟 编辑｜海若镜 互联网大厂做医疗AI，越来越偏爱“减重”场景。 近日，蚂蚁集团宣布投资薄荷健康，持股比例超28%，成为薄荷健康最大外部股东。薄荷健康成立于2008年，这家互联网医疗公司通过为用户提供饮食记录、科学减重方案等，聚拢了超2亿用户，收录160万条食物数据条目。 2021年，薄荷健",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3896639942592134?f=rss",
    date: "2026-07-16",
    category: "industry",
  },
  {
    id: "news-002",
    title: "硬氪首发 | 民用航空动力企业再获近亿元融资，切入国际巨头垄断的关键功率段",
    summary: "作者 | 乔钰杰 编辑 | 袁斯来 硬氪获悉，民用航空动力企业汉发长空近日完成近亿元Pre-A轮融资，本轮融资由方广资本领投，致道资本、六翼投资共同投资。 融资资金将主要用于提升400kW级通用核心机平台的技术成熟度与工程化验证，加速发动机向量产阶段迈进。400kW级平台包括涡轴发动机S4、涡桨发动",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3897686922266244?f=rss",
    date: "2026-07-16",
    category: "industry",
  },
  {
    id: "news-003",
    title: "众筹近400万美金，这家明星AI体育硬件公司做了款多合一教练机器人 ｜产品观察",
    summary: "作者｜黄楠 编辑｜袁斯来 在首款网球发球机卖爆后，庞伯特做了一款多合一AI教练机器人 。 这家公司是在一级市场很受关注的标的，2025年半年内完成三轮融资累计数亿元；旗下产品也在全球拥有了30余万用户，设备累计发球总量超20亿次。 但当下硬件赛道已经不容小而美的公司慢慢成长，网球赛道涌入了越来越多的",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3896586337978244?f=rss",
    date: "2026-07-16",
    category: "industry",
  },
  {
    id: "news-004",
    title: "派早报：国行版 Apple Intelligence 完成备案等",
    summary: "阿里发布实时语音模型 Qwen-Audio-3.0-Realtime、腾龙发布 12-20mm F2.8 镜头等。<a href=&#34;https://sspai.com/post/112373&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112373",
    date: "2026-07-16",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "主论坛丨WAIC 2026主论坛（下午场）重磅揭晓！",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/450831.html",
    date: "2026-07-15",
    category: "product",
  },
  {
    id: "news-006",
    title: "人在Meta，休个病假/产假转身被AI裁了？？",
    summary: "26名员工正在集体起诉Meta",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/450709.html",
    date: "2026-07-15",
    category: "product",
  },
  {
    id: "news-007",
    title: "我和「二次元老公」约上会了！全球首个可以玩的实时交互模型，Xmax X2.0发布",
    summary: "世界就是你的画布",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/450130.html",
    date: "2026-07-15",
    category: "product",
  },
  {
    id: "news-008",
    title: "马斯克也开始L4降维L2了！FSD正式进入反转时刻",
    summary: "FSD、Robotaxi共用一套模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/450657.html",
    date: "2026-07-15",
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
