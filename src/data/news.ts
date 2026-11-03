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
// 最后更新时间: 2026-11-03 05:15:30 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "MIT：GPT-6 Astra能直接修改Qwen权重，数学能力暴涨6倍",
    summary: "指令执行能力也同步提升",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507322.html",
    date: "2026-11-03",
    category: "product",
  },
  {
    id: "news-002",
    title: "爱诗科技PixVerse 与 OpenAI 共同推出产品集成和创作者教育计划，高效打通 AI 创意全流程",
    summary: "近日，爱诗科技（AIsphere）旗下模型和开放平台PixVerse 与 OpenAI 宣布开启深度合作",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507313.html",
    date: "2026-11-03",
    category: "product",
  },
  {
    id: "news-003",
    title: "Disc Image Studio：你想不想在光盘上「画」点什么？",
    summary: "把喜欢的图烧进 CD 里，你也可以。<a href=&#34;https://sspai.com/post/118211&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118211",
    date: "2026-11-03",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "派早报：猛玛推出探境 3 直播相机、美团发布 LongCat-2.5 模型等",
    summary: "Raspberry Pi 再次上调 16 GB 产品价格、Keychron 推出 Q19 HE 8K 磁轴键盘等。<a href=&#34;https://sspai.com/post/118232&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118232",
    date: "2026-11-03",
    category: "product",
  },
  {
    id: "news-005",
    title: "顶级AI翻车的活儿，被这个新出的免费国产AI接住了！",
    summary: "商汤SenseNova 6.8 Flash",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507277.html",
    date: "2026-11-02",
    category: "product",
  },
  {
    id: "news-006",
    title: "OpenAI重写大模型法则，第一条：忠于人类！！",
    summary: "新版“机器人三定律”。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507225.html",
    date: "2026-11-02",
    category: "product",
  },
  {
    id: "news-007",
    title: "央视严选「中国AI创业十骏」：唯一AI制药公司是清华系",
    summary: "模型管线双驱动",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507150.html",
    date: "2026-11-02",
    category: "product",
  },
  {
    id: "news-008",
    title: "派评 | 近期值得关注的 App",
    summary: "能看见、更聪明的 Android 智能点击器，纯纯写作迎来 iOS 版本，Photon Cam 为 iPhone 旧机型解锁相机新功能等。<a href=&#34;https://sspai.com/post/118240&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118240",
    date: "2026-11-02",
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
