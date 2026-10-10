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
// 最后更新时间: 2026-10-10 04:13:44 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "App+1｜专注星空：让「少刷手机」这件事更愉悦一点",
    summary: "把决定使用时长的时机，放到每次打开应用之前。<a href=&#34;https://sspai.com/post/115237&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115237",
    date: "2026-10-10",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "联想天禧自研代码智能体TianxiCode斩获SWE-bench-Live全球第一",
    summary: "联想天禧AI自主研发的专业代码智能体框架TianxiCode 以71%的问题解决率登顶全球第一名",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502422.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-003",
    title: "0.2秒急停、秒级重规划！因果智能走进真实世界",
    summary: "这是一台机器人正在关闭微波炉门时，因人手突然插进来而紧急悬停的时间",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502411.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-004",
    title: "字节找到了DeepSeek时强时弱的原因",
    summary: "答不答得对，得看Token站位",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502364.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-005",
    title: "《柳叶刀》研究表明：AI 有望改善医患关系",
    summary: "Google 研究成果首次登上《柳叶刀》主刊",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502359.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-006",
    title: "清华具身模型登顶全球第一！突围GPT-6、英伟达，不靠外挂和额外数据",
    summary: "星动纪元选择将视频预测与动作学习分阶段训练，重点不是「视频、动作一锅炖」，而是把两者「解耦」，重新「排序」。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502125.html",
    date: "2026-10-09",
    category: "product",
  },
  {
    id: "news-007",
    title: "本周看什么 | 最近值得一看的 11 部作品",
    summary: "📅本周新预告《寒夜怪谈》新预告10月1日，电影《寒夜怪谈》发布了新预告，将于11月13日在北美上映。缇·威斯特（《X》《珀尔》《玛克辛》）执导，约翰尼·德普回归奇幻巨制，将狄更斯名著《圣诞颂歌》改编为 ...<a href=&#34;https://sspai.com/post/115566&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115566",
    date: "2026-10-09",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "vivo X500 Pro Max 影像漫谈：当视频创作像拍照一样轻巧",
    summary: "让生活里的寻常片刻，在被轻松记录的同时依然经得起回味。<a href=&#34;https://sspai.com/post/115456&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115456",
    date: "2026-10-09",
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
