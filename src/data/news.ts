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
// 最后更新时间: 2026-09-02 02:46:01 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "巨简单，更懂家！海信JUOS正式发布：行业首个家庭智能伴侣级AIOS",
    summary: "8月31日，海信正式发布行业首个家庭智能伴侣级AIOS——海信JUOS。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/482699.html",
    date: "2026-09-02",
    category: "product",
  },
  {
    id: "news-002",
    title: "李飞飞发布：全球首个多模态世界模型",
    summary: "一张图补全3D世界，还能给机器人造训练场",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/482586.html",
    date: "2026-09-02",
    category: "product",
  },
  {
    id: "news-003",
    title: "3秒出片比播放还快，MiniMax打开了AI视频的实时商业化路径",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/482512.html",
    date: "2026-09-01",
    category: "product",
  },
  {
    id: "news-004",
    title: "GitHub最热架构图Agent，开发者故事看哭了",
    summary: "美观且支持实时更新的架构图，也能用AI一键生成了！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/482469.html",
    date: "2026-09-01",
    category: "product",
  },
  {
    id: "news-005",
    title: "A社化身A割！Claude官宣永久提额25%，结果到手反而少17%",
    summary: "主打一个明升暗降，理直气壮",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/482406.html",
    date: "2026-09-01",
    category: "product",
  },
  {
    id: "news-006",
    title: "派早报：英伟达正式发布 DLSS 5、戴森发布智能电动牙刷 CameraJet 等",
    summary: "索尼发布三款 ULT Tower 派对音箱，Starman Optical 收购 GoPro 等。<a href=&#34;https://sspai.com/post/114093&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114093",
    date: "2026-09-01",
    category: "product",
  },
  {
    id: "news-007",
    title: "社区速递 156 | 满血全功能磁吸转换头与手机 AI 通话的真实体验",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/114078&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114078",
    date: "2026-09-01",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "线下活动 | 全新 iPhone 发布在即，来与少数派一起看 Apple 发布会",
    summary: "北京时间9月10日凌晨，Apple一年一度的秋季特别活动即将拉开帷幕，我们会在Keynote讲演环节中见到新一年度的iPhone、AppleWatch等多个新品。除了备受期待的iPhone18Pro系 ...<a href=&#34;https://sspai.com/post/114071&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114071",
    date: "2026-09-01",
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
