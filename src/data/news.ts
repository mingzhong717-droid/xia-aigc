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
// 最后更新时间: 2026-08-03 02:32:12 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "让Agent在协作中自进化，清华00后博士获千万元融资 | 36氪首发",
    summary: "文 | 赵京娜 访谈 编辑 | 海若镜 36氪获悉，近日奇点逃逸完成千万级种子轮融资，由星连资本与水木创投联合领投，奇绩创坛跟投。其正在研发AI原生团队协作操作系统Nexus，让人、Agent、任务、知识和工具基于同一份组织状态持续协作，并让系统从每一次协作中有证据地变强。 奇点逃逸创始人兼CEO薛",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3919025939246727?f=rss",
    date: "2026-08-03",
    category: "industry",
  },
  {
    id: "news-002",
    title: "8点1氪丨蔡崇信宣布离婚，不涉及出售阿里股份；瑞幸回应员工对嘴喷奶油；IF椰子水市值从126亿暴跌到16亿",
    summary: "今日热点导览 马斯克关注了DeepSeek的X账号 祥鹏航空回应航班误发过期方便面 OpenAI或将IPO推迟到明年 SpaceX首份财报即将发布 小米多款手机正式涨价 每月10万美元，特朗普“真实社交”售卖“优先访问权” TOP3大新闻 蔡崇信宣布离婚，不涉及出售阿里股份 8月1日，阿里巴巴集团董",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3923043072634498?f=rss",
    date: "2026-08-03",
    category: "industry",
  },
  {
    id: "news-003",
    title: "派早报：DeepSeek V4 Flash 正式版发布",
    summary: "<p>DeepSeek V4 Flash 正式版发布</p><p>特朗普向科技公司频繁索要捐款</p><p>马斯克称从未讨论过出售特斯拉中国业务</p><p>国补调整后终端销售承压</p><p>风投机构重新涌入中国科技领域</p><p>统计显示实体光盘并不能保证游戏长期可玩</p><p>看看就行的简",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113014",
    date: "2026-08-02",
    category: "product",
  },
  {
    id: "news-004",
    title: "从拉萨到雅鲁藏布江大峡谷，我的春日西藏游记",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/112843&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112843",
    date: "2026-08-02",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "「天线宝宝」机器人上门做保洁，200元/小时，纯·人工·智能",
    summary: "具身智能的τ（bushi）",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/464781.html",
    date: "2026-08-01",
    category: "product",
  },
  {
    id: "news-006",
    title: "奥特曼也逃不过刷TikTok上瘾，Sora背后最抓马的一段来了",
    summary: "狂刷3小时！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/464713.html",
    date: "2026-08-01",
    category: "product",
  },
  {
    id: "news-007",
    title: "OpenAI前员工刚跑路就喊话：要套现就赶紧套，别等IPO！",
    summary: "对前沿实验室估值悲观",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/464693.html",
    date: "2026-08-01",
    category: "product",
  },
  {
    id: "news-008",
    title: "李飞飞World Labs收购SceniX，物理AI训练正从“采数据”走向“造世界”",
    summary: "下一场竞争，是谁能造出更多“有用的世界”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/464532.html",
    date: "2026-08-01",
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
