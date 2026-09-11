export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  url: string;
  date: string;
  category: "product" | "update" | "industry" | "tutorial";
}

// 快讯数据 - 由 scripts/fetch-news.mjs 自动更新
// 最后更新时间: 2026-09-11 02:54:23 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "ECCV上，顶尖学者们开始研究如何让AI做生意了",
    summary: "多模态AI大牛轮番登台，全球64支团队组团解题",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486934.html",
    date: "2026-09-10",
    category: "product",
  },
  {
    id: "news-002",
    title: "全球首个3D原生城市世界模型ABot-Earth 0.7发布，构建AI理解真实世界的入口",
    summary: "9月10日，阿里巴巴集团旗下高德正式发布全球首个3D原生城市世界模型ABot-Earth 0.7。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486900.html",
    date: "2026-09-10",
    category: "product",
  },
  {
    id: "news-003",
    title: "全球首个可仿真的人–场景交互重建框架 HSImul3R：让人类视频真正成为机器人技能来源",
    summary: "大晓机器人联合南洋理工大学 S-Lab、上海人工智能实验室发布全新人–场景交互重建研究 HSImul3R",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486747.html",
    date: "2026-09-10",
    category: "product",
  },
  {
    id: "news-004",
    title: "这个新开源的世界模型只有1.3B，单卡就能实时跑！",
    summary: "轻量版LingBot-World 2.0",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486716.html",
    date: "2026-09-10",
    category: "product",
  },
  {
    id: "news-005",
    title: "AGI时代的第一个生图模型，ChatGPT Images 2.5上线",
    summary: "主打生成更快，细节更好，改图也终于越来越像“真·修图”了。",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/486684.html",
    date: "2026-09-10",
    category: "product",
  },
  {
    id: "news-006",
    title: "派早报：商务部回应美国 AI 蒸馏指控",
    summary: "<p>商务部回应美国 AI 蒸馏指控</p><p>谷歌声称为了合规将「降级」欧盟搜索服务</p><p>Apple 智能将有用量限制</p><p>OpenAI 将与三星合作开发芯片</p><p>小岛秀夫新游戏被索尼取消，转由微软发行</p><p>DeepSeek V4.1 发布</p><p>看看就行的",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114439",
    date: "2026-09-10",
    category: "tutorial",
  },
  {
    id: "news-007",
    title: "App+1｜下一节：教学工作紧张忙碌，下一节课从从容容",
    summary: "祝每一位老师教师节快乐！<a href=&#34;https://sspai.com/post/114384&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114384",
    date: "2026-09-10",
    category: "tutorial",
  },
  {
    id: "news-008",
    title: "派早报：Apple 发布 iPhone Duo 折叠屏等",
    summary: "奥之心发布 OM SYSTEM PEN 相机、Sonos 更新音频系统等。<a href=&#34;https://sspai.com/post/114394&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114394",
    date: "2026-09-09",
    category: "product",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
