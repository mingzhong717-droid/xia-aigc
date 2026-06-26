export interface ToolReview {
  id: string;
  toolId: string;
  title: string;
  summary: string;
  rating: number; // 1-5 星
  pros: string[];
  cons: string[];
  bestFor: string;
  verdict: string;
  date: string;
}

export const reviews: ToolReview[] = [
  {
    id: "review-deepseek",
    toolId: "deepseek",
    title: "DeepSeek 深度评测：免费的推理之王",
    summary: "DeepSeek 是 2025 年最大的惊喜——完全免费、推理能力顶级、中文表现优秀。如果你只能选一个 AI 工具，选它没错。",
    rating: 5,
    pros: ["完全免费不限次数", "数学和编程推理能力极强", "中文理解非常好", "响应速度快", "开源透明可信赖"],
    cons: ["创意写作稍弱于 ChatGPT", "没有多模态（不能看图）", "偶尔服务器拥堵"],
    bestFor: "需要强推理能力的用户：学生、程序员、研究人员",
    verdict: "2025年性价比之王。免费+强推理，国产AI的骄傲。对于绝大多数用户来说，DeepSeek 完全够用。",
    date: "2025-06-20",
  },
  {
    id: "review-doubao",
    toolId: "doubao",
    title: "豆包评测：最接地气的AI助手",
    summary: "字节跳动出品的豆包，界面友好、语音交互自然、覆盖场景多。国内日活最高的AI产品不是没有原因的。",
    rating: 4,
    pros: ["完全免费", "手机App体验优秀", "语音对话非常自然", "中文表现极好", "功能覆盖面广（写作、画图、翻译等）"],
    cons: ["深度推理不如 DeepSeek", "复杂任务偶尔出错", "PC端体验一般"],
    bestFor: "AI入门用户、日常生活助手、喜欢语音交互的用户",
    verdict: "如果你就想有一个随身AI助手，豆包是最好的选择。门槛低、功能全、体验好。推荐给所有新手。",
    date: "2025-06-18",
  },
  {
    id: "review-kimi",
    toolId: "kimi",
    title: "Kimi 评测：长文本处理的独门绝技",
    summary: "Kimi 的 200 万字上下文窗口是独家优势，适合处理论文、合同、报告等长文档。月之暗面出品，技术底蕴深厚。",
    rating: 4,
    pros: ["200万字超长上下文", "文档总结能力强", "可以直接上传文件", "中文理解好", "免费额度充裕"],
    cons: ["日常闲聊能力一般", "画图功能弱", "有时回答过于冗长"],
    bestFor: "需要处理长文档的用户：学生写论文、律师看合同、上班族整理报告",
    verdict: "Kimi 有自己的独特定位——处理长文本无人能敌。如果你经常要看很多材料、写读书笔记或总结报告，Kimi 是必备工具。",
    date: "2025-06-15",
  },
  {
    id: "review-chatgpt",
    toolId: "chatgpt",
    title: "ChatGPT 评测：AI界的iPhone",
    summary: "ChatGPT 仍然是综合能力最强的AI工具，特别是在创意写作和英文场景。但需要翻墙是最大门槛。",
    rating: 5,
    pros: ["综合能力最强", "创意写作质量最高", "多模态能力强（看图、做图、数据分析）", "插件生态丰富", "GPT-4o免费可用"],
    cons: ["需要翻墙", "中文不如国产工具", "免费版有次数限制", "Plus订阅较贵（20美元/月）"],
    bestFor: "能翻墙的用户、英文场景多的用户、追求最强体验的用户",
    verdict: "如果你能翻墙，ChatGPT 依然是体验最好的AI工具。不能翻墙的话，DeepSeek + Kimi 组合可以替代90%的功能。",
    date: "2025-06-12",
  },
  {
    id: "review-jimeng",
    toolId: "jimeng",
    title: "即梦评测：国产免费AI绘画首选",
    summary: "字节出品的即梦（原Dreamina），中文理解好、免费额度多、画质不错。想画图又不想花钱的首选。",
    rating: 4,
    pros: ["免费额度充足", "中文提示词理解好", "出图速度快", "支持图生图和视频", "国内直接用"],
    cons: ["艺术质量不如Midjourney", "复杂构图偶尔崩坏", "风格选择有限"],
    bestFor: "想免费体验AI绘画的用户、自媒体配图、社交头像",
    verdict: "不花钱也能玩AI画图，即梦是最好的选择。质量够80%场景使用，重度创作者再考虑Midjourney。",
    date: "2025-06-10",
  },
  {
    id: "review-claude",
    toolId: "claude",
    title: "Claude 评测：程序员和写作者的最爱",
    summary: "Anthropic 出品的 Claude，在代码能力和长文本写作上都是顶级水准。200K上下文、安全对齐好、输出质量高。",
    rating: 5,
    pros: ["代码能力极强", "长文本写作质量高", "逻辑推理准确", "安全性好不会胡说", "200K超长上下文"],
    cons: ["需要翻墙", "免费版限制较多", "不支持中文网页直接访问", "Pro版25美元/月"],
    bestFor: "程序员、写长文的作者、需要高质量输出的专业用户",
    verdict: "如果你写代码或长文章，Claude 是目前最好的选择。质量上甚至某些场景超过ChatGPT。但门槛是翻墙+付费。",
    date: "2025-06-08",
  },
  {
    id: "review-kling",
    toolId: "kling",
    title: "可灵评测：AI视频生成领跑者",
    summary: "快手出品的可灵，是目前国产AI视频生成中效果最好的。每天送免费积分，适合短视频创作者尝鲜。",
    rating: 4,
    pros: ["视频生成质量高", "每天有免费积分", "国内直接使用", "支持图生视频", "运动理解好"],
    cons: ["免费额度有限", "生成速度较慢", "长视频效果不稳定"],
    bestFor: "短视频创作者、想尝试AI视频的用户",
    verdict: "国产AI视频第一名实至名归。免费玩着试试，觉得好再升级会员。适合做短视频素材和创意Demo。",
    date: "2025-06-05",
  },
  {
    id: "review-cursor",
    toolId: "cursor",
    title: "Cursor 评测：编程效率提升10倍的IDE",
    summary: "Cursor 把AI能力深度集成到编辑器里，代码补全、重构、debug 都可以对话完成。2025年程序员必备工具。",
    rating: 5,
    pros: ["代码补全准确率极高", "支持整个项目上下文理解", "对话式编程体验好", "支持多种大模型后端", "VS Code 生态兼容"],
    cons: ["Pro版需付费（20美元/月）", "需翻墙使用部分功能", "偶尔卡顿", "对硬件有一定要求"],
    bestFor: "程序员、开发者、技术学习者",
    verdict: "如果你写代码，Cursor 是目前最好的 AI IDE，没有之一。免费版功能有限但够入门体验。",
    date: "2025-06-01",
  },
];
