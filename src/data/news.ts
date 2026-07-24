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
// 最后更新时间: 2026-07-24 02:25:44 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "新晋菲尔兹奖得主，当天宣布加入OpenAI",
    summary: "他的学生刚用Fable 5推翻87年悬案",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457792.html",
    date: "2026-07-24",
    category: "product",
  },
  {
    id: "news-002",
    title: "8点1氪丨段永平称10年内大概率不会卖泡泡玛特；中国数学家王虹、邓煜获得菲尔兹奖；宜家回应甩卖8处物业：不代表退出中国市场",
    summary: "今日热点导览 混元多模态理解负责人胡瀚离职创业，原团队或将聚焦世界模型 极氪回应“海外锁车”事件 客服回应滔搏暴力打折甩卖耐克库存：没有收到降价通知 哈兰德和亚马尔2.2亿欧元身价破纪录 张雪峰女儿再接手三家公司股份 TOP 3 大新闻 段永平：10年内大概率不会卖泡泡玛特 7月23日，段永平在社交",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3908881985901959?f=rss",
    date: "2026-07-24",
    category: "industry",
  },
  {
    id: "news-003",
    title: "派早报：Acrab 发布边缘 AI 芯片 GELIX 1 和个人 AI 系统 Agent Box 等",
    summary: "欧盟委员会对 Google 处以总计 8.9 亿欧元罚款，Anthropic 扩大 Claude 语音模式支持范围。<a href=&#34;https://sspai.com/post/112677&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/112677",
    date: "2026-07-24",
    category: "product",
  },
  {
    id: "news-004",
    title: "智能体政策新闻相关背景和简要解读",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457787.html",
    date: "2026-07-23",
    category: "product",
  },
  {
    id: "news-005",
    title: "机器人为啥困在Demo？讯飞新公司爻方智能给出答案：缺一味「本体认知」",
    summary: "VLA不是终局",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457698.html",
    date: "2026-07-23",
    category: "product",
  },
  {
    id: "news-006",
    title: "阿里云：真武芯片超节点已成功适配Qwen3.8，上线百炼提供推理服务",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457694.html",
    date: "2026-07-23",
    category: "product",
  },
  {
    id: "news-007",
    title: "超越π0，中国团队用1B参数模型登顶具身智能榜单",
    summary: "具身智能正在从「参数竞赛」进入「架构竞赛」。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/07/457537.html",
    date: "2026-07-23",
    category: "product",
  },
  {
    id: "news-008",
    title: "氪星晚报 ｜DeepSeek今年已增资65%；马斯克：FSD是拉动特斯拉汽车需求的核心驱动力",
    summary: "大公司： DeepSeek今年已增资65%36氪获悉，据媒体报道，近日，DeepSeek创始人梁文锋一场4小时的投资人闭门会议实录在科技与创投圈刷屏，他明确表示“DeepSeek只有一条主线，即通往通用人工智能（AGI）”，相关话题引发关注。天眼查App显示，DeepSeek关联公司杭州深度求索成立",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3908051015488640?f=rss",
    date: "2026-07-23",
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
