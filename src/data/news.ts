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
// 最后更新时间: 2026-07-13 02:31:04 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "98年哈工大教授创业，要做人形灵巧操作世界模型",
    summary: "从采集触觉，到对齐触觉，再到使用触觉",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/448034.html",
    date: "2026-07-12",
    category: "product",
  },
  {
    id: "news-002",
    title: "老黄RTX Spark真机现身Bilibili World！CPU和GPU直接焊在一起，笔记本跑120B大模型",
    summary: "老黄在ComputeX发布的“超级芯片”，已经在真机中落地了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/447981.html",
    date: "2026-07-12",
    category: "product",
  },
  {
    id: "news-003",
    title: "8点1氪丨SK海力士CEO称史上最大存储短缺将在明年到来；苹果起诉OpenAI窃取商业机密‌；赛力斯预计上半年净亏损15亿元-18亿元",
    summary: "今日热点导览 世界杯决赛一块草皮卖3050元，上架后很快售空 中国石化完成对中国航油重组 巨力索具因误导性陈述被罚450万元 SK海力士考虑“内存即服务”模式，或允许客户租赁而非购买芯片 马斯克据悉要求特斯拉员工转向使用Grok TOP 3 大新闻 SK海力士CEO：2027年将成为存储行业历史上供",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3893305996442118?f=rss",
    date: "2026-07-12",
    category: "industry",
  },
  {
    id: "news-004",
    title: "腾讯重仓一个IPO",
    summary: "图片来源：视觉中国 作者/杨继云 报道/投资界PEdaily 深圳超级IPO来了。 日前，深圳云豹智能股份有限公司（简称“云豹智能”）创业板IPO申请正式获深交所受理，成为又一家选用创业板第四套上市标准申报上市的企业，冲刺“国产DPU第一股”。 回想6年前，斯坦福博士萧启阳在深圳创办云豹智能，专注于",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3892352153942530?f=rss",
    date: "2026-07-12",
    category: "industry",
  },
  {
    id: "news-005",
    title: "全网骂Claude变笨，Anthropic下场揭秘：坑你的不是模型",
    summary: "换更大的模型就等于更聪明？ 【导读】换更大的模型就等于更聪明？这可能是Claude Code用户最深的误会。很多人为此一路换到最贵的Fable，近日，Anthropic，亲手澄清了这个误区。 你有没有过这种时刻：Claude Code写代码写砸了，第一反应，就是赶紧换个更强的模型。 但这一招，很多时",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3892222176574211?f=rss",
    date: "2026-07-12",
    category: "industry",
  },
  {
    id: "news-006",
    title: "近百名玩家涌入具身数据 : 一年融资44.7亿，谁能真靠“卖数据”赚钱？",
    summary: "林方舟 发自 凹非寺 在湖南郴州，一家中国移动营业厅挂牌“具身数据采集5S店”，普通顾客领一套夹爪、手套和头戴相机，经过简单培训，就能边做家务，边采集机器人训练数据。 首期投放的1000套设备，满产状态下每年能采集100万小时数据。我仿佛听到了商家心里打的小算盘：既采了数据，又赚了眼球，4A广告公司",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3892027841362694?f=rss",
    date: "2026-07-12",
    category: "industry",
  },
  {
    id: "news-007",
    title: "派早报：苹果起诉 OpenAI 窃取商业机密",
    summary: "<p>苹果起诉 OpenAI 窃取商业机密</p><p>变压器短缺掣肘数据中心扩张</p><p>世界杯带动小红书使用时长大幅提升</p><p>废弃 IBM 园区成网红景点</p><p>SpaceX 申请发射十万颗卫星</p><p>高技能人士正大规模「打零工」参与模型训练</p><p>看看就行的简讯<",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112215",
    date: "2026-07-12",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "6月音乐精选：不得不听的 17 张……没错 17 张专辑！",
    summary: "编者注：2026年我们将重启少数派音乐推荐栏目FM3.14，特邀资深音乐从业者及爱好者为大家推荐优质的华语独立、流行音乐，今年我们也很荣幸邀请到老朋友飞傲，为本栏目冠名。飞傲目前拥有品牌以音乐发烧友为 ...<a href=&#34;https://sspai.com/post/112035&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112035",
    date: "2026-07-12",
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
