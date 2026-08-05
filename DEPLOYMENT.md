# 部署说明（DEPLOYMENT）

> 最后更新：2026-08-05，由任务 XIA-RECOVERY-FIX-001 建立。

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
│         └──────────────┐                                 │
└────────────────────────┼─────────────────────────────────┘
                         │
                         ▼
              ┌────────────────────────────┐
              │  deploy-pages.yml          │
              │  （可复用工作流）           │
              │  on: workflow_call 只此一种 │
              │                            │
              │  job build:                │
              │    checkout → node 20      │
              │    → npm install           │
              │    → npm run build         │
              │    → .nojekyll + CNAME     │
              │    → upload-pages-artifact │
              │  job deploy:               │
              │    → deploy-pages@v4       │
              │    环境 github-pages       │
              └────────────────────────────┘
                         ▲
┌────────────────────────┼─────────────────────────────────┐
│  自动链路               │                                 │
│                        │                                 │
│  update-news.yml       │                                 │
│    on: schedule(每日 UTC 00:00) / workflow_dispatch       │
│         │                                                │
│    job update-news:                                      │
│      抓 RSS → 写 news.ts → git diff 判定                  │
│      有变化则 bot commit & push                           │
│      输出 outputs.changed                                │
│         │                                                │
│    job deploy:  needs: update-news                       │
│                 if: changed == 'true' ────────┘          │
└──────────────────────────────────────────────────────────┘
```

关键设计：`deploy-pages.yml` **只有 `workflow_call` 一种触发方式，自身不监听任何事件，也不调用其他工作流**。它是调用图中的叶子节点，因此不存在递归或重复部署的可能。

## 两条部署链路

### 人工提交链路

向 `main` 推送提交后，`deploy.yml` 被 `push` 事件触发，随即调用 `deploy-pages.yml` 完成构建发布。也可在 Actions 页面对 `Deploy to GitHub Pages` 手动 `Run workflow`。

### 快讯自动更新链路

`update-news.yml` 每天定时运行。抓取到新内容并成功提交后，`deploy` job 依据 `needs.update-news.outputs.changed == 'true'` 条件在**同一次工作流运行内**直接调用 `deploy-pages.yml`。

若当天 RSS 无更新或抓取失败，`changed` 不为 `true`，`deploy` job 被跳过，不产生空部署。

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
| `deploy-pages.yml` | 同上 | 可复用工作流自身声明，调用时生效 |
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

**其三，`Last-Modified` 响应头已前移。** 这是最关键的一项。工作流绿灯只能证明流程跑完，`Last-Modified` 变化才能证明新产物真正落到了线上。

```powershell
(Invoke-WebRequest -Uri "https://aigc778.top" -Method Head).Headers['Last-Modified']
```

**其四，内容确实更新。** 例如访问 `/news/` 页面，确认其中的快讯日期为近期日期，而非某个固定的历史日期。

## 静默失效风险

这类故障的共同特征是「流程全绿、结果没变」，必须靠内容层面的核对才能发现。

**bot push 不触发 push 工作流。** 已在本轮修复，但如果将来有人把 `update-news.yml` 里的 `deploy` job 删掉、改回单纯依赖 `push` 触发，故障会立刻复发。修改快讯工作流时请务必保留部署环节。

**Actions 定时任务被自动停用。** GitHub 会对长期无提交活动的仓库暂停 `schedule` 触发器。若发现快讯连续多日未更新，先检查 Actions 页面是否出现停用提示。

**`deploy` job 被 `if` 条件跳过但无人察觉。** 当 RSS 源集体失效时，`changed` 始终不为 `true`，部署持续被跳过。此时工作流依然显示成功。建议定期核对 `/news/` 页面的日期。

**sitemap 的 `lastmod` 停滞。** `generate-sitemap.js` 在每次 build 时把 `lastmod` 写为当日日期。如果部署停摆，线上 sitemap 的日期会一直冻结，向搜索引擎持续释放「站点已停更」的信号。这既是后果，也是一个便于观察的先行指标。

**Cloudflare 缓存掩盖更新。** 源站已更新但边缘节点仍在返回旧副本时，可能造成「部署成功但看不到变化」的错觉。排查时可对比 `cf-cache-status` 响应头，或改用带随机查询参数的 URL 验证。

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
