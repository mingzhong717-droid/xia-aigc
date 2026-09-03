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
// 最后更新时间: 2026-09-03 02:50:37 UTC
export const news: NewsItem[] = [
  {
    id: "news-001",
    title: "神秘具身团队又放出一连串很炸的Demo视频…自进化模型，技术路线曝光",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/483552.html",
    date: "2026-09-03",
    category: "product",
  },
  {
    id: "news-002",
    title: "派早报：Google 发布 Gemini 3.8 Flash、理想推出新一代 MEGA 等",
    summary: "World Labs 发布多模态世界模型 Atlas、阿里千问推出 Qwen3.8-Max-0902 等。<a href=&#34;https://sspai.com/post/114113&#34; target=&#34;_blank&#34;>查看全文</a>",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114113",
    date: "2026-09-03",
    category: "product",
  },
  {
    id: "news-003",
    title: "还在为大模型洗数据熬夜？蚂蚁拿下VLDB工业最佳论文，一套宽表搞定35PB语料，效率狂飙5.6倍",
    summary: "蚂蚁集团推出统一宽表系统OmniTable，论文获评VLDB 2026工业赛道最佳论文",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/483104.html",
    date: "2026-09-02",
    category: "product",
  },
  {
    id: "news-004",
    title: "阿里更新旗舰模型Qwen3.8-Max，前端编程能力跃居全球第一",
    summary: "",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/483101.html",
    date: "2026-09-02",
    category: "update",
  },
  {
    id: "news-005",
    title: "前字节强化学习专家孙鹏博士加盟星尘智能，完善Physical AI全栈技术布局",
    summary: "9月2日，前字节跳动强化学习专家、前腾讯Robotics X智能体中⼼负责⼈孙鹏博⼠正式加入星尘智能",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/483097.html",
    date: "2026-09-02",
    category: "product",
  },
  {
    id: "news-006",
    title: "企业级Agent落地样板间！百融硅基员工批量上岗，按结果领工资",
    summary: "AI客服日扛1.5万通电话",
    source: "量子位",
    sourceUrl: "https://www.qbitai.com",
    url: "https://www.qbitai.com/2026/09/482967.html",
    date: "2026-09-02",
    category: "product",
  },
  {
    id: "news-007",
    title: "除了折叠屏 iPhone，Apple 发布会还有哪些看点？",
    summary: "上周，Apple公布了今年秋季发布会的时间和主题，这场名为「Surpriseandshine」的发布会将于北京时间9月10日凌晨一点在ApplePark举行。与过去两年的秋季发布会不同，今年的「科技春 ...<a href=&#34;https://sspai.com/post/114084&#34",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/114084",
    date: "2026-09-02",
    category: "product",
  },
  {
    id: "news-008",
    title: "一日一技 | 借助 PowerShell 自定义 Windows 更新暂停时间",
    summary: "Windows 下的累计更新会修复大量的安全漏洞，虽然可以暂停更新但是最长只能暂停 35 天，35 天后 Windows 电脑就要强行帮你更新了，而本文介绍了一种突破暂停最大时间的方法。<a href=&#34;https://sspai.com/post/80562&#34; target=&#3",
    source: "少数派",
    sourceUrl: "https://sspai.com",
    url: "https://sspai.com/post/80562",
    date: "2026-09-02",
    category: "update",
  }
];

export const newsCategories = [
  { id: "all", name: "全部", icon: "📡" },
  { id: "product", name: "新品发布", icon: "🚀" },
  { id: "update", name: "产品更新", icon: "🔄" },
  { id: "industry", name: "行业动态", icon: "📰" },
  { id: "tutorial", name: "教程资源", icon: "📚" },
];
