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
// 最后更新时间: 2026-07-14 02:10:28 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "36氪首发 | 前博世自动驾驶算法工程师创业，用合成数据做触觉大模型",
    summary: "触觉手套（图源/企业） 本文约2400字，建议阅读6分钟 作者丨欧雪 编辑丨袁斯来 硬氪获悉，空间智能公司「大衍科技」近期完成数千万元天使轮融资，由松禾资本领投，浙江省省金控与广州番禺创新基金等国资背景机构参与。资金将主要用于触觉大模型研发、机器人数据产线建设及团队扩张。 「大衍科技」2025年5月",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3894821059918855?f=rss",
    date: "2026-07-14",
    category: "industry",
  },
  {
    id: "news-002",
    title: "8点1氪丨海南将成中国首个禁售燃油车省份；长鑫科技部分员工入股成本低至1毛；SK海力士暴跌15%",
    summary: "今日热点导览 韩国法院禁止两名前三星员工就职于SK海力士 字节探索自动驾驶，Seed世界模型团队负责 巨力索具深夜澄清商业航天业务不实传闻，提醒投资风险 科技记者古尔曼：苹果将跳过M6 Pro/Max芯片全力押注AI导向的M7系列 美众议院本周将表决永久实行夏令时法案 TOP 3大新闻 海南将成中国",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3894729787767810?f=rss",
    date: "2026-07-14",
    category: "industry",
  },
  {
    id: "news-003",
    title: "派早报：全球智能手机出货量创 13 年来最低水平等",
    summary: "少数派的近期动态声擎×少数派｜「角落新声」征文活动已经启动。投稿赚音箱少数派×AKKO灵犀Linx68键盘预售开启。看看新键盘你可能错过的文章你这图「保真」吗？AI生图时代的信息防伪依江伴湖，树影连绵 ...<a href=&#34;https://sspai.com/post/112286&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112286",
    date: "2026-07-14",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "Agent专用搜索登顶Product Hunt，Token更省搜得更准",
    summary: "出自中国团队",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/449327.html",
    date: "2026-07-13",
    category: "product",
  },
  {
    id: "news-005",
    title: "Agent要数量也要脑子！浪潮信息一边单柜养4万Agent，一边让大模型组队答题",
    summary: "同时发布CPU原生液冷整机柜、多模融合超节点",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/449311.html",
    date: "2026-07-13",
    category: "product",
  },
  {
    id: "news-006",
    title: "WAIC特别关注｜思想者论坛：当赛道疯狂内卷，谁在拆解AI底层的底层？",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/449156.html",
    date: "2026-07-13",
    category: "product",
  },
  {
    id: "news-007",
    title: "从前沿创新到产业落地：西门子将亮相2026世界人工智能大会",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/449150.html",
    date: "2026-07-13",
    category: "product",
  },
  {
    id: "news-008",
    title: "WAIC&#8217;26探展召集令！和量子位一起逛展、直播、聊AI",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/448923.html",
    date: "2026-07-13",
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
