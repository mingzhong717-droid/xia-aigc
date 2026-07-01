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
// 最后更新时间: 2026-07-01 03:33:16 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "A社你解释下，啥叫Sonnet 5比Fable 5还贵？",
    summary: "“性价比模型”价格明降暗涨",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/441001.html",
    date: "2026-07-01",
    category: "product",
  },
  {
    id: "news-002",
    title: "视频版Nano Banana来了！内置Gemini世界知识；原版香蕉出图仅需4秒",
    summary: "Gemni 3.5 Pro到底啥时候来啊！！！",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/440985.html",
    date: "2026-07-01",
    category: "product",
  },
  {
    id: "news-003",
    title: "告别硬件出海上一个十年，前安克CMO做了款AI时代的Memory产品｜硬氪专访",
    summary: "作者｜黄楠 编辑｜袁斯来 2024年，当王时远从工作了9年的安克辞职时，他发现自己面对的是一个全新的世界。 王时远亲历了硬件出海的黄金十年，是国内最早搭建海外营销体系、建立规则的那批人。他2015年加入安克，先做海外，后做国内，从安克CMO到转任中国区总裁，最多的时候带了四五百人的团队。 2025年",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3867992509125636?f=rss",
    date: "2026-07-01",
    category: "industry",
  },
  {
    id: "news-004",
    title: "苏大教授创业做机器人触觉系统，获松禾资本千万级天使轮融资｜硬氪首发",
    summary: "作者｜黄楠 编辑｜袁斯来 硬氪获悉，感知纪元科技有限公司（以下简称“感知纪元”）近日完成千万级天使轮融资，本轮由松禾资本领衔投资。融资资金将主要用于中试产线搭建、核心产品迭代升级及团队扩充，加速推进多模态智能触觉电子皮肤从研发走向量产。 感知纪元成立于2025年12月，感知纪元定位于机器人触觉基础设",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3874358072710407?f=rss",
    date: "2026-07-01",
    category: "industry",
  },
  {
    id: "news-005",
    title: "赤子城独家投资：4人创业团队「MobAI」，推出AI互动平台「Lunaverse Stories」 | 36氪首发",
    summary: "文丨刘士武 36氪获悉，AI 创业公司「MobAI」已完成数百万元天使轮融资，由港股上市公司赤子城科技独家投资。目前，由MobAI开发的AI互动叙事应用Lunaverse Stories 已进入邀请制测试阶段。 熟悉AI互动类产品的人应该对MobAI并不陌生。 一年前，MobAI创始人钟文鼎（Vit",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3875622047805447?f=rss",
    date: "2026-07-01",
    category: "product",
  },
  {
    id: "news-006",
    title: "年度报告不够看？微信读书 Skill 上手体验",
    summary: "人对自己或许会偶尔不诚实，但你的书架是很诚实的。<a href=&#34;https://sspai.com/post/109932&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/109932",
    date: "2026-07-01",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "百亿估值只是起点，跨维智能的物理AGI之路",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/440949.html",
    date: "2026-06-30",
    category: "product",
  },
  {
    id: "news-008",
    title: "港股新贵押注物理AI，乐动机器人打造万亿市场空间的核心基础设施",
    summary: "谁能把这个空间高质量地数字化，谁就掌握了下一阶段机器智能的入口。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/440818.html",
    date: "2026-06-30",
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
