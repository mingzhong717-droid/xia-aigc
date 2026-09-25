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
// 最后更新时间: 2026-09-25 03:20:09 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "出海Agent“小元AI”入驻腾讯WorkBuddy：找买家写开发信谈生意",
    summary: "懂出海，能记忆，自进化",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496961.html",
    date: "2026-09-24",
    category: "product",
  },
  {
    id: "news-002",
    title: "PCIe显卡被低估了！内核补齐+通信重构，DeepSeek推理吞吐翻近7倍",
    summary: "1.5台6000D跑赢1台B300！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496925.html",
    date: "2026-09-24",
    category: "product",
  },
  {
    id: "news-003",
    title: "时隔十年，AI大牛署名新论文",
    summary: "让自动驾驶“走一步想十步”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496834.html",
    date: "2026-09-24",
    category: "product",
  },
  {
    id: "news-004",
    title: "GPT-6之后，具身智能走向何方？诺因发布GLOW技术报告，给出机器人“一教就会”的答案",
    summary: "人类演示一次，机器人即可实现跨场景任务复用",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496816.html",
    date: "2026-09-24",
    category: "product",
  },
  {
    id: "news-005",
    title: "Stripe Tour 中国首秀：构建 AI 经济基础设施，赋能全球商业增长",
    summary: "Stripe Managed Payments (SMP) 现已全面上线",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496779.html",
    date: "2026-09-24",
    category: "product",
  },
  {
    id: "news-006",
    title: "新玩意 252｜少数派的编辑们最近买了啥？",
    summary: "编注：很多读者都会好奇少数派的编辑们到底平时都「买了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。内容声明：《新玩意》栏目如含有 ...<a href=&#34;https://sspai.com/post/114954&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114954",
    date: "2026-09-24",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "家庭饮品 DIY 指南（五）：特调咖啡及其他饮品",
    summary: "往期文章：（一）工欲善其事，必先利其器（二）常用液体物料推荐（三）常用固体物料推荐（四）奶昔、柠檬和茶系列配方这一篇的配方主要是特调咖啡和其他类饮品，特调咖啡中的咖啡液按照固定比例萃取Espresso ...<a href=&#34;https://sspai.com/prime/story/hom",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/home-made-beverages-5",
    date: "2026-09-24",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "微软在游戏行业的早期试水：一段与梦工厂的「梦幻联动」",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/113823&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113823",
    date: "2026-09-24",
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
