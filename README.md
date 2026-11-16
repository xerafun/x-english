# X-English

[![CI](https://github.com/XERA-2011/x-english/actions/workflows/ci.yml/badge.svg)](https://github.com/XERA-2011/x-english/actions/workflows/ci.yml)
[![Deploy](https://github.com/XERA-2011/x-english/actions/workflows/deploy.yml/badge.svg)](https://github.com/XERA-2011/x-english/actions/workflows/deploy.yml)
[![Sponsor](https://img.shields.io/badge/Sponsor-❤️-ff69b4.svg)](https://github.com/XERA-2011/sponsor)

X-English 是 **[XeraFun](https://xerafun.com/)** 旗下的现代化英语学习知识库平台，主要访问域名为 **[english.xerafun.com](https://english.xerafun.com/)**。内容覆盖通用英语能力训练（词汇、语法、听力、阅读、写作）、**PETS-3 专项备考** 与 **自考 13000 专升本英语写作打卡**。

## 🌐 在线地址与站点层级

| 角色 / 平台 | 访问地址 | 说明 |
|---|---|---|
| **主项目官网** | [xerafun.com](https://xerafun.com/) | XeraFun 主站平台 |
| **主要访问地址 (Primary)** | [english.xerafun.com](https://english.xerafun.com/) | 英语知识库官方独立子站 |
| Cloudflare Pages | [x-english.pages.dev](https://x-english.pages.dev/) | 边缘分发节点 |
| Vercel | [x-english.vercel.app](https://x-english.vercel.app/) | 备用分发节点 |
| GitHub Pages | [xera-2011.github.io/x-english](https://xera-2011.github.io/x-english/) | 开源镜像节点 |

## 环境要求

- Node.js: `>=20.0`（建议使用 20/22 LTS）
- pnpm: 建议 `>=9`

## 安装依赖

```bash
pnpm install
```

## 本地开发

```bash
pnpm start
```

启动本地开发服务器并支持热更新。

## 常用命令

```bash
# 生产构建
pnpm build

# 本地预览构建结果
pnpm serve

# 文档构建校验（用于 CI / 本地检查）
pnpm run lint

# TypeScript 类型检查
pnpm run typecheck

# 内容质量检查（标题与本地链接）
pnpm run check:content

# CI 全量检查
pnpm run ci

# 清理构建/缓存产物
pnpm run clean
```

## 部署说明

当前仓库的**主发布链路**为 GitHub Pages：

- PR / Push 质量门禁：`.github/workflows/ci.yml`
- 主分支发布：`.github/workflows/deploy.yml`

Cloudflare / Vercel 作为可选分发渠道，按需接入（不作为主门禁）。

Vercel 使用仓库内 `vercel.json` 统一构建与路由行为（`cleanUrls: true`），避免文档路由在刷新时出现短暂 404。

如需手动发布到 Cloudflare，可使用：

```bash
pnpm run deploy
```

## 当前内容结构

### 通用模块

- 📖 语法（`docs/grammar`）
- 📝 词汇（`docs/vocabulary`）
- 📚 阅读（`docs/reading`）
- ✍️ 写作（`docs/writing`）
- 🎧 听力（`docs/listening`）

### PETS-3 专区

- 🏆 PET3（`docs/pet3`）
  - 口试指导
  - 听力
  - 语言知识运用
  - 阅读理解
  - 写作全攻略
  - 写作句型与范文

### 13000 专升本英语

- 🎓 专升本英语写作（`docs/writing/checkin`）
  - 话题短文打卡（网络用途、健康生活、公共文明、终身学习、出行安全等真题）
  - 应用文书信打卡（建议信、申请信、感谢信、邀请信、道歉信）
  - 实时字数统计与高清海报一键导出生成

## 可用 MDX 组件

| 组件 | 用途 |
|---|---|
| `<Quiz />` | 交互式测验 |
| `<Flashcard />` | 翻转词卡 |
| `<ExampleSentence />` | 例句展示 |
| `<DifficultyBadge />` | CEFR 难度标签 |
| `<VocabTable />` | 词汇表格 |
| `<AudioPlayer />` | 音频播放 |
| `<GrammarDiagram />` | 语法结构图 |
| `<WritingCheckin />` | 写作打卡与海报生成 |
