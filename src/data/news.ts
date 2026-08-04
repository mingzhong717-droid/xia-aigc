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
// 最后更新时间: 2026-08-04 02:11:51 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "8点1氪丨宗馥莉同父异母兄弟出任新公司董事长；DeepSeek升至全球调用量第一；iPhone被曝最高或涨价超千元",
    summary: "今日热点导览 OpenAI下一代模型Astra曝光，以2000美元算力成本破解十项数学难题 江小白起诉东方甄选结果公布：东方甄选构成商业诋毁判赔30万 iPhone被曝最高或涨价超千元，折叠屏iPhone至少2000美元起售 多平台牛蛙抽检抗生素超标，有样本检测出禁用兽药 王思聪卸任万达产业投资公司",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3924467692927369?f=rss",
    date: "2026-08-04",
    category: "industry",
  },
  {
    id: "news-002",
    title: "这个新生图模型有点夯：4K直出的，国产的，开源的！",
    summary: "商汤预览了SenseNova U1.5 Lite",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/465673.html",
    date: "2026-08-03",
    category: "product",
  },
  {
    id: "news-003",
    title: "当品牌开始争夺AI的答案：翰智GEO入场",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/465662.html",
    date: "2026-08-03",
    category: "product",
  },
  {
    id: "news-004",
    title: "Demo的高估值时代结束了，具身智能开始按生产力重新算账",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/465225.html",
    date: "2026-08-03",
    category: "product",
  },
  {
    id: "news-005",
    title: "刚刚，阿里Qwen3.8-Max来了！冲进全球第一梯队，模型表现直逼Claude",
    summary: "编程、专业工作、长程任务、多模态分析统统梭哈",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/465226.html",
    date: "2026-08-03",
    category: "product",
  },
  {
    id: "news-006",
    title: "阿里Qwen3.8正式发布，编程与办公再进化，推理更快更稳定",
    summary: "阿里巴巴正式发布新一代基座大模型Qwen3.8，整体性能处于全球大模型第一梯队。Qwen3.8-Max预计下周开源，同时还将开源 Qwen3.8-27B。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/08/465215.html",
    date: "2026-08-03",
    category: "product",
  },
  {
    id: "news-007",
    title: "从实验到产线——AI 工作流的规模化挑战与协作生态 | 2026 ChinaJoy AI未来生态大会",
    summary: "AI工作流如何从实验室的“惊艳一刻”走向产线的“日常运转”？当生成能力不再是门槛，规模化落地的瓶颈在哪里，人又该扮演什么角色？ 内容生产正在经历从“技术验证”到“产业落地”的关键跨越。单点突破易，系统协同难，真正的挑战不在于模型能否生成，而在于工作流能否稳定运转、协作生态能否有效构建。技术红利终会趋",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3923717502072969?f=rss",
    date: "2026-08-03",
    category: "industry",
  },
  {
    id: "news-008",
    title: "可灵观察②｜用可灵重现《霸王别姬》：电影感足了，复杂叙事如何更稳？",
    summary: "其中高质量画面、电影感镜头、广告和商业短片是用户提及率最高的应用场景。 这次，我们进一步展开测试：如果可灵最被期待的是电影感，它能否支撑包含人物、动作和情绪的完整短片创作？ 围绕“霸王别姬”主题，我们原创了测试脚本《霸王别姬·前世今生》，使用可灵3.0的首尾帧图生视频与主体绑定功能，完成了一轮压力测",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/p/3923465542364545?f=rss",
    date: "2026-08-03",
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
