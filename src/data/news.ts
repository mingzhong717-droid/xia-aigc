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
// 最后更新时间: 2026-07-31 02:32:31 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "菜鸟CTO李强创业做Physical AI平台，获云启、商汤超亿元种子轮融资｜硬氪首发",
    summary: "作者｜黄楠 编辑｜袁斯来 硬氪获悉，Physical AI平台公司「昆腾动力（Quantum Dynamics）」近日完成超亿元种子轮融资，本轮由云启资本、商汤科技联合投资。资金将主要用于Physical AI核心技术研发、人才梯队建设及全球化市场拓展，加速其面向物理世界的智能系统从底层模型到场景化",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3917874427555457?f=rss",
    date: "2026-07-31",
    category: "industry",
  },
  {
    id: "news-002",
    title: "中层消失，Token狂热退潮，硅谷工程师眼里的「AI创业下半场」",
    summary: "所有人都在尝试建立关于AI的判断，但所有共识都在迅速过期。 访谈 | 巴芮 海风 文 | 海风 刘思洁 编辑 | 刘思洁 封面图源 | 受访者拍摄“野蛮生长的阶段已经过去了。” 这是身处硅谷AI创业一线的马培元最近最深的感受。 2021年12月，本科毕业后，他进入号称“美版知乎”的Quora，后来转",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3918250549931394?f=rss",
    date: "2026-07-31",
    category: "industry",
  },
  {
    id: "news-003",
    title: "派早报：小米汽车举行 SKYNOMAD 小米澎程技术发布会等",
    summary: "CHERRY 樱桃发布 MW5500 PRO 8K 无线游戏鼠标，零刻推出 SEi13 AI / SEi14 AI 迷你主机等<a href=&#34;https://sspai.com/post/112930&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112930",
    date: "2026-07-31",
    category: "product",
  },
  {
    id: "news-004",
    title: "Claude Code之父：Harness保质期只有半年，解开缰绳吧",
    summary: "Claude code之父：大模型是有机生物，做好AI产品疏胜于堵",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/463433.html",
    date: "2026-07-30",
    category: "product",
  },
  {
    id: "news-005",
    title: "终端市场的下一个增长点，高通押在了“个人AI”上",
    summary: "靠“堆参数换销量\"的逻辑，不再管用了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/463204.html",
    date: "2026-07-30",
    category: "product",
  },
  {
    id: "news-006",
    title: "GPT-5.6自己优化自己实锤了，新的左脚踩右脚已经出现",
    summary: "OpenAI的RSI焚诀，它来了！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/463297.html",
    date: "2026-07-30",
    category: "product",
  },
  {
    id: "news-007",
    title: "李飞飞的世界模型，终于开始训练机器人了",
    summary: "李飞飞老师的World Labs，补了块关键拼图",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/463217.html",
    date: "2026-07-30",
    category: "product",
  },
  {
    id: "news-008",
    title: "传奇AlphaFold团队全员解散！诺奖得主投奔Anthropic，资源转向Gemini",
    summary: "嚯，诺奖团队也被砍了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/463123.html",
    date: "2026-07-30",
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
