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
// 最后更新时间: 2026-09-08 02:57:38 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：华为举办 HarmonyOS 7 | HUAWEI Mate XT 2 及全场景新品发布会等",
    summary: "少数派的近期动态全新iPhone发布在即，来与少数派一起看Apple发布会口袋先知新版本1.3.3上线，你可以自定义任何你想展示的屏幕效果。了解更多能让AI助手通过自然语言指令直接与您的Quote/0 ...<a href=&#34;https://sspai.com/post/114307&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114307",
    date: "2026-09-08",
    category: "product",
  },
  {
    id: "news-002",
    title: "GPT-6不只Astra！Sol内测结果曝光，速度快6倍",
    summary: "OpenAI研究院人均带3个AI实习生",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485431.html",
    date: "2026-09-07",
    category: "product",
  },
  {
    id: "news-003",
    title: "菲尔兹奖得主入局大模型！4B手机Qwen+云端GLM刷爆ARC-AGI 3",
    summary: "“在两个模型之间找到数学上的共同基础其实非常困难”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485108.html",
    date: "2026-09-07",
    category: "product",
  },
  {
    id: "news-004",
    title: "国内首份办公Agent用户行为报告发布：北京用户量全国居首，海外用户占比超12%",
    summary: "9月7日，国内首份《中国办公Agent用户行为不完全报告》在京发布。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485064.html",
    date: "2026-09-07",
    category: "product",
  },
  {
    id: "news-005",
    title: "原生全模态技术战略闭环，智象（HiDream.ai）发布具身世界模型HiDream-O1-Embodied",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485056.html",
    date: "2026-09-07",
    category: "product",
  },
  {
    id: "news-006",
    title: "业内首个！“千问办公”推出“多人工作台”",
    summary: "近日，阿里巴巴旗下Agent产品“千问办公”推出业内首个“多人工作台”。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/485046.html",
    date: "2026-09-07",
    category: "product",
  },
  {
    id: "news-007",
    title: "派评｜近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/114288&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114288",
    date: "2026-09-07",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "「弯道超车」赛车入门指北 04：全场最快的车，为什么听一辆慢车指挥",
    summary: "一辆远没有 F1 赛车快的车，凭什么让各路豪强乖乖排在后面，甚至左右冠军归属？<a href=&#34;https://sspai.com/post/113877&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113877",
    date: "2026-09-07",
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
