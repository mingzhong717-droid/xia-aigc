export interface SolutionStep {
  step: number;
  title: string;
  description: string;
  toolIds: string[]; // references tools.ts ids
}

export interface Solution {
  id: string;
  title: string;
  icon: string;
  description: string;
  audience: string; // 适合人群
  steps: SolutionStep[];
}

export const solutions: Solution[] = [
  {
    id: "short-video",
    title: "自媒体短视频制作",
    icon: "🎬",
    description: "从脚本到发布，用AI完成一条短视频的全流程",
    audience: "短视频博主、自媒体创作者",
    steps: [
      {
        step: 1,
        title: "写脚本/文案",
        description: "用AI生成视频脚本大纲、口播文案、标题",
        toolIds: ["chatgpt", "wenxin", "kimi"],
      },
      {
        step: 2,
        title: "生成配音",
        description: "把文案转成自然的语音旁白",
        toolIds: ["tts-volcano", "elevenlabs", "reecho"],
      },
      {
        step: 3,
        title: "生成画面/素材",
        description: "AI生成视频片段或配图素材",
        toolIds: ["kling", "runway", "pika"],
      },
      {
        step: 4,
        title: "剪辑合成",
        description: "把配音、画面、字幕合成完整视频",
        toolIds: ["jianying", "capcut"],
      },
    ],
  },
  {
    id: "academic-paper",
    title: "论文写作与润色",
    icon: "📝",
    description: "从选题到终稿，AI辅助完成一篇高质量论文",
    audience: "大学生、研究生、科研工作者",
    steps: [
      {
        step: 1,
        title: "选题与文献检索",
        description: "用AI搜索论文、总结文献、寻找研究空白",
        toolIds: ["consensus", "perplexity", "aminer"],
      },
      {
        step: 2,
        title: "大纲与初稿",
        description: "生成论文结构大纲，辅助写出初稿",
        toolIds: ["chatgpt", "claude", "wenxin"],
      },
      {
        step: 3,
        title: "润色与降重",
        description: "语法纠错、学术润色、降低查重率",
        toolIds: ["grammarly", "quillbot", "writefull"],
      },
      {
        step: 4,
        title: "排版与引用",
        description: "自动生成参考文献格式、调整排版",
        toolIds: ["zotero", "notion-ai"],
      },
    ],
  },
  {
    id: "logo-branding",
    title: "品牌Logo与视觉设计",
    icon: "🎨",
    description: "零设计基础，用AI快速生成专业品牌视觉",
    audience: "创业者、小团队、电商卖家",
    steps: [
      {
        step: 1,
        title: "Logo灵感与生成",
        description: "描述品牌风格，AI生成多套Logo方案",
        toolIds: ["midjourney", "dall-e", "looka"],
      },
      {
        step: 2,
        title: "精修与矢量化",
        description: "选中方案后进行细节调整和矢量输出",
        toolIds: ["canva", "figma-ai", "vectorizer"],
      },
      {
        step: 3,
        title: "品牌延展物料",
        description: "基于Logo生成名片、海报、社交媒体封面",
        toolIds: ["canva", "meitu-design", "gaoding"],
      },
    ],
  },
  {
    id: "customer-service",
    title: "智能客服搭建",
    icon: "🤖",
    description: "用AI搭建7×24小时自动回复的客服机器人",
    audience: "电商店主、SaaS企业、社群运营",
    steps: [
      {
        step: 1,
        title: "知识库整理",
        description: "把FAQ、产品文档整理成AI可读的知识库",
        toolIds: ["notion-ai", "chatgpt", "coze"],
      },
      {
        step: 2,
        title: "搭建对话机器人",
        description: "用零代码平台创建具有业务知识的AI客服",
        toolIds: ["coze", "dify", "fastgpt"],
      },
      {
        step: 3,
        title: "接入渠道",
        description: "把机器人部署到微信、网站、飞书等平台",
        toolIds: ["coze", "dify"],
      },
    ],
  },
  {
    id: "ppt-presentation",
    title: "AI做PPT演示",
    icon: "📊",
    description: "10分钟用AI生成一份专业的演示文稿",
    audience: "职场人士、学生、培训讲师",
    steps: [
      {
        step: 1,
        title: "梳理内容大纲",
        description: "把主题交给AI，生成演讲逻辑和每页要点",
        toolIds: ["chatgpt", "kimi", "wenxin"],
      },
      {
        step: 2,
        title: "一键生成PPT",
        description: "用AI PPT工具直接生成带设计的幻灯片",
        toolIds: ["gamma", "aippt", "beautiful-ai"],
      },
      {
        step: 3,
        title: "配图与美化",
        description: "为每页补充AI生成的配图、图表",
        toolIds: ["midjourney", "dall-e", "canva"],
      },
    ],
  },
  {
    id: "english-learning",
    title: "AI学英语",
    icon: "🗣️",
    description: "用AI打造个性化英语学习+口语练习方案",
    audience: "英语学习者、备考学生、职场英语需求者",
    steps: [
      {
        step: 1,
        title: "口语对话练习",
        description: "跟AI进行真实场景的英语对话练习",
        toolIds: ["chatgpt", "speak", "pi"],
      },
      {
        step: 2,
        title: "语法与写作批改",
        description: "AI帮你批改作文、纠正语法错误",
        toolIds: ["grammarly", "quillbot", "chatgpt"],
      },
      {
        step: 3,
        title: "阅读与听力",
        description: "AI总结文章、生成词汇表、解释难句",
        toolIds: ["kimi", "immersive-translate", "chatgpt"],
      },
    ],
  },
];
