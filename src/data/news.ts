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
// 最后更新时间: 2026-11-18 05:50:01 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "潜伏小红书48h：AI时代，顶尖技术人才都在聊什么？",
    summary: "小红书校招沙龙，一群技术高手认真对待年轻人的野心",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510737.html",
    date: "2026-11-18",
    category: "product",
  },
  {
    id: "news-002",
    title: "GPT-6.2 Astra和Sol王炸双发！3D又危了",
    summary: "Sol逼近旗舰性能",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510707.html",
    date: "2026-11-18",
    category: "product",
  },
  {
    id: "news-003",
    title: "跟着老板自驾去海南是种什么体验？明日公园 vlog 回顾",
    summary: "从深圳一路开车到广东最南端的徐闻，再和车分别乘坐渡轮，穿过地理课本里的琼州海峡。终于抵达海南后，老板却告诉我们这趟旅程真正的目的地，竟然是……<a href=&#34;https://sspai.com/post/119193&#34; target=&#34;_blank&#34;>查看全文</a",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119193",
    date: "2026-11-18",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "兼顾随身阅读与自主开发的 4.7 英寸墨水屏设备：小纸 Pico 现货上架少数派",
    summary: "想找一台可以随身带着读书的墨水屏设备，也想自己改改界面、不被系统「绑架」？近期思维重置团队上架的小纸 Pico 墨水屏开发板是一个值得留意的选择。<a href=&#34;https://sspai.com/post/118975&#34; target=&#34;_blank&#34;>查看全文<",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118975",
    date: "2026-11-18",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "派早报：国区 App Store 将 AIGC 合规设为上架必填、OpenAI 发布 GPT-6.2 Astra 等",
    summary: "iPhone Duo 测试 2D 人脸解锁功能，松下发布紧凑型电影摄影机 SHX1 等。<a href=&#34;https://sspai.com/post/119210&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119210",
    date: "2026-11-18",
    category: "product",
  },
  {
    id: "news-006",
    title: "李沐加盟的Aimotion，是一家什么AI公司？",
    summary: "瞄准「产业级世界模型」",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510688.html",
    date: "2026-11-17",
    category: "product",
  },
  {
    id: "news-007",
    title: "材料科学智能体MatOS正式开源！大幅提高材料研发任务成功率",
    summary: "筛材料、找配方、开发新模型…拿下多项科研任务",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510652.html",
    date: "2026-11-17",
    category: "product",
  },
  {
    id: "news-008",
    title: "社区速递 166｜柯尼卡胶片机、iPhone Duo 体验与假期省钱实操大赏",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/119184&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119184",
    date: "2026-11-17",
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
