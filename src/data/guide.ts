export interface GuideItem {
  id: string;
  question: string;
  answer: string;
  icon: string;
  relatedTools?: string[]; // tool IDs
}

export const guideItems: GuideItem[] = [
  {
    id: "what-is-ai",
    question: "AI工具到底是什么？小白能用吗？",
    icon: "🤔",
    answer: `AI工具就是"会思考的软件"。你跟它说话，它就能帮你干活——写文章、画图、做PPT、翻译、回答问题……

不需要会编程，不需要懂技术。你会打字，就会用AI。就像用搜索引擎一样简单，只是它不光能搜，还能"做"。

最简单的入门方式：打开豆包或Kimi，像跟朋友发微信一样跟它说话就行。比如说"帮我写一段自我介绍"，它就会帮你写好。`,
    relatedTools: ["doubao", "kimi", "deepseek"],
  },
  {
    id: "which-first",
    question: "第一个AI工具该用哪个？",
    icon: "🚀",
    answer: `如果你在国内，推荐从这三个开始（免费、不用翻墙、中文好）：

1. 豆包 — 字节跳动出品，适合日常聊天，有手机App，语音也能用
2. Kimi — 适合处理长文档（论文、合同、报告），上传文件直接总结
3. DeepSeek — 推理能力强，适合问复杂问题、写代码

三个都注册试一下，看哪个顺手就先用哪个。它们都是免费的。

如果你能翻墙，那 ChatGPT 和 Claude 是目前最强的两个，但需要梯子。`,
    relatedTools: ["doubao", "kimi", "deepseek", "chatgpt", "claude"],
  },
  {
    id: "how-to-talk",
    question: "怎么跟AI说话效果最好？",
    icon: "💡",
    answer: `跟AI说话有个核心技巧：说清楚你是谁、你要什么、要什么格式。

❌ 不好的问法："帮我写个文案"
✅ 好的问法："我是一个卖手工蛋糕的小店主，帮我写一条小红书种草文案，语气要亲切可爱，200字以内，加上emoji"

记住三个要素：
• 角色/背景 — 你是谁，做什么的
• 具体需求 — 要什么内容，什么风格
• 限制条件 — 字数、格式、语气等

不满意就接着说"再改改，语气更活泼一些"或"第二段重写"，AI可以一直改到你满意为止。`,
  },
  {
    id: "free-tools",
    question: "有没有完全免费的AI工具？",
    icon: "🆓",
    answer: `有很多！国产AI基本都有免费额度，日常使用完全够：

完全免费：
• 豆包 — 聊天、写作，每天不限次数
• DeepSeek — 推理、编程，基本免费
• Kimi — 文档处理，每天有免费额度

有免费版（够日常用）：
• 通义千问 — 阿里出品，办公场景好用
• 文心一言 — 百度出品，中文知识强
• 即梦 — AI画图+视频，有免费额度
• 可灵 — AI做视频，每天送积分

小技巧：多注册几个工具，轮着用免费额度，基本不花钱。`,
    relatedTools: ["doubao", "deepseek", "kimi", "tongyi", "wenxin", "jimeng", "kling"],
  },
  {
    id: "no-vpn",
    question: "不会翻墙怎么办？",
    icon: "🌐",
    answer: `完全不影响！现在国产AI工具已经非常强了，很多场景下不比 ChatGPT 差。

推荐国产平替方案：
• ChatGPT → 用豆包、Kimi、DeepSeek
• Midjourney → 用即梦、通义万相、LiblibAI
• Runway → 用可灵、即梦视频
• Notion AI → 用通义千问文档助手

在本站筛选工具时，注意看标签——带"中文"标签的都是国产工具，带"免费"的不花钱，带"需翻墙"的就是要梯子。选没有"需翻墙"标签的就行。`,
    relatedTools: ["doubao", "kimi", "deepseek", "jimeng", "tongyi-wanxiang", "kling"],
  },
  {
    id: "ai-for-work",
    question: "AI能帮我做什么具体的事？",
    icon: "⚡",
    answer: `举一些最常见的例子：

写作类：写小红书文案、公众号文章、短视频脚本、商品描述、广告语、周报日报
办公类：总结长文档、写邮件、做PPT、整理会议纪要、Excel公式
学习类：解释概念、做读书笔记、练英语口语、帮你记单词
创作类：AI画头像、做海报、生成短视频、配音、写歌
生活类：规划旅行、推荐菜谱、分析体检报告、辅导孩子作业

基本上只要是"用脑子干的活"，AI都能帮上忙。不一定比专家强，但肯定比你自己干要快。`,
  },
];
