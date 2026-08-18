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
// 最后更新时间: 2026-08-18 01:01:58 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "共生知行发布人形机器人赛车Demo：以卡丁车测试双足机器人的“全身智能”",
    summary: "8月17日，具身智能初创公司共生知行发布双足人形机器人驾驶卡丁车Demo",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474537.html",
    date: "2026-08-17",
    category: "product",
  },
  {
    id: "news-002",
    title: "菲尔兹奖得主：AI现在主要靠「抬杠」突破重大数学猜想",
    summary: "AI最近最出圈的数学突破，都在“找反例”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474381.html",
    date: "2026-08-17",
    category: "product",
  },
  {
    id: "news-003",
    title: "终于！世界模型进入“有声时代”：24FPS画面+48kHz立体声实时生成",
    summary: "即将完全开源",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474334.html",
    date: "2026-08-17",
    category: "product",
  },
  {
    id: "news-004",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派2.0客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/113544&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113544",
    date: "2026-08-17",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "分享我知识管理 12 年来最重要的经验：INL 结构",
    summary: "你是不是有几百个笔记，超级乱，都懒得打开？今天我们介绍一个方法，可以让你不怎么整理，就能快速找到重点。<a href=&#34;https://sspai.com/post/113368&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113368",
    date: "2026-08-17",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "当陶瓷水杯遇上像素屏：PixelMug 体验",
    summary: "如今，伴随着科技和生产力的发展，许多曾经只存在于科幻作品里的创意都逐渐变成了现实。各种新奇酷炫的产品，也开始在人们的刚需之外提供不一样的解法。尤其是那些无关「生产力」、单纯为了让生活变得更有意思的产品 ...<a href=&#34;https://sspai.com/post/113448&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113448",
    date: "2026-08-17",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "成年人包里的唯一一支笔：模块笔入门导购",
    summary: "如果你的包里想带一支笔以备不时之需，这支笔应该就是你想要的。<a href=&#34;https://sspai.com/post/113445&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113445",
    date: "2026-08-17",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "杭州95后小伙，5亿买走硅谷城堡",
    summary: "辞别马斯克xAI半年之后…",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/474245.html",
    date: "2026-08-16",
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
