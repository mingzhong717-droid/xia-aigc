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
// 最后更新时间: 2026-07-17 02:24:48 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "36氪首发 | 前蔚来、华为智驾核心成员联手创业具身世界模型，三个月内完成数亿元融资",
    summary: "作者 | 乔钰杰 编辑 | 袁斯来 硬氪获悉，具身智能世界模型公司日冕开物（北京日冕机器人有限公司）近期完成连续两轮种子轮融资，融资合计金额达数亿元人民币，由鼎峰科创、远图未来、百度风投、沃衍资本、武岳峰科创、万林国际共同参与投资。同时，新一轮融资也在同步交割中。 此前融资资金主要用于自研世界模型 ",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3899081603483525?f=rss",
    date: "2026-07-17",
    category: "industry",
  },
  {
    id: "news-002",
    title: "独家 | 智谱 ARR 达到10 亿美元，半年增长 15 倍",
    summary: "文 | 周鑫雨 编辑 | 张雨忻 智能涌现从多个独立信源处获悉，截至 2026 年 7 月， 智谱的 ARR（年度经常性收入）已经达到 10 亿美元。 截至发稿前，针对上述信息，智谱未回复。 过去一年，AI Coding 和视频生成模型已经成为全球造血能力最强的 AI 赛道。 海外，Anthropi",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3898662052693894?f=rss",
    date: "2026-07-17",
    category: "industry",
  },
  {
    id: "news-003",
    title: "8点1氪丨长鑫科技网上发行初步中签率为0.40995452%；特朗普头像将被印上硬币，面值1美元；多家NFC鲜榨果汁生产车间被曝无水果",
    summary: "今日热点导览 SpaceX市值蒸发近8500亿美元 韩国将暂停新的单一股票杠杆ETF上市，以抑制市场波动 泡泡玛特创始人王宁带队探访苹果总部 亚马逊Leo与南非企业达成协议，预计明年启动卫星互联网服务 日本拟采购2.75万颗英伟达Rubin芯片，打造本土机器人AI基础模型 TOP 3大新闻 长鑫科技",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3898973942007684?f=rss",
    date: "2026-07-17",
    category: "industry",
  },
  {
    id: "news-004",
    title: "商汤001号员工创办AI公司：将AI角色引擎做成护城河，获种子轮融资 | 36氪首发",
    summary: "文丨刘士武 36氪游戏获悉， AI 角色硬件公司酷奇奇科技（Coolqq.com）已完成数千万元种子轮融资，本轮融资由上海浦东人工智能种子基金领投，商汤科技、零以创投跟投。云杉资本Spruce Capital担任长期独家财务顾问。 酷奇奇创办于2025年，创始人徐持衡是商汤科技001号员工，师从汤晓",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3898370289846153?f=rss",
    date: "2026-07-17",
    category: "industry",
  },
  {
    id: "news-005",
    title: "派早报：OPPO 宣布调整旗下子品牌的全球产品策略等",
    summary: "月之暗面发布 Kimi K3 模型，支付宝升级 Apple 教育优惠认证等。<a href=&#34;https://sspai.com/post/112414&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112414",
    date: "2026-07-17",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "工业母机进入“计算化时刻”：中国移动投资友机技术，押注工业AI下一代基础设施",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/451371.html",
    date: "2026-07-16",
    category: "product",
  },
  {
    id: "news-007",
    title: "RLinf v0.3来了！从模型生态到真机部署五大能力跃升，无问芯穹与清华大学联合打造",
    summary: "为破解具身智能行业发展瓶颈构建了新一代“进化底座”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/451379.html",
    date: "2026-07-16",
    category: "product",
  },
  {
    id: "news-008",
    title: "手握英伟达宁德时代相同剧本，具身智能的第一个「基建商」出现了",
    summary: "Robotaxi第一股文远知行孵化",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/451327.html",
    date: "2026-07-16",
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
