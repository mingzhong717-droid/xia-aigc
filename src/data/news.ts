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
// 最后更新时间: 2026-10-29 04:16:41 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "一日一技｜iPhone 恶意被锁，线上移除流程拆招",
    summary: "如果你从网上购买过 Apple ID，又在自己的设备上登录，那就会存在一种风险：这类共享 ID 的密码掌握在卖家手里，卖家可以随时更改。本文就介绍了移除激活锁的全过程。<a href=&#34;https://sspai.com/post/116686&#34; target=&#34;_blank",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116686",
    date: "2026-10-29",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：Apple 推出触控款 MacBook Pro、华为发布多款新品等",
    summary: "Google 推出世界模型 Genie 4、索尼推出手机主摄图像传感器 LYTIA 720 等。<a href=&#34;https://sspai.com/post/117750&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117750",
    date: "2026-10-29",
    category: "product",
  },
  {
    id: "news-003",
    title: "Personal Agent走向真实任务，蚂蚁百灵开源 Ling-3.1-flash-1019",
    summary: "10月28 日，蚂蚁集团旗下百灵大模型正式开源 Ling-3.1-flash-1019。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/505928.html",
    date: "2026-10-28",
    category: "product",
  },
  {
    id: "news-004",
    title: "备受期待的国产 3A 游戏新作：《影之刃零》游玩体验",
    summary: "编注：《影之刃零》（PhantomBladeZero）是由中国游戏开发商「灵游坊」（S-GAME）自主研发的暗黑武侠动作冒险游戏，采用虚幻引擎5打造。游戏以独特的「功夫朋克」美学为特色，将中国传统武侠 ...<a href=&#34;https://sspai.com/post/117725&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117725",
    date: "2026-10-28",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "断舍离只是起点：打造能长期经营的实用主义衣柜",
    summary: "只扔不买是没有用的，穿衣服时不多费心神才是目的。<a href=&#34;https://sspai.com/post/116990&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116990",
    date: "2026-10-28",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "怀旧手记｜坚果 Pro2 与 R1：当「理想」和「现实」碰撞会发生什么？",
    summary: "短短几年，罗永浩和锤子科技在国产手机的红海中留下了浓墨重彩的一笔。<a href=&#34;https://sspai.com/post/115533&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115533",
    date: "2026-10-28",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "不藏了！人形机器人全开源动真格，从机械结构一路拆到运动算法",
    summary: "人形机器人全套图纸开源！从关节到算法，下载就能自己造。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/505865.html",
    date: "2026-10-27",
    category: "product",
  },
  {
    id: "news-008",
    title: "印奇把4D雷达也端到端了",
    summary: "毫米波雷达，AI算力10TOPS",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/505852.html",
    date: "2026-10-27",
    category: "product",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
