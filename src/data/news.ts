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
// 最后更新时间: 2026-08-20 01:02:14 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "章鱼动力亮相WRC 2026，携“脑-手-数据”技术体系探索具身智能未来范式",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/475931.html",
    date: "2026-08-19",
    category: "product",
  },
  {
    id: "news-002",
    title: "全球首个人形机器人自主乒乓球完整对局亮相2026世界机器人大会",
    summary: "超维动力KAI全栈具身智能硬核登场",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/475907.html",
    date: "2026-08-19",
    category: "product",
  },
  {
    id: "news-003",
    title: "IDC发布2026中国AI50强：360以“智能体+安全”双轮驱动入选",
    summary: "凭借企业级智能体与AI安全的全栈布局，360成为中国人工智能产业发展的代表企业之一。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/475901.html",
    date: "2026-08-19",
    category: "product",
  },
  {
    id: "news-004",
    title: "具身数据底座开卖，首发5100元：机器人训练数据有了新解法",
    summary: "构建全栈物理AI基础设施",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/475477.html",
    date: "2026-08-19",
    category: "product",
  },
  {
    id: "news-005",
    title: "用DeepSeek网页版就能瓜分鹅厂600万？？！",
    summary: "冠军姿势长这样",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/475764.html",
    date: "2026-08-19",
    category: "product",
  },
  {
    id: "news-006",
    title: "iOS 27 测试版近期动向，还有 Apple 产品新消息",
    summary: "7月20日至今，Apple陆续发布了iOS27的DeveloperBeta4、5、6三个测试版本。随着9月秋季发布会的渐进，iOS27距离正式版的发布越来越近。今天，我们就来一起看看这三个Beta版本 ...<a href=&#34;https://sspai.com/post/113618&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113618",
    date: "2026-08-19",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "《控制》新作体验：新怪谈游戏的祖师爷，又杀回来了",
    summary: "本文首发于「游研社」，作者@亚锌，少数派经授权转载，仅对排版略作调整。阅读原文在ChinaJoy期间，我参与了Remedy举办的《控制：共振》闭门试玩会。其实在开始前，我除了战斗部分之外，还非常期待本 ...<a href=&#34;https://sspai.com/post/113588&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113588",
    date: "2026-08-19",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "App+1 | Inkive：把纸质书上划好的线存进 Obsidian",
    summary: "让纸书上的划线，回到你的数字笔记里。<a href=&#34;https://sspai.com/post/111936&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111936",
    date: "2026-08-19",
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
