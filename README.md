# Gemini UIs 工作流程

Node 22, pnpm

pnpm install

pnpm dev

项目采用了代码检查，请注意代码规范

## npm 发版流程

1. 首次发版前登录 npm。

```bash
pnpm login:npm
```

2. 发布默认 patch 版本。

```bash
pnpm release
```

默认会自动执行：

- `pnpm version patch`
- `pnpm build`
- `npm pack --dry-run`
- `npm publish`
- `git push`
- `git push --tags`

3. 自定义版本号。

```bash
pnpm release 0.14.2
```

4. 自定义版本号和版本提交信息。

```bash
pnpm release 0.14.2 "release: v%s"
```

`%s` 会被替换成版本号，例如 `release: v0.14.2`。

当前包只发布 `dist` 目录，发布前请确认 `dist/index.js`、`dist/index.d.ts`、`dist/style.css` 都存在。
