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
// 最后更新时间: 2026-08-13 01:43:56 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：荣耀发布 Robot Phone、Google 推出 Pixel 11 系列等",
    summary: "影石发布 Insta360 X6、SpaceXAI 推出 Grok Bot 等。<a href=&#34;https://sspai.com/post/113385&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113385",
    date: "2026-08-13",
    category: "product",
  },
  {
    id: "news-002",
    title: "Anthropic CEO整天神神叨叨，投资人受不了了",
    summary: "Dario能不能少吓唬点人…",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/471162.html",
    date: "2026-08-12",
    category: "product",
  },
  {
    id: "news-003",
    title: "国产具身智能创全球新纪录！以30%成本跑赢 Figure AI 45%效率，聪明的具身大脑成关键",
    summary: "具身模型一小时狂拣1816件异形包裹",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/471049.html",
    date: "2026-08-12",
    category: "product",
  },
  {
    id: "news-004",
    title: "紫东太初推出GMC核心集剪枝方法，少80%Token仍满血保真多模态能力",
    summary: "免训练、开箱即用！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/471030.html",
    date: "2026-08-12",
    category: "product",
  },
  {
    id: "news-005",
    title: "人形之外，擎羽把“身体”变成具身智能的新变量",
    summary: "从柔性本体走向跨本体基础智能，让任务与世界知识延续",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/470874.html",
    date: "2026-08-12",
    category: "product",
  },
  {
    id: "news-006",
    title: "把「闪念胶囊」（Almost）放到 iPhone 锁屏",
    summary: "想法被及时、完好的记下来，然后呢？<a href=&#34;https://sspai.com/post/113219&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113219",
    date: "2026-08-12",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "对话少数派老麦：从 Palm、WebOS 到 AI 硬件，依然不想成为多数派",
    summary: "《三五环》主播刘飞邀请老麦聊了聊他从 Palm 时代开始的二十年数码时代的经营历程。复盘了少数派如何从一家媒体，一步步跑通「内容+产品」的商业闭环；也聊到了他与罗永浩那段「不打不相识」的往事，以及那些改变了他对科技媒体商业模式认知的故事。<a href=&#34;https://sspai.com/",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113352",
    date: "2026-08-12",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "我，与「唯一」的 iPhone Air",
    summary: "在 iPhone Air 之后才发现，有些产品存在的意义，是帮我确认我真正需要什么。<a href=&#34;https://sspai.com/post/112880&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112880",
    date: "2026-08-12",
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
