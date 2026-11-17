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
// 最后更新时间: 2026-11-17 06:26:18 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "为了另一种可能性：在国内折腾 Linux 打游戏的二三事",
    summary: "当外部的限制开始逐渐渗透、内化到每个人的内心，另一种真正的「可能性」在现今尤为珍贵。<a href=&#34;https://sspai.com/post/118442&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/118442",
    date: "2026-11-17",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "睿尔曼智能郑随兵：质量、经济性、稳定性是机器人落地三大标准",
    summary: "具身智能的真正价值是“把人的经验、技能复刻出来”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510542.html",
    date: "2026-11-16",
    category: "product",
  },
  {
    id: "news-003",
    title: "2026甲子引力年终盛典即将启幕，AI的无限游戏进入「第二序章」｜甲子引力",
    summary: "12月1日，细数AI的未竟之问。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510526.html",
    date: "2026-11-16",
    category: "product",
  },
  {
    id: "news-004",
    title: "阿里正式发布Qwen4，智能体及编程能力进阶，迈向真实全场景",
    summary: "11月16日，阿里巴巴发布全新一代基座大模型Qwen4-Max",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510486.html",
    date: "2026-11-16",
    category: "product",
  },
  {
    id: "news-005",
    title: "龙芯、海光老兵集结，通研院孵化的AGI芯片公司浮出水面！半年连融数亿元",
    summary: "杨立昆、李飞飞都在追问的事，通芯智能想用一颗芯片来回答。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510416.html",
    date: "2026-11-16",
    category: "product",
  },
  {
    id: "news-006",
    title: "今天截止！2026年度AI表彰，错过再等一年！",
    summary: "量子位在寻找“能干”的答案",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/11/510382.html",
    date: "2026-11-16",
    category: "product",
  },
  {
    id: "news-007",
    title: "派早报：OPPO 发布 Reno17 系列、影石发布 Insta360 Toast 墨水屏相纸等",
    summary: "少数派的近期动态我们已开设专页，汇总展示「优秀作者评选」奖项及结果。「优秀作者评选」是编辑部自2023年起实行的机制，于每季度结束后，评选该季度贡献突出的现有作者，以及涌现出的有潜力新作者。获奖者会获 ...<a href=&#34;https://sspai.com/post/119160&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119160",
    date: "2026-11-16",
    category: "product",
  },
  {
    id: "news-008",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/119148&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/119148",
    date: "2026-11-16",
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
