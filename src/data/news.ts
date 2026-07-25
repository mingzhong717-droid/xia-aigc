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
// 最后更新时间: 2026-07-25 02:24:04 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "9点1氪｜宇树科技CEO王兴兴登上《时代》杂志封面；国家反诈中心App可一键检测AI生成痕迹；Claude Opus 5正式发布",
    summary: "今日热点导览 小鹏主动召回3.35万辆X9，涉及前空气弹簧安全隐患 微信撤回消息后可删除提示字 怡颗莓莓果线下仍在售，公司称针对近期舆论正准备维权 菲尔兹奖得主雅各布·齐默曼将加入OpenAI 欧盟对谷歌处以8.9亿欧元罚款 TOP3大新闻 宇树科技CEO王兴兴登上《时代》杂志封面 当地时间7月23",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3910351337821318?f=rss",
    date: "2026-07-25",
    category: "product",
  },
  {
    id: "news-002",
    title: "合肥又押中AI独角兽：多模态赛道，3个月融了21亿",
    summary: "跑出原生全模态新路径",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460154.html",
    date: "2026-07-24",
    category: "product",
  },
  {
    id: "news-003",
    title: "国产世界模型登顶李飞飞团队榜单！适配国产昇腾算力、代码权重全开源",
    summary: "给它一张图，还你整个世界",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460041.html",
    date: "2026-07-24",
    category: "product",
  },
  {
    id: "news-004",
    title: "抢跑！全球化新品牌进入AI时刻，何以定胜负？ &#124; 2026全球化新品牌AI竞争力大会实录",
    summary: "AI抢跑期，我们看见了全球化新品牌的下一程",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/459432.html",
    date: "2026-07-24",
    category: "product",
  },
  {
    id: "news-005",
    title: "世界模型“六小龙”在WAIC吵起来了！行业红利就在非共识里",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/458617.html",
    date: "2026-07-24",
    category: "product",
  },
  {
    id: "news-006",
    title: "亚太唯一！阿里云跻身Gartner可观测魔力象限“挑战者”象限",
    summary: "\"看得懂、定得准\"的智能运维底座",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/458864.html",
    date: "2026-07-24",
    category: "product",
  },
  {
    id: "news-007",
    title: "AnySearch 面向全球推出 “学生与开发者成长计划”",
    summary: "7月24日，在 AnySearch 北京开发者沙龙活动现场，AnySearch 创始人兼CEO 薛冠群正式宣布推出“AnySearch 学生与开发者成长计划”（AnySearch Student & Developer Program）。该计划面向全球学生与开发者开放，旨在通过提供开放的 AI 搜索",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3909565569324163?f=rss",
    date: "2026-07-24",
    category: "product",
  },
  {
    id: "news-008",
    title: "氪星晚报 ｜黄仁勋力挺中国AI开源模型；市场监管总局：深入整治“内卷式”竞争",
    summary: "大公司： 字节跳动在中卫成立朔方星河科技公司，注册资本24亿 36氪获悉，天眼查App显示，近日，中卫朔方星河科技有限公司成立，法定代表人为田凯，注册资本24亿人民币，经营范围包括信息技术咨询服务、软件开发、信息系统集成服务、网络设备销售等。股东信息显示，该公司由北京字跳网络技术有限公司全资持股。 ",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3909160840451465?f=rss",
    date: "2026-07-24",
    category: "industry",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
