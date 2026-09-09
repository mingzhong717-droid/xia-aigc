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
// 最后更新时间: 2026-09-09 02:58:04 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：LG 电视被曝存在后门、《塞尔达传说：时之笛》重制版公布等",
    summary: "Arm 发布 C2 CPU 与新 Mali GPU，索尼推出全画幅鱼眼变焦镜头等。<a href=&#34;https://sspai.com/post/114352&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114352",
    date: "2026-09-09",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "感谢用GPT-6搓3D的！燃烧自己的token换来一次全体重置",
    summary: "Blender也不用学了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485854.html",
    date: "2026-09-08",
    category: "product",
  },
  {
    id: "news-003",
    title: "现场围观金融AI决赛，大厂挑人的逻辑我悟了",
    summary: "百万奖金、大厂直通、VC跟投",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485794.html",
    date: "2026-09-08",
    category: "product",
  },
  {
    id: "news-004",
    title: "深度智控获宁德时代、沙特阿美战投等重磅加码，加速打造物理AI时代算力与能源底座",
    summary: "近日，物理AI企业深度智控（DeepCtrls）完成新一轮B+轮数亿元融资。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485784.html",
    date: "2026-09-08",
    category: "product",
  },
  {
    id: "news-005",
    title: "深入马来西亚AI现场！WAIC CONNECT MALAYSIA首日亮点全速递",
    summary: "从看市场，到见场景；从认识伙伴，到寻找合作。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485630.html",
    date: "2026-09-08",
    category: "product",
  },
  {
    id: "news-006",
    title: "王云鹤创业后交出首个模型",
    summary: "把多模型执行经验用到了模型训练",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485555.html",
    date: "2026-09-08",
    category: "product",
  },
  {
    id: "news-007",
    title: "Apple「随航」的无感体验里，藏着多少流畅的秘密？",
    summary: "相较于 Jobs 时代令人惊叹的「iPhone 时刻」，过去十五年的 Apple 或许少了一些足以重新定义一个品类的震撼——但围绕「体验」本身展开的技术革新却从未停止。<a href=&#34;https://sspai.com/prime/story/sidecar-optimizations&#",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/sidecar-optimizations",
    date: "2026-09-08",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "社区速递 157 | NuPhy 全铝磁轴键盘与派友拒绝算法的「反投喂」信息源",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/114327&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114327",
    date: "2026-09-08",
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
