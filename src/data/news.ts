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
// 最后更新时间: 2026-08-08 01:19:25 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "阿里推出国内首个AI语音平台CosyVoice Studio，将语义理解融入语音能力",
    summary: "AI语音“听、说、创”一站式满足",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/468324.html",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-002",
    title: "AI批量轰炸苹果bug赏金计划，审核团队已下线",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/466738.html",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-003",
    title: "AI圈功能狂卷，付费寥寥，Keep正在试一条新路",
    summary: "AI卷向运动赛道，Keep的新答卷能否跑通？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467878.html",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-004",
    title: "阿里视频大模型Wan3.0开启公测：文档、ppt也能变视频",
    summary: "8月6日，阿里巴巴视频生成大模型Wan 3.0开启公测",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467877.html",
    date: "2026-08-07",
    category: "product",
  },
  {
    id: "news-005",
    title: "刚刚，ChatGPT免费版史诗升级！GPT-5.6可以无限白嫖了",
    summary: "Chat优化版",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/467879.html",
    date: "2026-08-07",
    category: "update",
  },
  {
    id: "news-006",
    title: "本周看什么 | 最近值得一看的 10 部作品",
    summary: "📅本周新预告《生化危机：爆发夜》中字预告8月5日，电影《生化危机：爆发夜》发布了全新中字预告，将于9月18日在北美上映。扎克・克雷格（《凶器》《野蛮人》）执导，奥斯汀·艾布拉姆斯主演，一份双倍酬劳的郊 ...<a href=&#34;https://sspai.com/post/113191&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113191",
    date: "2026-08-07",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "[限时优惠] 数据分析：用好 Excel 中的数据透视表",
    summary: "编注：本文为Microsoft365工具生值包内随附专属定制教程的免费试读内容。接上级经销商通知，微软将于本月提高Microsoft365订阅的供应成本，后续软件售价也将随之进行相应调整。为此，我们特 ...<a href=&#34;https://sspai.com/post/113108&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113108",
    date: "2026-08-07",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "角落新声｜从合租到整租，我在客厅听见了自己的声音",
    summary: "当我坐下来，这个小角落就慢慢有了属于我的声音。<a href=&#34;https://sspai.com/post/113144&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113144",
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
