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
// 最后更新时间: 2026-09-04 02:49:18 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "卡车自动驾驶里程超10亿公里，嬴彻科技定义“货运物理AI”",
    summary: "吃下90%市场",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/483598.html",
    date: "2026-09-04",
    category: "product",
  },
  {
    id: "news-002",
    title: "派早报：OpenAI 发布 GPT-6 Astra 模型、Meta 发布 Muse Spark 1.3 模型等",
    summary: "Anthropic 升级 Claude Code 及 Cowork，微软调整 Xbox Cloud Gaming 商业模式等。<a href=&#34;https://sspai.com/post/114164&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114164",
    date: "2026-09-04",
    category: "product",
  },
  {
    id: "news-003",
    title: "新版GPT Image 2.5已经能伪造GPT-6发布会了",
    summary: "改进GPT Image 2的噪点问题",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/483948.html",
    date: "2026-09-03",
    category: "product",
  },
  {
    id: "news-004",
    title: "刚刚，GPT-6正式发布！OpenAI：欢迎来到AGI时代",
    summary: "全球最强C",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/483898.html",
    date: "2026-09-03",
    category: "product",
  },
  {
    id: "news-005",
    title: "世界生成模型来了3D头部玩家，可进入生产管线的场景级生成时代来临！",
    summary: "单图直出场景，顶会最佳论文落地",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/483189.html",
    date: "2026-09-03",
    category: "product",
  },
  {
    id: "news-006",
    title: "陈大年复出，入局大模型",
    summary: "首秀逼近DeepSeek万亿旗舰",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/483600.html",
    date: "2026-09-03",
    category: "product",
  },
  {
    id: "news-007",
    title: "新玩意 251｜少数派的编辑们最近买了啥？",
    summary: "关于栏目很多读者都会好奇少数派的编辑们到底平时都「买了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。@什么陈：洗手间置物架参考价 ...<a href=&#34;https://sspai.com/post/114154&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114154",
    date: "2026-09-03",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "TDS REVIEW | 无印良品 MUJI 头戴式蓝牙降噪耳机体验",
    summary: "经过一个季度的使用，聊聊这个此前不会考虑其数码产品的品牌。<a href=&#34;https://sspai.com/post/113998&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113998",
    date: "2026-09-03",
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
