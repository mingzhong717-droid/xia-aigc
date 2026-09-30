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
// 最后更新时间: 2026-09-30 03:53:09 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "DeepSeek官方开源昇腾基础组件，与昇腾共建高效易用的AI芯片软件生态",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499263.html",
    date: "2026-09-30",
    category: "product",
  },
  {
    id: "news-002",
    title: "OpenAI光速上新GPT-6.1 Sol！一晚上25项更新，都在这里了",
    summary: "今年devday牙膏挤爆",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499246.html",
    date: "2026-09-29",
    category: "update",
  },
  {
    id: "news-003",
    title: "正行创新联合创始人杨宇欣正式亮相：出任总裁，负责全球业务拓展",
    summary: "推动公司具身模型、本体、软件等全栈能力进入更多真实场景",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499239.html",
    date: "2026-09-29",
    category: "product",
  },
  {
    id: "news-004",
    title: "精准揪出RL训练数据Bug，Prompt直出小游戏，IQuest-Q1夯爆了！",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499188.html",
    date: "2026-09-29",
    category: "product",
  },
  {
    id: "news-005",
    title: "OpenAI因新模型太强叫停发布",
    summary: "AGI计划暂停。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/499140.html",
    date: "2026-09-29",
    category: "product",
  },
  {
    id: "news-006",
    title: "派早报：OpenAI 发布 Dot 智能体、Apple 移动睡眠呼吸暂停迹象提示软件国内获批等",
    summary: "Nothing 发布旗舰耳机 Headphone 1 Pro，AMD 斥资 82 亿美元收购 World Labs 等。<a href=&#34;https://sspai.com/post/115197&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115197",
    date: "2026-09-29",
    category: "product",
  },
  {
    id: "news-007",
    title: "社区速递 160 | 水月雨首款游戏耳机与八月派友剁手清单",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。临近国庆长假 ...<a href=&#34;https://sspai.com/post/115153&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115153",
    date: "2026-09-29",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "更懂你的心，也更懂你：Apple Watch Series 12 体验",
    summary: "全新 Apple Watch Series 12，有哪些可感知的升级？<a href=&#34;https://sspai.com/post/115061&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115061",
    date: "2026-09-29",
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
