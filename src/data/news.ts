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
// 最后更新时间: 2026-09-07 02:47:09 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：微软公布 Project Zenith 计划、F-Droid 拟效仿 Debian 制定生成式 AI 使用政策",
    summary: "美国 CD 销量大幅反弹，公安部上线反诈智能助手「国家反诈 AI」等。<a href=&#34;https://sspai.com/post/114250&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114250",
    date: "2026-09-07",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "B站首届AI创造公开赛收官，超八成参赛者为一人团队",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484890.html",
    date: "2026-09-06",
    category: "product",
  },
  {
    id: "news-003",
    title: "让 Apple Watch 记录的每一趟游泳数据更有意义：即刻游",
    summary: "对于使用AppleWatch游泳的人来说，记录一次游泳并不困难。在手表上打开体能训练App，选择开始游泳，结束后就能在Apple健身中看到完整的游泳表现，包括时间、距离、卡路里、配速、心率等数据。但真 ...<a href=&#34;https://sspai.com/post/114076&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114076",
    date: "2026-09-06",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "GPT-6带火循环Transformer，阿里早已布局",
    summary: "手握两篇顶会论文",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484726.html",
    date: "2026-09-05",
    category: "product",
  },
  {
    id: "news-005",
    title: "押中SpaceX的硅谷老将，把票投给了一家中国世界模型公司",
    summary: "当AI开始“预演”一场暴雨",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484683.html",
    date: "2026-09-05",
    category: "product",
  },
  {
    id: "news-006",
    title: "陶哲轩吐槽GPT-6孪生素数新突破：令人无语的一幕",
    summary: "AI直接吐出正确答案，但最关键的可能不是答案",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484649.html",
    date: "2026-09-05",
    category: "product",
  },
  {
    id: "news-007",
    title: "这个世界模型训练完就“退场”，机器人反而更能干了",
    summary: "如此“反骨”的方法，具体又是怎么实现的？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/484611.html",
    date: "2026-09-05",
    category: "product",
  },
  {
    id: "news-008",
    title: "最值得买的顶级公路车？TREK 八代 Madone 评测",
    summary: "它没有卷到极致的轻量化，也没有最极端的气动数据，但综合实力稳稳站在顶级公路车的第一梯队。<a href=&#34;https://sspai.com/post/114040&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114040",
    date: "2026-09-05",
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
