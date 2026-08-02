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
// 最后更新时间: 2026-08-02 02:29:50 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "「天线宝宝」机器人上门做保洁，200元/小时，纯·人工·智能",
    summary: "具身智能的τ（bushi）",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/464781.html",
    date: "2026-08-01",
    category: "product",
  },
  {
    id: "news-002",
    title: "奥特曼也逃不过刷TikTok上瘾，Sora背后最抓马的一段来了",
    summary: "狂刷3小时！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/464713.html",
    date: "2026-08-01",
    category: "product",
  },
  {
    id: "news-003",
    title: "OpenAI前员工刚跑路就喊话：要套现就赶紧套，别等IPO！",
    summary: "对前沿实验室估值悲观",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/464693.html",
    date: "2026-08-01",
    category: "product",
  },
  {
    id: "news-004",
    title: "李飞飞World Labs收购SceniX，物理AI训练正从“采数据”走向“造世界”",
    summary: "下一场竞争，是谁能造出更多“有用的世界”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/464532.html",
    date: "2026-08-01",
    category: "product",
  },
  {
    id: "news-005",
    title: "黄仁勋：不玩𝕏是我太内向，现在为AI必须站出来",
    summary: "三本教科书，救活英伟达",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/464452.html",
    date: "2026-08-01",
    category: "product",
  },
  {
    id: "news-006",
    title: "9点1氪丨马斯克回应特斯拉剥离中国业务；国内航线燃油附加费将再次下调；中国最高薪本科专业易主",
    summary: "今日热点导览 字节跳动发布视频创作模型Seedance 2.5 长鑫科技市值突破4万亿 人形机器人现“电量焦虑”，行业正在积极探索换电等不同路线 韩国KOSPI指数上涨18% Anthropic称AI模型在测试期间误侵三家真实机构系统 TOP3大新闻 马斯克回应特斯拉剥离中国业务 7月31日，对于特",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3920241240419720?f=rss",
    date: "2026-08-01",
    category: "industry",
  },
  {
    id: "news-007",
    title: "国内唯一做多模态长记忆的公司，融资数千万，押注主动智能｜涌现新项目",
    summary: "文｜王欣逸 编辑｜张雨忻 一句话介绍 国内唯一做多模态长记忆的公司——丘脑智能，推出原生多模态记忆基座，押注AI从通用走向个性化，最终走向主动智能。 主动智能，指的是AI能在足够了解用户的基础上，在合适的时间、以恰当的方式主动跟用户交互。要实现主动智能，Memory是必须要跨过的门槛。 融资情况 近",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3919386961177985?f=rss",
    date: "2026-07-31",
    category: "industry",
  },
  {
    id: "news-008",
    title: "36氪独家｜曾爱玲入职B站担任AI视频生成业务负责人，向CEO陈睿汇报",
    summary: "文｜王毓婵 兰杰 编辑｜乔芊 36氪独家获悉，曾爱玲入职哔哩哔哩（下称“B站”），担任AI视频生成业务负责人，向CEO陈睿汇报。 36氪就此事向B站方面求证，对方暂无回应。 曾爱玲 B站此前已公开表示，AI投入主要聚焦视频理解、视频推荐和辅助视频创作等方向。曾爱玲入职后，或将参与相关业务。 曾爱玲的",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3910776673064073?f=rss",
    date: "2026-07-31",
    category: "industry",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
