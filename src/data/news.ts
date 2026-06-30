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
// 最后更新时间: 2026-06-30 03:24:44 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "36氪首发｜前百度自动驾驶与机器人实验室主任创业，天使轮融资数千万，做机器人“世界通行模型”",
    summary: "作者 | 乔钰杰 编辑 | 袁斯来 硬氪获悉，具身智能公司纽娲机器人近日完成5000万元天使轮融资，由蓝湖资本领投，不同资本、共青城朴一投资跟投。两个月前，纽娲机器人曾完成由Plug and Play中国基金领投的种子轮融资。 纽娲机器人（下称“纽娲”）成立于2026年2月，半年不到的时间已先后获得",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3875059110221064?f=rss",
    date: "2026-06-30",
    category: "industry",
  },
  {
    id: "news-002",
    title: "8点1氪丨涉嫌操纵内存价格，存储三巨头遭集体诉讼；韩国启动史上最大规模产业投资计划；哈啰出行回应骑79分钟需支付30元",
    summary: "今日热点导览 马斯克宣布Grok4.5开启SpaceX与特斯拉内部私测，性能或超越Claude Opus 美的回应空调产品在欧洲被疯抢 蔚来回应车漆洗车时被冲掉：高压水枪操作不规范 滚石唱片就屠颖去世追责万豪喜来登 百度昆仑芯拟赴港IPO TOP 3大新闻 涉嫌操纵内存价格，三星、SK海力士、美光遭",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3874911939482880?f=rss",
    date: "2026-06-30",
    category: "industry",
  },
  {
    id: "news-003",
    title: "派早报：DeepSeek V4 正式版 7 月中旬上线等",
    summary: "少数派的近期动态少数派×AKKO联合共创带屏键盘计划于7月9日开启。预约直播WWDC26专题页已全部更新完成。点击回顾尝鲜27系列新系统的朋友，你的满意度如何？来一派投票你可能错过的文章让音乐「更好听 ...<a href=&#34;https://sspai.com/post/111707&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/111707",
    date: "2026-06-30",
    category: "product",
  },
  {
    id: "news-004",
    title: "全球首个：隐空间世界模型，打通长时序双向物理因果链了！",
    summary: "刚融了2亿美元，冲到了具身榜单第一",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439891.html",
    date: "2026-06-29",
    category: "product",
  },
  {
    id: "news-005",
    title: "Claude Mythos让梁文锋决定融资",
    summary: "DeepSeek不储备弹药根本没法打下去了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439863.html",
    date: "2026-06-29",
    category: "product",
  },
  {
    id: "news-006",
    title: "OceanBase发布AI数据库：以一套引擎融合湖库与多模态数据",
    summary: "让AI真正“读懂”企业",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439876.html",
    date: "2026-06-29",
    category: "product",
  },
  {
    id: "news-007",
    title: "国家队+千亿产业+头部财投集体入局，智平方200亿估值筑就大湾区具身智能名片",
    summary: "大湾区首个200亿具身智能独角兽诞生！“最像特斯拉”智平方吸金50亿，全矩阵顶级资本重仓",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439861.html",
    date: "2026-06-29",
    category: "product",
  },
  {
    id: "news-008",
    title: "AI当老板，快给10家公司干破产了…",
    summary: "画出那个矩阵的能力——还属于人类。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/06/439864.html",
    date: "2026-06-29",
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
