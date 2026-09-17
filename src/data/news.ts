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
// 最后更新时间: 2026-09-17 03:19:16 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "网易有道周枫：AI能力竞争，正在进入「Model + Agent + Workflow」时代，网易有道AI Open Day展示AI时代“有道解法”",
    summary: "9月16日，网易有道「NEXT，AGENT｜有道AI Open Day」在北京举办。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/490974.html",
    date: "2026-09-17",
    category: "product",
  },
  {
    id: "news-002",
    title: "罗福莉沉寂半年官宣小米强化学习！直播新模型训练过程，一小时烧3万美元",
    summary: "奖励曲线、显卡故障全公开",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/490950.html",
    date: "2026-09-17",
    category: "product",
  },
  {
    id: "news-003",
    title: "派早报：佳能发布 EOS R8 Mark II、GPT-5.5 即将下线等",
    summary: "惠普发布 ZBook Ultra G3a 16 移动工作站、影石发布 Mic Pro 腾讯会议版 AI 录音领夹麦等。<a href=&#34;https://sspai.com/post/114658&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114658",
    date: "2026-09-17",
    category: "product",
  },
  {
    id: "news-004",
    title: "通用能力不打折，空间具身智能断层领先！ZDTaichu5.0-9B国产开源，跻身全球多模态第一梯队",
    summary: "九大空间测试10B规模通用模型中8项第一",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/490839.html",
    date: "2026-09-16",
    category: "product",
  },
  {
    id: "news-005",
    title: "AI大模型工场2026 AI产业生态大会今日举办，大咖同台共探智能生长与产业共生",
    summary: "9月15日，由AI大模型工场主办的“2026 AI产业生态大会”在北京举行。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/490760.html",
    date: "2026-09-16",
    category: "product",
  },
  {
    id: "news-006",
    title: "高通技术公司携手中兴努比亚和豆包手机助手，共同推动智能手机迈入个人AI新时代",
    summary: "第五代骁龙8至尊版赋能全新AI智能体手机努比亚NaviX Ultra，加速智能体体验规模化落地",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/490756.html",
    date: "2026-09-16",
    category: "product",
  },
  {
    id: "news-007",
    title: "探秘柬埔寨，千年吴哥窟",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/114454&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114454",
    date: "2026-09-16",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "具透 | Liquid Glass 设计改进、性能提升……iPadOS 27 中值得一瞥的新特性",
    summary: "今年 iPadOS 中的更新并不算多，我们依旧帮你整理出了哪些值得关注的新特性。<a href=&#34;https://sspai.com/post/114607&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114607",
    date: "2026-09-16",
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
