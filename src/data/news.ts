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
// 最后更新时间: 2026-06-28 03:33:06 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "BrowserBC：克隆人类点击，让一次网页操作转化为所有Agent的能力",
    summary: "人类一次录制，Agent就能模拟",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439393.html",
    date: "2026-06-27",
    category: "product",
  },
  {
    id: "news-002",
    title: "微软年度AI职场报告：员工已经准备好了，公司还没有",
    summary: "28页干货爆炸",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439032.html",
    date: "2026-06-27",
    category: "product",
  },
  {
    id: "news-003",
    title: "GPT-5.6突然发布！Fable5痛失最强基模王座",
    summary: "一口气端出三款GPT 5.6系列模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438895.html",
    date: "2026-06-27",
    category: "product",
  },
  {
    id: "news-004",
    title: "秋声 | 大秦储能冲港股IPO：锂价50万山顶囤货血泪史，亏本三年才清完",
    summary: "本文约2500字，建议阅读5分钟 作者 | 彭孝秋 编者按：AI 大爆发之际，越来越多公司走向资本市场。每一份招股书翻动的声音里，都藏着一家公司想说与未曾明说的全部。 鉴于此，硬氪特推出「秋声」专栏。秋声取自欧阳修《秋声赋》，借“听秋声”之意，观产业冷暖，辨公司成色，记录企业冲刺 IPO 途中那些被",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3871109381035011?f=rss",
    date: "2026-06-27",
    category: "industry",
  },
  {
    id: "news-005",
    title: "G7易流发布货运行业首款穿戴式AI硬件「拍拍豆」，填平物流交付的“最后两米”｜最前线",
    summary: "作者｜黄楠 编辑｜袁斯来 6月25日，G7易流发布货运行业首款穿戴式AI硬件“拍拍豆”。这款产品克重仅30克，采用磁吸设计，当车辆熄火停稳后，司机可直接将设备从挡风玻璃底座取下，佩戴于胸前即可自动启动录制；放回底座瞬间，录制文件将自动同步上传云端存储。 从“看见车上”到“看见车下”，物流AI的应用场",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3869740772316162?f=rss",
    date: "2026-06-27",
    category: "product",
  },
  {
    id: "news-006",
    title: "9点1氪｜苹果涨价引山姆代购潮；DeepSeek大规模招聘；黄金再度跌破4000美元",
    summary: "今日热点导览 OpenAI官宣推出GPT-5.6 亚洲“果链”股价几乎全线大幅下跌 SpaceX计划为美国消费者推出新的星链移动服务 美团股价低迷，王兴回应 小鹏机器人调整：新设九部门，何小鹏兼任产品部负责人 微信回应朋友圈互动规则：单删原封不动，互删清空对方全部痕迹 TOP3大新闻 苹果涨价引山姆",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3870720040588295?f=rss",
    date: "2026-06-27",
    category: "industry",
  },
  {
    id: "news-007",
    title: "俄西双城游记：莫斯科时代折叠，圣彼得堡文化巡礼",
    summary: "在莫斯科的时代折叠与彼得堡的文化巡礼之间，发现俄罗斯的不同面貌。<a href=&#34;https://sspai.com/post/111347&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111347",
    date: "2026-06-27",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "两个月连获两轮数亿元融资 深度机智以全栈自主路线加速国产物理AI基座模型落地",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438887.html",
    date: "2026-06-26",
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
