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
// 最后更新时间: 2026-09-16 03:14:11 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "华为GTS让Agent学会「看着网络排障」，双防火墙难题几乎全拿下",
    summary: "任务通过率提升24.2%，token成本最高下降45%",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/490098.html",
    date: "2026-09-16",
    category: "product",
  },
  {
    id: "news-002",
    title: "派早报：Steam Frame 开启预购、WPS 多端支持 Markdown 等",
    summary: "华为与问界调整鸿蒙智行合作模式，雅马哈发布 B200A 条形音箱等。<a href=&#34;https://sspai.com/post/114638&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114638",
    date: "2026-09-16",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "手机替我跑了一整套流程！我就说了一句话，AI执行了100步",
    summary: "一句话，YOYO全面接管我的生活",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/489466.html",
    date: "2026-09-15",
    category: "product",
  },
  {
    id: "news-004",
    title: "无问芯穹联合清华、上交正式开源具身端侧推理引擎APXInf，Pi 0.5性能SOTA",
    summary: "卡位具身智能规模化落地“最后一公里”！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/489460.html",
    date: "2026-09-15",
    category: "product",
  },
  {
    id: "news-005",
    title: "全球AI视频榜单第一梯队再添中国力量：智象发布首款物理规律导向视频模型",
    summary: "智象未来（HiDream.ai）正式发布首个原生全模态视频生成模型 HiDream-O1-Video-1.0",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/489389.html",
    date: "2026-09-15",
    category: "product",
  },
  {
    id: "news-006",
    title: "一张GPU跑10万原子！分子之心用AI把化学反应“拍”成了电影",
    summary: "打破分子模拟“不可能三角”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/489381.html",
    date: "2026-09-15",
    category: "product",
  },
  {
    id: "news-007",
    title: "社区速递 158 | 便宜耐造的副厂手柄与大学宿舍里那些相见恨晚的装备",
    summary: "除了首页时间流和侧栏的精选展位，少数派Matrix社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启Matrix周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。上周社区速递 ...<a href=&#34;https://sspai.com/post/114613&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114613",
    date: "2026-09-15",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "具透 | 精心优化， 体验感愉悦升华：iOS 27 中值得关注的新特性",
    summary: "少数派在体验了新版系统之后，帮你整理了 iOS 27 中值得关注的新功能和新特性，希望帮你能了解新版系统的方方面面。<a href=&#34;https://sspai.com/post/114565&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114565",
    date: "2026-09-15",
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
