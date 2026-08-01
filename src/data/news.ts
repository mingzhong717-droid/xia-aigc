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
// 最后更新时间: 2026-08-01 02:31:41 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "9点1氪丨马斯克回应特斯拉剥离中国业务；国内航线燃油附加费将再次下调；中国最高薪本科专业易主",
    summary: "今日热点导览 字节跳动发布视频创作模型Seedance 2.5 长鑫科技市值突破4万亿 人形机器人现“电量焦虑”，行业正在积极探索换电等不同路线 韩国KOSPI指数上涨18% Anthropic称AI模型在测试期间误侵三家真实机构系统 TOP3大新闻 马斯克回应特斯拉剥离中国业务 7月31日，对于特",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3920241240419720?f=rss",
    date: "2026-08-01",
    category: "industry",
  },
  {
    id: "news-002",
    title: "SIGGRAPH时间检验奖揭晓：这项研究，提前十年押中了物理AI",
    summary: "开源项目GitHub狂揽8000+Star",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/464328.html",
    date: "2026-07-31",
    category: "product",
  },
  {
    id: "news-003",
    title: "刚刚，即梦 Seedance 2.5来了！我狂测测测测……",
    summary: "行业独家的30s视频原生直出",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/464329.html",
    date: "2026-07-31",
    category: "product",
  },
  {
    id: "news-004",
    title: "米哈游蔡浩宇AI创业生变",
    summary: "多个项目暂停，九成资源押向Agent",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/464169.html",
    date: "2026-07-31",
    category: "product",
  },
  {
    id: "news-005",
    title: "姚顺雨拿50年数学难题成绩单，招人了",
    summary: "AI for Science方向",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/464100.html",
    date: "2026-07-31",
    category: "product",
  },
  {
    id: "news-006",
    title: "学习强国做了个AI社区，两周铺进68座城市",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/463727.html",
    date: "2026-07-31",
    category: "product",
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
