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
// 最后更新时间: 2026-09-24 03:02:50 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：小米召开秋季新品发布会、千问发布 Qwen-Audio-3.1系列模型等",
    summary: "Amazfit 推出智能手表 T-Rex Dual Solar、雷蛇推出灰鲭鲨 X 游戏音箱等。<a href=&#34;https://sspai.com/post/114913&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114913",
    date: "2026-09-24",
    category: "product",
  },
  {
    id: "news-002",
    title: "联想亮相阿里云栖大会：联想天禧AI把超级组织落地到端侧",
    summary: "联想天禧AI携全场景多端产品矩阵亮相阿里云栖大会",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496609.html",
    date: "2026-09-23",
    category: "product",
  },
  {
    id: "news-003",
    title: "汇智智能发布Hellome：国内首个FDE直连智能体服务平台，把AI交付周期压进“周”",
    summary: "企业AI服务迎来平台化交付时代",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496493.html",
    date: "2026-09-23",
    category: "product",
  },
  {
    id: "news-004",
    title: "它石智航顶尖团队引领中国具身智能率先迈入规模化落地阶段",
    summary: "它石智航将继续扩大研发团队，加快布局生产基地，全面提升机器人交付能力",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496481.html",
    date: "2026-09-23",
    category: "product",
  },
  {
    id: "news-005",
    title: "斑马智能发布端模型AutoOmni2.0，让元神AI更懂“我的世界”",
    summary: "9月23日云栖大会期间，斑马智能发布新一代全模态端侧大模型AutoOmni 2.0-23B-A3B",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496471.html",
    date: "2026-09-23",
    category: "product",
  },
  {
    id: "news-006",
    title: "DeepSeek新论文公开Agent训练！梁文锋署名",
    summary: "每秒能产生5000+个沙盒",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496393.html",
    date: "2026-09-23",
    category: "product",
  },
  {
    id: "news-007",
    title: "社区速递 159 | 便携卡片充电器与库克十五年改变生活的产品",
    summary: "除了首页时间流和侧栏的精选展位，少数派 Matrix 社区还有很多优秀内容因条件所限无法得到有效曝光，因此我们决定重启 Matrix 周报，并在此基础上添加更多社区内容、作者投稿新玩意呈现给大家。<a href=&#34;https://sspai.com/post/114904&#34; targ",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114904",
    date: "2026-09-23",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "具透 | 新「环境」、新变化，visionOS 27 值得关注的新特性",
    summary: "Apple于9月15日凌晨正式发布了iOS27、iPadOS27、macOS27GoldenGate和watchOS27、visionOS27等系统的正式版本。其中，visionOS27加入了Siri ...<a href=&#34;https://sspai.com/post/114901&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114901",
    date: "2026-09-23",
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
