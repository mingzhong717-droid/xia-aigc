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
// 最后更新时间: 2026-09-21 03:13:01 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "汽车行业首个AI超级智能体「迪迪虾」来了！腾势多款车型即将OTA",
    summary: "近日，比亚迪重磅发布了AI超级智能体「迪迪虾」，首搭腾势N8L纯电车型上",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/493091.html",
    date: "2026-09-21",
    category: "product",
  },
  {
    id: "news-002",
    title: "刚刚，剪映发了个大的：AI生视频和AI剪辑的壁，被打破了！",
    summary: "剪映Hub+剪映助手，好用",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492973.html",
    date: "2026-09-20",
    category: "product",
  },
  {
    id: "news-003",
    title: "华为首发企业AI白皮书：AI让员工更快了，怎样让整个企业受益？",
    summary: "AI越来越能干，企业该怎么用",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/493068.html",
    date: "2026-09-20",
    category: "product",
  },
  {
    id: "news-004",
    title: "一张3090就能跑！全栈国产模型，把AI办公搬到企业本地",
    summary: "AI办公这块蛋糕，中国电信可能要先切走一块了。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492946.html",
    date: "2026-09-20",
    category: "product",
  },
  {
    id: "news-005",
    title: "APUS 开源国内首批Jev跨平台复现：国产模型实现秒级决策",
    summary: "9月19日，中国人工智能企业APUS旗下 AI 实验室公布了全球最早一批针对Jev的独立开源复现成果",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/492939.html",
    date: "2026-09-20",
    category: "product",
  },
  {
    id: "news-006",
    title: "派早报：微软高管称 AI 爬取是人类历史上最大的劳动成果盗窃",
    summary: "<p>微软高管称 AI 爬取是人类历史上最大的劳动成果盗窃</p><p>12306 称第三方购票可能更慢或失败</p><p>特朗普提议为人工智能改名</p><p>谷歌在 Android 17 中加入 Pixel 独占的 API</p><p>iPhone 18 Pro Max 支持固件限制电量以便发运",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114788",
    date: "2026-09-20",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "给电话加上「辅助驾驶」？我们想听听你的意见",
    summary: "会议开到一半，手机亮了：一个陌生号码。你盯着屏幕犹豫了几秒，不知道这会是推销、客户，还是外卖员。直接挂掉，又得惦记着会不会耽误正事；接起来，不方便说，聊完还得整理待办。轮到你主动打电话，也不轻松。邀约 ...<a href=&#34;https://sspai.com/post/114717&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114717",
    date: "2026-09-20",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "你的脸红是什么红：了解玫瑰痤疮",
    summary: "脸红发烫却没有小鹿乱撞，可能真不是什么好事……<a href=&#34;https://sspai.com/post/114641&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114641",
    date: "2026-09-19",
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
