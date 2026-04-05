# 前端工作流配置 — 落地指南

> 适用于 React + Rsbuild + GitHub 项目，覆盖审查清单 31 项中的 25+ 项。

---

## 一、文件清单

```
├── .editorconfig                  # 编辑器统一配置
├── .env.example                   # 环境变量模板
├── .eslintrc → eslint.config.mjs  # ESLint flat config
├── .github/
│   ├── pull_request_template.md   # PR 模板
│   └── workflows/ci.yml          # CI 流水线（lint/test/build/e2e）
├── .gitignore                     # Git 忽略规则
├── .husky/
│   ├── pre-commit                 # 提交前：lint-staged
│   └── commit-msg                 # 提交信息：commitlint
├── .prettierrc                    # Prettier 格式化规则
├── .size-limit.json               # Bundle 体积阈值
├── .vscode/
│   ├── settings.json              # 编辑器保存时自动格式化
│   └── extensions.json            # 推荐插件
├── commitlint.config.mjs          # Conventional Commits 规则
├── lint-staged.config.mjs         # 提交时增量检查
├── package.json                   # 脚本 + 依赖
├── playwright.config.ts           # E2E 测试配置
├── renovate.json                  # 依赖自动更新
├── rsbuild.config.ts              # 构建配置（hash + 分包）
├── tsconfig.json                  # TypeScript strict mode
└── vitest.config.ts               # 单元测试 + 覆盖率
```

---

## 二、安装步骤

### 1. 复制配置文件

将上述文件复制到你的项目根目录。已有的文件按需合并。

### 2. 安装依赖

```bash
pnpm install
```

### 3. 初始化 Husky

```bash
pnpm prepare
chmod +x .husky/pre-commit .husky/commit-msg
```

### 4. 配置环境变量

```bash
cp .env.example .env.local
# 编辑 .env.local，填入实际值
```

### 5. GitHub 仓库设置

在 GitHub 仓库的 Settings → Branches → Branch protection rules 中：

- 选择 `main` 分支
- 勾选 "Require a pull request before merging"
- 勾选 "Require approvals"，设为 1
- 勾选 "Require status checks to pass before merging"
- 添加必须通过的 checks：`lint`、`test`、`build`
- 勾选 "Require branches to be up to date before merging"

### 6. 启用 Renovate

前往 https://github.com/apps/renovate 安装 Renovate App 到你的仓库。
配置已包含在 `renovate.json` 中。

---

## 三、审查项覆盖情况

| 审查项                                    | 对应文件                    | 状态 |
| ---------------------------------------- | -------------------------- | ---- |
| ESLint configured                        | eslint.config.mjs          | ✅   |
| Prettier enforced on commit              | .prettierrc + lint-staged  | ✅   |
| TypeScript strict mode                   | tsconfig.json              | ✅   |
| Husky pre-commit hooks                   | .husky/pre-commit          | ✅   |
| Lint + type-check on every PR            | .github/workflows/ci.yml  | ✅   |
| Unit tests with coverage threshold       | vitest.config.ts + ci.yml  | ✅   |
| Build verification on PR                 | ci.yml (build job)         | ✅   |
| node_modules cache                       | ci.yml (pnpm cache)       | ✅   |
| Parallel CI jobs                         | ci.yml (3 parallel jobs)  | ✅   |
| E2E on merge to main                     | ci.yml (e2e job)          | ✅   |
| PR template                              | pull_request_template.md   | ✅   |
| Required reviewer                        | GitHub branch protection   | 📋  |
| Commit convention                        | commitlint + husky         | ✅   |
| Lockfile in CI                           | pnpm --frozen-lockfile     | ✅   |
| Automated security scanning              | renovate.json              | ✅   |
| Bundle size analysis                     | .size-limit.json + ci.yml | ✅   |
| Code splitting                           | rsbuild.config.ts          | ✅   |
| Content hash                             | rsbuild.config.ts          | ✅   |
| Env variables secured                    | .env.example + .gitignore  | ✅   |
| README ≤ 5 steps                         | README.md                  | ✅   |
| Shared editor config                     | .editorconfig + .vscode    | ✅   |

📋 = 需要在 GitHub 网页端手动配置

---

## 四、日常使用

```bash
# 开发
pnpm dev

# 提交代码（自动触发 lint-staged + commitlint）
git add .
git commit -m "feat: add user profile page"

# 手动检查
pnpm lint          # ESLint
pnpm type-check    # TypeScript
pnpm test          # Vitest watch mode
pnpm test:coverage # 覆盖率报告
```
