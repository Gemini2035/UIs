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

- `pnpm version patch --no-git-tag-version`
- `git commit`
- `git tag -a <标签> -m <文本>`
- `pnpm build`
- `npm pack --dry-run`
- `npm publish`
- `git push`
- `git push origin <标签>`

3. 自定义版本号。

```bash
pnpm release 0.14.2
```

4. 自定义版本号和版本提交信息。

```bash
pnpm release 0.14.2 "release: v%s"
```

`%s` 会被替换成版本号，例如 `release: v0.14.2`。

5. 自定义版本号、版本提交信息、tag 和 tag 文本。

```bash
pnpm release 0.14.2 "release: v%s" "v0.14.2" "Gemini UIs v%s"
```

上面的 tag 命令等价于：

```bash
git tag -a v0.14.2 -m "Gemini UIs v0.14.2"
```

当前包只发布 `dist` 目录，发布前请确认 `dist/index.js`、`dist/index.d.ts`、`dist/style.css` 都存在。
