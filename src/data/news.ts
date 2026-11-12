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
// 最后更新时间: 2026-11-12 05:40:38 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "让老音箱焕发新生：Home Assistant Connect AUX-2 首发体验",
    summary: "玩智能家居这几年，灯光、传感器和开关基本已经靠着Matter和HomeAssistant打通了，唯独多房间音频（Multi-roomAudio）还停留在各自为战的阶段。想让客厅的HomePod、书房的 ...<a href=&#34;https://sspai.com/post/118921&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118921",
    date: "2026-11-12",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "派早报：Apple 公布 Swift Student Challenge 安排、微软发布 Auto SR 等",
    summary: "Arm 发布 Cortex-M42 处理器、任天堂宣布「轻松登入」功能将下线等。<a href=&#34;https://sspai.com/post/118935&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118935",
    date: "2026-11-12",
    category: "product",
  },
  {
    id: "news-003",
    title: "双11直播间爆改AI秀场，罗永浩上手TRAE，秒变AI Coding的大众嘴替",
    summary: "价格、门槛全打穿",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509146.html",
    date: "2026-11-11",
    category: "product",
  },
  {
    id: "news-004",
    title: "卷起来了！11月11日，大模型厂商在天猫打5折",
    summary: "大模型厂商智谱、MiniMax、千问办公、阿里云、Qoder都在天猫打5折。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509085.html",
    date: "2026-11-11",
    category: "product",
  },
  {
    id: "news-005",
    title: "无人拖拉机真正下地了！新疆大田深翻30+厘米，丘沃智能开物™系统首次完整曝光",
    summary: "L4无人化作业走向规模交付",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/509052.html",
    date: "2026-11-11",
    category: "product",
  },
  {
    id: "news-006",
    title: "城市漫步指南 | 安特卫普，时尚就在生活中",
    summary: "原本今年夏天的旅行是要在佛罗伦萨结束的，但突发状况导致我不用上班了，就顺势使用了我的国际机票退改券，增加了一段安特卫普的行程。打卡安特卫普的理由跟意大利一样奇怪——因为这个地方举办过好几届体操世锦赛（ ...<a href=&#34;https://sspai.com/post/118781&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118781",
    date: "2026-11-11",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "从优胜美地到金门大桥：跟着 macOS 游览加州",
    summary: "陪伴 Mac 用户十余年的加州风景，走出屏幕后究竟是什么模样？<a href=&#34;https://sspai.com/post/118175&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118175",
    date: "2026-11-11",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "RetroSweeper Go：复古外观、更有手感的扫雷游戏",
    summary: "复古游戏机风格的界面和「手柄」设计，希望可以唤起你的一些回忆。<a href=&#34;https://sspai.com/post/118458&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118458",
    date: "2026-11-11",
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
