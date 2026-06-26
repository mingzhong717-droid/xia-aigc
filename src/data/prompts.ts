export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  copyCount?: number;
}

export interface PromptCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const promptCategories: PromptCategory[] = [
  { id: "writing", name: "写作文案", icon: "✍️", description: "公众号、小红书、朋友圈文案" },
  { id: "work", name: "职场办公", icon: "💼", description: "邮件、汇报、会议纪要" },
  { id: "study", name: "学习提升", icon: "📚", description: "读书笔记、知识总结、学英语" },
  { id: "image", name: "AI绘画", icon: "🎨", description: "Midjourney、SD 提示词" },
  { id: "code", name: "编程开发", icon: "💻", description: "写代码、Debug、学编程" },
  { id: "life", name: "生活助手", icon: "🏠", description: "旅行规划、菜谱、健康建议" },
];

export const prompts: Prompt[] = [
  // 写作文案
  {
    id: "p-xiaohongshu",
    title: "小红书爆款文案",
    description: "生成吸引人的小红书风格图文内容",
    content: `你是一个小红书爆款写作专家。请按照以下要求帮我写一篇小红书文案：

主题：[填写主题]

要求：
1. 标题要有吸引力，可以用数字、emoji、疑问句
2. 开头用一句话勾起好奇心
3. 正文分点叙述，每点简短有力
4. 加入个人体验感受，有代入感
5. 结尾引导互动（点赞/收藏/关注）
6. 适当加入emoji让排版好看
7. 加 3-5 个相关话题标签`,
    category: "writing",
    tags: ["小红书", "文案", "种草"],
  },
  {
    id: "p-gongzhonghao",
    title: "公众号文章框架",
    description: "快速生成一篇有结构的公众号推文",
    content: `你是一个资深公众号写手。请帮我写一篇公众号文章：

主题：[填写主题]
目标读者：[填写目标受众]
文章调性：[轻松/专业/煽情/干货]

要求：
1. 标题：取 5 个备选标题，要有点击欲
2. 开头：用故事/数据/问题引入，50字内抓住注意力
3. 正文：分 3-5 个小节，每节有小标题
4. 结尾：总结金句 + 引导读者行动
5. 全文 800-1500 字，适合手机阅读
6. 语言口语化，避免学术腔`,
    category: "writing",
    tags: ["公众号", "文章", "自媒体"],
  },
  {
    id: "p-douyin-script",
    title: "短视频脚本生成",
    description: "生成60秒内的短视频口播脚本",
    content: `你是一个短视频脚本专家。请帮我写一个短视频口播脚本：

主题：[填写主题]
时长：60秒以内
风格：[知识分享/种草/吐槽/教程]

脚本格式：
【开头钩子】(前3秒，必须抓住注意力)
【正文内容】(分2-3个要点讲述)
【结尾引导】(引导点赞关注或评论互动)

要求：
1. 口语化表达，像跟朋友聊天
2. 节奏紧凑，不要废话
3. 每句话不超过15字
4. 标注语气和情绪变化`,
    category: "writing",
    tags: ["抖音", "短视频", "脚本"],
  },
  {
    id: "p-weekly-report",
    title: "周报/日报生成器",
    description: "根据工作内容快速生成规范周报",
    content: `请帮我把以下工作内容整理成一份规范的周报：

本周做了：
[粘贴你的工作内容，随便写，想到啥写啥]

要求：
1. 分为「本周完成」「进行中」「下周计划」三部分
2. 每条用一句话概括，突出成果和数据
3. 语言专业简洁，体现工作量和价值
4. 适当美化用词，但不要过度夸大
5. 如果有数据就加上数据，没有就不要编`,
    category: "work",
    tags: ["周报", "日报", "职场"],
  },
  {
    id: "p-email",
    title: "商务邮件润色",
    description: "让你的邮件更专业得体",
    content: `请帮我润色以下邮件内容，使其更专业、得体：

原始内容：
[粘贴你想发的邮件]

要求：
1. 保持原意不变，优化表达方式
2. 语气：[正式/友好/请求/催促]
3. 补充适当的开头问候和结尾祝福
4. 确保逻辑清晰，重点突出
5. 如果是英文邮件，用地道的商务英语表达`,
    category: "work",
    tags: ["邮件", "商务", "润色"],
  },
  {
    id: "p-meeting-notes",
    title: "会议纪要整理",
    description: "把乱七八糟的会议记录变成结构化纪要",
    content: `请帮我把以下会议记录整理成结构化的会议纪要：

会议记录：
[粘贴你的会议记录，可以很乱，想到啥写啥]

输出格式：
1. 会议主题
2. 参会人员
3. 讨论要点（分条总结）
4. 决议事项（谁做什么，截止时间）
5. 待跟进事项

要求：简洁明了，每条不超过两句话，重点突出行动项。`,
    category: "work",
    tags: ["会议", "纪要", "整理"],
  },
  {
    id: "p-book-summary",
    title: "读书笔记助手",
    description: "帮你快速理解一本书的核心内容",
    content: `请帮我用通俗易懂的语言总结这本书的核心内容：

书名：[填写书名]
作者：[填写作者]

请按以下结构输出：
1. 一句话总结：这本书在讲什么？
2. 核心观点：3-5 个最重要的观点
3. 关键概念：书中的关键术语/概念，用大白话解释
4. 行动建议：读完这本书我能做什么？
5. 金句摘录：3-5 句最有启发的话

语言风格：像朋友给你讲故事一样，简单直白，不要学术腔。`,
    category: "study",
    tags: ["读书", "笔记", "总结"],
  },
  {
    id: "p-english-teacher",
    title: "英语口语陪练",
    description: "模拟真实对话场景练口语",
    content: `你现在是我的英语口语老师。请按以下规则跟我练习：

场景：[日常聊天/商务/旅游/面试]
我的英语水平：[初级/中级/高级]

规则：
1. 用英文跟我对话，每次只说 2-3 句
2. 如果我有语法错误，先回复对话内容，然后在末尾用中文指出错误和正确说法
3. 适当引入新的词汇和表达，用中文标注意思
4. 如果我用中文回复，帮我翻译成自然的英文表达
5. 每 5 轮对话后总结我需要注意的问题

现在开始吧，你先打个招呼开始话题。`,
    category: "study",
    tags: ["英语", "口语", "学习"],
  },
  {
    id: "p-midjourney-basic",
    title: "Midjourney 提示词模板",
    description: "快速生成高质量 MJ 绘画提示词",
    content: `请帮我生成 Midjourney 绘画提示词：

我想画：[用中文描述你想画什么]

请按以下格式输出英文提示词：
[主题描述], [风格], [光线], [镜头/构图], [色调], [细节修饰] --ar [宽高比] --v 6

同时给我 3 个不同风格的版本：
1. 写实摄影风格
2. 插画/概念艺术风格  
3. 动漫/二次元风格

注意：
- 用英文输出提示词
- 每个提示词控制在 60 词以内
- 加上合适的画面比例参数`,
    category: "image",
    tags: ["Midjourney", "AI绘画", "提示词"],
  },
  {
    id: "p-sd-prompt",
    title: "Stable Diffusion 正反向提示词",
    description: "专业 SD 出图提示词结构",
    content: `请帮我生成 Stable Diffusion 的正向和反向提示词：

我想画：[用中文描述你想画什么]
风格偏好：[写实/动漫/油画/水彩/赛博朋克]

请输出：

【正向提示词 (Positive)】
(masterpiece, best quality:1.2), [具体描述], [风格词], [光线], [色调], [细节]

【反向提示词 (Negative)】  
(worst quality:1.4), (low quality:1.4), blurry, watermark, text, deformed, bad anatomy, extra limbs, ugly, duplicate

【推荐参数】
- Steps: 
- Sampler: 
- CFG Scale: 
- Size: `,
    category: "image",
    tags: ["SD", "AI绘画", "提示词"],
  },
  {
    id: "p-code-explain",
    title: "代码解释器",
    description: "让 AI 用大白话解释任何代码",
    content: `请用通俗易懂的方式解释以下代码：

\`\`\`
[粘贴你看不懂的代码]
\`\`\`

要求：
1. 先用一句话总结这段代码在做什么
2. 逐行/逐块解释，像给编程小白讲课
3. 指出代码中的关键技巧或设计模式
4. 如果有可以优化的地方，给出建议
5. 不要用太多术语，有术语就解释清楚`,
    category: "code",
    tags: ["代码", "解释", "学编程"],
  },
  {
    id: "p-debug",
    title: "Bug 修复助手",
    description: "粘贴报错信息，快速定位和修复 Bug",
    content: `我遇到了一个 Bug，请帮我分析和修复：

编程语言/框架：[如 Python/JavaScript/React]

报错信息：
\`\`\`
[粘贴完整的报错信息]
\`\`\`

相关代码：
\`\`\`
[粘贴出问题的代码]
\`\`\`

请：
1. 解释这个错误是什么意思（用大白话）
2. 分析可能的原因
3. 给出修复方案（直接给修改后的代码）
4. 解释为什么这样改就好了
5. 给出避免类似错误的建议`,
    category: "code",
    tags: ["Debug", "修Bug", "编程"],
  },
  {
    id: "p-travel",
    title: "旅行规划助手",
    description: "一键生成详细旅行攻略",
    content: `请帮我规划一次旅行：

目的地：[填写目的地]
出发时间：[填写日期]
旅行天数：[X天]
预算：[XX元/人]
出行人数：[X人]
偏好：[美食/拍照/文化/自然/购物]

请输出：
1. 每日行程安排（时间+地点+交通方式）
2. 必去景点推荐（附一句话理由）
3. 美食推荐（当地特色+推荐餐厅）
4. 住宿建议（区域+价位）
5. 注意事项和省钱小技巧
6. 需要提前预约/购票的项目`,
    category: "life",
    tags: ["旅行", "攻略", "规划"],
  },
  {
    id: "p-recipe",
    title: "家常菜谱生成",
    description: "根据现有食材推荐做什么菜",
    content: `我家里有这些食材，请推荐能做什么菜：

现有食材：[列出你有的食材]
厨艺水平：[新手/一般/熟练]
口味偏好：[清淡/重口/辣/甜]
烹饪工具：[炒锅/烤箱/空气炸锅/微波炉]

请推荐 3 道菜，每道菜包括：
1. 菜名
2. 难度等级（⭐-⭐⭐⭐）
3. 烹饪时间
4. 详细步骤（写清楚火候和时间）
5. 小技巧（让这道菜更好吃的关键）`,
    category: "life",
    tags: ["做菜", "菜谱", "食材"],
  },
];
