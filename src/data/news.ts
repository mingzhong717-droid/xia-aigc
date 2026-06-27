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
// 最后更新时间: 2026-06-27 02:51:02 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "GPT-5.6突然发布！Fable5痛失最强基模王座",
    summary: "一口气端出三款GPT 5.6系列模型",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438895.html",
    date: "2026-06-27",
    category: "product",
  },
  {
    id: "news-002",
    title: "G7易流发布货运行业首款穿戴式AI硬件「拍拍豆」，填平物流交付的“最后两米”｜最前线",
    summary: "作者｜黄楠 编辑｜袁斯来 6月25日，G7易流发布货运行业首款穿戴式AI硬件“拍拍豆”。这款产品克重仅30克，采用磁吸设计，当车辆熄火停稳后，司机可直接将设备从挡风玻璃底座取下，佩戴于胸前即可自动启动录制；放回底座瞬间，录制文件将自动同步上传云端存储。 从“看见车上”到“看见车下”，物流AI的应用场",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3869740772316162?f=rss",
    date: "2026-06-27",
    category: "product",
  },
  {
    id: "news-003",
    title: "9点1氪｜苹果涨价引山姆代购潮；DeepSeek大规模招聘；黄金再度跌破4000美元",
    summary: "今日热点导览 OpenAI官宣推出GPT-5.6 亚洲“果链”股价几乎全线大幅下跌 SpaceX计划为美国消费者推出新的星链移动服务 美团股价低迷，王兴回应 小鹏机器人调整：新设九部门，何小鹏兼任产品部负责人 微信回应朋友圈互动规则：单删原封不动，互删清空对方全部痕迹 TOP3大新闻 苹果涨价引山姆",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3870720040588295?f=rss",
    date: "2026-06-27",
    category: "industry",
  },
  {
    id: "news-004",
    title: "两个月连获两轮数亿元融资 深度机智以全栈自主路线加速国产物理AI基座模型落地",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438887.html",
    date: "2026-06-26",
    category: "product",
  },
  {
    id: "news-005",
    title: "谷歌「推理之王」也跑路Meta了，当年还是李飞飞挖来的",
    summary: "Coding为王",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438848.html",
    date: "2026-06-26",
    category: "product",
  },
  {
    id: "news-006",
    title: "Claude Fable 5分批重新上线！GPT-5.6秒跟",
    summary: "这不能是营销计划的一部分吧？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438789.html",
    date: "2026-06-26",
    category: "product",
  },
  {
    id: "news-007",
    title: "华勤技术与正行创新达成战略合作，加速机器人“走进工厂、走上产线”",
    summary: "共建工业物理智能“数据底座与智能大脑”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/438741.html",
    date: "2026-06-26",
    category: "product",
  },
  {
    id: "news-008",
    title: "理想首谈电池品牌争议：不管谁家电池，都是理想汽车兜底",
    summary: "图源视觉中国 动力电池一直是新能源汽车里高频博弈的战场。 它通常占据一辆新能源车30%-40%的BOM（物料）成本；与此同时，作为电车心脏，又直接决定续航、补能效率、安全性和寿命等核心体验，是少数能够同时影响产品力与成本结构的零部件。 这意味着，围绕动力电池的博弈在车企与供应商之间，甚至电池产业内部",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3866946087867394?f=rss",
    date: "2026-06-26",
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
