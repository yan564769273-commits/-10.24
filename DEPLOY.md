# 发布到 GitHub Pages

## 当前目录问题

网站开发目录：`D:\软件\AI-Codex\portfolio`。

GitHub Desktop 创建的 Git 仓库目录：`D:\软件\AI-Codex\portfolio\portfolio`。

原先 Git 仓库只有 `.gitattributes`，没有网站源码。现已将发布需要的源码、照片、依赖锁文件和工作流同步到这个 Git 仓库。之后发布时应编辑或同步这个仓库里的文件。

## 发布步骤

1. 在 GitHub Desktop 选择 `portfolio`，用 Repository → Show in Explorer 确认它指向上面的 Git 仓库目录。
2. Changes 应出现 `src`、`public`、`package.json`、`package-lock.json` 和 `.github/workflows/deploy.yml` 等文件。提交到 main，然后 Push origin；如果显示 Publish repository，则先完成仓库发布。
3. 在 GitHub 仓库网页进入 Settings → Pages → Build and deployment，把 Source 改为 **GitHub Actions**。
4. 进入 Actions → Deploy portfolio to GitHub Pages。若之前因为尚未启用 Pages 失败，点 Re-run all jobs；也可点 Run workflow，选择 main。
5. 等待 build 和 deploy 都变绿。成功后打开部署步骤给出的 URL。

根据本地 origin，预计访问地址为：

https://yan564769273-commits.github.io/portfolio/

这是预期地址，不代表已经发布成功。以 Actions 的成功结果和 Settings → Pages 给出的地址为准。

## URL 说明

- 不需要在 package.json 中填写 homepage 或 url。
- 工作流通过 `steps.deployment.outputs.page_url` 获取真正的部署 URL，且部署步骤明确设置了 `id: deployment`。
- Vite 使用 `base: './'`，照片使用 `./portrait.jpg`，兼容 GitHub Pages 的仓库子目录。
- 以后项目封面等 public 资源也用 `./projects/example.jpg`，不要写 `/projects/example.jpg`（后者会指向域名根目录）。
- `127.0.0.1:5173` 只用于本机预览，不能作为公开网站 URL。
- 若提示的是 GitHub Desktop 的仓库 URL，它应为 `https://github.com/yan564769273-commits/portfolio.git`，与网站 URL 是两个不同地址。

请不要上传 node_modules、.tools 或手工提交 dist。GitHub Actions 会安装依赖并生成发布文件。
