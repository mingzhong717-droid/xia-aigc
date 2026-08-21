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
// 最后更新时间: 2026-08-21 01:06:28 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：华为发布 Pura X View、享界 G9 等多款新品",
    summary: "影石推出竖拍云台相机 Luna Pro，森海塞尔发布 MOMENTUM True Wireless 5 真无线耳机等。<a href=&#34;https://sspai.com/post/113666&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113666",
    date: "2026-08-20",
    category: "product",
  },
  {
    id: "news-002",
    title: "新玩意 249｜少数派的编辑们最近买了啥？",
    summary: "编注：很多读者都会好奇少数派的编辑们到底平时都「买了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。内容声明：《新玩意》栏目如含有 ...<a href=&#34;https://sspai.com/post/113650&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113650",
    date: "2026-08-20",
    category: "tutorial",
  },
  {
    id: "news-003",
    title: "十年阅读历程，这是我的阅读工具推荐",
    summary: "从2017年开始，我养成了读书的习惯，到今年年底刚好完成十年的阅读之旅。在这十年里，我累计阅读的书籍有六百余本。在阅读的过程中，我使用了/曾经使用非常多的应用和服务，来辅助阅读、记录书单、整理笔记等。 ...<a href=&#34;https://sspai.com/post/113567&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113567",
    date: "2026-08-20",
    category: "tutorial",
  },
  {
    id: "news-004",
    title: "「务实且高效」的日系次旗舰：夏普 AQUOS R9 评测",
    summary: "在 R9 身上，我竟依稀能感到夏普正在谋求一种仰望星空和脚踏实地间的精妙平衡。<a href=&#34;https://sspai.com/post/113497&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113497",
    date: "2026-08-20",
    category: "tutorial",
  },
  {
    id: "news-005",
    title: "派早报：石头发布 A30 Pro Steam 3.0 洗地机、Framework 升级 Laptop 12 笔记本",
    summary: "哈浮 VERSA 飞行口袋云台相机发布，OpenAI 回应少量 Codex 用户调用 GPT-5.6 系列 AI 模型误删文件问题等。<a href=&#34;https://sspai.com/post/113638&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113638",
    date: "2026-08-20",
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
