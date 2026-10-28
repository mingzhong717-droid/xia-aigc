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
// 最后更新时间: 2026-10-28 03:53:41 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "怀旧手记｜坚果 Pro2 与 R1：当「理想」和「现实」碰撞会发生什么？",
    summary: "短短几年，罗永浩和锤子科技在国产手机的红海中留下了浓墨重彩的一笔。<a href=&#34;https://sspai.com/post/115533&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115533",
    date: "2026-10-28",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：Apple 发布 M6 版 iMac 和 MacBook Pro 等",
    summary: "小米发布 REDMI K100 等新品，广电总局发布有线电视与 IPTV 运营服务新规等。<a href=&#34;https://sspai.com/post/117684&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117684",
    date: "2026-10-28",
    category: "product",
  },
  {
    id: "news-003",
    title: "钛动科技发布行业首个Pro-Agent, Navos Pro定义结果导向的AI for Work &#124; TGC 2026科技增长大会",
    summary: "10 月 23 日，以 “ AI is Profitable ” 为主题的 2026 TGC 科技增长大会于广州召开。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/505580.html",
    date: "2026-10-27",
    category: "product",
  },
  {
    id: "news-004",
    title: "社区速递 163 | 金豪 59 调整版钢笔与九月派友剁手清单",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/117633&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117633",
    date: "2026-10-27",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "Apple Sports：不看新闻、不聊球，只看我关心的比赛",
    summary: "作为一个从小看CCTV-5体育频道下饭的「体育迷」，在互联网时代我一般都看新浪门户网站的体育板块来获取最新的体育资讯，在智能手机逐渐普及后，百度贴吧、虎扑、懂球帝等平台又是我获取体育资讯以及和网友们吹 ...<a href=&#34;https://sspai.com/post/117557&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117557",
    date: "2026-10-27",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "一日一技｜NAS 作为 UPS 总控，实现局域网多设备断电自动关机",
    summary: "借助 NUT 网络 UPS 协议，我们只需要一台 UPS，就可以驱动局域网中多台设备协同断电保护。<a href=&#34;https://sspai.com/post/115855&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115855",
    date: "2026-10-27",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "刚刚，Anthropic公开335页招股书：史上最大IPO，史上最亏AI公司",
    summary: "地球最富兄妹俩堂堂来袭！7名联创仍紧握50.1%总投票权",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/505551.html",
    date: "2026-10-26",
    category: "product",
  },
  {
    id: "news-008",
    title: "AI时代，一个人能有多大能量？天禧AI × 观猹大会现场实测个人AI跨端协同新体验",
    summary: "10月23日至25日，以“见证超能发生”为主题的“天禧AI × 观猹大会”在杭州茶叶博览会会议会展中心启幕。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/505539.html",
    date: "2026-10-26",
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
