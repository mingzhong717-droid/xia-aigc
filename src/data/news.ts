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
// 最后更新时间: 2026-06-26 05:54:57 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "华勤技术与正行创新达成战略合作，加速机器人“走进工厂、走上产线”",
    summary: "共建工业物理智能“数据底座与智能大脑”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438741.html",
    date: "2026-06-26",
    category: "product",
  },
  {
    id: "news-002",
    title: "戴宗宏和他的「工业世界模型」：一人两周，干完百人级定制化“累活”",
    summary: "文｜王欣逸 编辑｜周鑫雨 半年前，我们第一次和基点起源创始人兼 CEO 戴宗宏交流时，这家逆流入局 B 端定制化的AI公司，刚刚推进了 7、8 个项目。他从外界接受到最多的声音是质疑：“故事不够性感”、“定制化都是累活”。 半年后，基点对质疑声的回应，是数千万元的在手订单。 戴宗宏对《智能涌现》透露",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3869445453305090?f=rss",
    date: "2026-06-26",
    category: "industry",
  },
  {
    id: "news-003",
    title: "主题圆桌：我们永远赞美冒险 更早、更小、更下水｜36氪WAVES2026新浪潮",
    summary: "“2026年，创投圈的浪潮再次翻涌：AI从技术概念走进产业深水区，硬科技创业从“小众赛道” 变成“主流共识”，年轻的创业者们正在用代码和双手，重新定义中国创新的未来坐标。 每一年，由36氪 · 暗涌主办的WAVES大会，都是中国创投圈的年度风向标。今年的 WAVES 2026以“今年盛夏”为主题，落",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3869378164397313?f=rss",
    date: "2026-06-26",
    category: "industry",
  },
  {
    id: "news-004",
    title: "林檎越东瀛：苹果的日本之旅",
    summary: "当年「林檎渡东瀛」的试探，终演变成一场与亚洲产业命运相依的交响。<a href=&#34;https://sspai.com/post/111297&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111297",
    date: "2026-06-26",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "派早报：鸿蒙智行发布尊界 S800 Grand Design 典藏大观",
    summary: "Apple 调整产品价格，Figma 发布多项更新等。<a href=&#34;https://sspai.com/post/111541&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111541",
    date: "2026-06-26",
    category: "product",
  },
  {
    id: "news-006",
    title: "WAIC UP!｜AI圈都在聊参数，我们偏不",
    summary: "7月17-7月20",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438364.html",
    date: "2026-06-25",
    category: "product",
  },
  {
    id: "news-007",
    title: "三体问世20周年，光帆科技与三体宇宙联合发布联名款AI全感穿戴设备及重磅视频《破晓》",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438658.html",
    date: "2026-06-25",
    category: "product",
  },
  {
    id: "news-008",
    title: "4秒出百万面！突破千万面精度+12K高清贴图，手握数亿的3D生成公司下一局怎么打？",
    summary: "3D生成领域的Anthropic",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438468.html",
    date: "2026-06-25",
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
