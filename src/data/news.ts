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
// 最后更新时间: 2026-11-11 04:37:28 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "RetroSweeper Go：复古外观、更有手感的扫雷游戏",
    summary: "复古游戏机风格的界面和「手柄」设计，希望可以唤起你的一些回忆。<a href=&#34;https://sspai.com/post/118458&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118458",
    date: "2026-11-11",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：700 号段保护服务试点获批、Claude Code 设置文件泄露凭据等",
    summary: "卫星导航基准站网安全国标发布，影目召回 4701 副 AIR3 眼镜等。<a href=&#34;https://sspai.com/post/118905&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118905",
    date: "2026-11-11",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "从“一脑多机”到“一脑多手”，蚂蚁灵波开源LingBot-Touch触觉基础模型",
    summary: "11月10日，蚂蚁灵波科技开源触觉基础模型LingBot-Touch",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508996.html",
    date: "2026-11-10",
    category: "product",
  },
  {
    id: "news-004",
    title: "Agent自演进驶入“双轨时代”！openJiuwen首发TTSE经验学习框架",
    summary: "让每一次任务，都成为下一次进步的起点",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508998.html",
    date: "2026-11-10",
    category: "product",
  },
  {
    id: "news-005",
    title: "达卯科技与浦东环保能源战略合作，黎明智算中心算电协同平台启动",
    summary: "加速东部城市型智算中心向E-AIDC演进",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508985.html",
    date: "2026-11-10",
    category: "product",
  },
  {
    id: "news-006",
    title: "千问办公2.0卷向Team Agent，我们用它跑了一遍编辑部日常",
    summary: "办公AI结束单机模式",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508798.html",
    date: "2026-11-10",
    category: "product",
  },
  {
    id: "news-007",
    title: "社区速递 165 | 透明工牌与派友十月购物清单",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/118861&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118861",
    date: "2026-11-10",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "报名人数创下新高，第十一届「移动应用创新赛」圆满落幕",
    summary: "北京时间11月8日，第十一届「移动应用创新赛」在浙江大学紫金港校区完成决赛评选并举行颁奖典礼。从2016年的161所高校开始，这项由全国高等学校计算机教育研究会主办、浙江大学与Apple联合承办的比赛 ...<a href=&#34;https://sspai.com/post/118824&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118824",
    date: "2026-11-10",
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
