# 人人AI（xia-aigc）

面向 AI 新手的中文 AI 工具导航站，线上地址 <https://aigc778.top>。

站点收录 585 条工具记录（去重后约 542 个唯一工具，见下方「已知问题」），按 AI 对话、写作、绘画、视频、音频、PPT、编程、设计、办公、学习、搜索、资讯、生活共 13 个分类组织，并配套排行、评测、教程、新手指南、Prompt 模板、场景方案、工具对比、API 中转站和每日 AI 快讯等内容板块。

## 技术栈

| 项目 | 版本／说明 |
|---|---|
| Next.js | 15.5.19，App Router，`output: "export"` 静态导出 |
| React | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4（经 `@tailwindcss/postcss`） |
| ESLint | ^9，flat config，继承 `next/core-web-vitals` 与 `next/typescript` |
| 辅助库 | `clsx`、`tailwind-merge` |

站点为纯静态导出，**不存在 API Route 或 Route Handler**，也没有数据库或 CMS。所有内容以 TypeScript 静态数据文件形式存放在 `src/data/`。

## 本地运行

```bash
npm install        # 首次或依赖变更时
npm run dev        # 开发服务器，默认 http://localhost:3000
npm run lint       # ESLint 检查
npm run build      # 生产构建
```

要求 Node.js 20 及以上（CI 使用 Node 20，本地已在 Node 24 验证通过）。

## build 行为说明

`npm run build` 实际执行两步：

```
node scripts/generate-sitemap.js && next build
```

需要注意两点。

第一，`generate-sitemap.js` 会**改写 `public/sitemap.xml`**，而该文件纳入 Git 版本管理。因此每次本地 build 之后 `git status` 都会显示 sitemap 被修改——其中 `<lastmod>` 会更新为当日日期。这是预期行为，不是误操作。若本次改动无意提交 sitemap，请自行 checkout 还原。

第二，构建产物输出到 `out/`（静态导出目录）与 `.next/`（Next.js 中间产物），两者均已列入 `.gitignore`。

构建会预渲染全部工具详情页。当前 `tools.ts` 中有 585 条 `id` 记录，但因存在重复 ID，实际生成 542 个 `/tool/<id>/` 页面，加上 17 个其他路由，共 559 个静态页面。

## 部署

线上采用 **GitHub Pages 作为源站 + Cloudflare 作为 DNS/CDN 前置层**。

人工向 `main` 推送、以及每日快讯自动更新，都会触发构建并发布。完整的链路说明、触发关系、手动部署方式和故障排查，见 [DEPLOYMENT.md](./DEPLOYMENT.md)。

## AI 快讯自动更新机制

`.github/workflows/update-news.yml` 每天 UTC 00:00（北京时间 08:00）运行，由 `scripts/fetch-news.mjs` 从量子位、机器之心、36kr、少数派、InfoQ 五个 RSS 源抓取内容（另有 AI 工具集作为备用源），经 AI 关键词过滤后取最新 8 条，写入 `src/data/news.ts`。

脚本不依赖任何 API Key，纯公开 RSS。若抓取失败或无新内容，保留原数据不提交，不会产生空提交。内容有变化时以 `github-actions[bot]` 身份提交，并在同一次运行内**直接调用部署工作流发布上线**。

> 历史教训：2026-07-01 至 2026-08-05 期间，本工作流每天成功提交，但线上始终停留在旧版本。原因是 GitHub Actions 用默认 `GITHUB_TOKEN` 推送的提交不会触发 `push` 事件，而当时部署完全依赖 `push` 触发。两个工作流状态都是绿色，故障持续 35 天无人察觉。详见 DEPLOYMENT.md 的「静默失效风险」一节。

## 核心目录

```
src/
  app/            App Router 页面。每个交互页拆为
                  page.tsx（Server Component，负责 metadata）
                  + XxxPageClient.tsx（Client Component，负责交互）
    tool/[id]/    工具详情页，唯一动态路由，经 generateStaticParams 预渲染
  components/     11 个共享组件（ToolCard、Sidebar、HeroSection 等）
  data/           13 个静态数据文件，tools.ts 为主体（约 227 KB）
  hooks/          useDarkMode / useFavorites / useInfiniteScroll，均基于 localStorage
  lib/            工具函数
scripts/
  generate-sitemap.js   build 前置，生成 public/sitemap.xml
  fetch-news.mjs        CI 每日调用，抓取 RSS 更新快讯
  add-fields.js         历史一次性数据加工脚本，当前未被引用
public/           静态资源：sitemap.xml、robots.txt、llms.txt、ai.txt、
                  manifest.json、sw.js、CNAME 等
.github/workflows/
  deploy.yml        人工 push 部署入口
  update-news.yml   快讯抓取 + 自动部署
  deploy-pages.yml  可复用部署实现，被上面两者调用
```

## 维护入口

| 需求 | 位置 |
|---|---|
| 新增／修改工具 | `src/data/tools.ts` |
| 编辑精选与评分 | `src/data/editorial.ts` |
| 排行／评测／教程／指南等内容 | `src/data/` 下对应文件 |
| 快讯 RSS 源配置 | `scripts/fetch-news.mjs` 顶部 `RSS_SOURCES` |
| sitemap 静态路由白名单 | `scripts/generate-sitemap.js` 的 `staticPages` |
| 站点级 SEO metadata 与统计脚本 | `src/app/layout.tsx` |
| 部署链路 | `.github/workflows/` |

## 已知问题

当前状态、P0/P1 问题清单和下一步计划记录在 [PROJECT_STATUS.md](./PROJECT_STATUS.md)。其中最需要注意的是：`tools.ts` 存在 43 个重复 ID 和 72 组重复 URL，导致对外宣称的「585+」实际虚高，且 sitemap 声明的 597 条 URL 与实际生成的 559 个页面不一致。该问题已定位但**尚未处理**。

## 变更记录

历史 V3 阶段的改动记录保留在 `CHANGELOG_V3_Stage1.md` 与 `CHANGELOG_V3_Stage2.md`。
