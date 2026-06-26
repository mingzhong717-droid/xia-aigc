export interface ChangelogEntry {
  id: string;
  date: string;
  toolId: string; // references tools.ts id
  toolName: string;
  type: "major" | "feature" | "update" | "fix";
  title: string;
  description: string;
}

export const changelog: ChangelogEntry[] = [
  {
    id: "cl-001",
    date: "2026-06-25",
    toolId: "chatgpt",
    toolName: "ChatGPT",
    type: "major",
    title: "ChatGPT 推出 GPT-5 模型",
    description: "OpenAI正式发布GPT-5，推理能力大幅提升，支持更长上下文，多模态能力增强。",
  },
  {
    id: "cl-002",
    date: "2026-06-24",
    toolId: "claude",
    toolName: "Claude",
    type: "feature",
    title: "Claude 新增项目协作功能",
    description: "Anthropic为Claude新增多人协作项目功能，团队成员可以共享对话上下文和文件。",
  },
  {
    id: "cl-003",
    date: "2026-06-23",
    toolId: "midjourney",
    toolName: "Midjourney",
    type: "major",
    title: "Midjourney v7 正式发布",
    description: "新版本大幅提升照片级真实感、手部细节和文字渲染能力，支持更精确的构图控制。",
  },
  {
    id: "cl-004",
    date: "2026-06-22",
    toolId: "kimi",
    toolName: "Kimi",
    type: "feature",
    title: "Kimi 支持200万字超长文档",
    description: "月之暗面将Kimi的上下文窗口扩展至200万字，可以一次性处理超长PDF和书籍。",
  },
  {
    id: "cl-005",
    date: "2026-06-21",
    toolId: "cursor",
    toolName: "Cursor",
    type: "update",
    title: "Cursor 集成 Claude 4 模型",
    description: "Cursor编辑器新增Claude 4模型选项，代码生成和理解能力进一步提升。",
  },
  {
    id: "cl-006",
    date: "2026-06-20",
    toolId: "kling",
    toolName: "可灵",
    type: "major",
    title: "可灵AI推出2.0版本",
    description: "快手可灵2.0大幅提升视频生成质量，支持5分钟长视频生成和更精确的动作控制。",
  },
  {
    id: "cl-007",
    date: "2026-06-19",
    toolId: "doubao",
    toolName: "豆包",
    type: "feature",
    title: "豆包上线AI搜索功能",
    description: "字节跳动为豆包新增联网搜索能力，可以实时获取最新信息并生成回答。",
  },
  {
    id: "cl-008",
    date: "2026-06-18",
    toolId: "canva",
    toolName: "Canva",
    type: "update",
    title: "Canva AI新增视频编辑功能",
    description: "Canva的AI工具现在支持智能视频剪辑、自动字幕生成和一键风格统一。",
  },
  {
    id: "cl-009",
    date: "2026-06-17",
    toolId: "coze",
    toolName: "扣子(Coze)",
    type: "feature",
    title: "Coze 推出多Agent协作",
    description: "字节跳动Coze平台新增多Agent协作模式，多个AI助手可以互相协作完成复杂任务。",
  },
  {
    id: "cl-010",
    date: "2026-06-16",
    toolId: "gamma",
    toolName: "Gamma",
    type: "update",
    title: "Gamma 支持中文PPT模板",
    description: "Gamma新增大量中文商务PPT模板，并优化了中文排版和字体渲染。",
  },
];

export const changelogTypes = [
  { id: "all", name: "全部", color: "" },
  { id: "major", name: "重大更新", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  { id: "feature", name: "新功能", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  { id: "update", name: "优化改进", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { id: "fix", name: "问题修复", color: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400" },
];
