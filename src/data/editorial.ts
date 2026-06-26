/**
 * 编辑精选元数据 - V3.2
 * 不修改 tools.ts 数据结构，独立存放编辑推荐信息
 */

export interface EditorialPick {
  toolId: string;
  score: number; // 9.0 ~ 9.9
  oneLiner: string; // 一句话编辑点评（用户视角）
  reason: string; // 推荐理由
  audience: string; // 适合人群
}

export const editorialPicks: EditorialPick[] = [
  {
    toolId: "chatgpt",
    score: 9.8,
    oneLiner: "什么都能问，回答质量最稳定的AI助手",
    reason: "综合能力天花板，写作/编程/翻译/分析全能",
    audience: "所有人",
  },
  {
    toolId: "kimi",
    score: 9.6,
    oneLiner: "丢进去200万字文档，它帮你3分钟总结完",
    reason: "超长文本处理能力国产第一，无需翻墙",
    audience: "学生、研究员、文档重度用户",
  },
  {
    toolId: "midjourney",
    score: 9.5,
    oneLiner: "一句话描述，出图质量吊打所有竞品",
    reason: "审美天花板，出图即商用级别",
    audience: "设计师、自媒体、创意工作者",
  },
  {
    toolId: "cursor",
    score: 9.7,
    oneLiner: "用聊天的方式写代码，效率直接翻3倍",
    reason: "AI编程体验最佳，代码理解力极强",
    audience: "程序员、独立开发者",
  },
  {
    toolId: "doubao",
    score: 9.3,
    oneLiner: "抖音同款AI，语音聊天像真人一样自然",
    reason: "中文对话最自然，语音交互体验最好",
    audience: "日常聊天、学生、职场新人",
  },
  {
    toolId: "coze",
    score: 9.4,
    oneLiner: "不用写代码就能做出自己的AI机器人",
    reason: "零门槛搭建AI应用，一键发布到抖音",
    audience: "创业者、运营、产品经理",
  },
  {
    toolId: "jimeng",
    score: 9.2,
    oneLiner: "做短视频素材最快的工具，剪映团队出品",
    reason: "AI绘画+视频一体化，与剪映无缝衔接",
    audience: "短视频创作者、自媒体人",
  },
  {
    toolId: "deepseek",
    score: 9.6,
    oneLiner: "数学和代码推理能力逆天，关键还完全免费",
    reason: "推理能力比肩GPT-4，完全免费无限制",
    audience: "学生、程序员、研究人员",
  },
];

/**
 * 热门工具推荐标签
 * 替代原来的分类Tab（AI聊天、AI写作等）
 */
export interface RecommendTag {
  id: string;
  label: string;
  icon: string;
  color: string; // tailwind color key
  toolIds: string[]; // 关联的工具ID列表
}

export const recommendTags: RecommendTag[] = [
  {
    id: "editor-pick",
    label: "编辑推荐",
    icon: "🏆",
    color: "amber",
    toolIds: ["chatgpt", "kimi", "cursor", "deepseek", "midjourney", "coze"],
  },
  {
    id: "writing-first",
    label: "写作首选",
    icon: "🔥",
    color: "rose",
    toolIds: ["chatgpt", "kimi", "notion-ai", "yijian", "copy-ai", "jasper"],
  },
  {
    id: "free-use",
    label: "免费可用",
    icon: "💰",
    color: "emerald",
    toolIds: ["deepseek", "kimi", "doubao", "tongyi", "coze", "jimeng"],
  },
  {
    id: "china-pick",
    label: "国产推荐",
    icon: "⚡",
    color: "blue",
    toolIds: ["kimi", "deepseek", "doubao", "tongyi", "coze", "jimeng"],
  },
  {
    id: "newbie",
    label: "新人推荐",
    icon: "🚀",
    color: "violet",
    toolIds: ["doubao", "kimi", "tongyi", "wenxin", "jimeng", "deepseek"],
  },
];
