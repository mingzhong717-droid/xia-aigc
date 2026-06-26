export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  scores: Record<string, number>;
}

export interface QuizResult {
  id: string;
  title: string;
  emoji: string;
  description: string;
  tools: string[]; // tool IDs from tools.ts
  shareText: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "你平时最常用电脑/手机做什么？",
    options: [
      { text: "写文章、发朋友圈、做笔记", scores: { writing: 3, chat: 1 } },
      { text: "看视频、刷社交媒体、拍照修图", scores: { video: 2, image: 2 } },
      { text: "处理工作文档、做表格、写邮件", scores: { office: 3, ppt: 1 } },
      { text: "学习新知识、看网课、查资料", scores: { study: 3, search: 1 } },
    ],
  },
  {
    id: 2,
    question: "如果有个AI助手，你最希望它帮你做什么？",
    options: [
      { text: "帮我写出漂亮的文案和文章", scores: { writing: 3 } },
      { text: "帮我生成好看的图片和视频", scores: { image: 2, video: 2 } },
      { text: "帮我回答各种问题，像个百科全书", scores: { chat: 3, search: 1 } },
      { text: "帮我处理繁琐的办公任务", scores: { office: 3, ppt: 1 } },
    ],
  },
  {
    id: 3,
    question: "你对「翻墙」这件事的态度是？",
    options: [
      { text: "已经有梯子了，用起来没压力", scores: { foreign: 3 } },
      { text: "不太会翻墙，更喜欢国产工具", scores: { domestic: 3 } },
      { text: "能不翻就不翻，除非国产的不好用", scores: { domestic: 2, foreign: 1 } },
      { text: "翻墙是啥？听不懂", scores: { domestic: 3 } },
    ],
  },
  {
    id: 4,
    question: "你愿意为AI工具付费吗？",
    options: [
      { text: "好用的话愿意付费", scores: { paid: 3 } },
      { text: "能免费就免费，白嫖万岁", scores: { free: 3 } },
      { text: "先免费试用，好用再考虑付费", scores: { free: 2, paid: 1 } },
      { text: "不差钱，效率最重要", scores: { paid: 3 } },
    ],
  },
  {
    id: 5,
    question: "你做的内容主要给谁看？",
    options: [
      { text: "自己用/记录生活", scores: { chat: 2, study: 1 } },
      { text: "发社交媒体，希望有人看", scores: { writing: 2, image: 1, video: 1 } },
      { text: "给领导/客户看，要专业", scores: { office: 2, ppt: 2 } },
      { text: "做自媒体/副业，要能赚钱", scores: { writing: 2, video: 2, image: 1 } },
    ],
  },
  {
    id: 6,
    question: "下面哪个最让你心动？",
    options: [
      { text: "一句话就能生成一篇完整文章", scores: { writing: 3 } },
      { text: "打几个字就能画出超美的图", scores: { image: 3 } },
      { text: "上传文档秒出总结和PPT", scores: { office: 2, ppt: 2 } },
      { text: "像真人一样跟我聊天帮我分析问题", scores: { chat: 3 } },
    ],
  },
];

export const quizResults: QuizResult[] = [
  {
    id: "writer",
    title: "AI写作达人",
    emoji: "✍️",
    description: "你是文字的魔法师！AI写作工具能帮你轻松产出各种文案、文章和创意内容。从小红书种草文到公众号长文，AI都能帮你搞定。",
    tools: ["chatgpt", "claude", "kimi", "yijian"],
    shareText: "我是「AI写作达人」✍️ 文案爆款信手拈来！",
  },
  {
    id: "artist",
    title: "AI绘画艺术家",
    emoji: "🎨",
    description: "你有敏锐的审美眼光！AI绘画工具能把你脑海中的画面变成现实。无论是做海报、插画还是头像，几个关键词就能出图。",
    tools: ["midjourney", "stable-diffusion", "liblib", "jimeng"],
    shareText: "我是「AI绘画艺术家」🎨 一句话就能画出脑海中的画面！",
  },
  {
    id: "creator",
    title: "AI视频创作者",
    emoji: "🎬",
    description: "你是视觉叙事高手！AI视频工具能帮你快速制作短视频内容，从脚本到成片，效率提升10倍。",
    tools: ["runway", "kling", "jimeng-video", "pika"],
    shareText: "我是「AI视频创作者」🎬 用AI做出电影级视频！",
  },
  {
    id: "worker",
    title: "AI效率王者",
    emoji: "💼",
    description: "你是职场效率专家！AI办公工具能帮你秒做PPT、整理文档、写邮件，下班从此不加班。",
    tools: ["tongyi", "kimi", "gamma", "aippt"],
    shareText: "我是「AI效率王者」💼 别人加班我准时下班！",
  },
  {
    id: "learner",
    title: "AI学习狂人",
    emoji: "📚",
    description: "你是知识的探索者！AI学习工具能帮你快速吸收新知识，从读书笔记到英语口语，学什么都事半功倍。",
    tools: ["chatgpt", "kimi", "deepseek", "doubao"],
    shareText: "我是「AI学习狂人」📚 用AI学习效率翻10倍！",
  },
  {
    id: "chatter",
    title: "AI对话专家",
    emoji: "💬",
    description: "你喜欢跟AI深度交流！无论是头脑风暴、分析问题还是找灵感，AI是你最好的聊天搭子和智囊团。",
    tools: ["chatgpt", "claude", "deepseek", "doubao"],
    shareText: "我是「AI对话专家」💬 AI是我的超级智囊团！",
  },
];

// Calculate quiz result based on scores
export function calculateResult(answers: number[]): QuizResult {
  const totalScores: Record<string, number> = {};

  answers.forEach((optionIndex, questionIndex) => {
    const question = quizQuestions[questionIndex];
    if (question && question.options[optionIndex]) {
      const scores = question.options[optionIndex].scores;
      Object.entries(scores).forEach(([key, value]) => {
        totalScores[key] = (totalScores[key] || 0) + value;
      });
    }
  });

  // Determine primary category
  const categoryMap: Record<string, string> = {
    writing: "writer",
    image: "artist",
    video: "creator",
    office: "worker",
    ppt: "worker",
    study: "learner",
    search: "learner",
    chat: "chatter",
  };

  let maxScore = 0;
  let maxCategory = "chat";

  Object.entries(totalScores).forEach(([key, score]) => {
    if (["writing", "image", "video", "office", "ppt", "study", "search", "chat"].includes(key)) {
      if (score > maxScore) {
        maxScore = score;
        maxCategory = key;
      }
    }
  });

  const resultId = categoryMap[maxCategory] || "chatter";
  return quizResults.find((r) => r.id === resultId) || quizResults[5];
}
