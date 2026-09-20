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
// 最后更新时间: 2026-09-20 03:17:42 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "“留给人类阻止AI的时间不多了”",
    summary: "AI有可能终结我们所有人",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492755.html",
    date: "2026-09-19",
    category: "product",
  },
  {
    id: "news-002",
    title: "27B模型分分钟交付网页，Qwen 3.8还是太能了",
    summary: "设计、前端一口气全干了，结果后端没来上班",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492573.html",
    date: "2026-09-19",
    category: "product",
  },
  {
    id: "news-003",
    title: "Nature：AI重生到1900，这一世抢先爱因斯坦提出光量子",
    summary: "AI能否提出相对论？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492550.html",
    date: "2026-09-19",
    category: "product",
  },
  {
    id: "news-004",
    title: "千万奖池找“鲸锐”！单项奖金200万，只等一个最会用AI讲故事的你",
    summary: "1000万，把才华送上真正的大舞台",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492501.html",
    date: "2026-09-19",
    category: "product",
  },
  {
    id: "news-005",
    title: "华为汪涛：华为要打造AI算力底座，只做好一颗芯片远远不够",
    summary: "CANN跨过拐点，华为补上软件生态",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492476.html",
    date: "2026-09-19",
    category: "product",
  },
  {
    id: "news-006",
    title: "你的脸红是什么红：了解玫瑰痤疮",
    summary: "脸红发烫却没有小鹿乱撞：警惕玫瑰痤疮。<a href=&#34;https://sspai.com/post/114641&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114641",
    date: "2026-09-19",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 9 部作品",
    summary: "📅本周新预告《哆啦A梦大雄的蒸汽时间车》首支特报9月15日，动画电影《哆啦A梦大雄的蒸汽时间车》发布了特报影像，定档2027年3月5日在日本上映。本作为《哆啦A梦》电影系列第46部作品，森山瑠潮执导， ...<a href=&#34;https://sspai.com/post/114716&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114716",
    date: "2026-09-18",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "8月音乐精选：有限的生命里，要听得再任性一点！",
    summary: "编者注：2026年我们将重启少数派音乐推荐栏目FM3.14，特邀资深音乐从业者及爱好者为大家推荐优质的华语独立、流行音乐，今年我们也很荣幸邀请到老朋友飞傲，为本栏目冠名。飞傲目前拥有品牌以音乐发烧友为 ...<a href=&#34;https://sspai.com/post/114555&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114555",
    date: "2026-09-18",
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
