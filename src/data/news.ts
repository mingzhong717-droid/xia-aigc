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
// 最后更新时间: 2026-08-19 01:03:14 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "网易传媒发布&#8221;蜜蜂AI” ：从工具到伙伴，让AI更懂人",
    summary: "8月18日，网易传媒举办“蜜蜂AI媒体沟通会”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474857.html",
    date: "2026-08-18",
    category: "product",
  },
  {
    id: "news-002",
    title: "人人都能写好听的歌，阿里发布AI音乐模型HappyShrimp",
    summary: "8月17日，阿里巴巴发布AI音乐模型HappyShrimp",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474840.html",
    date: "2026-08-18",
    category: "product",
  },
  {
    id: "news-003",
    title: "6个Agent组团Vibe Gaming：自己生成、试玩、修Bug",
    summary: "代码能跑≠游戏能玩",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474806.html",
    date: "2026-08-18",
    category: "product",
  },
  {
    id: "news-004",
    title: "今日起，阿里“千问办公”接入企业微信",
    summary: "国内三大办公平台全面支持",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474803.html",
    date: "2026-08-18",
    category: "product",
  },
  {
    id: "news-005",
    title: "650亿美元！IPO前夕，Anthropic营收底牌曝光",
    summary: "回头看，A社就这样完成了反超",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474673.html",
    date: "2026-08-18",
    category: "product",
  },
  {
    id: "news-006",
    title: "社区速递 154 | AI 代码助手大乱斗、租房电钻组合与神奇实体卡片故事机",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/113593&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113593",
    date: "2026-08-18",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "线下活动 | 爵士律动唤醒动漫回忆：炒饭 Fried Rice 音乐分享签售会",
    summary: "二次元加爵士，你说有没有搞头？音乐人介绍炒饭（B站），本职是常驻波士顿的程序员社畜，同时也是多乐器演奏音乐人、B站UP主。炒饭没有专业科班学习经历，却凭兴趣及自学掌握了多种音乐技能，专辑音乐均为自己在 ...<a href=&#34;https://sspai.com/post/113564&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113564",
    date: "2026-08-18",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "App+1 | 让任务栏更有用：WindowSill",
    summary: "屏幕不是注意力中心的地方可以塞下多少有用的东西呢？<a href=&#34;https://sspai.com/post/113438&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113438",
    date: "2026-08-18",
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
