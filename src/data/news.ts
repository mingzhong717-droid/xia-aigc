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
// 最后更新时间: 2026-07-15 02:08:11 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "估值4800亿，DeepSeek火速开启新一轮融资！最快明年IPO",
    summary: "距首轮估值上涨37%",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/450101.html",
    date: "2026-07-15",
    category: "product",
  },
  {
    id: "news-002",
    title: "派早报：Meta 被诉借助 AI 违规裁员、Google 被诉使用版权内容训练 Gemini 模型等",
    summary: "Google 推出新版图片搜索功能，Spotify 开启语音交互功能内测等。<a href=&#34;https://sspai.com/post/112334&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112334",
    date: "2026-07-15",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "阶跃入局，重构智能体时代操作系统",
    summary: "董事长印奇称“未来的OS一定是跨端的”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/449979.html",
    date: "2026-07-14",
    category: "product",
  },
  {
    id: "news-004",
    title: "刚刚，一个免费AI Coding选手杀入全球第一梯队",
    summary: "一手实测这就奉上",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/448475.html",
    date: "2026-07-14",
    category: "product",
  },
  {
    id: "news-005",
    title: "B站AI创造公开赛正式上线投币榜，单月参赛人数突破五千",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/449863.html",
    date: "2026-07-14",
    category: "product",
  },
  {
    id: "news-006",
    title: "百年德国「战车」征服欧陆，驾驶位上是中国AI司机",
    summary: "一套模型，三个世界",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/449850.html",
    date: "2026-07-14",
    category: "product",
  },
  {
    id: "news-007",
    title: "8点1氪丨LV起诉国家知识产权局；DeepSeek梁文锋成全球AI公司领域新首富；戴比尔斯将暂停南非最大钻石矿生产",
    summary: "今日热点导览 小米机器人首次实现汽车工厂柔性工件的长时作业 SK海力士加速Y1工厂建设，现已开始订购DRAM制造设备 国际金价持续回调，后市关注美联储政策路径 海关总署：中国出口连续11季度保持增长，贸易增量集中于AI领域 韩国政府四部门将于周四召开会议，就单股杠杆ETF对股市冲击研究应对方案 TO",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3896138695706497?f=rss",
    date: "2026-07-14",
    category: "industry",
  },
  {
    id: "news-008",
    title: "氪星晚报 ｜智谱：完成配售新H股募资约314亿港元；荣耀与阿里将开展AI智能体终端合作；小米机器人首次实现汽车工厂柔性工件的长时作业",
    summary: "大公司： 中国神华：预计上半年净利润同比增长6.9%-21.1% 36氪获悉，中国神华公告，预计2026年上半年归属于上市公司股东的净利润为263亿元至298亿元，同比增长6.9%-21.1%。业绩变动主要系煤化工业务量及自有铁路、港口、航运业务量增加，带动相关业务利润同比增长。 中国人寿：预计上半",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3895322613185543?f=rss",
    date: "2026-07-14",
    category: "industry",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
