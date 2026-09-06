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
// 最后更新时间: 2026-09-06 02:49:26 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "GPT-6带火循环Transformer，阿里早已布局",
    summary: "手握两篇顶会论文",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484726.html",
    date: "2026-09-05",
    category: "product",
  },
  {
    id: "news-002",
    title: "押中SpaceX的硅谷老将，把票投给了一家中国世界模型公司",
    summary: "当AI开始“预演”一场暴雨",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484683.html",
    date: "2026-09-05",
    category: "product",
  },
  {
    id: "news-003",
    title: "陶哲轩吐槽GPT-6孪生素数新突破：令人无语的一幕",
    summary: "AI直接吐出正确答案，但最关键的可能不是答案",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484649.html",
    date: "2026-09-05",
    category: "product",
  },
  {
    id: "news-004",
    title: "这个世界模型训练完就“退场”，机器人反而更能干了",
    summary: "如此“反骨”的方法，具体又是怎么实现的？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484611.html",
    date: "2026-09-05",
    category: "product",
  },
  {
    id: "news-005",
    title: "姚班校友主导，Claude攻克费马大定理首个完整形式化证明",
    summary: "最后靠Harness救回来",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484551.html",
    date: "2026-09-05",
    category: "product",
  },
  {
    id: "news-006",
    title: "最值得买的顶级公路车？TREK 八代 Madone 评测",
    summary: "它没有卷到极致的轻量化，也没有最极端的气动数据，但综合实力稳稳站在顶级公路车的第一梯队。<a href=&#34;https://sspai.com/post/114040&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114040",
    date: "2026-09-05",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 8 部作品",
    summary: "📅本周新预告《哈利·波特》剧集先导预告9月2日，剧集《哈利·波特与魔法石》发布了先导预告，第一季共8集，将于12月25日上线HBOMax。原作者J·K·罗琳担任执行制片人，多米尼克·麦克劳克林、阿拉贝 ...<a href=&#34;https://sspai.com/post/114175&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114175",
    date: "2026-09-04",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "新学期，新气象：正版软件 & 付费栏目限时优惠",
    summary: "多款付费栏目和正版软件上新，以及口碑、质量都非常优秀的现有产品优惠活动，快来看看有没有你需要的吧。<a href=&#34;https://sspai.com/post/114110&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114110",
    date: "2026-09-04",
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
