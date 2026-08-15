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
// 最后更新时间: 2026-08-15 01:02:34 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "太初元碁助力国家级“AI+教育”大赛 “AI+加速卡模型适配赛道”开启招募",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473149.html",
    date: "2026-08-14",
    category: "product",
  },
  {
    id: "news-002",
    title: "刚刚，GLM-5.3发布：Coding更接近Fable 5！潜伏40年的bug都被揪出来了",
    summary: "顺手拿下最强开源安全模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473038.html",
    date: "2026-08-14",
    category: "product",
  },
  {
    id: "news-003",
    title: "百度文库网盘「库库AI」AI办公MAU超2500万，新推办公独立端",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/473144.html",
    date: "2026-08-14",
    category: "product",
  },
  {
    id: "news-004",
    title: "德塔智能与舞肌科技达成战略合作，联合规范全身协同灵巧操作数据采集",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/472718.html",
    date: "2026-08-14",
    category: "product",
  },
  {
    id: "news-005",
    title: "本周看什么 | 最近值得一看的 9 部作品",
    summary: "📅本周新预告《不存在的罪人》正式预告8月11日，电影《不存在的罪人》发布了正式预告，将于10月2日在北美上映。迈克尔·肖沃特执导，安妮·海瑟薇、达科塔·约翰逊、乔什·哈奈特主演，当红小说家留下未竟手稿 ...<a href=&#34;https://sspai.com/post/113459&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113459",
    date: "2026-08-14",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "你初高中时的书单里，总有本「东野圭吾」吧？",
    summary: "纪念并且感谢他为我们留下的推理世界。<a href=&#34;https://sspai.com/post/113416&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113416",
    date: "2026-08-14",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "声擎×少数派｜「角落新声」征文活动获奖结果公布",
    summary: "那个让你放松娱乐、拥抱汩汩心流、逃离尘世纷扰、找回本真自我的理想一隅，是如何被你切片、重排并注入新生的？<a href=&#34;https://sspai.com/post/111709&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111709",
    date: "2026-08-14",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "App+1 | 把图标收进格子，DeskBox 让桌面整洁有序",
    summary: "DeskBox 让 Windows 桌面上散落的文件、待办和临时信息，都有一个顺手的位置。<a href=&#34;https://sspai.com/post/112279&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112279",
    date: "2026-08-14",
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
