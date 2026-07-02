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
// 最后更新时间: 2026-07-02 02:57:53 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "36氪首发 | 清华、中科院团队联合华西医院研发康养转运机器人，进一步布局居家养老场景",
    summary: "作者 | 乔钰杰 编辑 | 袁斯来 硬氪获悉，深圳可立点科技有限公司（以下简称“可立点科技”）近日完成战略融资，由力合科创领投，江苏中科智能科学技术应用研究院旗下平台跟投。本轮融资将主要用于产品研发迭代、核心团队建设及商业化落地推进。 可立点科技总部位于深圳，是一家聚焦“AI+机器人”养老场景的科技",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3877863381741577?f=rss",
    date: "2026-07-02",
    category: "industry",
  },
  {
    id: "news-002",
    title: "36氪首发 | 前大疆科学家创业，半年内连获四轮数亿融资，耀途资本、锦秋基金等押注",
    summary: "作者丨欧雪 编辑丨袁斯来 硬氪获悉，聚焦通用空中智能的硅羽科技（SPARO）半年内已连续完成四轮数亿元融资，在种子轮耀途资本之后，锦秋基金、阿里巴巴、弘毅投资、普洛斯隐山资本、云时资本相继入局。资金用途方面，现阶段融资将主要⽤于扩充关键岗位的团队建设、推进产品线的商业化落地与规模化交付，以及加速技术",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3877830625046535?f=rss",
    date: "2026-07-02",
    category: "industry",
  },
  {
    id: "news-003",
    title: "专访美图 CEO 吴欣鸿：做 AI 产品，是一场难以提前策划的游戏",
    summary: "访谈｜周鑫雨 兰杰 文｜周鑫雨 编辑｜张雨忻 截至 6 月中旬，吴欣鸿 2026 年的飞行距离已经超过了 230000 km，飞行时长近 300 个小时。他的轨迹横跨亚洲、北美、欧洲、南美，到达最远的地方是巴西和阿根廷。 航线所经之地，是美图近三年来靠 AI 产品扩展的市场版图。 美图 2025 年",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3877112973733895?f=rss",
    date: "2026-07-02",
    category: "industry",
  },
  {
    id: "news-004",
    title: "8点1氪丨宾利低至27万，二手豪华燃油车价格大跳水；Anthropic回应暗藏代码检测中国用户；寒武纪市值一日蒸发700亿",
    summary: "今日热点导览 OpenAI据悉迎来重大技术突破：系统优化使模型推理成本减半 苹果首次上架iPhone16e官翻机，仅有黑色与白色可选 国内航线燃油附加费7月5日起大幅下调 巴菲特“断供”盖茨基金会 董明珠喊话股东：家电不换成格力，凭什么要分红 詹姆斯发文告别湖人 TOP3大新闻 二手豪华燃油车价格大",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3877746956611847?f=rss",
    date: "2026-07-02",
    category: "industry",
  },
  {
    id: "news-005",
    title: "派早报：WhatsApp 开放用户名预留、PS 将取消实体光盘等",
    summary: "Gmail Live 进入测试阶段、大我推出 B251 PRO 显示器等。<a href=&#34;https://sspai.com/post/111861&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111861",
    date: "2026-07-02",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "具身智能Skill时刻！英伟达开源机器人技能库，Jim Fan：范式变了",
    summary: "全新的持续学习范式",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/441396.html",
    date: "2026-07-01",
    category: "product",
  },
  {
    id: "news-007",
    title: "OceanBase湖库一体，重新定义AI数据库",
    summary: "一套技术栈实现离在线统一",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/441386.html",
    date: "2026-07-01",
    category: "product",
  },
  {
    id: "news-008",
    title: "金融AI武道大会开赛！四道业务真题，出题人：猜不到最优解",
    summary: "Taste，决定天花板。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/441246.html",
    date: "2026-07-01",
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
