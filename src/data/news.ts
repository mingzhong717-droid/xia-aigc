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
// 最后更新时间: 2026-11-15 04:42:57 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "「史上最严」湿实验预测基准发布！推理拉满、算力翻5倍也白搭",
    summary: "斯坦福、哈佛、康奈尔……十余家顶尖团队齐坐一桌了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510232.html",
    date: "2026-11-14",
    category: "product",
  },
  {
    id: "news-002",
    title: "突发！DeepSeek开放全家桶API",
    summary: "官方App功能均可自由组合调用",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510003.html",
    date: "2026-11-14",
    category: "product",
  },
  {
    id: "news-003",
    title: "怀旧手记｜索尼 CLIE：千禧年的高端 Palm OS PDA",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/118276&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118276",
    date: "2026-11-14",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "MEET2027含金量再加码：AI4S/量子计算/AI Infra…第二批嘉宾强势来袭！",
    summary: "12.9 北京，来MEET2027现场",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509827.html",
    date: "2026-11-13",
    category: "product",
  },
  {
    id: "news-005",
    title: "中国AI突破复杂肺癌诊疗！中美医疗圈集体坐不住了",
    summary: "250名国内顶尖三甲医院医生联合评测",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509796.html",
    date: "2026-11-13",
    category: "product",
  },
  {
    id: "news-006",
    title: "本周看什么 | 最近值得一看的 10 部作品",
    summary: "📅本周新预告《银翼杀手2099》终极预告11月10日，剧集《银翼杀手2099》发布了终极预告，将于11月25日上线PrimeVideo。亨特·莎弗、杨紫琼主演，2099年的洛杉矶，为了彻底结束逃亡生活 ...<a href=&#34;https://sspai.com/post/118999&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118999",
    date: "2026-11-13",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "研究生如何用 AI 辅助完成一篇综述：我的科研写作工具与实践经验",
    summary: "AI 改变的不是科研写作本身，而是我们完成科研写作时的工作方式。<a href=&#34;https://sspai.com/post/118153&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118153",
    date: "2026-11-13",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "在快 AI 时代，我是怎么把 Mole 做成一款「慢产品」的？",
    summary: "距离写完上一篇在少数派发的《从开源清理工具到付费Mac应用，用户教会了我如何做产品》已经过去两个多月。这段时间里，Mole从1.13一路发到了1.19，加上了AI工具清理和系统数据清理，Windows ...<a href=&#34;https://sspai.com/post/118512&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118512",
    date: "2026-11-13",
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
