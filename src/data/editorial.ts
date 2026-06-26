/**
 * 编辑精选元数据 - V3.3
 * 不修改 tools.ts 数据结构，独立存放编辑推荐信息
 */

export interface EditorialPick {
  toolId: string;
  score: number; // 9.0 ~ 9.9
  oneLiner: string; // 一句话编辑点评（用户视角）
  reason: string; // 推荐理由
  audience: string; // 适合人群
  pros?: string[]; // 优点（详情页用）
  cons?: string[]; // 不足（详情页用）
  verdict?: string; // 编辑结语（详情页用）
  lastReviewed?: string; // 最近测评时间 YYYY-MM-DD
  status?: "active" | "beta" | "deprecated"; // 维护状态
}

export const editorialPicks: EditorialPick[] = [
  {
    toolId: "chatgpt",
    score: 9.8,
    oneLiner: "什么都能问，回答质量最稳定的AI助手",
    reason: "综合能力天花板，写作/编程/翻译/分析全能",
    audience: "所有人",
    pros: ["综合能力最强，几乎没有短板", "插件生态丰富，可联网/画图/运行代码", "支持GPT-4o多模态，理解图片和文件"],
    cons: ["需要翻墙才能使用", "免费版有次数限制，Pro版$20/月", "中文表达偶尔不够地道"],
    verdict: "如果只能选一个AI工具，选它。综合能力无可争议的第一名。",
    lastReviewed: "2025-06-15",
    status: "active",
  },
  {
    toolId: "kimi",
    score: 9.6,
    oneLiner: "丢进去200万字文档，它帮你3分钟总结完",
    reason: "超长文本处理能力国产第一，无需翻墙",
    audience: "学生、研究员、文档重度用户",
    pros: ["200万字超长上下文，同类第一", "文档总结/问答准确率高", "国内直连，速度快", "免费额度充足"],
    cons: ["创意写作能力一般", "代码能力弱于专业编程工具", "偶尔会产生幻觉内容"],
    verdict: "长文档处理的绝对王者。论文、法律文书、技术文档，丢进去就完事了。",
    lastReviewed: "2025-06-10",
    status: "active",
  },
  {
    toolId: "midjourney",
    score: 9.5,
    oneLiner: "一句话描述，出图质量吊打所有竞品",
    reason: "审美天花板，出图即商用级别",
    audience: "设计师、自媒体、创意工作者",
    pros: ["出图审美水平最高，风格多样", "V6版本细节惊人，接近摄影级", "社区氛围好，可参考他人作品"],
    cons: ["需要翻墙+Discord", "订阅制收费，无免费额度", "学习曲线较陡，需研究prompt技巧"],
    verdict: "追求出图质量的首选。虽然门槛略高，但产出的效果是其他工具达不到的。",
    lastReviewed: "2025-05-20",
    status: "active",
  },
  {
    toolId: "cursor",
    score: 9.7,
    oneLiner: "用聊天的方式写代码，效率直接翻3倍",
    reason: "AI编程体验最佳，代码理解力极强",
    audience: "程序员、独立开发者",
    pros: ["代码补全准确率极高", "全项目上下文理解能力强", "基于VSCode，迁移成本低", "支持多种语言和框架"],
    cons: ["Pro版$20/月，免费版有限制", "大项目偶尔会消耗较多Token", "对网络有一定要求"],
    verdict: "目前AI辅助编程体验最好的工具，没有之一。程序员必备。",
    lastReviewed: "2025-06-12",
    status: "active",
  },
  {
    toolId: "doubao",
    score: 9.3,
    oneLiner: "抖音同款AI，语音聊天像真人一样自然",
    reason: "中文对话最自然，语音交互体验最好",
    audience: "日常聊天、学生、职场新人",
    pros: ["中文对话极其自然流畅", "语音交互体验出色", "完全免费无门槛", "字节系生态打通"],
    cons: ["复杂推理能力有限", "知识覆盖不如ChatGPT广", "专业领域深度不足"],
    verdict: "日常聊天、问简单问题、语音互动的最佳选择。特别适合AI入门用户。",
    lastReviewed: "2025-06-08",
    status: "active",
  },
  {
    toolId: "coze",
    score: 9.4,
    oneLiner: "不用写代码就能做出自己的AI机器人",
    reason: "零门槛搭建AI应用，一键发布到抖音",
    audience: "创业者、运营、产品经理",
    pros: ["零代码搭建AI Bot", "可一键发布到抖音/飞书/微信", "支持知识库/插件/工作流", "免费使用"],
    cons: ["Bot能力受底层模型限制", "复杂逻辑编排有学习成本", "国际版和国内版功能不完全一致"],
    verdict: "想做自己的AI产品但不会写代码？Coze是最好的起点。",
    lastReviewed: "2025-06-05",
    status: "active",
  },
  {
    toolId: "jimeng",
    score: 9.2,
    oneLiner: "做短视频素材最快的工具，剪映团队出品",
    reason: "AI绘画+视频一体化，与剪映无缝衔接",
    audience: "短视频创作者、自媒体人",
    pros: ["与剪映生态深度整合", "AI绘画+视频生成一体化", "中文prompt理解力好", "免费额度足够日常使用"],
    cons: ["纯绘画质量不如Midjourney", "生成速度偶尔较慢", "风格多样性有限"],
    verdict: "做短视频内容创作者的效率神器，和剪映搭配使用体验极佳。",
    lastReviewed: "2025-05-28",
    status: "active",
  },
  {
    toolId: "deepseek",
    score: 9.6,
    oneLiner: "数学和代码推理能力逆天，关键还完全免费",
    reason: "推理能力比肩GPT-4，完全免费无限制",
    audience: "学生、程序员、研究人员",
    pros: ["数学/代码推理能力极强", "完全免费无任何限制", "开源模型可本地部署", "国内直连速度快"],
    cons: ["多模态能力有限", "创意写作不如ChatGPT", "偶尔回复速度较慢（高峰期）"],
    verdict: "免费工具中的天花板。做数学题、写代码、逻辑推理，直接用它。",
    lastReviewed: "2025-06-18",
    status: "active",
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
