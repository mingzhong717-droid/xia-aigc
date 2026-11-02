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
// 最后更新时间: 2026-11-02 04:17:20 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "Xnip 十周年：长截图的新生，也是新的起点",
    summary: "十年是一个里程碑，也是新的起点。<a href=&#34;https://sspai.com/post/115662&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115662",
    date: "2026-11-02",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "三年前布局，今年爆火丨西湖大学成立新中心",
    summary: "西湖世界模型研究中心成立",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507076.html",
    date: "2026-11-01",
    category: "product",
  },
  {
    id: "news-003",
    title: "Claude紧急叫停！暗改Harness禁止逆向游戏",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507038.html",
    date: "2026-11-01",
    category: "product",
  },
  {
    id: "news-004",
    title: "清华姚期智团队新作：代数世界模型，让AI像牛顿一样思考",
    summary: "让AI像牛顿一样思考",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/507031.html",
    date: "2026-11-01",
    category: "product",
  },
  {
    id: "news-005",
    title: "派早报：Apple 智能将随 iOS 27.3 登陆中国",
    summary: "<p>Apple 智能将随 iOS 27.3 登陆中国</p><p>苹果对闪存的议价权受到压制</p><p>Claude Code 官方扩展被植入后门</p><p>美国 FCC 禁止中国实验室认证输美电子产品</p><p>百度网盘通过磁力计数据规避「摇一摇」广告权限</p><p>币安 63 亿美元资",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118191",
    date: "2026-11-01",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "怀旧手记｜夏普 Telios：20 多年前，Handheld PC 中的「少数派」",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/116991&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116991",
    date: "2026-11-01",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "刚刚，DeepSeek重磅开源：Agent底座架构！",
    summary: "AI已经自己找到Bug并提交PR",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506904.html",
    date: "2026-10-31",
    category: "product",
  },
  {
    id: "news-008",
    title: "世界模型首次指导设计芯片！超大核NPU700TOPS，99%算力可用",
    summary: "AI算力利用“九九成”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506866.html",
    date: "2026-10-31",
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
