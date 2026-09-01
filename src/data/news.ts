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
// 最后更新时间: 2026-09-01 03:27:45 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "派早报：OpenClaw 推出 2.0 版本更新，网易 CC 直播正式停运等",
    summary: "少数派的近期动态能让AI助手通过自然语言指令直接与您的Quote/0摘录墨水屏交互的DotSkill已上线。点击了解你可能错过的文章全球仅剩三位数的物种，科学家却连一个准数都数不出来屏幕之外，桌面之上 ...<a href=&#34;https://sspai.com/post/114055&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114055",
    date: "2026-09-01",
    category: "product",
  },
  {
    id: "news-002",
    title: "VC疯了！200万现金冠军奖，又花4000万造了一座AI「创业乌托邦」",
    summary: "划重点：这次不是你挨家敲门，是VC排队来看你。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481928.html",
    date: "2026-08-31",
    category: "product",
  },
  {
    id: "news-003",
    title: "范式与华为达成重磅算力战略合作，成为首批拥抱国产最高端算力底座的AI企业",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481919.html",
    date: "2026-08-31",
    category: "product",
  },
  {
    id: "news-004",
    title: "「GPT-6」灰测demo刷屏！周四发布在即",
    summary: "核弹爆炸",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481893.html",
    date: "2026-08-31",
    category: "product",
  },
  {
    id: "news-005",
    title: "OpenAI买几万台Mac搞强化训练！英伟达的活被苹果抢了",
    summary: "什么样的AI业务，英伟达GPU和谷歌TPU搞不定，非得用Mac",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481759.html",
    date: "2026-08-31",
    category: "product",
  },
  {
    id: "news-006",
    title: "全国第三，公司第二，“初创黑马”灵犀智涌用ROSS Harness把机器人送进工业具身智能第一梯队",
    summary: "灵犀智涌用一台由Demo级本体组装而成的机器人，成为工业场景赛除行业头部企业外唯一获奖的机器人公司。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/481750.html",
    date: "2026-08-31",
    category: "product",
  },
  {
    id: "news-007",
    title: "本月玩什么｜Big Walk、潜龙谍影 大师合辑 Vol. 2",
    summary: "在多人联机游戏里， 你都跟同伴一起创造过怎样的回忆？<a href=&#34;https://sspai.com/post/114043&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114043",
    date: "2026-08-31",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "派评 | 近期值得关注的 App",
    summary: ">下载少数派2.0客户端、关注少数派公众号，解锁全新阅读体验📰>实用、好用的正版软件，少数派为你呈现🚀<a href=&#34;https://sspai.com/post/114041&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114041",
    date: "2026-08-31",
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
