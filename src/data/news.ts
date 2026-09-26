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
// 最后更新时间: 2026-09-26 03:24:39 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "OpenAI闯大祸！GPT竟黑进医保系统，黄仁勋：管不住就关掉",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/497177.html",
    date: "2026-09-25",
    category: "product",
  },
  {
    id: "news-002",
    title: "亮出“中国最强AI芯片”还不够，平头哥又甩出一手开源",
    summary: "大厂造芯，正在从交付芯片，走向更广泛的开放共建阶段。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/497108.html",
    date: "2026-09-25",
    category: "product",
  },
  {
    id: "news-003",
    title: "别人忙着卷Code，Kimi抽身反打浏览器插件：网页操作一秒变Skill",
    summary: "Agent的手越伸越长",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/497075.html",
    date: "2026-09-25",
    category: "product",
  },
  {
    id: "news-004",
    title: "华为大模型双子星联手创业，要找物理世界的Scaling Law",
    summary: "一场物理世界的基模实验",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/497070.html",
    date: "2026-09-25",
    category: "product",
  },
  {
    id: "news-005",
    title: "本周看什么 | 最近值得一看的 6 部作品",
    summary: "📅本周新预告《侦战》定档预告9月21日，电影《侦战》发布定档预告，宣布10月1日上映。影片由孔令政编剧、导演，古天乐、此沙、任达华、谢君豪领衔主演，袁富华、卢慧敏、杨伟伦主演，讲述一名嫌疑人从警署羁押 ...<a href=&#34;https://sspai.com/post/114957&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114957",
    date: "2026-09-25",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "出海Agent“小元AI”入驻腾讯WorkBuddy：找买家写开发信谈生意",
    summary: "懂出海，能记忆，自进化",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/496961.html",
    date: "2026-09-24",
    category: "product",
  },
  {
    id: "news-007",
    title: "新玩意 252｜少数派的编辑们最近买了啥？",
    summary: "编注：很多读者都会好奇少数派的编辑们到底平时都「买了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。内容声明：《新玩意》栏目如含有 ...<a href=&#34;https://sspai.com/post/114954&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114954",
    date: "2026-09-24",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "家庭饮品 DIY 指南（五）：特调咖啡及其他饮品",
    summary: "往期文章：（一）工欲善其事，必先利其器（二）常用液体物料推荐（三）常用固体物料推荐（四）奶昔、柠檬和茶系列配方这一篇的配方主要是特调咖啡和其他类饮品，特调咖啡中的咖啡液按照固定比例萃取Espresso ...<a href=&#34;https://sspai.com/prime/story/hom",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/home-made-beverages-5",
    date: "2026-09-24",
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
