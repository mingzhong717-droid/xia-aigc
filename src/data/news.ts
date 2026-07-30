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
// 最后更新时间: 2026-07-30 02:04:58 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "这这这…翁荔光速回OpenAI上班了",
    summary: "6位联合创始人——只剩2名。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/462947.html",
    date: "2026-07-30",
    category: "product",
  },
  {
    id: "news-002",
    title: "派早报：中国电信将不再通过第三方互联网渠道提供号卡办理服务等",
    summary: "Bigme 大我推出 F13 彩墨屏 AI 数码相框，OpenAI 宣布开源 Codex Security CLI 等。<a href=&#34;https://sspai.com/post/112881&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112881",
    date: "2026-07-30",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "中科院院士对话北电数智AI专家：以 AI 与数学 “乘法效应” 开辟产业落地新路径",
    summary: "中科院、北电数智等专家共探数学与AI边界",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/462943.html",
    date: "2026-07-29",
    category: "product",
  },
  {
    id: "news-004",
    title: "超越OpenAI、Anthropic！国产AI安全智能体杀进全球前四、国内第一",
    summary: "AI开始组团“挖漏洞”",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/462447.html",
    date: "2026-07-29",
    category: "product",
  },
  {
    id: "news-005",
    title: "OceanBase回应融资报道：全力投入AI数据创新，与资本市场保持开放沟通",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/462380.html",
    date: "2026-07-29",
    category: "product",
  },
  {
    id: "news-006",
    title: "首个鸿蒙PC开源AI统一工作台JiuwenSwarm，办公编程一站式搞定",
    summary: "让多智能体团队随时随地为你干活",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/462065.html",
    date: "2026-07-29",
    category: "product",
  },
  {
    id: "news-007",
    title: "8点1氪丨超1100名AI公司员工联名请愿美国政府；桃酥吃出假牙冠？山姆、泸溪河回应；月之暗面Kimi已完成超35亿美元F轮融资",
    summary: "今日热点导览 C长鑫成交额达400亿元 国家烟草专卖局约谈爱奇迹（深圳）技术有限公司 外交部回应美国实施先进机器人进口限制 宝马拟在德国裁员数千人，通过自愿离职计划削减成本 美联储宣布维持利率不变 TOP3大新闻 Anthropic首席执行官等多位AI大牛签署联名信，呼吁控制人工智能发展步伐 超过1",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3917362478148993?f=rss",
    date: "2026-07-29",
    category: "industry",
  },
  {
    id: "news-008",
    title: "让AI先吃，这个国民级健康难题有解了",
    summary: "在科学减重这件事上，继战略投资薄荷健康之后，蚂蚁阿福又放了个大招。 7月29日，蚂蚁阿福宣布升级上线“AI拍饮食”功能，用户拍食物照片发给阿福，就能自动估算营养和热量信息，获得健康饮食搭配建议和运动消耗计划等，还支持一健存入个人健康档案，建立“热量账户”。吃得对不对，多不多，一目了然。 阿福此次推出",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3916800672656773?f=rss",
    date: "2026-07-29",
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
