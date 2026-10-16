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
// 最后更新时间: 2026-10-16 03:02:08 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：Apple 智能国行 Beta 版本将于本月晚些时候上线测试版本",
    summary: "SpaceXAI 发布 Grok Voice 3.0 语音模型、微软发布 XBOX Nano 口袋手柄等。<a href=&#34;https://sspai.com/post/116355&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116355",
    date: "2026-10-16",
    category: "product",
  },
  {
    id: "news-002",
    title: "库克：苹果智能接入阿里千问大模型，10月底在中国发布测试版本",
    summary: "Siri AI这次不包括在内",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503640.html",
    date: "2026-10-15",
    category: "product",
  },
  {
    id: "news-003",
    title: "量子位智库发布Agent落地报告！拆解企业智能化六大断点，附全链路破局框架",
    summary: "Agent究竟该如何深入业务毛细血管？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503614.html",
    date: "2026-10-15",
    category: "product",
  },
  {
    id: "news-004",
    title: "2026 TMOT首个AI智能体走进电音现场，让听众成为音乐共创者",
    summary: "10月17日至18日，顶尖电音节The Magic of Tomorrowland 2026将在上海举行。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503611.html",
    date: "2026-10-15",
    category: "product",
  },
  {
    id: "news-005",
    title: "这个双十一，百灵新模型干起活来不烧心",
    summary: "大模型好不好用，百灵拿成品说话",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503532.html",
    date: "2026-10-15",
    category: "product",
  },
  {
    id: "news-006",
    title: "AI时代，商学院这样培养未来商业领袖",
    summary: "未来十年共创1000个AI课题",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/503504.html",
    date: "2026-10-15",
    category: "product",
  },
  {
    id: "news-007",
    title: "新玩意 253｜少数派的编辑们最近买了啥？",
    summary: "编注：很多读者都会好奇少数派的编辑们到底平时都「买了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。内容声明：《新玩意》栏目如含有 ...<a href=&#34;https://sspai.com/post/116246&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116246",
    date: "2026-10-15",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "顺应变化，重申标准：《少数派创作手册》修订说明",
    summary: "四年前，我们发布了《少数派创作手册》（manual.sspai.com），旨在让作者更快捷地获得创作过程中所需的信息，以及更一致地传达对于内容选编的标准和主张。四年来，《创作手册》获得了作者们的广泛查 ...<a href=&#34;https://sspai.com/post/116181&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116181",
    date: "2026-10-15",
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
