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

// 快讯数据 - 可通过脚本自动更新
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "Claude 4 发布：Anthropic 推出最强推理模型",
    summary: "Anthropic 发布 Claude 4 系列模型，包括 Opus 4 和 Sonnet 4，在编程和推理任务上表现大幅提升。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/category/资讯",
    date: "2026-06-25",
    category: "product",
  },
  {
    id: "news-002",
    title: "GPT-5 即将发布？OpenAI 内部测试已开始",
    summary: "多方消息称 OpenAI 正在内测 GPT-5，预计将支持更长上下文窗口和多模态实时交互。",
    source: "机器之心",
    sourceUrl: "https://www.jiqizhixin.com",
    url: "https://www.jiqizhixin.com/articles",
    date: "2026-06-24",
    category: "industry",
  },
  {
    id: "news-003",
    title: "Midjourney V7 上线：画质再次突破天花板",
    summary: "Midjourney 发布 V7 版本，支持更精确的文字渲染和 3D 一致性，生成速度提升 3 倍。",
    source: "36kr",
    sourceUrl: "https://36kr.com",
    url: "https://36kr.com/information/technology/",
    date: "2026-06-23",
    category: "product",
  },
  {
    id: "news-004",
    title: "可灵 2.0 发布：国产 AI 视频生成再升级",
    summary: "快手可灵 2.0 大幅提升运动一致性和物理效果，支持 4K 分辨率输出，免费额度增加。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/category/资讯",
    date: "2026-06-22",
    category: "product",
  },
  {
    id: "news-005",
    title: "DeepSeek 开源新模型：推理成本降低 90%",
    summary: "深度求索发布新一代开源模型，在保持推理能力的同时将推理成本降低 90%，适合个人开发者部署。",
    source: "机器之心",
    sourceUrl: "https://www.jiqizhixin.com",
    url: "https://www.jiqizhixin.com/articles",
    date: "2026-06-21",
    category: "update",
  },
  {
    id: "news-006",
    title: "国内首个 AI 生成内容版权指南发布",
    summary: "国家版权局发布《人工智能生成内容版权保护指南》，明确AI生成内容的权属和使用规范。",
    source: "新华网",
    sourceUrl: "https://www.xinhuanet.com",
    url: "https://www.xinhuanet.com/tech/",
    date: "2026-06-20",
    category: "industry",
  },
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
