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
// 最后更新时间: 2026-10-17 02:54:26 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "本周看什么 | 最近值得一看的 13 部作品",
    summary: "📅本周新预告《哥斯拉-0.0》终极预告10月11日，电影《哥斯拉-0.0》发布了终极预告，将于11月3日在日本上映、11月6日在北美上映。该片为首部为IMAX拍摄的日本电影，山崎贵执导、编剧，神木隆之 ...<a href=&#34;https://sspai.com/post/116423&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116423",
    date: "2026-10-16",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "「弯道超车」赛车入门指北 05：让赛车粉身碎骨，才是保命的真正方式",
    summary: "当你下次在屏幕前看到两台赛车撞得粉身碎骨、而车手淡定地推开残骸向看台挥手致意时，希望你能想起今天的故事。<a href=&#34;https://sspai.com/post/114836&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114836",
    date: "2026-10-16",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "一面专注体验，一面表达个性：麦金獭钢化膜与极稚墨水屏手机壳体验",
    summary: "从正面的手感与显示聊起，再翻到背面看看换图的玩法。<a href=&#34;https://sspai.com/post/115679&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115679",
    date: "2026-10-16",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "让读书笔记不再吃灰：我做了一款跨平台书摘管理工具",
    summary: "从微信读书的 3 万条划线出发，我做了一个让阅读笔记重新回到日常的 App。<a href=&#34;https://sspai.com/post/115688&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115688",
    date: "2026-10-16",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "派早报：Apple 智能国行 Beta 版本将于本月晚些时候上线测试版本",
    summary: "SpaceXAI 发布 Grok Voice 3.0 语音模型、微软发布 XBOX Nano 口袋手柄等。<a href=&#34;https://sspai.com/post/116355&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116355",
    date: "2026-10-16",
    category: "product",
  },
  {
    id: "news-006",
    title: "库克：苹果智能接入阿里千问大模型，10月底在中国发布测试版本",
    summary: "Siri AI这次不包括在内",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503640.html",
    date: "2026-10-15",
    category: "product",
  },
  {
    id: "news-007",
    title: "量子位智库发布Agent落地报告！拆解企业智能化六大断点，附全链路破局框架",
    summary: "Agent究竟该如何深入业务毛细血管？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503614.html",
    date: "2026-10-15",
    category: "product",
  },
  {
    id: "news-008",
    title: "2026 TMOT首个AI智能体走进电音现场，让听众成为音乐共创者",
    summary: "10月17日至18日，顶尖电音节The Magic of Tomorrowland 2026将在上海举行。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503611.html",
    date: "2026-10-15",
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
