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
// 最后更新时间: 2026-09-05 02:51:20 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "本周看什么 | 最近值得一看的 8 部作品",
    summary: "📅本周新预告《哈利·波特》剧集先导预告9月2日，剧集《哈利·波特与魔法石》发布了先导预告，第一季共8集，将于12月25日上线HBOMax。原作者J·K·罗琳担任执行制片人，多米尼克·麦克劳克林、阿拉贝 ...<a href=&#34;https://sspai.com/post/114175&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114175",
    date: "2026-09-04",
    category: "tutorial",
  },
  {
    id: "news-002",
    title: "新学期，新气象：正版软件 & 付费栏目限时优惠",
    summary: "多款付费栏目和正版软件上新，以及口碑、质量都非常优秀的现有产品优惠活动，快来看看有没有你需要的吧。<a href=&#34;https://sspai.com/post/114110&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114110",
    date: "2026-09-04",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "开学季 | 超级闹钟、算教学周、统计作业：三条快捷指令让学校生活轻松一点",
    summary: "研究一下iOS自带的快捷指令，可能会让你的学习生活也轻松不少。<a href=&#34;https://sspai.com/post/114117&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114117",
    date: "2026-09-04",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "在 16:10 屏幕普及的当下，聊聊那台最后的 4:3 版 ThinkPad T61p",
    summary: "在 2026 年用一台 4:3 屏幕的 ThinkPad 是一种什么体验？<a href=&#34;https://sspai.com/post/113990&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113990",
    date: "2026-09-04",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "派早报：OpenAI 发布 GPT-6 Astra 模型、Meta 发布 Muse Spark 1.3 模型等",
    summary: "Anthropic 升级 Claude Code 及 Cowork，微软调整 Xbox Cloud Gaming 商业模式等。<a href=&#34;https://sspai.com/post/114164&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114164",
    date: "2026-09-04",
    category: "product",
  },
  {
    id: "news-006",
    title: "金融科技盛宴（三）：银行的移动端应用",
    summary: "<blockquote> <p>导读：这是系列文章之一。本系列梳理了国内外银行信息化历程，包含区块链、云计算、物联网、移动端、人工智能各方面的应用情况。</p> </blockquote> <h2>一、移动端技术发展简介</h2> <p>本文讨论的银行移动端应用主要指手机银行，手机银行是银行对渠道端",
    source: "InfoQ",
    sourceUrl: "https://www.infoq.cn",
    url: "https://www.infoq.cn/article/TUoE8y6VxqCsBLfP2FFo?utm_source=rss&amp;utm_medium=article",
    date: "2019-12-19",
    category: "update",
  },
  {
    id: "news-007",
    title: "阿里巴巴架构再调整：鲁肃接棒行癫任CTO，孙权就任蚂蚁金服CEO",
    summary: "<p>12 月 19 日，阿里巴巴集团总裁张勇发布全员信，宣布新一轮面向未来的升级，集中发力推进全球化、内需、大数据和云计算三大战略。张勇在公开信中表示，阿里历来在最好的时刻变阵。</p> <p>此次架构调整，行癫将卸任阿里集团 CTO 工作，鲁肃调任阿里集团 CTO，向张勇汇报；蒋凡在现有淘宝天猫",
    source: "InfoQ",
    sourceUrl: "https://www.infoq.cn",
    url: "https://www.infoq.cn/article/wogJJODkzi4whCqmSv92?utm_source=rss&amp;utm_medium=article",
    date: "2019-12-19",
    category: "update",
  },
  {
    id: "news-008",
    title: "千万用户同时在线也不卡顿：优酷智能档在大型直播场景下的技术实践",
    summary: "<blockquote> <p>本文整理自阿里文娱高级技术专家肖文良在阿里文娱2019双11猫晚技术沙龙中的演讲，主要讲解了为如何通过优酷智能档减少用户卡顿，尤其是在双11直播场景下，如何提升用户观看体验。具体包括智能档的落地挑战、算法架构、技术策略等部分。</p> </blockquote> <h",
    source: "InfoQ",
    sourceUrl: "https://www.infoq.cn",
    url: "https://www.infoq.cn/article/E2HhuiTBPLLkYfVWgX9R?utm_source=rss&amp;utm_medium=article",
    date: "2019-12-19",
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
