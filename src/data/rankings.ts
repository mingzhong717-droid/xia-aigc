export interface RankingCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface RankingItem {
  toolId: string;
  score: number; // 综合评分 0-10
  popularity: number; // 热度/用户数估算
  growth: "up" | "down" | "stable"; // 趋势
  highlight: string; // 一句话亮点
}

export interface RankingList {
  categoryId: string;
  updatedAt: string;
  items: RankingItem[];
}

export const rankingCategories: RankingCategory[] = [
  { id: "overall", name: "综合热度榜", icon: "🔥", description: "全网最多人用的AI工具" },
  { id: "chat", name: "AI对话榜", icon: "💬", description: "聊天对话类工具排名" },
  { id: "writing", name: "AI写作榜", icon: "✍️", description: "写作文案类工具排名" },
  { id: "image", name: "AI绘画榜", icon: "🎨", description: "AI画图生成类排名" },
  { id: "video", name: "AI视频榜", icon: "🎬", description: "AI视频制作类排名" },
  { id: "code", name: "AI编程榜", icon: "💻", description: "编程开发辅助排名" },
  { id: "free", name: "免费好用榜", icon: "🆓", description: "不花钱就能用的精品" },
  { id: "domestic", name: "国产之光榜", icon: "🇨🇳", description: "最强国产AI工具" },
];

export const rankings: RankingList[] = [
  {
    categoryId: "overall",
    updatedAt: "2025-06-25",
    items: [
      { toolId: "chatgpt", score: 9.5, popularity: 100000000, growth: "stable", highlight: "全球用户最多的AI工具" },
      { toolId: "deepseek", score: 9.3, popularity: 50000000, growth: "up", highlight: "2025年最火的国产AI" },
      { toolId: "doubao", score: 9.0, popularity: 80000000, growth: "up", highlight: "国内日活最高" },
      { toolId: "kimi", score: 8.8, popularity: 30000000, growth: "up", highlight: "长文本处理王者" },
      { toolId: "claude", score: 9.2, popularity: 20000000, growth: "up", highlight: "代码和推理最强" },
      { toolId: "midjourney", score: 9.0, popularity: 15000000, growth: "stable", highlight: "AI绘画天花板" },
      { toolId: "tongyi", score: 8.5, popularity: 40000000, growth: "stable", highlight: "阿里生态集成好" },
      { toolId: "gemini", score: 8.8, popularity: 25000000, growth: "up", highlight: "Google全家桶联动" },
      { toolId: "kling", score: 8.5, popularity: 10000000, growth: "up", highlight: "国产AI视频第一" },
      { toolId: "jimeng", score: 8.3, popularity: 20000000, growth: "up", highlight: "免费AI绘画首选" },
    ],
  },
  {
    categoryId: "chat",
    updatedAt: "2025-06-25",
    items: [
      { toolId: "chatgpt", score: 9.5, popularity: 100000000, growth: "stable", highlight: "综合能力最强" },
      { toolId: "claude", score: 9.3, popularity: 20000000, growth: "up", highlight: "长文本和代码最佳" },
      { toolId: "deepseek", score: 9.2, popularity: 50000000, growth: "up", highlight: "推理能力顶级" },
      { toolId: "doubao", score: 9.0, popularity: 80000000, growth: "up", highlight: "语音交互体验好" },
      { toolId: "kimi", score: 8.8, popularity: 30000000, growth: "up", highlight: "200万字长文本" },
      { toolId: "gemini", score: 8.8, popularity: 25000000, growth: "up", highlight: "多模态理解强" },
      { toolId: "tongyi", score: 8.5, popularity: 40000000, growth: "stable", highlight: "办公场景优化" },
      { toolId: "wenxin", score: 8.2, popularity: 30000000, growth: "down", highlight: "中文知识库丰富" },
      { toolId: "zhipu", score: 8.0, popularity: 10000000, growth: "stable", highlight: "学术场景强" },
      { toolId: "baichuan", score: 7.8, popularity: 5000000, growth: "stable", highlight: "企业服务好" },
    ],
  },
  {
    categoryId: "writing",
    updatedAt: "2025-06-25",
    items: [
      { toolId: "kimi", score: 9.0, popularity: 30000000, growth: "up", highlight: "长文写作首选" },
      { toolId: "chatgpt", score: 9.0, popularity: 100000000, growth: "stable", highlight: "英文写作最强" },
      { toolId: "doubao", score: 8.8, popularity: 80000000, growth: "up", highlight: "短文案效果好" },
      { toolId: "notion-ai", score: 8.5, popularity: 10000000, growth: "stable", highlight: "知识管理一体化" },
      { toolId: "yijian", score: 8.3, popularity: 5000000, growth: "stable", highlight: "模板多适合小白" },
      { toolId: "copy-ai", score: 8.0, popularity: 3000000, growth: "stable", highlight: "营销文案专精" },
      { toolId: "jasper", score: 8.0, popularity: 2000000, growth: "down", highlight: "企业内容规模化" },
      { toolId: "tongyi", score: 8.2, popularity: 40000000, growth: "stable", highlight: "职场文档好用" },
    ],
  },
  {
    categoryId: "image",
    updatedAt: "2025-06-25",
    items: [
      { toolId: "midjourney", score: 9.5, popularity: 15000000, growth: "stable", highlight: "艺术质量天花板" },
      { toolId: "jimeng", score: 8.8, popularity: 20000000, growth: "up", highlight: "国内免费首选" },
      { toolId: "stable-diffusion", score: 8.5, popularity: 10000000, growth: "stable", highlight: "开源可控性最高" },
      { toolId: "liblib", score: 8.3, popularity: 5000000, growth: "up", highlight: "社区模型最丰富" },
      { toolId: "tongyi-wanxiang", score: 8.0, popularity: 8000000, growth: "stable", highlight: "中文理解最好" },
      { toolId: "dalle", score: 8.5, popularity: 10000000, growth: "stable", highlight: "自然语言理解强" },
    ],
  },
  {
    categoryId: "video",
    updatedAt: "2025-06-25",
    items: [
      { toolId: "kling", score: 9.0, popularity: 10000000, growth: "up", highlight: "国产AI视频第一" },
      { toolId: "jimeng", score: 8.5, popularity: 20000000, growth: "up", highlight: "图生视频效果好" },
      { toolId: "runway", score: 8.8, popularity: 5000000, growth: "stable", highlight: "专业级视频生成" },
      { toolId: "pika", score: 8.0, popularity: 3000000, growth: "stable", highlight: "简单好上手" },
      { toolId: "heygen", score: 8.3, popularity: 4000000, growth: "up", highlight: "数字人视频首选" },
    ],
  },
  {
    categoryId: "code",
    updatedAt: "2025-06-25",
    items: [
      { toolId: "cursor", score: 9.3, popularity: 5000000, growth: "up", highlight: "最强AI编程IDE" },
      { toolId: "deepseek", score: 9.2, popularity: 50000000, growth: "up", highlight: "免费代码生成王" },
      { toolId: "github-copilot", score: 9.0, popularity: 10000000, growth: "stable", highlight: "最成熟的代码补全" },
      { toolId: "claude", score: 9.0, popularity: 20000000, growth: "up", highlight: "复杂工程能力强" },
      { toolId: "chatgpt", score: 8.8, popularity: 100000000, growth: "stable", highlight: "全栈辅助好帮手" },
      { toolId: "tongyi-lingma", score: 8.0, popularity: 3000000, growth: "up", highlight: "国产代码助手" },
    ],
  },
  {
    categoryId: "free",
    updatedAt: "2025-06-25",
    items: [
      { toolId: "deepseek", score: 9.3, popularity: 50000000, growth: "up", highlight: "完全免费无限用" },
      { toolId: "doubao", score: 9.0, popularity: 80000000, growth: "up", highlight: "免费且功能全面" },
      { toolId: "kimi", score: 8.8, popularity: 30000000, growth: "up", highlight: "免费额度很充裕" },
      { toolId: "tongyi", score: 8.5, popularity: 40000000, growth: "stable", highlight: "办公场景完全免费" },
      { toolId: "jimeng", score: 8.3, popularity: 20000000, growth: "up", highlight: "免费AI绘画" },
      { toolId: "kling", score: 8.5, popularity: 10000000, growth: "up", highlight: "每天送免费积分" },
      { toolId: "stable-diffusion", score: 8.5, popularity: 10000000, growth: "stable", highlight: "开源永久免费" },
      { toolId: "wenxin", score: 8.2, popularity: 30000000, growth: "stable", highlight: "基础功能免费" },
    ],
  },
  {
    categoryId: "domestic",
    updatedAt: "2025-06-25",
    items: [
      { toolId: "deepseek", score: 9.3, popularity: 50000000, growth: "up", highlight: "国产推理之王" },
      { toolId: "doubao", score: 9.0, popularity: 80000000, growth: "up", highlight: "用户体量最大" },
      { toolId: "kimi", score: 8.8, popularity: 30000000, growth: "up", highlight: "长文本独步天下" },
      { toolId: "tongyi", score: 8.5, popularity: 40000000, growth: "stable", highlight: "阿里生态最强" },
      { toolId: "jimeng", score: 8.3, popularity: 20000000, growth: "up", highlight: "字节AI绘画" },
      { toolId: "kling", score: 8.5, popularity: 10000000, growth: "up", highlight: "快手AI视频" },
      { toolId: "wenxin", score: 8.2, popularity: 30000000, growth: "stable", highlight: "百度中文知识" },
      { toolId: "zhipu", score: 8.0, popularity: 10000000, growth: "stable", highlight: "清华技术背景" },
    ],
  },
];
