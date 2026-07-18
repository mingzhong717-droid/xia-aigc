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
// 最后更新时间: 2026-07-18 02:09:30 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "全球首款720°连续后空翻机器狗来了！宇泛智能携“灵猫”双馆联袂首秀WAIC",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/453506.html",
    date: "2026-07-18",
    category: "product",
  },
  {
    id: "news-002",
    title: "9点1氪丨ofo停更5年突然发文，运营主体仍处存续状态；苹果市值重返全球第一；乐事回应“蓝色薯片”来源",
    summary: "今日热点导览 月之暗面正式推出开源模型Kimi K3 智谱ARR达到10亿美元，半年增长15倍 国际足联：世界杯冠军将有戒指，每枚均有独立编号 国内成品油价7月17日晚上调 A股存储板块龙头股遭遇两个跌停 TOP3大新闻 ofo停更5年突然发文，运营主体仍处存续状态 7月15日，沉寂近5年的ofo小",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3900449325287305?f=rss",
    date: "2026-07-18",
    category: "industry",
  },
  {
    id: "news-003",
    title: "印奇在 WAIC 2026 开幕式主论坛发表主题演讲：当智能体走进物理世界",
    summary: "2026 世界人工智能大会（WAIC 2026）于 7 月 17 日正式开幕。作为全球人工智能领域的顶级盛会，本届大会以“智能伙伴 共创未来”为主题。阶跃星辰董事长、千里科技董事长印奇作为特邀嘉宾出席大会开幕式并在大会主论坛（上午场）发表主题演讲《当智能体进入物理世界》。回顾 15 年 AI 创业历",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3900439867147909?f=rss",
    date: "2026-07-18",
    category: "industry",
  },
  {
    id: "news-004",
    title: "PPIO发布智能模型网关，打造面向Agent时代的智能Token工厂",
    summary: "万亿Token调用量验证",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/453467.html",
    date: "2026-07-17",
    category: "product",
  },
  {
    id: "news-005",
    title: "逛完WAIC 2026我悟了：国产AI芯片的真对手，根本不是英伟达的GPU",
    summary: "发布芯片只是拿到了入场券",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/453352.html",
    date: "2026-07-17",
    category: "product",
  },
  {
    id: "news-006",
    title: "给AI发工号、定岗位、做绩效，数字员工终于能落地了",
    summary: "面壁智能开源StaffDeck",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/453245.html",
    date: "2026-07-17",
    category: "product",
  },
  {
    id: "news-007",
    title: "WAIC直击 &#124; 十大开源社区「挤」进了一家GPU展台，沐曦凭什么？",
    summary: "每个Token背后，都是一次开源协作",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/453246.html",
    date: "2026-07-17",
    category: "product",
  },
  {
    id: "news-008",
    title: "氪星晚报｜阿里1688将推出AI时代B2B交易互联互通开放标准；英特尔与Google Cloud宣布深化战略合作；铁路部门试点提前60天预约购票服务",
    summary: "大公司： 成大生物：流感病毒裂解疫苗（高剂量）进入I期临床试验 36氪获悉，成大生物公告，公司全资子公司成大生物(本溪)研发的流感病毒裂解疫苗（高剂量）已获国家药监局临床试验批准，并完成I期临床试验筹备工作，正式进入I期临床试验阶段。该疫苗抗原含量为常规剂量四倍，适用于60岁以上老年人群及高风险人群",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3896564485572489?f=rss",
    date: "2026-07-17",
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
