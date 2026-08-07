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
// 最后更新时间: 2026-08-07 02:31:02 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "PPIO正式发布“Fusion融合模型”：用十分之一的价格超越顶级模型的智商",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467834.html",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-002",
    title: "Show me《指环王》！卡帕西强推大模型评测新基准",
    summary: "指环王成为大模型新基准",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467663.html",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-003",
    title: "冲刺全球首个100万小时具身数据！三家国产公司，联手了",
    summary: "采集、仿真、训练和评测，闭环了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467486.html",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-004",
    title: "DeepSeek豪掷1.4亿护航宇树IPO，杭州绝代双骄战略合体",
    summary: "此后模型、算力、数据中心都在合作范围内",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467487.html",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-005",
    title: "派早报：Bose 发布新款 QuietComfort 头戴式耳机等",
    summary: "Black Forest Labs 正式推出 FLUX 3 视频生成模型，研究人员发现 iCloud Private Relay 存在 IP 泄露风险等。<a href=&#34;https://sspai.com/post/113162&#34; target=&#34;_blank&#34;>查",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113162",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-006",
    title: "Artificial Analysis榜单：阿里Qwen3.8Agentic能力得分全球第一",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467444.html",
    date: "2026-08-06",
    category: "product",
  },
  {
    id: "news-007",
    title: "新玩意 248｜少数派的编辑们最近买了啥？",
    summary: "编注：很多读者都会好奇少数派的编辑们到底平时都「买了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。内容声明：《新玩意》栏目如含有 ...<a href=&#34;https://sspai.com/post/113139&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113139",
    date: "2026-08-06",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "TDS REVIEW | vivo TWS 5 Pro 降噪真无线耳机体验",
    summary: "这篇文章是TDSStudio在少数派上的第27篇文章，依然是全平台首发。在去年的年度企划之一「中价位TWS横评」中，vivo/iQOO的TWS5系列表现在多个方面都有优势，尤其是降噪综合能力的表现给人 ...<a href=&#34;https://sspai.com/post/112916&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112916",
    date: "2026-08-06",
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
