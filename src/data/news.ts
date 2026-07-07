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
// 最后更新时间: 2026-07-07 02:49:23 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "Claude的脑子里，也长出了一块「意识」",
    summary: "内部发现「类脑空间」，删掉就变傻",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/444741.html",
    date: "2026-07-07",
    category: "product",
  },
  {
    id: "news-002",
    title: "前大疆员工做了款消费级纺织机，拿下红杉、顺为、米哈游等数亿融资｜产品观察",
    summary: "作者｜黄楠 编辑｜袁斯来 浪爪智能（CLAWLAB）创始人胡文鑫，是当下硬件赛道一个不太按常理出牌的人。 工程师背景出身，曾就职于大疆、美团等头部大厂，拿过顶级机构的钱，履历足以支撑他选择任何一个被市场验证过的热门赛道，在最短时间内做出产品、讲故事、滚动融资。 但胡文鑫扎进了一个过去三十年几乎无人问",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3876837605585160?f=rss",
    date: "2026-07-07",
    category: "industry",
  },
  {
    id: "news-003",
    title: "用AI“复刻”人类细胞、预判药效，「华源智因」获千万级人民币种子轮融资｜36氪首发",
    summary: "文｜胡香赟 编辑｜海若镜 36氪获悉，AI虚拟细胞（AIVC）企业华源智因近期已完成千万级人民币种子轮融资。本轮融资由水木创投领投，募集资金将主要用于多模态测序底层技术迭代，进一步拓展与头部三甲医院的合作，以及团队扩充等。此外，华源智因团队已计划启动新一轮融资。 华源智因创始团队由资深医药产业从业者",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3883943959621634?f=rss",
    date: "2026-07-07",
    category: "industry",
  },
  {
    id: "news-004",
    title: "8点1氪丨SK海力士本周五将登陆纳斯达克；99万机器人“伴侣”续航撑不过一晚？优必选回应；青海省博物馆回应“国家一级文物发现TCL字样”",
    summary: "今日热点导览 华为Mate90系列有望搭载基于韬定律的新麒麟芯片 央视曝光滴眼液涉事企业被立案，对滴眼液乱象开展调查处置 千问大模型升级实时语��识别大模型Fun-ASR-Realtime WPS回应“滥收费、背刺用户”言论 TOP3大新闻 SK海力士10日在纳斯达克上市290亿美元规模ADR，创外",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3884831072514309?f=rss",
    date: "2026-07-07",
    category: "industry",
  },
  {
    id: "news-005",
    title: "在联合国，这家中国公司给AI“减负”：不堆算力，而是给机器人装了个“类脑”",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/444733.html",
    date: "2026-07-06",
    category: "product",
  },
  {
    id: "news-006",
    title: "极简方案刷新扩散模型推理纪录，阿里清华论文入选ICML杰出论文",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/444721.html",
    date: "2026-07-06",
    category: "product",
  },
  {
    id: "news-007",
    title: "字节、宇树、BAT等40+产品大咖齐聚，2026奇点智能产品大会最新最全日程来了！",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/444043.html",
    date: "2026-07-06",
    category: "product",
  },
  {
    id: "news-008",
    title: "蔚来世界模型OTA，70万用户没人被留在旧版本",
    summary: "把世界模型用活了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/443868.html",
    date: "2026-07-06",
    category: "update",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
