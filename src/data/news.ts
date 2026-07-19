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
// 最后更新时间: 2026-07-19 02:26:22 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "全球市占第一后，普渡在WAIC开始回答机器人下一场战争",
    summary: "PuduFM+PuduAgent，一并在不同本体上持续落地，共同构成了普渡机器人的顶层战略「一脑多形」。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/453802.html",
    date: "2026-07-19",
    category: "product",
  },
  {
    id: "news-002",
    title: "WAIC看了一圈，这家公司的机器人在认真打工",
    summary: "机器人真正具备了干活的完整能力",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/454040.html",
    date: "2026-07-18",
    category: "product",
  },
  {
    id: "news-003",
    title: "WAIC 2026现场直击：万兴科技旗下万兴剧厂“无限画布”、新品Filmora.AI与Virbo AI火爆首秀",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/454015.html",
    date: "2026-07-18",
    category: "product",
  },
  {
    id: "news-004",
    title: "滴滴在WAIC分享：AI升级出行体验 好服务连接消费烟火气",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/454003.html",
    date: "2026-07-18",
    category: "update",
  },
  {
    id: "news-005",
    title: "WAIC 2026现场发布AI商业落地报告，海亮科服同时入选产业图谱、Top50",
    summary: "全面演进为赋能千行百业的新型数字基础设施",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/453889.html",
    date: "2026-07-18",
    category: "product",
  },
  {
    id: "news-006",
    title: "9点1氪丨ofo停更5年突然发文，运营主体仍处存续状态；苹果市值重返全球第一；乐事回应“蓝色薯片”来源",
    summary: "今日热点导览 月之暗面正式推出开源模型Kimi K3 智谱ARR达到10亿美元，半年增长15倍 国际足联：世界杯冠军将有戒指，每枚均有独立编号 国内成品油价7月17日晚上调 A股存储板块龙头股遭遇两个跌停 TOP3大新闻 ofo停更5年突然发文，运营主体仍处存续状态 7月15日，沉寂近5年的ofo小",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3900449325287305?f=rss",
    date: "2026-07-18",
    category: "industry",
  },
  {
    id: "news-007",
    title: "印奇在 WAIC 2026 开幕式主论坛发表主题演讲：当智能体走进物理世界",
    summary: "2026 世界人工智能大会（WAIC 2026）于 7 月 17 日正式开幕。作为全球人工智能领域的顶级盛会，本届大会以“智能伙伴 共创未来”为主题。阶跃星辰董事长、千里科技董事长印奇作为特邀嘉宾出席大会开幕式并在大会主论坛（上午场）发表主题演讲《当智能体进入物理世界》。回顾 15 年 AI 创业历",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3900439867147909?f=rss",
    date: "2026-07-18",
    category: "industry",
  },
  {
    id: "news-008",
    title: "小米 NAS 拆解与初步上手：它会是你的第一台 NAS 吗？",
    summary: "小米智能存储最适合两类用户：家里已经有较多米家设备的人，以及小米手机用户。<a href=&#34;https://sspai.com/post/112398&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112398",
    date: "2026-07-18",
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
