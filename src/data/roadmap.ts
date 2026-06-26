export interface RoadmapStage {
  stage: number;
  title: string;
  duration: string;
  description: string;
  skills: string[];
  toolIds: string[];
}

export interface Roadmap {
  id: string;
  title: string;
  icon: string;
  audience: string;
  description: string;
  stages: RoadmapStage[];
}

export const roadmaps: Roadmap[] = [
  {
    id: "content-creator",
    title: "自媒体/内容创作者",
    icon: "📱",
    audience: "短视频博主、公众号作者、小红书博主",
    description: "从0到1学会用AI辅助内容创作，提升产出效率10倍",
    stages: [
      {
        stage: 1,
        title: "入门：学会跟AI对话",
        duration: "1-2天",
        description: "掌握基础的AI对话技巧，能让AI帮你写出基本的文案",
        skills: ["基础提问技巧", "让AI改写文案", "生成创意灵感"],
        toolIds: ["chatgpt", "kimi", "doubao"],
      },
      {
        stage: 2,
        title: "进阶：AI写作全流程",
        duration: "1周",
        description: "用AI完成选题、大纲、正文、标题的全流程写作",
        skills: ["长文写作", "爆款标题", "多平台适配", "Prompt进阶"],
        toolIds: ["claude", "notion-ai", "jasper"],
      },
      {
        stage: 3,
        title: "视觉：AI图片和视频",
        duration: "1-2周",
        description: "学会用AI生成配图、封面、短视频素材",
        skills: ["AI绘图", "图片编辑", "视频脚本", "配音生成"],
        toolIds: ["midjourney", "dall-e", "kling", "jianying"],
      },
      {
        stage: 4,
        title: "高阶：自动化工作流",
        duration: "持续提升",
        description: "把各个AI工具串联成自动化流水线，批量产出内容",
        skills: ["工具组合", "批量生成", "数据分析", "AI Agent"],
        toolIds: ["coze", "dify", "zapier"],
      },
    ],
  },
  {
    id: "developer",
    title: "程序员/开发者",
    icon: "💻",
    audience: "前后端开发、全栈、独立开发者",
    description: "让AI成为你的编程伙伴，代码效率翻倍",
    stages: [
      {
        stage: 1,
        title: "入门：AI辅助编码",
        duration: "2-3天",
        description: "在IDE中使用AI补全代码、解释代码、修Bug",
        skills: ["代码补全", "代码解释", "Debug辅助"],
        toolIds: ["github-copilot", "cursor", "codeium"],
      },
      {
        stage: 2,
        title: "进阶：AI驱动开发",
        duration: "1-2周",
        description: "让AI帮你写单元测试、做Code Review、重构代码",
        skills: ["测试生成", "代码重构", "架构设计", "文档生成"],
        toolIds: ["claude", "chatgpt", "cursor"],
      },
      {
        stage: 3,
        title: "实战：全栈AI开发",
        duration: "2-4周",
        description: "用AI从零构建完整项目，前后端+部署全搞定",
        skills: ["全栈开发", "API设计", "数据库设计", "DevOps"],
        toolIds: ["v0", "bolt", "replit-ai"],
      },
      {
        stage: 4,
        title: "高阶：构建AI应用",
        duration: "持续提升",
        description: "自己开发AI驱动的产品和应用",
        skills: ["LLM API", "RAG", "Agent开发", "Fine-tuning"],
        toolIds: ["dify", "coze", "fastgpt"],
      },
    ],
  },
  {
    id: "designer",
    title: "设计师",
    icon: "🎨",
    audience: "UI/UX设计师、平面设计、电商设计",
    description: "用AI加速设计流程，从灵感到交付效率飞升",
    stages: [
      {
        stage: 1,
        title: "入门：AI生成灵感",
        duration: "2-3天",
        description: "用AI快速生成设计灵感、参考图、配色方案",
        skills: ["Prompt描述", "风格词汇", "构图指导"],
        toolIds: ["midjourney", "dall-e", "stable-diffusion"],
      },
      {
        stage: 2,
        title: "进阶：AI辅助设计",
        duration: "1-2周",
        description: "把AI融入日常设计工作流，生成素材和变体",
        skills: ["图片编辑", "背景移除", "风格迁移", "图标生成"],
        toolIds: ["canva", "meitu-design", "remove-bg"],
      },
      {
        stage: 3,
        title: "实战：商业设计项目",
        duration: "2-3周",
        description: "用AI完成品牌设计、海报、电商详情页等商业项目",
        skills: ["品牌设计", "海报设计", "电商设计", "批量出图"],
        toolIds: ["canva", "gaoding", "looka"],
      },
      {
        stage: 4,
        title: "高阶：AI+设计创新",
        duration: "持续提升",
        description: "探索AI在设计领域的前沿应用，创造独特风格",
        skills: ["ControlNet", "模型训练", "3D生成", "动态设计"],
        toolIds: ["comfyui", "stable-diffusion", "runway"],
      },
    ],
  },
  {
    id: "student",
    title: "大学生/考研党",
    icon: "📚",
    audience: "本科生、研究生、备考学生",
    description: "用AI提升学习效率，写论文、学英语、备考样样行",
    stages: [
      {
        stage: 1,
        title: "入门：AI学习助手",
        duration: "1-2天",
        description: "让AI帮你解题、总结知识点、制作复习卡片",
        skills: ["知识问答", "总结笔记", "制作大纲"],
        toolIds: ["chatgpt", "kimi", "doubao"],
      },
      {
        stage: 2,
        title: "进阶：论文与研究",
        duration: "1-2周",
        description: "用AI辅助文献检索、论文写作、学术润色",
        skills: ["文献检索", "论文大纲", "学术写作", "降重润色"],
        toolIds: ["consensus", "perplexity", "grammarly"],
      },
      {
        stage: 3,
        title: "语言学习",
        duration: "持续",
        description: "用AI练口语、改作文、背单词、提升外语水平",
        skills: ["口语对话", "写作批改", "翻译理解"],
        toolIds: ["speak", "grammarly", "immersive-translate"],
      },
      {
        stage: 4,
        title: "效率提升",
        duration: "持续",
        description: "用AI工具提升日常学习和生活效率",
        skills: ["PPT制作", "思维导图", "时间管理", "知识库"],
        toolIds: ["gamma", "notion-ai", "aippt"],
      },
    ],
  },
  {
    id: "marketer",
    title: "运营/市场营销",
    icon: "📈",
    audience: "电商运营、品牌营销、社群运营",
    description: "用AI提升营销效率，从文案到数据分析全覆盖",
    stages: [
      {
        stage: 1,
        title: "入门：AI写营销文案",
        duration: "2-3天",
        description: "用AI快速写出各种营销文案、广告语、推文",
        skills: ["文案撰写", "标题优化", "多风格适配"],
        toolIds: ["chatgpt", "wenxin", "jasper"],
      },
      {
        stage: 2,
        title: "进阶：视觉物料生成",
        duration: "1周",
        description: "用AI生成海报、Banner、社交媒体配图",
        skills: ["海报设计", "产品图", "社交图片"],
        toolIds: ["canva", "gaoding", "meitu-design"],
      },
      {
        stage: 3,
        title: "数据分析与洞察",
        duration: "1-2周",
        description: "用AI分析用户数据、竞品情况、市场趋势",
        skills: ["数据分析", "报告生成", "竞品分析"],
        toolIds: ["chatgpt", "claude", "perplexity"],
      },
      {
        stage: 4,
        title: "自动化营销",
        duration: "持续提升",
        description: "搭建AI驱动的自动化营销流程",
        skills: ["客服机器人", "邮件自动化", "内容分发"],
        toolIds: ["coze", "dify", "zapier"],
      },
    ],
  },
];
