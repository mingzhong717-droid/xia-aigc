# 项目状态（PROJECT_STATUS）

> 最后更新：2026-08-05，由任务 XIA-RECOVERY-FIX-001 建立；由 XIA-RECOVERY-FIX-002-A / 002-B 修订（部署目标精确 SHA 传递修复）。
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
| FIX-001 同步前 HEAD | `9ea32f2`（2026-07-01，最后一次人工提交） |
| FIX-001 同步后 HEAD | `36a3484`（2026-08-05，快讯自动提交） |
| FIX-001 修复提交 | `6285aa1` |
| FIX-002-A/B 修复提交 | `845dc17`（精确 SHA 部署修复） |
| 本地与远端 | 以本文件末尾「最终 Git 状态」为准 |

## 构建状态

| 项 | 结果 |
|---|---|
| lint | 通过，零 error 零 warning |
| build | 通过，静态导出成功 |
| 生成页面总数 | 559 |
| 其中工具详情页 | 542 |
| 其他路由 | 17 |
| sitemap 声明 URL | 597（12 静态 + 585 工具） |

### 页面数量差额的准确口径

基础数据：

```
工具总记录：585
唯一工具 ID：542
重复超额记录：43
sitemap URL：597
实际静态页面：559
```

差额由**两部分**构成，不能只用重复 ID 解释：

```
总差额：597 - 559 = 38

工具部分相差：585 - 542 = 43
非工具页面口径相差：17 - 12 = 5（实际产出比 sitemap 多 5 项）

最终：43 - 5 = 38
```

即 sitemap 只登记了 12 个静态路由，而实际构建产出 17 个非工具页面（含 `/_not-found`、`/api-transit` 等未入 sitemap 白名单的页面），这部分反向抵消了 5 项。

**术语注意：**上述 43 指的是「重复超额记录数」（585 - 542），**不是「43 个重复 ID 分组」**。当前重复 ID 的分组数量尚未做专项统计，**待数据治理任务确认**。

## 线上状态

截至 2026-08-05 17:20（本轮修复部署完成后实测）：

| 项 | 值 |
|---|---|
| 首页 | HTTP 200 |
| `/news/` | HTTP 200 |
| `/tool/chatgpt/` | HTTP 200 |
| `/sitemap.xml` | HTTP 200 |
| `Last-Modified` | `Wed, 05 Aug 2026 09:14:25 GMT`（修复前长期停留在 `Wed, 01 Jul 2026 13:02:44 GMT`） |
| 线上快讯日期 | 2026-08-04 / 2026-08-05（修复前停留在 2026-06-30 / 2026-07-01） |
| 线上 sitemap | 597 条 URL，`lastmod` 均为 2026-08-05（修复前冻结在 2026-06-27） |

持续 35 天的「仓库每天更新、线上纹丝不动」状态已解除。

需要注意：上述线上状态对应的是 `9be312b`，即 FIX-002-A/B 修复推送之前的版本。修复推送后的实测结果记录在下方「精确 SHA 部署验证」一节。

## 已知问题

### P0 — 已在 FIX-001 修复

**部署链路静默中断。** 2026-07-01 至 2026-08-05 共 35 天，AI 快讯工作流每天成功提交，但线上始终停留在 7 月 1 日版本。根因是 GitHub Actions 使用默认 `GITHUB_TOKEN` 推送的提交不会触发 `push` 事件，而当时部署完全依赖 `on: push`。两个工作流状态全程绿色，无任何告警。

已通过将部署抽为可复用工作流、由快讯工作流显式调用的方式修复。详见 [DEPLOYMENT.md](./DEPLOYMENT.md)。

**本地落后远端 35 个提交。** 已通过 fast-forward 同步解决。

### P0 — FIX-002-A 发现，修复方案已实施

**自动链路可能部署旧 SHA。** FIX-001 恢复了「部署会被调用」，但遗留了第二个结构性问题：`workflow_call` 默认继承调用方触发时的上下文，`actions/checkout` 不指定 `ref` 时取到的是**定时任务启动时的旧 SHA**。而 bot commit 是在 job 运行期间才产生的，因此部署构建的可能是不包含当日快讯的旧快照。

危害在于它比上一个问题更难发现：commit 推送成功、部署执行成功、`Last-Modified` 也确实前移（确实重新构建发布了一次），**但页面快讯依然是旧的**。

本轮已在本地通过显式 SHA 输入机制修复：`deploy-pages.yml` 增加必填输入 `ref` 与 `Verify checkout SHA` 校验步骤；`deploy.yml` 传入 `github.sha`；`update-news.yml` 把实际提交并成功 push 的 SHA 通过 job output 传给部署。

人工 push 链路的精确 SHA 验证结果见下方「精确 SHA 部署验证」一节。自动快讯链路的结构修复已随同一提交入库，但仍需一次**真实产生新闻变化的 scheduled run** 才能完成验收。

### P1 — 待处理

**`tools.ts` 数据重复（下一项应优先处理）。** 585 条工具记录中，唯一 `id` 仅 542 个，即存在 **43 条重复超额记录**（cursor、perplexity、gamma、grammarly、heygen、elevenlabs、canva-ai、figma-ai、windsurf、trae、metaso、jimeng、vidu 等主流工具均在其中），另有 **72 组重复 URL**（`https://chatglm.cn` 出现 3 次，`chat.openai.com`、`chat.deepseek.com`、`cursor.com`、`character.ai` 等各 2 次）。

> 术语注意：43 是**重复超额记录数**（585 - 542），不等于重复 ID 的分组数量。分组数量**待数据治理任务确认**。

影响有三层。用户侧，列表与搜索结果出现同名工具重复。SEO 侧，sitemap 声明 597 条 URL 而实际只生成 559 个页面（差额构成见上方「页面数量差额的准确口径」），重复 `<loc>` 属搜索引擎不友好信号。数据侧，对外宣称的「585+」实际虚高 43，去重后为 542 个唯一工具，而该数字出现在 `layout.tsx` 的 title、description、OG 标签及 `public/ai.txt` 中。

**PWA 图标形同虚设。** `manifest.json` 声明的 64/32/24/16、192×192(maskable)、512×512(any) 三组图标 `src` 全部指向同一个 `/favicon.ico`，实际安装到桌面时图标会模糊或降级。同时 manifest 的 description 仍写「500+」，与 `layout.tsx` 的「585+」自相矛盾。

**sitemap 遗漏 `/api-transit/`。** 该页面已上线且功能完整，但不在 `scripts/generate-sitemap.js` 的 `staticPages` 白名单中，搜索引擎无法通过 sitemap 发现。修复成本极低。

**Google Search Console 未接入。** `layout.tsx` 中 `google-site-verification` meta 仍是注释状态的 `YOUR_CODE` 占位，public 下也无对应验证文件。Google 侧的索引覆盖率、抓取错误、搜索表现数据全部不可见。百度站长验证已通过 `public/baidu_verify_codeva-T80nU8gVJU.html` 正常接入。

**零测试、零数据校验。** 无测试文件、无测试依赖、CI 中无任何测试或数据校验环节。上述 43 条重复记录之所以能长期存在且直到专项审计才被发现，正是因为没有任何自动化关卡会拦截它。

### P2 — 后续优化

快讯自动更新无质量门槛，分类靠关键词猜测、摘要硬截断、无人工复核；快讯外链取自 RSS，无失效回查机制；RSS 摘要转载的版权边界需留意；`scripts/add-fields.js` 为历史一次性脚本，未被任何 script 或 CI 引用；`public/` 下遗留 5 个 create-next-app 的 SVG 素材；GA4 与百度统计脚本无环境判断，`npm run dev` 时同样会向生产报表上报数据；收藏功能仅存 localStorage，清缓存或换设备即丢失；`ai.txt` 声明的 `update_frequency: weekly` 与 `tool_count: 585+` 均与实际不符；远端 `gh-pages` 分支与 `pages-build-deployment` 工作流为历史方案残留（按要求保留未删）。

关于工具外链有效性：**尚未做过批量检查**，585 条外链中可能存在死链，属未验证事项。工具库最后一次成体系更新在 2026-06-26。

## 本轮修复结果（XIA-RECOVERY-FIX-001）

已完成：本地 main 由 `9ea32f2` fast-forward 同步至 `36a3484`；lint 与完整 build 双双通过，确认当前 main 可构建；将部署逻辑抽为可复用工作流 `deploy-pages.yml`，由 `deploy.yml`（人工 push）与 `update-news.yml`（快讯自动更新）共同调用，彻底摆脱对 bot push 触发 push 工作流的依赖；补齐 README、PROJECT_STATUS、DEPLOYMENT 三份文档。

未引入 PAT，未新增任何 Secret，未修改 `tools.ts`，未增加新功能或新页面，未升级依赖，未删除历史分支或工作流。

验证状态需要区分两条链路。**人工 push 链路已实测通过**：提交 `94c6c32` 触发 `Deploy to GitHub Pages`（run id `30992326374`），`build` 与 `deploy` 两个 job 均以 `deploy /` 前缀执行成功，证明可复用工作流被正确调用，线上 `Last-Modified` 与快讯内容随之更新。**快讯自动链路目前为结构性验证**：`deploy` job 的 `needs` 依赖、`if` 条件与 `outputs.changed` 输出链已逐项核对无误，且与人工链路共用同一份经实测的部署实现，但尚未经历一次真实的定时运行。

因此需要在**下一次定时快讯更新（每日 UTC 00:00，即北京时间 08:00 前后）之后复核一次**：确认 `Auto Update AI News` 运行中出现 `deploy` job 且未被跳过，并确认线上 `Last-Modified` 再次前移。该复核完成前，自动链路不应被视为已完全验证。

补充（FIX-002-A）：上述复核除了看 `deploy` job 是否执行、`Last-Modified` 是否前移，还必须额外比对 **bot commit SHA = requested SHA = checkout SHA**，并直接核对线上 `/news/` 页面的快讯日期。仅凭绿灯与 `Last-Modified` 不足以证明新内容已上线。

## 本轮修复结果（XIA-RECOVERY-FIX-002-A）

**性质：本地实施与验证，不提交、不推送、不部署。**

修复对象是 FIX-001 遗留的结构性风险：自动链路可能 checkout 定时任务启动时的旧 SHA，从而发布不包含当日快讯的旧快照。

已修改五个文件：`deploy-pages.yml`（新增必填输入 `ref`、checkout 显式使用该 SHA、新增 `Verify checkout SHA` 校验步骤）、`deploy.yml`（传入 `github.sha`）、`update-news.yml`（commit 步骤增加 `id`，push 成功后输出 SHA，新增 job output `commit_sha`，deploy 传入该 SHA）、`DEPLOYMENT.md`、`PROJECT_STATUS.md`。

本地验证：lint 通过（退出码 0，零 error 零 warning）；build 通过（退出码 0，559 个静态页面）；三个工作流的触发器、调用关系、ref 来源与递归安全性均已逐项校验。

未修改 `tools.ts`，未修改 `src/` 下任何文件，未修改依赖，未新增 Secret 或 PAT。

本节记录的是本轮修复方案及其验证要求。实际修复提交 SHA、GitHub Actions run 和人工 push 部署结果，记录在下方「精确 SHA 部署验证（XIA-RECOVERY-FIX-002-B）」一节。

## 精确 SHA 部署验证（XIA-RECOVERY-FIX-002-B）

### 人工 push 链路

**✅ 已完成精确 SHA 实测验证。**

| 验证项 | 实测值 |
|---|---|
| 修复提交 SHA | `845dc1720d4ef428f76e47bb8184fcc99aa18ec5` |
| 提交信息 | `fix(ci): deploy the exact commit SHA` |
| Actions run ID | `30997635397` |
| workflow | Deploy to GitHub Pages（`.github/workflows/deploy.yml`） |
| event | `push` |
| run_attempt | 1 |
| run head_sha | `845dc1720d4ef428f76e47bb8184fcc99aa18ec5` |
| `deploy / build` | success（9 个业务 step 全部 success） |
| `Verify checkout SHA` step | **success** |
| `deploy / deploy` | success |
| Pages deployment id | `5759958243` |
| **deployment.sha** | **`845dc1720d4ef428f76e47bb8184fcc99aa18ec5`** |
| deployment 最终 state | `success` |

**SHA 一致性结论：commit SHA = run head_sha = deployment.sha = `845dc172...`，三者完全相等（完整 40 位）。** `Verify checkout SHA` 步骤 success 证明 requested SHA 与 checkout 实际 SHA 也相等——该步骤的唯一逻辑就是两者不等则 `exit 1`，因此它通过即等价于断言成立。

未出现 fallback 到 `main`，未出现 Secret、PAT 或权限错误。

### 线上验证（第一提交后）

| 路由 | 状态 | Last-Modified |
|---|---|---|
| `/` | 200 | `Wed, 05 Aug 2026 10:30:47 GMT` |
| `/news/` | 200 | 同上 |
| `/tool/chatgpt/` | 200 | 同上 |
| `/sitemap.xml` | 200 | 同上 |

页面内容正常加载（首页 112 KB、快讯页 26 KB、详情页 71 KB，title 均正确），无 404 / 500 / 应用错误，无静态资源异常。线上 sitemap 597 条 URL、`lastmod` 均为 2026-08-05；`/news/` 快讯日期为 2026-08-04 / 2026-08-05。

需要说明：本次技术提交未修改网站业务内容，因此人工链路的**决定性证据是 SHA 三者一致**；`Last-Modified` 前移与线上 200 仅为补充证据，不能代替 SHA 校验。

### 自动快讯链路

⚠️ 结构修复已提交，仍待一次真实产生新闻变化的 scheduled run 验证。

人工 push 链路的验证**不能替代**自动链路验证。两者虽共用同一份 `deploy-pages.yml`，但 ref 来源不同：人工链路用 `github.sha`，自动链路用 commit step 输出的 `commit_sha`——后者的正确性只有在真实产生 bot commit 时才能被检验。

### 自动链路待验收清单

下一次定时任务运行后，需逐项确认：

1. `news.ts` 确实发生变化；
2. workflow 产生新的 bot commit；
3. commit step output 等于 bot commit SHA；
4. `deploy` job 未被跳过；
5. requested SHA 等于 bot commit SHA；
6. checkout SHA 等于 bot commit SHA；
7. build 与 deploy 均成功；
8. 线上 `/news/` 出现本次新增快讯。

若当次定时任务无内容变化，`deploy` 被 skip 是**正确结果**，但不能作为「有变化链路已验证」的证据。

## 最终 Git 状态

截至 XIA-RECOVERY-FIX-002-B 完成：

| 项 | 值 |
|---|---|
| 分支 | `main` |
| 本轮提交一 | `845dc17` — fix(ci): deploy the exact commit SHA |
| 本轮提交二 | 见下方回填 |
| 工作区 | 干净 |

## 下一项候选任务

**唯一推荐的下一项：`tools.ts` 工具数据去重与质量治理。**

理由是它在当前所有待办中价值密度最高。数据是本站的核心资产，43 条重复超额记录同时损害用户体验、SEO 质量信号和对外数据可信度，且已经造成 sitemap 与实际产物不一致这一可量化的问题。部署链路已恢复，修好的数据能够立即发布上线，不存在做完发不出去的情况。

建议范围包括：先专项统计重复 ID 的确切分组数量（当前只有「超额 43 条」这一口径）；确定重复条目的取舍与字段合并规则；处理已被搜索引擎索引的重复 URL（静态导出下需评估 410 或重定向的可行性）；同步修正 `layout.tsx`、`ai.txt`、`manifest.json` 中的工具数量表述；新增一个数据校验脚本并接入 CI，防止同类问题再次沉积。

前置条件：先完成 FIX-002-A 的提交与自动链路线上验收。在该任务完成前，不建议启动 SEO 内容扩展或新功能开发。
