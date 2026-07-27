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
// 最后更新时间: 2026-07-27 02:38:33 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "36氪首发｜家居音频品牌「MORROR ART」完成亿元级B+轮融资，日初资本领投、零一创投跟投",
    summary: "36氪获悉，家居音频品牌「MORROR ART」母公司无锡未来镜显示科技有限公司近日完成亿元级B+轮融资，由日初资本投资，老股东零一创投继续跟投，心流资本FlowCapital担任财务顾问。本轮资金将主要用于电子家居产品矩阵扩充、视觉音乐内容与软件系统建设、国内线下体验渠道拓展，以及旗下海外子品牌M",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3910655616521348?f=rss",
    date: "2026-07-27",
    category: "industry",
  },
  {
    id: "news-002",
    title: "3万小时触觉数据补齐具身智能“手感”！新智具身&#038;复旦报告三连发",
    summary: "项目数据模型均开源",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460962.html",
    date: "2026-07-26",
    category: "product",
  },
  {
    id: "news-003",
    title: "硬氪首发 | 复旦教授、前英特尔首席科学家做端侧具身大脑，「眸深智能」完成近亿元Pre-A轮追加融资",
    summary: "作者 | 邱晓芬 编辑 | 袁斯来 硬氪获悉，「眸深智能」（Motion Brain）完成近亿元Pre-A轮追加融资，本轮投资方包括中国头部物业服务公司、香港财团、多家上市公司联合打造的产业投资平台瑾悦投资、创合汇资本，以及老股东徐汇资本。 这也是继2026年5月3亿元Pre-A轮之后，「眸深智能」",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3911162147640456?f=rss",
    date: "2026-07-26",
    category: "industry",
  },
  {
    id: "news-004",
    title: "派早报：携程因滥用市场支配地位被罚 51.79 亿元",
    summary: "<p>携程因滥用市场支配地位被罚 51.79 亿元</p><p>英伟达、微软等联名支持开放权重模型</p><p>长鑫存储、长江存储获得空前定价权</p><p>「谷歌一下」成为过时说法</p><p>上海交大医学院宣布调查基因编辑致死事件</p><p>Geekbench 7 发布</p><p>看看就行的",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112769",
    date: "2026-07-26",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "手冲咖啡指北：天太热了，来做一杯不寡淡的冰手冲吧",
    summary: "「太热了，今天不聊了，赶紧回去吹空调。」<a href=&#34;https://sspai.com/post/112421&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112421",
    date: "2026-07-26",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "100%开源！吴恩达做了个个人桌面Agent",
    summary: "开源、隐私、本地优先、模型无关",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460892.html",
    date: "2026-07-25",
    category: "product",
  },
  {
    id: "news-007",
    title: "半价干翻Fable 5？Opus 5实测炸场，网友：差点从椅子上摔下来",
    summary: "模型变强，Claude Code系统提示词都精简了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460253.html",
    date: "2026-07-25",
    category: "product",
  },
  {
    id: "news-008",
    title: "具身智能的「ChatGPT时刻」还没到，科沃斯先把机器人拆开了",
    summary: "不做人形，抓住真实用户需求",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/460234.html",
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
