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
// 最后更新时间: 2026-10-22 03:11:57 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：荣耀发布 WIN2 系列新品、Google 开源 TorchTPU 等",
    summary: "OpenBSD 8.0 正式发布、腾讯宣布元宝搜索对外开放等。<a href=&#34;https://sspai.com/post/116953&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116953",
    date: "2026-10-22",
    category: "product",
  },
  {
    id: "news-002",
    title: "飞书豆包工作AI先锋未来人才大赛：企业正在争抢会用AI做成事的人",
    summary: "先看真实问题解决力",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504608.html",
    date: "2026-10-21",
    category: "product",
  },
  {
    id: "news-003",
    title: "社区速递 162 | MUJI 靠垫、中兴路由器与派友们的长假吃灰装备",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/116820&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116820",
    date: "2026-10-21",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "Vitals：什么在拖慢你的 Mac？它比「活动监视器」更直观易用",
    summary: "如果你希望更直观地分析 App 资源消耗、追踪历史变化，或者经常在 Mac 上进行开发和本地 AI 推理，Vitals 提供的整合式监控与 AI 协作能力更值得尝试。<a href=&#34;https://sspai.com/post/116445&#34; target=&#34;_blank&",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116445",
    date: "2026-10-21",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "怀旧手记｜世界首台 UMPC：三星 Q1，和当下平板有什么关系？",
    summary: "电脑与平板之间的界限，早在 20 年前的三星 Q1 上就已经可以随意切换了。<a href=&#34;https://sspai.com/post/115107&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115107",
    date: "2026-10-21",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "派早报：美国政府指示各机构停用 DeepSeek、理想发布「连山」自研三电体系等",
    summary: "工信部就自动泊车等五项强制性国标征求意见，万事达卡 Apple Pay 新增 3 家合作银行等。<a href=&#34;https://sspai.com/post/116887&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116887",
    date: "2026-10-21",
    category: "product",
  },
  {
    id: "news-007",
    title: "国模Agent第一！MiniMax爆改Flash战力，全时段大肥鱼谷价",
    summary: "兔皮底下，竟然是MiniMax！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504517.html",
    date: "2026-10-20",
    category: "product",
  },
  {
    id: "news-008",
    title: "RSI三块关键拼图，MemT 1.0从模型层补上「记忆」",
    summary: "把记忆原生焊进Transformer",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/504456.html",
    date: "2026-10-20",
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
