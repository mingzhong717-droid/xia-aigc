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
// 最后更新时间: 2026-10-12 04:13:17 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "硅谷AI现状：谁有算力谁是爹",
    summary: "马斯克连横A社，硅谷VC开始囤GPU",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502585.html",
    date: "2026-10-11",
    category: "product",
  },
  {
    id: "news-002",
    title: "下架8个月，GPT-4o的拯救行动居然还在继续",
    summary: "初代4o的API快照进入停用倒计时",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502550.html",
    date: "2026-10-11",
    category: "product",
  },
  {
    id: "news-003",
    title: "DeepSeek Bot来了！民间版，DSH装个插件就能用",
    summary: "Grok Bot我养不起，ds bot不得高低尝尝咸淡？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502544.html",
    date: "2026-10-11",
    category: "product",
  },
  {
    id: "news-004",
    title: "派早报：工信部等就进一步加强汽车产品创新设计管理征求意见",
    summary: "<p>工信部等就进一步加强汽车产品创新设计管理征求意见</p><p>三季度全球 PC 出货量骤降</p><p>法国判决 Cloudflare 无须通过 DNS 屏蔽盗版</p><p>Anthropic 宣布切断内部评估环境的互联网访问权限</p><p>AI 助力老游戏移植到浏览器</p><p>3C ",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115845",
    date: "2026-10-11",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "写给「跑两步就喘」的你：不能忽略的跑后拉伸与恢复",
    summary: "前面两篇文章我们介绍了想要舒适跑步，在跑前和跑步中的一些小技巧，今天和大家聊聊跑后如何正确的拉伸，如何更好地帮助身体恢复。关联阅读：跑前精准热身，缓解跑时疼痛调整跑步姿势，舒适开跑正确拉伸多数人跑后会 ...<a href=&#34;https://sspai.com/post/115568&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115568",
    date: "2026-10-11",
    category: "tutorial",
  },
  {
    id: "news-006",
    title: "西门子将亮相2026工博会：以软硬协同的工业全栈能力，推动物理AI加速落地",
    summary: "西门子将以更集中、更场景化的方式，展示其工业全栈能力",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/10/502541.html",
    date: "2026-10-10",
    category: "product",
  },
  {
    id: "news-007",
    title: "App+1｜专注星空：让「少刷手机」这件事更愉悦一点",
    summary: "把决定使用时长的时机，放到每次打开应用之前。<a href=&#34;https://sspai.com/post/115237&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115237",
    date: "2026-10-10",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "本周看什么 | 最近值得一看的 11 部作品",
    summary: "📅本周新预告《寒夜怪谈》新预告10月1日，电影《寒夜怪谈》发布了新预告，将于11月13日在北美上映。缇·威斯特（《X》《珀尔》《玛克辛》）执导，约翰尼·德普回归奇幻巨制，将狄更斯名著《圣诞颂歌》改编为 ...<a href=&#34;https://sspai.com/post/115566&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/115566",
    date: "2026-10-09",
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
