# 项目状态（PROJECT_STATUS）

> 最后更新：2026-08-05，由任务 XIA-RECOVERY-FIX-001 建立。
>
> 本文件记录项目的当前真实状态。**每次影响线上或部署链路的改动后都应更新**，尤其是「线上状态」一节——本项目历史上正是因为缺少这类记录，导致部署中断 35 天无人察觉。

## 基本信息

| 项 | 值 |
|---|---|
| 项目名 | 人人AI（xia-aigc） |
| 线上域名 | <https://aigc778.top> |
| 仓库 | `mingzhong717-droid/xia-aigc` |
| 默认分支 | `main` |
| 本地正式根目录 | `D:\AI\Projects\xia-aigc\` |
| package version | `0.1.0` |
| 部署架构 | GitHub Pages（源站）+ Cloudflare（DNS/CDN） |

## 当前版本

| 项 | 值 |
|---|---|
| 本轮同步前 HEAD | `9ea32f2`（2026-07-01，最后一次人工提交） |
| 本轮同步后 HEAD | `36a3484`（2026-08-05，快讯自动提交） |
| 本轮修复提交 | `6285aa1`（见下方「本轮修复结果」） |
| 本地与远端 | 已同步 |

## 构建状态

| 项 | 结果 |
|---|---|
| lint | 通过，零 error 零 warning |
| build | 通过，静态导出成功 |
| 生成页面总数 | 559 |
| 其中工具详情页 | 542 |
| 其他路由 | 17 |
| sitemap 声明 URL | 597（12 静态 + 585 工具） |

sitemap 的 597 与实际生成的 559 之间存在差额，根源是 `tools.ts` 中的重复 ID，详见下方 P1 问题。

## 线上状态

| 项 | 值 |
|---|---|
| 首页 | HTTP 200 |
| `/news/` | HTTP 200 |
| `/tool/chatgpt/` | HTTP 200 |
| `/sitemap.xml` | HTTP 200 |
| 线上内容版本 | 已随本轮修复更新至最新（详见执行报告） |

## 已知问题

### P0 — 已在本轮修复

**部署链路静默中断。** 2026-07-01 至 2026-08-05 共 35 天，AI 快讯工作流每天成功提交，但线上始终停留在 7 月 1 日版本。根因是 GitHub Actions 使用默认 `GITHUB_TOKEN` 推送的提交不会触发 `push` 事件，而当时部署完全依赖 `on: push`。两个工作流状态全程绿色，无任何告警。

本轮已通过将部署抽为可复用工作流、由快讯工作流显式调用的方式修复。详见 [DEPLOYMENT.md](./DEPLOYMENT.md)。

**本地落后远端 35 个提交。** 已通过 fast-forward 同步解决。

### P1 — 待处理

**`tools.ts` 数据重复（下一项应优先处理）。** 585 条 `id` 记录中存在 **43 个重复 ID**（cursor、perplexity、gamma、grammarly、heygen、elevenlabs、canva-ai、figma-ai、windsurf、trae、metaso、jimeng、vidu 等主流工具均在其中），另有 **72 组重复 URL**（`https://chatglm.cn` 出现 3 次，`chat.openai.com`、`chat.deepseek.com`、`cursor.com`、`character.ai` 等各 2 次）。

影响有三层。用户侧，列表与搜索结果出现同名工具重复。SEO 侧，sitemap 声明 597 条 URL 而实际只生成 559 个页面，重复 `<loc>` 属搜索引擎不友好信号。数据侧，对外宣称的「585+」实际虚高约 43，去重后约 542 个唯一工具，而该数字出现在 `layout.tsx` 的 title、description、OG 标签及 `public/ai.txt` 中。

**PWA 图标形同虚设。** `manifest.json` 声明的 64/32/24/16、192×192(maskable)、512×512(any) 三组图标 `src` 全部指向同一个 `/favicon.ico`，实际安装到桌面时图标会模糊或降级。同时 manifest 的 description 仍写「500+」，与 `layout.tsx` 的「585+」自相矛盾。

**sitemap 遗漏 `/api-transit/`。** 该页面已上线且功能完整，但不在 `scripts/generate-sitemap.js` 的 `staticPages` 白名单中，搜索引擎无法通过 sitemap 发现。修复成本极低。

**Google Search Console 未接入。** `layout.tsx` 中 `google-site-verification` meta 仍是注释状态的 `YOUR_CODE` 占位，public 下也无对应验证文件。Google 侧的索引覆盖率、抓取错误、搜索表现数据全部不可见。百度站长验证已通过 `public/baidu_verify_codeva-T80nU8gVJU.html` 正常接入。

**零测试、零数据校验。** 无测试文件、无测试依赖、CI 中无任何测试或数据校验环节。上述 43 个重复 ID 之所以能长期存在且直到专项审计才被发现，正是因为没有任何自动化关卡会拦截它。

### P2 — 后续优化

快讯自动更新无质量门槛，分类靠关键词猜测、摘要硬截断、无人工复核；快讯外链取自 RSS，无失效回查机制；RSS 摘要转载的版权边界需留意；`scripts/add-fields.js` 为历史一次性脚本，未被任何 script 或 CI 引用；`public/` 下遗留 5 个 create-next-app 的 SVG 素材；GA4 与百度统计脚本无环境判断，`npm run dev` 时同样会向生产报表上报数据；收藏功能仅存 localStorage，清缓存或换设备即丢失；`ai.txt` 声明的 `update_frequency: weekly` 与 `tool_count: 585+` 均与实际不符；远端 `gh-pages` 分支与 `pages-build-deployment` 工作流为历史方案残留（按要求保留未删）。

关于工具外链有效性：**尚未做过批量检查**，585 条外链中可能存在死链，属未验证事项。工具库最后一次成体系更新在 2026-06-26。

## 本轮修复结果（XIA-RECOVERY-FIX-001）

已完成：本地 main 由 `9ea32f2` fast-forward 同步至 `36a3484`；lint 与完整 build 双双通过，确认当前 main 可构建；将部署逻辑抽为可复用工作流 `deploy-pages.yml`，由 `deploy.yml`（人工 push）与 `update-news.yml`（快讯自动更新）共同调用，彻底摆脱对 bot push 触发 push 工作流的依赖；补齐 README、PROJECT_STATUS、DEPLOYMENT 三份文档。

未引入 PAT，未新增任何 Secret，未修改 `tools.ts`，未增加新功能或新页面，未升级依赖，未删除历史分支或工作流。

## 下一项候选任务

**唯一推荐的下一项：`tools.ts` 工具数据去重与质量治理。**

理由是它在当前所有待办中价值密度最高。数据是本站的核心资产，43 个重复 ID 同时损害用户体验、SEO 质量信号和对外数据可信度，且已经造成 sitemap 与实际产物不一致这一可量化的问题。部署链路本轮已恢复，修好的数据能够立即发布上线，不存在做完发不出去的情况。

建议范围包括：确定 43 组重复条目的取舍与字段合并规则；处理已被搜索引擎索引的重复 URL（静态导出下需评估 410 或重定向的可行性）；同步修正 `layout.tsx`、`ai.txt`、`manifest.json` 中的工具数量表述；新增一个数据校验脚本并接入 CI，防止同类问题再次沉积。

在该任务完成前，不建议启动 SEO 内容扩展或新功能开发。
