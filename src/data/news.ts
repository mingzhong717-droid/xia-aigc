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
// 最后更新时间: 2026-11-20 05:39:04 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "浮屏：截图即可「上岛」，还能帮你记录生活",
    summary: "浮屏是我一个人开发的应用。它最初只是为了解决一杯柠檬水的取餐码问题，后来慢慢长成了一个记录生活小片段的工具。<a href=&#34;https://sspai.com/post/118879&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118879",
    date: "2026-11-20",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：Google 推出 Gemini 4 Neon 模型，网易 UU 远程将于 12 月推出付费会员等",
    summary: "Google Play 将强制要求应用适配折叠屏，微软宣布 Microsoft To Do 将于明年 6 月全面停用等。<a href=&#34;https://sspai.com/post/119311&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119311",
    date: "2026-11-20",
    category: "product",
  },
  {
    id: "news-003",
    title: "GTA6刷屏！零AI纯手搓的3A大作玩一个少一个了",
    summary: "媒体均分登顶历史第一，细节多到爆炸",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511180.html",
    date: "2026-11-19",
    category: "product",
  },
  {
    id: "news-004",
    title: "好清晰！最新国产AI画的8K图，放这么大大大大也不糊！",
    summary: "Kling Image 4.0",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511092.html",
    date: "2026-11-19",
    category: "product",
  },
  {
    id: "news-005",
    title: "AI基建大潮方兴未艾，联想集团最佳财季诞生！",
    summary: "全球AI生态链领先企业联想集团今日公布截至2026/27财年第二季度业绩",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511088.html",
    date: "2026-11-19",
    category: "product",
  },
  {
    id: "news-006",
    title: "安谋科技深度解析Arm Cortex-M42，发布“星辰100e”AIoT原型平台，助力打造AI性能更强的嵌入式设计",
    summary: "11月18日，安谋科技（中国）有限公司举办Arm® Cortex®-M CPU新品说明会",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511079.html",
    date: "2026-11-19",
    category: "product",
  },
  {
    id: "news-007",
    title: "范式下场做基模了！国产算力全链路训练，双模型同步亮相",
    summary: "语言模型单张3090卡即可运行",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511071.html",
    date: "2026-11-19",
    category: "product",
  },
  {
    id: "news-008",
    title: "给 Apple 的 2026 年打分，请你一起参与",
    summary: "2026年以来，Apple在硬件领域明显加快了产品线的拓展。定价亲民、采用A系列芯片的MacBookNeo让Mac触及更广泛的消费群体，也引发了对性能妥协与长期使用价值的讨论。M6芯片继续推进Appl ...<a href=&#34;https://sspai.com/post/119191&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119191",
    date: "2026-11-19",
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
