# 部署说明（DEPLOYMENT）

> 最后更新：2026-08-05，由任务 XIA-RECOVERY-FIX-001 建立；由 XIA-RECOVERY-FIX-002-A 补充部署目标 SHA 的精确传递机制。

## 架构总览

```
用户浏览器
    │
    ▼
Cloudflare（DNS + CDN 前置层）
    │   A 记录 → 104.21.32.95 / 172.67.150.172（Cloudflare Anycast）
    │   响应头特征：Server: cloudflare、CF-RAY、cf-cache-status
    ▼
GitHub Pages（源站，经 Fastly 分发）
    │   响应头特征：x-github-request-id、x-served-by: cache-*、Via: 1.1 varnish
    ▼
静态产物（Next.js output: "export" 生成的 out/ 目录）
```

自定义域名 `aigc778.top` 通过 `public/CNAME` 声明，构建时同时写入 `out/CNAME`。

需要澄清一点：本项目**不是 Cloudflare Pages 部署**。Cloudflare 只承担 DNS 解析与 CDN 加速，真正的源站是 GitHub Pages。仓库中不存在 `wrangler.toml`、`vercel.json`、`netlify.toml` 等任何其他平台的配置文件（`public/vercel.svg` 仅为 create-next-app 脚手架遗留素材，不构成部署证据）。

## 工作流触发关系

```
┌─────────────────────────────────────────────────────────┐
│  人工链路                                                │
│                                                          │
│  开发者 push 到 main                                     │
│         │                                                │
│         ▼                                                │
│  deploy.yml                                              │
│    on: push(main) / workflow_dispatch                    │
│         │  uses: ./.github/workflows/deploy-pages.yml    │
│         │  with: ref = ${{ github.sha }}                 │
│         └──────────────┐                                 │
└────────────────────────┼─────────────────────────────────┘
                         │
                         ▼
              ┌───────────────────────────────────┐
              │  deploy-pages.yml                 │
              │  （可复用工作流）                 │
              │  on: workflow_call 只此一种       │
              │  inputs.ref：必填，完整 commit SHA│
              │                                   │
              │  job build:                       │
              │    checkout(ref = inputs.ref)     │
              │    → Verify checkout SHA ★        │
              │    → node 20 → npm install        │
              │    → npm run build                │
              │    → .nojekyll + CNAME            │
              │    → upload-pages-artifact        │
              │  job deploy:                      │
              │    → deploy-pages@v4              │
              │    环境 github-pages              │
              └───────────────────────────────────┘
                 ★ requested SHA ≠ checkout SHA 时立即失败
                         ▲
┌────────────────────────┼─────────────────────────────────┐
│  自动链路               │                                 │
│                        │                                 │
│  update-news.yml       │                                 │
│    on: schedule(每日 UTC 00:00) / workflow_dispatch       │
│         │                                                │
│    job update-news:                                      │
│      抓 RSS → 写 news.ts → git diff 判定                  │
│      有变化则 bot commit → 取 SHA → push                 │
│      push 成功后才输出 outputs.changed / commit_sha       │
│         │                                                │
│    job deploy:  needs: update-news                       │
│                 if: changed == 'true'                    │
│                 with: ref = outputs.commit_sha ─────┘    │
└──────────────────────────────────────────────────────────┘
```

关键设计：`deploy-pages.yml` **只有 `workflow_call` 一种触发方式，自身不监听任何事件，也不调用其他工作流**。它是调用图中的叶子节点，因此不存在递归或重复部署的可能。

## 两条部署链路

### 人工提交链路

向 `main` 推送提交后，`deploy.yml` 被 `push` 事件触发，随即调用 `deploy-pages.yml` 完成构建发布。也可在 Actions 页面对 `Deploy to GitHub Pages` 手动 `Run workflow`。

### 快讯自动更新链路

`update-news.yml` 每天定时运行。抓取到新内容并成功提交后，`deploy` job 依据 `needs.update-news.outputs.changed == 'true'` 条件在**同一次工作流运行内**直接调用 `deploy-pages.yml`。

若当天 RSS 无更新或抓取失败，`changed` 不为 `true`，`deploy` job 被跳过，不产生空部署。

## 部署目标 SHA 的精确传递

这是继「bot push 不触发 push 工作流」之后的**第二个结构性陷阱**。两者同样隐蔽，同样会让工作流亮绿灯而线上内容不对。

### 问题

`workflow_call` 被调用时，被调用的工作流默认继承**调用方工作流触发时的上下文**。`actions/checkout` 在不写 `ref` 时，取到的就是那个时间点的 commit。

对人工 push 链路而言这不构成问题，因为触发时的 commit 恰好就是要发布的 commit。

但**快讯自动链路完全不同**。它由 schedule 触发，启动那一刻仓库 HEAD 还停在前一天；bot commit 是在 job **运行过程中**才被创建出来的。如果部署时不显式指定新 SHA，就会去构建一个**不包含今天快讯的旧快照**。

最麻烦的是它的表现：commit 推送成功、部署 job 执行成功、线上 `Last-Modified` 也确实前移了（毕竟真的重新构建发布了一次），**但页面上的快讯依然是旧的**。

由此得出一条验收原则：**仅凭工作流绿灯和 `Last-Modified` 前移，不足以证明新内容已经上线。**

### 解法

`deploy-pages.yml` 声明了一个**必填**的字符串输入 `ref`，调用方必须传入完整 commit SHA——不接受省略，也不使用模糊的分支名 `main`（分支名会随时间漂移，无法锁定具体快照）：

| 链路 | ref 来源 |
|---|---|
| 人工 push | `${{ github.sha }}`，即本次 push 事件对应的 commit |
| 快讯自动 | `needs.update-news.outputs.commit_sha`，即 commit 步骤**实际产生并已成功 push** 的 SHA |

`actions/checkout` 显式使用 `ref: ${{ inputs.ref }}`，随后由 `Verify checkout SHA` 步骤做强校验：把请求部署的 SHA 与 `git rev-parse HEAD` 得到的实际 SHA 逐字符比对，**不一致则立即 `exit 1` 使构建失败**。宁可部署报错，也不能静默地发布错误版本。

### push 失败时的行为

commit 步骤内部的顺序是有意安排的：先 `git commit`，再用 `git rev-parse HEAD` 取 SHA，接着 `git push`，**最后**才把 SHA 写入 `$GITHUB_OUTPUT`。

若 `git push` 失败（例如远端已有新提交导致拒推），非零退出码会直接中断整个步骤，`echo "sha=..."` 根本不会执行。于是 `commit_sha` 为空、`update-news` job 失败、`deploy` job 因 `needs` 失败而不启动。这保证了**绝不会把一个尚未推送到远端的 commit 当成部署目标**（退一步讲，即使真传了这样的 SHA，checkout 也找不到它，依然会失败）。

## 为什么不能依赖 push 触发自动部署

这是本项目踩过的真实坑，务必理解。

GitHub Actions 有一条平台级防递归规则：**使用默认 `GITHUB_TOKEN` 进行的 push，不会触发任何由 `push` 事件驱动的工作流。**

`update-news.yml` 的 bot 提交正是用默认 `GITHUB_TOKEN` 推送的。因此在 2026-08-05 修复之前，它每天推送成功，却从来唤不醒当时只靠 `on: push` 触发的 `deploy.yml`。

后果是：2026-07-01 至 2026-08-05 共 35 天，仓库每天都有新的快讯提交，线上网站却始终停留在 7 月 1 日的构建版本。而且**两个工作流的运行状态全程都是绿色 success**——采集侧确实成功了，发布侧压根没被调用，没有任何机制会报错。

当前方案通过在 `update-news.yml` 内显式声明 `deploy` job 来绕开该限制，全程使用默认 `GITHUB_TOKEN`，不需要 PAT，也不需要新增任何 Secret。

## 权限需求

| 工作流 | 权限 | 用途 |
|---|---|---|
| `deploy.yml` | `contents: read`、`pages: write`、`id-token: write` | 读代码、发布 Pages、OIDC 身份验证 |
| `deploy-pages.yml` | 同上 | 可复用工作流自身声明，调用时生效；另要求必填输入 `ref` |
| `update-news.yml` · job `update-news` | `contents: write` | 提交并推送 `news.ts` |
| `update-news.yml` · job `deploy` | `contents: read`、`pages: write`、`id-token: write` | 在 job 级单独降权声明，供部署使用 |

注意 `update-news.yml` 采用了 job 级权限覆盖：文件顶层声明 `contents: write` 供提交使用，而 `deploy` job 单独声明部署所需的三项权限。这样每个 job 只拿到自己需要的权限，符合最小权限原则。

**本项目不使用 PAT，不依赖任何自定义 Secret。**

## 并发控制

`deploy-pages.yml` 声明 `concurrency: group: pages, cancel-in-progress: false`。同一时间只允许一次发布；新的部署请求会排队等待，而不是打断进行中的发布。这可以避免人工 push 与定时快讯更新恰好撞在一起时产生冲突。

## 如何手动部署

在 GitHub 仓库页面进入 **Actions** 标签，左侧选择 **Deploy to GitHub Pages**，点击 **Run workflow**，选择 `main` 分支执行即可。

也可以手动运行 **Auto Update AI News**，它会先抓取快讯，若有更新则连带部署。

## 如何判断部署成功

按以下顺序逐项确认，任何一项不通过都不能宣布部署成功。

**其一，Actions 运行状态。** 对应的工作流运行应为 `success`，且展开后能看到 `build` 与 `deploy` 两个 job 都实际执行完成（而非 skipped）。

**其二，线上 HTTP 响应。** 以下四个地址均应返回 200：

```
https://aigc778.top/
https://aigc778.top/news/
https://aigc778.top/tool/chatgpt/
https://aigc778.top/sitemap.xml
```

**其三，SHA 三者一致。** 展开 `build` job 的 `Verify checkout SHA` 步骤日志，确认两行输出相同：

```
Requested deploy SHA: <sha>
Actual checkout SHA:  <sha>
```

对自动链路还要额外确认这个 SHA **就是本次 bot commit 的 SHA**（可在 `update-news` job 的 commit 步骤日志或仓库提交历史中比对）。三者对上，才能确定发布的是刚提交的内容而不是旧快照。

**其四，`Last-Modified` 响应头已前移。**

```powershell
(Invoke-WebRequest -Uri "https://aigc778.top" -Method Head).Headers['Last-Modified']
```

**其五，内容确实更新。** 访问 `/news/` 页面，确认其中的快讯日期为近期日期，而非某个固定的历史日期。

> 特别提醒：**不能只凭工作流绿灯和 `Last-Modified` 前移就判定新内容已部署。** 如果部署拿到的是旧 SHA，构建依然会成功、`Last-Modified` 依然会前移，但页面内容是旧的。必须把第三项（SHA 一致）和第五项（内容核对）一并检查。

## 静默失效风险

这类故障的共同特征是「流程全绿、结果没变」，必须靠内容层面的核对才能发现。

**bot push 不触发 push 工作流。** 已在本轮修复，但如果将来有人把 `update-news.yml` 里的 `deploy` job 删掉、改回单纯依赖 `push` 触发，故障会立刻复发。修改快讯工作流时请务必保留部署环节。

**Actions 定时任务被自动停用。** GitHub 会对长期无提交活动的仓库暂停 `schedule` 触发器。若发现快讯连续多日未更新，先检查 Actions 页面是否出现停用提示。

**`deploy` job 被 `if` 条件跳过但无人察觉。** 当 RSS 源集体失效时，`changed` 始终不为 `true`，部署持续被跳过。此时工作流依然显示成功。建议定期核对 `/news/` 页面的日期。

**sitemap 的 `lastmod` 停滞。** `generate-sitemap.js` 在每次 build 时把 `lastmod` 写为当日日期。如果部署停摆，线上 sitemap 的日期会一直冻结，向搜索引擎持续释放「站点已停更」的信号。这既是后果，也是一个便于观察的先行指标。

**Cloudflare 缓存掩盖更新。** 源站已更新但边缘节点仍在返回旧副本时，可能造成「部署成功但看不到变化」的错觉。排查时可对比 `cf-cache-status` 响应头，或改用带随机查询参数的 URL 验证。

**部署了旧 SHA。** 若将来有人把 `deploy-pages.yml` 的 `ref` 输入改回可选、删除 `Verify checkout SHA` 步骤，或把调用方的 `with: ref` 去掉，快讯自动链路会重新退化为「构建旧快照」。这类回退不会报错，只会让线上快讯永远滞后一天。修改部署相关工作流时，请务必保留 `ref` 必填约束与 SHA 校验步骤。

## 相关文件

| 文件 | 作用 |
|---|---|
| `.github/workflows/deploy.yml` | 人工 push 部署入口 |
| `.github/workflows/update-news.yml` | 快讯抓取 + 自动部署 |
| `.github/workflows/deploy-pages.yml` | 可复用部署实现 |
| `next.config.ts` | `output: "export"`、`trailingSlash: true`、`images.unoptimized` |
| `public/CNAME` | 自定义域名声明 |
| `scripts/generate-sitemap.js` | build 前置，生成 sitemap |

## 历史遗留

远端 `gh-pages` 分支（`201b679`）与系统生成的 `pages-build-deployment` 工作流均为早期 `peaceiris/actions-gh-pages` 方案的产物，当前部署链路已不再使用。二者保留原状，未删除。
