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
// 最后更新时间: 2026-11-19 05:49:36 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "安谋科技深度解析Arm Cortex-M42，发布“星辰100e”AIoT原型平台，助力打造AI性能更强的嵌入式设计",
    summary: "11月18日，安谋科技（中国）有限公司举办Arm® Cortex®-M CPU新品说明会",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511079.html",
    date: "2026-11-19",
    category: "product",
  },
  {
    id: "news-002",
    title: "范式下场做基模了！国产算力全链路训练，双模型同步亮相",
    summary: "语言模型单张3090卡即可运行",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/511071.html",
    date: "2026-11-19",
    category: "product",
  },
  {
    id: "news-003",
    title: "初中毕业烘焙师，1 人搓出单集千万播放科幻剧，中国AI长片杀疯了！",
    summary: "国产AI工具实现「一个人就是一个剧组」",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510947.html",
    date: "2026-11-19",
    category: "product",
  },
  {
    id: "news-004",
    title: "徒步旅行指南 | 玉龙虎跳峡与天堂雨崩",
    summary: "Matrix首页推荐Matrix是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选Matrix最优质的文章，展示来自用户的最真实的体验和观点。文章代表作者个人观点 ...<a href=&#34;https://sspai.com/post/119039&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119039",
    date: "2026-11-19",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "派早报：Apple 年度应用、TGA 2026 分别公布入围名单等",
    summary: "AMD 更新虚幻引擎 FSR 插件、Google Wallet 登陆 iOS 等。<a href=&#34;https://sspai.com/post/119239&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119239",
    date: "2026-11-19",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "Gemini新模型Neon箭在弦上，网友：遍历元素周期表？",
    summary: "氖人寻味！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510922.html",
    date: "2026-11-18",
    category: "product",
  },
  {
    id: "news-007",
    title: "GPT-6.2难产！OpenAI怕了",
    summary: "OpenAI也终于活成了2022年谷歌的样子",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510914.html",
    date: "2026-11-18",
    category: "product",
  },
  {
    id: "news-008",
    title: "10 月音乐精选：音乐丰收季，必听这 7 张新专辑",
    summary: "编者注：2026年我们将重启少数派音乐推荐栏目FM3.14，特邀资深音乐从业者及爱好者为大家推荐优质的华语独立、流行音乐，今年我们也很荣幸邀请到老朋友飞傲，为本栏目冠名。飞傲目前拥有品牌以音乐发烧友为 ...<a href=&#34;https://sspai.com/post/118985&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118985",
    date: "2026-11-18",
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
