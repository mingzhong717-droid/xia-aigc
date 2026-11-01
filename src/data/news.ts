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
// 最后更新时间: 2026-11-01 04:14:48 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "世界模型首次指导设计芯片！超大核NPU700TOPS，99%算力可用",
    summary: "AI算力利用“九九成”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506866.html",
    date: "2026-10-31",
    category: "product",
  },
  {
    id: "news-002",
    title: "刚刚，Claude宣布取消5小时限制！首批Ultra用户已「解封」",
    summary: "200美元Ultra用户先用",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506855.html",
    date: "2026-10-31",
    category: "product",
  },
  {
    id: "news-003",
    title: "本月玩什么｜影之刃零、战争机器：事变日等",
    summary: "欢迎你在评论区分享 10 月新作的游玩体验。<a href=&#34;https://sspai.com/post/117960&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117960",
    date: "2026-10-31",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "一图流 | 一张图看懂中国版 Apple 智能",
    summary: "中国版 Apple 智能即将登陆 iPhone，一起看看还有这些细节。<a href=&#34;https://sspai.com/post/117953&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117953",
    date: "2026-10-31",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "榜一，拿来吧你！智元这波双模型杀穿多榜榜单",
    summary: "xs，还要给机器人打绩效",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506819.html",
    date: "2026-10-30",
    category: "product",
  },
  {
    id: "news-006",
    title: "AI零帧起手写算子，反超DeepSeek人类手写巅峰：快了9.8%！",
    summary: "之前还连登昇腾三榜第一",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506785.html",
    date: "2026-10-30",
    category: "product",
  },
  {
    id: "news-007",
    title: "“超能模式”重磅登场！联想天禧AI 4.5全端升级，三大场景打造“职场超能搭档”",
    summary: "10月30日，联想天禧AI 4.5迎来AIPC端正式发布。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506779.html",
    date: "2026-10-30",
    category: "update",
  },
  {
    id: "news-008",
    title: "本周看什么 | 最近值得一看的 9 部作品",
    summary: "📅本周新预告《沙丘3》终极预告10月28日，电影《沙丘3》发布了终极预告，中国内地将于12月31日上映。丹尼斯·维伦纽瓦执导，提莫西·查拉梅、赞达亚、杰森·莫玛、弗洛伦丝·皮尤、丽贝卡·弗格森主演，誓 ...<a href=&#34;https://sspai.com/post/117867&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117867",
    date: "2026-10-30",
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
