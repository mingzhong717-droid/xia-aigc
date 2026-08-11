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
// 最后更新时间: 2026-08-11 01:24:17 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：Meta 发布开源本地 AI 智能体大模型 Muse Glimmer、阿里千问开放平台上线等",
    summary: "少数派的近期动态新一季少数派会员启航，更新权益，更多惊喜，还有实体纪念卡。点击了解能让AI助手通过自然语言指令直接与您的Quote/0摘录墨水屏交互的DotSkill已上线。点击了解Quote/0摘录 ...<a href=&#34;https://sspai.com/post/113301&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113301",
    date: "2026-08-11",
    category: "product",
  },
  {
    id: "news-002",
    title: "AI倒查论文100年！99.2%的顶刊都有问题&#8230;",
    summary: "科研人快来啊，天上掉选题了",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/469795.html",
    date: "2026-08-10",
    category: "product",
  },
  {
    id: "news-003",
    title: "PDF当死，ARA该立！论文是时候Agent原生了",
    summary: "以后论文的第一读者不是人，而是AI？",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/469721.html",
    date: "2026-08-10",
    category: "product",
  },
  {
    id: "news-004",
    title: "模型路线趋同之后，Physical AI的胜负手变了",
    summary: "物理AI新瓶颈已出现",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/469544.html",
    date: "2026-08-10",
    category: "product",
  },
  {
    id: "news-005",
    title: "Claude Code倒计时5天默认自动模式，多花的钱A社自己掏",
    summary: "会话越长，人的表现越差",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/469500.html",
    date: "2026-08-10",
    category: "product",
  },
  {
    id: "news-006",
    title: "Meoo秒悟团队版全量上线， 接入Qwen-3.8-Max、即日起可直接订阅",
    summary: "从面向个人的AI创作工具，扩展为可供组织使用的生产力平台",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/469493.html",
    date: "2026-08-10",
    category: "product",
  },
  {
    id: "news-007",
    title: "不再拆机飞线：借助 ACC 实现旧手机直供电「改造」",
    summary: "去年4月，我在某视频的影响下，萌生了将家里的旧安卓手机利用起来的想法。后续虽然跑起来了，但因为设备需要长期充电，电池安全又成了一个让我困扰的难题。为了解决这个问题，我在《彻底告别电池焦虑：旧手机再利用 ...<a href=&#34;https://sspai.com/prime/story/dir",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/prime/story/direct-power-supply-mod",
    date: "2026-08-10",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派2.0客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/113283&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/113283",
    date: "2026-08-10",
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
