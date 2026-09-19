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
// 最后更新时间: 2026-09-19 03:01:48 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "无问芯穹与华环电子签署战略合作，共同探索国产异构算力AI基础设施新方向",
    summary: "协同布局AI基础设施",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492426.html",
    date: "2026-09-18",
    category: "product",
  },
  {
    id: "news-002",
    title: "达卯科技算电协同2.0平台入选2026国际数字能源展重大成果发布",
    summary: "成果中唯一聚焦算电协同全链路运营的AI技术产品",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492421.html",
    date: "2026-09-18",
    category: "product",
  },
  {
    id: "news-003",
    title: "具身智能技术路线尚未定型，基础设施却先收敛",
    summary: "从一次成功到一万次稳定执行，具身智能还缺什么？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492238.html",
    date: "2026-09-18",
    category: "product",
  },
  {
    id: "news-004",
    title: "AGI新战场谷歌亚马逊巨头激战，杀出个中国LimiX-2赢了又赢",
    summary: "LimiX让模型理解数据背后的因果机制",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492175.html",
    date: "2026-09-18",
    category: "product",
  },
  {
    id: "news-005",
    title: "AGI最难一战，竟在医院！中国AI登上Science，医生不怕失业还催着上线",
    summary: "用通用AI去啃最硬的骨头，这条路走得通",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/491875.html",
    date: "2026-09-18",
    category: "product",
  },
  {
    id: "news-006",
    title: "本周看什么 | 最近值得一看的 9 部作品",
    summary: "📅本周新预告《哆啦A梦大雄的蒸汽时间车》首支特报9月15日，动画电影《哆啦A梦大雄的蒸汽时间车》发布了特报影像，定档2027年3月5日在日本上映。本作为《哆啦A梦》电影系列第46部作品，森山瑠潮执导， ...<a href=&#34;https://sspai.com/post/114716&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114716",
    date: "2026-09-18",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "8月音乐精选：有限的生命里，要听得再任性一点！",
    summary: "编者注：2026年我们将重启少数派音乐推荐栏目FM3.14，特邀资深音乐从业者及爱好者为大家推荐优质的华语独立、流行音乐，今年我们也很荣幸邀请到老朋友飞傲，为本栏目冠名。飞傲目前拥有品牌以音乐发烧友为 ...<a href=&#34;https://sspai.com/post/114555&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114555",
    date: "2026-09-18",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "具透 | 细数 watchOS 27 中你值得了解的新变化：动态应用网格、智能叠放……",
    summary: "让我们一起细数 watchOS 27 中的新功能。<a href=&#34;https://sspai.com/post/114670&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114670",
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
