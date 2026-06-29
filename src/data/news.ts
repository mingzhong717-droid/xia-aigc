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
// 最后更新时间: 2026-06-29 03:37:35 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "“词元盗用”正在成为AI商业化面临的新风险",
    summary: "有人盯上的不是钱，而是 Token",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439746.html",
    date: "2026-06-29",
    category: "product",
  },
  {
    id: "news-002",
    title: "秋声 | 海光芯正IPO背后，卖铲生意为何越做越亏？",
    summary: "本文约2500字，建议阅读5分钟 作者 | 彭孝秋 编者按：AI大爆发之际，越来越多公司走向资本市场。每一份招股书翻动的声音里，都藏着一家公司想说与未曾明说的全部。 鉴于此，硬氪特推出「秋声」专栏。秋声取自欧阳修《秋声赋》，借“听秋声”之意，产业冷暖，辨公司成色，记录企业冲刺IPO途中那些被写下与被",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3873681978840071?f=rss",
    date: "2026-06-29",
    category: "industry",
  },
  {
    id: "news-003",
    title: "抱抱脸模型TOP榜，我现在只服yuxinlu1",
    summary: "杀进一众大厂中间",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439603.html",
    date: "2026-06-28",
    category: "product",
  },
  {
    id: "news-004",
    title: "一次吃下一本书！百度开源新OCR，作者疑似前DeepSeek研究员",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439464.html",
    date: "2026-06-28",
    category: "product",
  },
  {
    id: "news-005",
    title: "8点1氪丨两大存储巨头今日发布大规模投资计划；江淮汽车股价腰斩，章建平9日套现近3亿元；Anthropic Fable 5有望很快恢复访问",
    summary: "今日热点导览 《给阿嬷的情书》总票房已突破19亿元 梁文锋署名，DeepSeek发布最新论文 WPS回应C盘占用问题，即将更新七月版本上线磁盘存储管理功能 触屏MacBook将搭载M5芯片发布，苹果计划跳过M6 Pro及M6 Max 美国监管部门关闭针对特斯拉Model 3及Model Y转向失控调",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3873476968272902?f=rss",
    date: "2026-06-28",
    category: "product",
  },
  {
    id: "news-006",
    title: "派早报：微软改口称 8GB 足够运行 Windows 11",
    summary: "<p>微软改口称 8GB 足够运行 Windows 11</p><p>OpenAI 发布 GPT 5.6，称需美国政府批准提供对象</p><p>Notion Mail 宣布关闭</p><p>央视报道网络测评乱象</p><p>苹果、奥迪前员工推出豪华电瓶车</p><p>俄罗斯主流应用被苹果下架，克宫呼",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111639",
    date: "2026-06-28",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "兜兜转转四款笔记软件，我终于为思考找到了安身之所",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/110935&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/110935",
    date: "2026-06-28",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "BrowserBC：克隆人类点击，让一次网页操作转化为所有Agent的能力",
    summary: "人类一次录制，Agent就能模拟",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439393.html",
    date: "2026-06-27",
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
