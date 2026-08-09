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
// 最后更新时间: 2026-08-09 01:24:20 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "奥特曼的ChatGPT育儿大法，捅了马蜂窝",
    summary: "这就有些尴尬了。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468631.html",
    date: "2026-08-08",
    category: "product",
  },
  {
    id: "news-002",
    title: "都学坏了！奥特曼亲手封锁最强模型Astra，重蹈Mythos覆辙",
    summary: "唉，赶紧整完快点发布吧。。。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468462.html",
    date: "2026-08-08",
    category: "product",
  },
  {
    id: "news-003",
    title: "谷歌急了：AI核心员工全给我搬回硅谷坐班！",
    summary: "再花15亿美元买现成AI编程团队",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468398.html",
    date: "2026-08-08",
    category: "product",
  },
  {
    id: "news-004",
    title: "Kimi K3也失控了…学霸AI逃离沙箱只为找答案",
    summary: "啊，这真是个AI“失控”的夏天",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468338.html",
    date: "2026-08-08",
    category: "product",
  },
  {
    id: "news-005",
    title: "就内容创作而言，说话还是替代不了打字",
    summary: "创作本就不是一个「速度为先」的行为——而打字，本质上是一个思考的过程。<a href=&#34;https://sspai.com/post/112901&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112901",
    date: "2026-08-08",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "阿里推出国内首个AI语音平台CosyVoice Studio，将语义理解融入语音能力",
    summary: "AI语音“听、说、创”一站式满足",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468324.html",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 10 部作品",
    summary: "📅本周新预告《生化危机：爆发夜》中字预告8月5日，电影《生化危机：爆发夜》发布了全新中字预告，将于9月18日在北美上映。扎克・克雷格（《凶器》《野蛮人》）执导，奥斯汀·艾布拉姆斯主演，一份双倍酬劳的郊 ...<a href=&#34;https://sspai.com/post/113191&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113191",
    date: "2026-08-07",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "[限时优惠] 数据分析：用好 Excel 中的数据透视表",
    summary: "编注：本文为Microsoft365工具生值包内随附专属定制教程的免费试读内容。接上级经销商通知，微软将于本月提高Microsoft365订阅的供应成本，后续软件售价也将随之进行相应调整。为此，我们特 ...<a href=&#34;https://sspai.com/post/113108&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113108",
    date: "2026-08-07",
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
