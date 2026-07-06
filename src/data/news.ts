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
// 最后更新时间: 2026-07-06 02:54:48 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "跨境电商风向转变：新生代不再只拼价格，开始争“定价权”丨最前线",
    summary: "作者丨欧雪 编辑丨最前线 6月30日，亚马逊全球开店与福布斯中国联合发布“2026福布斯中国新生代跨境电商30人评选”，30位入选者平均年龄仅35岁，95后已开始崭露头角。 入选者既有3D打印、庭院机器人、AI助听器等硬核科技赛道的开拓者，也有家具、家居、服装等传统产业的变革者。他们来自广东、浙江、",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3883561480876297?f=rss",
    date: "2026-07-06",
    category: "industry",
  },
  {
    id: "news-002",
    title: "AI 砍掉的第一批大厂人：高薪，高绩效，高P｜深氪",
    summary: "访谈｜任彩茹 兰杰 彭倩 文｜任彩茹 编辑｜乔芊 杨轩 “630”减员，AI是祸首还是替罪羊? “现在公司有（减员）名单，你在这里面。”5月中的一天，林越被组长叫进会议室，对方开门见山。 林越的第一反应是平静，他早有预料。早在今年三四月，一些互联网公司内部便传出要裁员的风声。开年以来，中国互联网大公",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3883456791163138?f=rss",
    date: "2026-07-06",
    category: "industry",
  },
  {
    id: "news-003",
    title: "2026，量子计算迟到的狂欢：能拿订单、奔赴IPO、市值破百亿",
    summary: "图源/视觉中国 作者丨欧雪 编辑丨袁斯来 如果在七年前，有人告诉一个投资人，量子计算公司会有订单，还能在纳斯达克上市，市值破150亿美元，对方大概率会把这人当个骗子。 他们很多人都记得前几年那场“量子寒冬”。那一年，谷歌用量子处理器完成了一项计算， 200秒算出了超级计算机1万年才能得出的结果。人们",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3883513899380744?f=rss",
    date: "2026-07-06",
    category: "industry",
  },
  {
    id: "news-004",
    title: "8点1氪丨7-11指控耐克新鞋配色抄袭；A股新版交易规则今起施行；华尔街称苹果采购长鑫内存是为了压价",
    summary: "今日热点导览 苹果Siri AI秋季上线，仅限iPhone 15 Pro及以上机型 蒋方舟再回应被清华教授指控论文造假 张雪称负债接近1亿元，本月将还清全部债务 黑石集团放弃全球最大数据中心项目，意味着该建设计划已宣告破产 印度政府：正调查苹果手机信息泄露事件 TOP3大新闻 7-11起诉耐克，指控",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3883400536453381?f=rss",
    date: "2026-07-06",
    category: "industry",
  },
  {
    id: "news-005",
    title: "Meta也来卖铲子了！小扎：模型可以慢，GPU必须赚",
    summary: "正考虑推出Meta Compute",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/443339.html",
    date: "2026-07-05",
    category: "product",
  },
  {
    id: "news-006",
    title: "李飞飞署名具身新论文：Sim2Real烧不起，Real2Sim量大管饱",
    summary: "一段视频，生成无限训练场景",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/443066.html",
    date: "2026-07-05",
    category: "product",
  },
  {
    id: "news-007",
    title: "刚刚，LeCun团队让世界模型学会持续学习！",
    summary: "迈向持续学习的世界模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/442964.html",
    date: "2026-07-05",
    category: "product",
  },
  {
    id: "news-008",
    title: "别争了！香农老婆，才是世界上第一个大语言模型",
    summary: "70年前，香农就拥有了端侧私人定制大语言模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/443241.html",
    date: "2026-07-05",
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
