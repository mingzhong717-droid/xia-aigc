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
// 最后更新时间: 2026-08-16 01:06:06 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "至知研究院提出大模型可解释性新路线：拆权重，数据成本不到1%",
    summary: "理解大模型，无需再训练一个替代网络",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473876.html",
    date: "2026-08-15",
    category: "product",
  },
  {
    id: "news-002",
    title: "根治AI音乐通病！这家国产音乐模型正面挑战SUNO",
    summary: "音潮API限时免费开放",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473866.html",
    date: "2026-08-15",
    category: "product",
  },
  {
    id: "news-003",
    title: "源神启动！一张消费级显卡跑“Opus级”Agent，Qwen3.8-27B多项榜单反超Claude",
    summary: "推理能力还能自定义",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473669.html",
    date: "2026-08-15",
    category: "product",
  },
  {
    id: "news-004",
    title: "DeepSeek Harness插件一夜燃爆GitHub：长期记忆、电子宠物、4399小游戏全来了",
    summary: "大家已经给DeepSeek装上了啥",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473597.html",
    date: "2026-08-15",
    category: "product",
  },
  {
    id: "news-005",
    title: "有毒职场正在炼成：OKR 变成 KPI，敏捷开发变成切碎的瀑布",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/111974&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111974",
    date: "2026-08-15",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "太初元碁助力国家级“AI+教育”大赛 “AI+加速卡模型适配赛道”开启招募",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473149.html",
    date: "2026-08-14",
    category: "product",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 9 部作品",
    summary: "📅本周新预告《不存在的罪人》正式预告8月11日，电影《不存在的罪人》发布了正式预告，将于10月2日在北美上映。迈克尔·肖沃特执导，安妮·海瑟薇、达科塔·约翰逊、乔什·哈奈特主演，当红小说家留下未竟手稿 ...<a href=&#34;https://sspai.com/post/113459&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113459",
    date: "2026-08-14",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "你初高中时的书单里，总有本「东野圭吾」吧？",
    summary: "纪念并且感谢他为我们留下的推理世界。<a href=&#34;https://sspai.com/post/113416&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113416",
    date: "2026-08-14",
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
