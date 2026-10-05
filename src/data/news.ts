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
// 最后更新时间: 2026-10-05 03:56:27 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "AI算力硬合作，马斯克还是更相信中国制造",
    summary: "一种混搭的可能：英特尔继续供先进工艺，即前端用14A；后端再接台积电，来补工厂运营、良率、封装这些能力。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501605.html",
    date: "2026-10-04",
    category: "product",
  },
  {
    id: "news-002",
    title: "最火AI岗位FDE：月薪5万，都干这些…",
    summary: "什么是FDE？它会一直存在吗？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501506.html",
    date: "2026-10-04",
    category: "product",
  },
  {
    id: "news-003",
    title: "GPT-6要“吃掉”3D公司？这家公司不到2年ARR翻百倍，破1亿美元",
    summary: "专业3D模型反而更稀缺了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501451.html",
    date: "2026-10-04",
    category: "product",
  },
  {
    id: "news-004",
    title: "方方面面都熟悉，方方面面都更好：iPhone 18 Pro 体验",
    summary: "iPhone 18 Pro 也许不会让你感觉焕然一新，却在许多地方都变得更加完整了。<a href=&#34;https://sspai.com/post/115308&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115308",
    date: "2026-10-04",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "DeepSeek扩招！弹性计算团队大量HC，尤其需要资深工程师",
    summary: "岗位JD甩了篇技术报告",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501381.html",
    date: "2026-10-03",
    category: "product",
  },
  {
    id: "news-006",
    title: "OpenAI安全团队持续地震！负责人离职，三名员工因泄密被开",
    summary: "又咋啦。。。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/501368.html",
    date: "2026-10-03",
    category: "product",
  },
  {
    id: "news-007",
    title: "TDS REVIEW | CMF Clip Pro 耳夹式无线耳机体验",
    summary: "不知道以后 CMF 的设计还会不会像现在一样出彩。<a href=&#34;https://sspai.com/post/114922&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114922",
    date: "2026-10-03",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "本周看什么 | 最近值得一看的 8 部作品",
    summary: "📅本周新预告《泥面人》终极预告9月24日，DC新片《泥面人》发布了终极预告，将于10月23日在北美上映。詹姆斯·瓦特金斯执导，汤姆·里斯·哈里斯主演，隆重介绍哥谭市的新面孔，一位意外毁容的演员在注射了 ...<a href=&#34;https://sspai.com/post/115211&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115211",
    date: "2026-10-02",
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
