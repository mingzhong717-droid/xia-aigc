const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'tools.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Domains that require VPN (foreign services not accessible in China)
const vpnDomains = [
  'openai.com', 'claude.ai', 'gemini.google', 'midjourney.com', 'stability.ai',
  'notion.so', 'copy.ai', 'jasper.ai', 'perplexity.ai', 'you.com', 'phind.com',
  'poe.com', 'writesonic', 'grammarly.com', 'quillbot', 'runwayml', 'pika.art',
  'heygen.com', 'synthesia.io', 'elevenlabs.io', 'murf.ai', 'soundraw.io',
  'suno.ai', 'udio.com', 'beautiful.ai', 'gamma.app', 'tome.app', 'pitch.com',
  'github.com', 'cursor.sh', 'replit.com', 'v0.dev', 'bolt.new',
  'canva.com', 'figma.com', 'looka.com', 'brandmark.io', 'designs.ai',
  'adobe.com', 'remove.bg', 'clipdrop.co', 'otter.ai', 'mem.ai', 'taskade.com',
  'clickup.com', 'zapier.com', 'make.com', 'ifttt.com', 'wolfram',
  'quizlet.com', 'deepl.com', 'google.com', 'anthropic.com',
  'invideo.io', 'lumen5.com', 'descript.com', 'fliki.ai', 'opus.pro',
  'lalal.ai', 'aiva.ai', 'boomy.com', 'beatoven.ai',
  'slidesai.io', 'decktopus.com', 'prezi.com',
  'tabnine.com', 'codeium.com', 'sourcegraph.com',
  'framer.com', 'uizard.io', 'visily.ai',
  'aiseo.ai', 'shortly.ai', 'wordtune.com', 'sudowrite.com', 'rytr.me',
  'simplified.com', 'anyword.com', 'peppertype.ai',
  'fireflies.ai', 'krisp.ai', 'reclaim.ai', 'clockwise.com',
  'duolingo.com', 'elsa', 'photomath.com', 'socratic',
  'consensus.app', 'elicit.com', 'semanticscholar.org',
  'bing.com', 'openart.ai', 'playground.com', 'leonardo.ai',
  'leiapix.com', 'getimg.ai', 'nightcafe', 'artbreeder.com',
  'pictory.ai', 'colossyan.com', 'deepbrain.io',
  'mubert.com', 'loudly.com',
  'slidesgo.com', 'mentimeter.com',
  'codium.ai', 'pieces.app', 'warp.dev',
  'khroma.co', 'autodraw.com',
  'writerly.ai', 'frase.io', 'scalenut.com', 'contentbot.ai',
  'tldv.io',
  'chatpdf.com', 'docuchat.io'
];

// Specific recommendations for well-known tools
const specificRecs = {
  'chatgpt': '万能助手，适合问答写作编程',
  'claude': '适合写长文和深度分析',
  'kimi': '适合处理超长文档和论文',
  'doubao': '适合日常聊天和语音互动',
  'wenxin': '适合中文知识问答',
  'tongyi': '适合办公和职场场景',
  'gemini': '适合看图识图和多语言',
  'deepseek': '适合数学推理和写代码',
  'notion-ai': '适合笔记整理和写作续写',
  'yijian': '适合写小红书和公众号文案',
  'copy-ai': '适合写英文营销文案',
  'jasper': '适合企业批量内容生产',
  'midjourney': '适合高品质艺术插画创作',
  'stable-diffusion': '适合技术玩家本地跑图',
  'liblib': '适合找模型和AI绘画社区',
  'tongyi-wanxiang': '适合中文描述生成图片',
  'doubao-image': '适合做社交媒体配图',
  'jimeng': '适合短视频封面和配图',
  'perplexity': '适合学术搜索和深度研究',
  'deepl': '适合高质量文档翻译',
};

// Category-based default recommendations
const categoryDefaults = {
  'chat': '适合AI对话和问答',
  'writing': '适合AI辅助写作',
  'image': '适合AI生成图片',
  'video': '适合AI制作视频',
  'audio': '适合AI音频处理',
  'ppt': '适合AI做演示文稿',
  'code': '适合AI辅助编程',
  'design': '适合AI辅助设计',
  'office': '适合AI提升办公效率',
  'learning': '适合AI辅助学习',
  'search': '适合AI智能搜索',
  'life': '适合日常生活场景',
};

// Parse tool blocks manually
const lines = content.split('\n');
const newLines = [];
let toolCount = 0;
let vpnCount = 0;
let currentId = '';
let currentUrl = '';
let currentCategory = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Track current tool's id
  const idMatch = line.match(/^\s+id:\s*"([^"]+)"/);
  if (idMatch) currentId = idMatch[1];
  
  // Track current tool's url
  const urlMatch = line.match(/^\s+url:\s*"([^"]+)"/);
  if (urlMatch) currentUrl = urlMatch[1];
  
  // Track current tool's category
  const catMatch = line.match(/^\s+category:\s*"([^"]+)"/);
  if (catMatch) currentCategory = catMatch[1];
  
  // Check if this is the hasChinese line (last field before closing brace)
  const hasChinMatch = line.match(/^(\s+)hasChinese:\s*(true|false),\s*$/);
  if (hasChinMatch && currentId && currentUrl) {
    const indent = hasChinMatch[1];
    const needVPN = vpnDomains.some(domain => currentUrl.includes(domain));
    const rec = specificRecs[currentId] || categoryDefaults[currentCategory] || '适合AI辅助工作';
    
    newLines.push(line);
    newLines.push(`${indent}needVPN: ${needVPN},`);
    newLines.push(`${indent}recommendation: "${rec}",`);
    
    toolCount++;
    if (needVPN) vpnCount++;
    
    // Reset for next tool
    currentId = '';
    currentUrl = '';
    currentCategory = '';
  } else {
    newLines.push(line);
  }
}

content = newLines.join('\n');
fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Processed ${toolCount} tools, ${vpnCount} need VPN`);
console.log('Done!');
