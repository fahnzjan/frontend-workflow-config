# Project Name

> Brief project description here.

## Quick start

```bash
# 1. Clone
git clone <repo-url> && cd <project>

# 2. Install dependencies
pnpm install

# 3. Set up environment
cp .env.example .env.local   # then fill in your values

# 4. Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `pnpm dev`           | Start dev server with HMR            |
| `pnpm build`         | Production build                     |
| `pnpm preview`       | Preview production build locally     |
| `pnpm lint`          | Run ESLint                           |
| `pnpm lint:fix`      | Run ESLint with auto-fix             |
| `pnpm type-check`    | TypeScript type checking             |
| `pnpm test`          | Run unit tests (watch mode)          |
| `pnpm test:coverage` | Run tests with coverage report       |
| `pnpm test:e2e`      | Run Playwright E2E tests             |

## Branch strategy

- `main` — production-ready code, protected branch
- `develop` — integration branch for features
- `feat/*` — feature branches
- `fix/*` — bugfix branches

## Commit convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

```
feat: add user login page
fix: resolve token refresh loop
docs: update API integration guide
```
