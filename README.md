# Gemini UIs 工作流程

Node 22, pnpm

pnpm install

pnpm dev

项目采用了代码检查，请注意代码规范

## npm 发版流程

1. 确认本地依赖和构建正常。

```bash
pnpm install
pnpm build
```

2. 更新 `package.json` 中的版本号。

```bash
pnpm version patch
```

也可以按发版类型使用：

```bash
pnpm version minor
pnpm version major
```

3. 检查即将发布到 npm 的文件内容。

```bash
npm pack --dry-run
```

当前包只发布 `dist` 目录，发布前请确认 `dist/index.js`、`dist/index.d.ts`、`dist/style.css` 都存在。

4. 登录 npm。

```bash
npm login
npm whoami
```

5. 发布。

```bash
npm publish
```

6. 推送版本提交和 tag。

```bash
git push
git push --tags
```
