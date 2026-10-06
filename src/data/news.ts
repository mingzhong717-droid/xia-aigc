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
// 最后更新时间: 2026-10-06 04:45:30 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "刚刚，Hinton发了首篇RSI论文",
    summary: "AI已经开始真正进入「造下一代AI」的流水线",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501705.html",
    date: "2026-10-05",
    category: "product",
  },
  {
    id: "news-002",
    title: "限时28天！OpenAI承诺没新功能就重置，网友：只想要Opus",
    summary: "有改进就体验，没改进就重置，横竖不亏。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501700.html",
    date: "2026-10-05",
    category: "product",
  },
  {
    id: "news-003",
    title: "十个案例助你轻松上手 iOS 27 通知自动化",
    summary: "iOS 27 通知自动化改变了通知的处理方式，快捷指令也迎来了不少的新玩法。<a href=&#34;https://sspai.com/post/114536&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114536",
    date: "2026-10-05",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "AI算力硬合作，马斯克还是更相信中国制造",
    summary: "一种混搭的可能：英特尔继续供先进工艺，即前端用14A；后端再接台积电，来补工厂运营、良率、封装这些能力。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501605.html",
    date: "2026-10-04",
    category: "product",
  },
  {
    id: "news-005",
    title: "最火AI岗位FDE：月薪5万，都干这些…",
    summary: "什么是FDE？它会一直存在吗？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501506.html",
    date: "2026-10-04",
    category: "product",
  },
  {
    id: "news-006",
    title: "GPT-6要“吃掉”3D公司？这家公司不到2年ARR翻百倍，破1亿美元",
    summary: "专业3D模型反而更稀缺了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501451.html",
    date: "2026-10-04",
    category: "product",
  },
  {
    id: "news-007",
    title: "方方面面都熟悉，方方面面都更好：iPhone 18 Pro 体验",
    summary: "iPhone 18 Pro 也许不会让你感觉焕然一新，却在许多地方都变得更加完整了。<a href=&#34;https://sspai.com/post/115308&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115308",
    date: "2026-10-04",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "TDS REVIEW | CMF Clip Pro 耳夹式无线耳机体验",
    summary: "不知道以后 CMF 的设计还会不会像现在一样出彩。<a href=&#34;https://sspai.com/post/114922&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114922",
    date: "2026-10-03",
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
