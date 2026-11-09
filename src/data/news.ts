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
// 最后更新时间: 2026-11-09 04:33:43 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "双十一好物精选：Sonos Play 85 折送充电套装，CD 机加赠透明面盖",
    summary: "从墨水屏到手机壳，从磁吸信息屏到CD播放器，这些看似平常的数码产品，经过一些新的设计和尝试，也能带来不太一样的使用体验。今年双十一，各大平台的促销活动陆续开始，不过满减、凑单等规则可能还是有些繁琐。所 ...<a href=&#34;https://sspai.com/post/118612&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118612",
    date: "2026-11-09",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "资本正在撤离“世界模型”",
    summary: "没有永远的夏天",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508466.html",
    date: "2026-11-08",
    category: "product",
  },
  {
    id: "news-003",
    title: "苹果产品那些不够颠覆，却值得被学习的细节",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/118114&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118114",
    date: "2026-11-08",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "GitHub不堪重负！OpenAI收购替代品，A社原地自研，马斯克也要搞",
    summary: "AI写代码太快，基础设施跟不上了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508449.html",
    date: "2026-11-07",
    category: "product",
  },
  {
    id: "news-005",
    title: "OpenAI新融资到账110亿美元，不及原计划一半",
    summary: "融资缩水，硅谷投资人也谨慎了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508344.html",
    date: "2026-11-07",
    category: "product",
  },
  {
    id: "news-006",
    title: "为了去AI味，人类开始主动写烂文章了&#8230;&#8230;",
    summary: "需要说明的是，这并不意味着不会说人话就一定是人，也不意味着说人话的就一定不是AI.......",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508330.html",
    date: "2026-11-07",
    category: "product",
  },
  {
    id: "news-007",
    title: "抢跑DeepSeek！硅谷华人把下一代Agent Harness造出来了！？",
    summary: "苦单Session久矣，两大Agent玩家不谋而合。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/508264.html",
    date: "2026-11-07",
    category: "product",
  },
  {
    id: "news-008",
    title: "一个 05 后的个人数码编年史",
    summary: "我只想回应自己的感受，自己的记忆，只是因为那时候我满腔少年心气，对一切都充满好奇，对未来充满憧憬。<a href=&#34;https://sspai.com/post/116750&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116750",
    date: "2026-11-07",
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
