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
// 最后更新时间: 2026-10-18 02:56:19 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "被量化的心跳：HRV 是身体的晴雨表，还是制造焦虑的数字游戏？",
    summary: "这些设备最好的用途，不是让你更依赖它们，而是帮助你重新学会倾听自己。然后，在某个清晨，你不再需要看任何数字，就知道今天会是美好的一天。<a href=&#34;https://sspai.com/post/104231&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/104231",
    date: "2026-10-17",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "清华特奖得主AI创业再+1：GeoPT一作入局物理世界模型",
    summary: "从搭载物理建模能力的世界模型切入",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503880.html",
    date: "2026-10-16",
    category: "product",
  },
  {
    id: "news-003",
    title: "从“看懂世界”到“预演下一步”：世界模型与 VLA，如何让机器人拥有真正的“具身大脑”？",
    summary: "VLA解决“能干”，世界模型解决“想清楚再干”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503865.html",
    date: "2026-10-16",
    category: "product",
  },
  {
    id: "news-004",
    title: "说真话就能拿10万？网易叭哥说重金求“真需求”，不卡专业学历",
    summary: "网易首个AI原生语音Agent「网易叭哥说」上线 “用户荣誉联创计划”，投入 10 万元征集产品建议",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503861.html",
    date: "2026-10-16",
    category: "product",
  },
  {
    id: "news-005",
    title: "霸榜三大基准！优必选 Thinker-WM：多模态统一表征，单模型实现六大能力",
    summary: "优必选 Thinker-WM在三大公认具身世界模型基准评测中全部拿下第一名",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503843.html",
    date: "2026-10-16",
    category: "product",
  },
  {
    id: "news-006",
    title: "范式智能联合睿思智联推出开源一站式 生产级 AI 部署平台 “模域ModelSphere”",
    summary: "范式智能技术集团有限公司联合北京睿思智联科技有限公司宣布，一站式生产级 AI 部署平台“模域”正式上线。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503829.html",
    date: "2026-10-16",
    category: "product",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 13 部作品",
    summary: "📅本周新预告《哥斯拉-0.0》终极预告10月11日，电影《哥斯拉-0.0》发布了终极预告，将于11月3日在日本上映、11月6日在北美上映。该片为首部为IMAX拍摄的日本电影，山崎贵执导、编剧，神木隆之 ...<a href=&#34;https://sspai.com/post/116423&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116423",
    date: "2026-10-16",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "「弯道超车」赛车入门指北 05：让赛车粉身碎骨，才是保命的真正方式",
    summary: "当你下次在屏幕前看到两台赛车撞得粉身碎骨、而车手淡定地推开残骸向看台挥手致意时，希望你能想起今天的故事。<a href=&#34;https://sspai.com/post/114836&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114836",
    date: "2026-10-16",
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
