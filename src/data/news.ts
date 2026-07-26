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
// 最后更新时间: 2026-07-26 02:30:43 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "硬氪首发 | 复旦教授、前英特尔首席科学家做端侧具身大脑，「眸深智能」完成近亿元Pre-A轮追加融资",
    summary: "作者 | 邱晓芬 编辑 | 袁斯来 硬氪获悉，「眸深智能」（Motion Brain）完成近亿元Pre-A轮追加融资，本轮投资方包括中国头部物业服务公司、香港财团、多家上市公司联合打造的产业投资平台瑾悦投资、创合汇资本，以及老股东徐汇资本。 这也是继2026年5月3亿元Pre-A轮之后，「眸深智能」",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3911162147640456?f=rss",
    date: "2026-07-26",
    category: "industry",
  },
  {
    id: "news-002",
    title: "100%开源！吴恩达做了个个人桌面Agent",
    summary: "开源、隐私、本地优先、模型无关",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460892.html",
    date: "2026-07-25",
    category: "product",
  },
  {
    id: "news-003",
    title: "半价干翻Fable 5？Opus 5实测炸场，网友：差点从椅子上摔下来",
    summary: "模型变强，Claude Code系统提示词都精简了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460253.html",
    date: "2026-07-25",
    category: "product",
  },
  {
    id: "news-004",
    title: "具身智能的「ChatGPT时刻」还没到，科沃斯先把机器人拆开了",
    summary: "不做人形，抓住真实用户需求",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460234.html",
    date: "2026-07-25",
    category: "product",
  },
  {
    id: "news-005",
    title: "北京说Agent已经能造世界，杭州却说它是刚发明的电灯泡",
    summary: "工业圈和学术圈“唱反调”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460186.html",
    date: "2026-07-25",
    category: "product",
  },
  {
    id: "news-006",
    title: "全新统一流式架构，Vivix灵动时刻正式发布首个实时互动模型",
    summary: "单卡突破10000 video tokens/s，Vivix打通实时多模态生成全链路",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460174.html",
    date: "2026-07-25",
    category: "product",
  },
  {
    id: "news-007",
    title: "从月之暗面出走，他用AI技术帮人找对象，徐新投资 | 涌现新项目",
    summary: "文｜温丽虹 编辑｜张雨忻 Kimi K3上线前夕，曾歆勋算了算，离职时放弃的那笔期权的价值，在他离开这段时间涨了10倍。 从月之暗面离职前，曾歆勋是Kimi的AI搜索技术负责人。2025年8月，他离职创办“良配科技”，核心产品“良配”，一个AI驱动的婚恋匹配应用，核心逻辑是将AI搜索与匹配能力嫁接到",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3910880823202948?f=rss",
    date: "2026-07-25",
    category: "industry",
  },
  {
    id: "news-008",
    title: "9点1氪｜宇树科技CEO王兴兴登上《时代》杂志封面；国家反诈中心App可一键检测AI生成痕迹；Claude Opus 5正式发布",
    summary: "今日热点导览 小鹏主动召回3.35万辆X9，涉及前空气弹簧安全隐患 微信撤回消息后可删除提示字 怡颗莓莓果线下仍在售，公司称针对近期舆论正准备维权 菲尔兹奖得主雅各布·齐默曼将加入OpenAI 欧盟对谷歌处以8.9亿欧元罚款 TOP3大新闻 宇树科技CEO王兴兴登上《时代》杂志封面 当地时间7月23",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3910351337821318?f=rss",
    date: "2026-07-25",
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
