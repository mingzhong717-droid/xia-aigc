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
// 最后更新时间: 2026-11-16 04:39:58 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "App+1｜不卡带：给你爱听的「老调」，配点记忆中的风味",
    summary: "能切换老设备音质的媒体播放器。<a href=&#34;https://sspai.com/post/119012&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119012",
    date: "2026-11-16",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：逾十万人次联署要求黄仁勋复职",
    summary: "<p>逾十万人次联署要求黄仁勋复职</p><p>Microsoft 365 服务在 19 小时全球宕机后恢复</p><p>国产前沿模型携带 Blackwell GPU 特征</p><p>线缆更换导致全美飞机停飞</p><p>流媒体用户抱怨更难找到想看作品</p><p>特斯拉 Cybercab 订阅协",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119119",
    date: "2026-11-15",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "Aerial Switcher：给 Mac 的航拍壁纸排个时间表",
    summary: "既然 Apple 已经把同一个地方的美景从早到晚拍了一遍并做成了壁纸，为什么不能让它们跟着时间自动切换？<a href=&#34;https://sspai.com/post/118392&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118392",
    date: "2026-11-15",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "「史上最严」湿实验预测基准发布！推理拉满、算力翻5倍也白搭",
    summary: "斯坦福、哈佛、康奈尔……十余家顶尖团队齐坐一桌了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510232.html",
    date: "2026-11-14",
    category: "product",
  },
  {
    id: "news-005",
    title: "突发！DeepSeek开放全家桶API",
    summary: "官方App功能均可自由组合调用",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510003.html",
    date: "2026-11-14",
    category: "product",
  },
  {
    id: "news-006",
    title: "怀旧手记｜索尼 CLIE：千禧年的高端 Palm OS PDA",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/118276&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118276",
    date: "2026-11-14",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "MEET2027含金量再加码：AI4S/量子计算/AI Infra…第二批嘉宾强势来袭！",
    summary: "12.9 北京，来MEET2027现场",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509827.html",
    date: "2026-11-13",
    category: "product",
  },
  {
    id: "news-008",
    title: "中国AI突破复杂肺癌诊疗！中美医疗圈集体坐不住了",
    summary: "250名国内顶尖三甲医院医生联合评测",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509796.html",
    date: "2026-11-13",
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
