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
// 最后更新时间: 2026-07-22 02:23:42 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "小红书大模型IMO满分夺金，第三题解法让冠军选手直呼优雅",
    summary: "中国大模型首次获得IMO官方金牌水平认证",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/456061.html",
    date: "2026-07-22",
    category: "product",
  },
  {
    id: "news-002",
    title: "三菱电机与索尼半导体解决方案公司将组建AI视觉合资企业",
    summary: "7月22日，三菱电机与索尼半导体解决方案公司宣布已签署最终协议，将共同成立一家名为Advanced Vision Solutions的合资企业，目标是为制造业自动化提供AI视觉传感器解决方案。该企业计划于2026年10月开始运营，目前尚需获得监管批准。其中，三菱电机将持股60%，索尼半导体解决方案持",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/newsflashes/3906186581775492?f=rss",
    date: "2026-07-22",
    category: "industry",
  },
  {
    id: "news-003",
    title: "市场消息：Reddit正在考虑阻止谷歌使用其内容进行人工智能分析",
    summary: "市场消息：Reddit正在考虑阻止谷歌使用其内容进行人工智能分析。（新浪财经）",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/newsflashes/3906182715282822?f=rss",
    date: "2026-07-22",
    category: "industry",
  },
  {
    id: "news-004",
    title: "派早报：Google 推出 Gemini 3.6 Flash、Unity 7 引擎发布等",
    summary: "英伟达推出合成视频检测器 NIM、WordPress 曝出高危漏洞等。<a href=&#34;https://sspai.com/post/112597&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112597",
    date: "2026-07-22",
    category: "product",
  },
  {
    id: "news-005",
    title: "WAIC重磅成果｜上海仪电智算牵头成立“智算系统架构联盟”并发布《超节点系统架构规范》",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/456052.html",
    date: "2026-07-21",
    category: "product",
  },
  {
    id: "news-006",
    title: "WAIC重磅成果｜上海市教育算力专区正式开启试运行",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/456026.html",
    date: "2026-07-21",
    category: "product",
  },
  {
    id: "news-007",
    title: "WAIC重磅成果｜智爱赛思全面升级并发布科研专属Token Plan",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/456021.html",
    date: "2026-07-21",
    category: "product",
  },
  {
    id: "news-008",
    title: "WAIC重磅成果｜仪电智算云在国家人工智能应用中试基地建设中展现全栈服务能力",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/455998.html",
    date: "2026-07-21",
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
