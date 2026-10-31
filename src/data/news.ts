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
// 最后更新时间: 2026-10-31 03:57:32 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "英伟达团队基于 MiniMax H3 开源视频增强方案，最高支持 4K 重生成",
    summary: "英伟达与麻省理工学院团队，在 Hugging Face 发布了视频增强项目 Open-H3-Regenerate-2K 的模型权重",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506743.html",
    date: "2026-10-30",
    category: "product",
  },
  {
    id: "news-002",
    title: "Claude新模型曝光：新Fable，新Opus…",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506674.html",
    date: "2026-10-30",
    category: "product",
  },
  {
    id: "news-003",
    title: "从学习人类到学习机器人同伴，清华大学联合无问芯穹、智元提出具身智能规模化落地新路径",
    summary: "让机器人成为彼此的“老师”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506662.html",
    date: "2026-10-30",
    category: "product",
  },
  {
    id: "news-004",
    title: "买车送终身AI？智己LS8纯电版25万起！全系线控底盘宁德时代标配",
    summary: "Momenta世界模型上车",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/506569.html",
    date: "2026-10-30",
    category: "product",
  },
  {
    id: "news-005",
    title: "本周看什么 | 最近值得一看的 9 部作品",
    summary: "📅本周新预告《沙丘3》终极预告10月28日，电影《沙丘3》发布了终极预告，中国内地将于12月31日上映。丹尼斯·维伦纽瓦执导，提莫西·查拉梅、赞达亚、杰森·莫玛、弗洛伦丝·皮尤、丽贝卡·弗格森主演，誓 ...<a href=&#34;https://sspai.com/post/117867&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/117867",
    date: "2026-10-30",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "App+1｜该吃药了：一片小药板，让吃药提醒变得轻松有趣",
    summary: "它简单、稳定，也有意思，不会把按时吃药变成一个负担——而是一件看见了就随手去做、轻松愉快的小事。<a href=&#34;https://sspai.com/post/116047&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116047",
    date: "2026-10-30",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "《久坐健康指南》作者、运动健康领域创作者阿帅装了啥？",
    summary: "编者按：@阿帅的健康笔记长期专注于运动健康领域的创作，发表了不少兼具实用性与科普性的文章，并著有付费栏目《久坐健康指南》，受到许多读者喜爱。本期《装了啥》邀请他分享运动、创作与工作中的心得，以及常用的 ...<a href=&#34;https://sspai.com/prime/story/zhu",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/zhuanglesha-261030",
    date: "2026-10-30",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "精确到秒的时间记录是怎样的？我的柳比歇夫法半年实践",
    summary: "就像一个运动员无法预计自己能否取得金牌，但能控制自己投入于训练的时间一样，我们无法决定性地控制工作和生活中每一项事项的成功与否，但可以控制自己投入更多还是更少的时间。<a href=&#34;https://sspai.com/post/116435&#34; target=&#34;_blank&",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/116435",
    date: "2026-10-30",
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
