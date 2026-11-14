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
// 最后更新时间: 2026-11-14 04:50:51 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "MEET2027含金量再加码：AI4S/量子计算/AI Infra…第二批嘉宾强势来袭！",
    summary: "12.9 北京，来MEET2027现场",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509827.html",
    date: "2026-11-13",
    category: "product",
  },
  {
    id: "news-002",
    title: "中国AI突破复杂肺癌诊疗！中美医疗圈集体坐不住了",
    summary: "250名国内顶尖三甲医院医生联合评测",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509796.html",
    date: "2026-11-13",
    category: "product",
  },
  {
    id: "news-003",
    title: "高难盲测超越GPT-6-Astra与Opus-5！无界前沿开源Fx-Bio-1031，把RSI带进生命科学",
    summary: "数据不出域、本地可部署",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509663.html",
    date: "2026-11-13",
    category: "product",
  },
  {
    id: "news-004",
    title: "openJiuwen发布RSI原生AgentOS，让Agent自由变身，持续迭代！",
    summary: "想要什么功能，让Agent自己开发",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509653.html",
    date: "2026-11-13",
    category: "product",
  },
  {
    id: "news-005",
    title: "本周看什么 | 最近值得一看的 10 部作品",
    summary: "📅本周新预告《银翼杀手2099》终极预告11月10日，剧集《银翼杀手2099》发布了终极预告，将于11月25日上线PrimeVideo。亨特·莎弗、杨紫琼主演，2099年的洛杉矶，为了彻底结束逃亡生活 ...<a href=&#34;https://sspai.com/post/118999&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118999",
    date: "2026-11-13",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "研究生如何用 AI 辅助完成一篇综述：我的科研写作工具与实践经验",
    summary: "AI 改变的不是科研写作本身，而是我们完成科研写作时的工作方式。<a href=&#34;https://sspai.com/post/118153&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118153",
    date: "2026-11-13",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "在快 AI 时代，我是怎么把 Mole 做成一款「慢产品」的？",
    summary: "距离写完上一篇在少数派发的《从开源清理工具到付费Mac应用，用户教会了我如何做产品》已经过去两个多月。这段时间里，Mole从1.13一路发到了1.19，加上了AI工具清理和系统数据清理，Windows ...<a href=&#34;https://sspai.com/post/118512&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118512",
    date: "2026-11-13",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "派早报：英伟达 CEO 黄仁勋宣布辞职等",
    summary: "2026 年金摇杆奖获奖名单公布，Apex Compute 推出跨平台 AI 帧生成技术 ANR 等。<a href=&#34;https://sspai.com/post/118966&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118966",
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
