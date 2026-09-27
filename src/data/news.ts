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
// 最后更新时间: 2026-09-27 03:33:15 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "索辰科技加码世界模型，与战略投资企业美梦空间联合发布具身模型与物理测评标准",
    summary: "“世界模型”开始成为具身智能跨越商业化“奇点”的新叙事。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/498478.html",
    date: "2026-09-26",
    category: "product",
  },
  {
    id: "news-002",
    title: "AI开始研究Physical AI：FSD级团队亮出首版模型Simate-beta，空降RoboDojo",
    summary: "Simate将训练、推理与评测全流程接入自研Infra，通过极致的任务编排与资源调度，同时并行推进数十条相互独立的研究路线。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/498271.html",
    date: "2026-09-26",
    category: "product",
  },
  {
    id: "news-003",
    title: "笔记本跑7000亿参数GLM！无GPU也行? SSD当显存用火爆GitHub",
    summary: "GitHub现在最火热的大模型开源小蜂鸟Colibrì是个啥？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/497624.html",
    date: "2026-09-26",
    category: "product",
  },
  {
    id: "news-004",
    title: "在云栖大会，我终于看懂了米哈游千亿AI野心",
    summary: "大伟哥：如果做不到，一年两年之后过来打我脸",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/497613.html",
    date: "2026-09-26",
    category: "product",
  },
  {
    id: "news-005",
    title: "谷歌TPU跑Kimi比英伟达GPU快57%！用的还是DeepSeek推理框架",
    summary: "vLLM人马创业公司团队出品",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/497425.html",
    date: "2026-09-26",
    category: "product",
  },
  {
    id: "news-006",
    title: "宜家 Matter 智能家居终于要来了？在中国市场它将如何破局",
    summary: "距离宜家首批Matter智能家居产品在海外上市已有大半年的时间，而中国市场则是许久未有消息。直到今年年中，多款宜家智能新品陆续出现在国家CCC认证数据库中，我们才得知：这批主打高性价比、支持新一代智能 ...<a href=&#34;https://sspai.com/post/114958&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114958",
    date: "2026-09-26",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 6 部作品",
    summary: "📅本周新预告《侦战》定档预告9月21日，电影《侦战》发布定档预告，宣布10月1日上映。影片由孔令政编剧、导演，古天乐、此沙、任达华、谢君豪领衔主演，袁富华、卢慧敏、杨伟伦主演，讲述一名嫌疑人从警署羁押 ...<a href=&#34;https://sspai.com/post/114957&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114957",
    date: "2026-09-25",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "新玩意 252｜少数派的编辑们最近买了啥？",
    summary: "编注：很多读者都会好奇少数派的编辑们到底平时都「买了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。内容声明：《新玩意》栏目如含有 ...<a href=&#34;https://sspai.com/post/114954&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114954",
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
