# Mengchu Li’s personal website

基于 Jekyll 的自定义学术主页，包含 About me、CV、Publications 页面。支持跟随系统和手动切换深浅色，无需 Minimal Mistakes 或前端构建工具。

## 内容维护

- 首页介绍：编辑 `index.md`（Markdown）。
- 论文：编辑 `_data/publications.yml`；首页和 Publications 页自动使用同一份列表，自动将预印本放在最前面，已发表文章按发表日期从新到旧排列；预印本之间也按日期倒序。每篇填写 `status: preprint` 或 `status: published`，以及带引号的 `date: "YYYY-MM-DD"`（已发表论文取首次在线发表日期，预印本取首次提交日期）。`year` 保持引用中使用的年份。`abstract` 字段保存摘要，仅在 Publications and preprints 页面显示折叠按钮；预印本无需填写 `doi`。
- 姓名、邮箱、照片、地址与 CV 路径：编辑 `_data/profile.yml`。首页图标也在此维护：`instagram`、`bilibili`、`film`、`gallery` 填写完整链接；Instagram 和 bilibili 留空时隐藏，观影与摄影留空时显示不可点击的灰色预留项；Email 和 GitHub 使用 `email`、`github`。图标具有可读标签和悬停提示。
- CV 页面内容：编辑 `_data/cv.yml`（经历、教育、奖项等）；布局为 `_layouts/cv.html`，页面入口为 `_pages/cv.md`；PDF 替换 `assets/docs/mengchu_cv.pdf`。
- 导航：编辑 `_data/navigation.yml`。
- 新增页面：在 `_pages` 新建 Markdown 文件，设置 `layout: page`、`title`、`permalink`，再添加导航条目即可。
- 样式：`assets/css/site.css`；布局：`_layouts`。

本地环境建议使用 Ruby 3.3 或 3.4、Bundler 2.7.2。macOS 自带的 Ruby 2.6 无法使用当前锁定的 Bundler；请先切换到现代 Ruby（可用 `ruby -v` 和 `bundle -v` 确认）。这只影响本地预览，GitHub Pages 使用其托管环境构建。

本地预览（首次使用先运行 `bundle install`）：

```sh
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

打开 http://127.0.0.1:4000/ 。修改内容后自动重新生成，刷新浏览器查看。修改 `_config.yml` 后需要重启服务器。

主题默认跟随系统；导航上的 System / Light / Dark 按钮可手动切换，选择会保存在浏览器中。回到 System 后恢复跟随系统。


## 搜索简介

首页的简介在 `_config.yml` 的 `description` 中维护。独立页面在 Markdown 文件开头添加 `description`，未设置时使用网站简介。

## 构建与发布

```sh
bundle exec jekyll build
```

输出目录为 `_site/`，只修改源码，不编辑或提交生成结果。依赖版本记录在 `Gemfile.lock` 中。

### 手动推送

本地项目已连接到 `https://github.com/mengchuli0911/mengchuli0911.github.io.git`，目标分支为 `main`。在已登录 GitHub 的终端或 Git 客户端中推送已有提交即可：

```sh
git push origin main
```

如果终端直连 GitHub 超时，而 VPN 使用系统代理，可仅为本次推送指定代理。当前机器检测到的代理地址如下；换机器或代理端口后应按实际情况调整：

```sh
git -c http.proxy=http://127.0.0.1:7892 push origin main
```

需要事先通过本机 Git 客户端或凭据管理器完成 GitHub 登录。不要将密码或 Token 写入项目文件。

### GitHub Pages 设置

这份源码使用 GitHub Pages 支持的 Jekyll 3.10 和 jekyll-sitemap，无需自定义部署工作流。仓库 Settings → Pages 中设置：

- Source：**Deploy from a branch**
- Branch：**main**
- Folder：**/ (root)**

不要选择 `_site` 或 `docs`，也不要额外添加 `.nojekyll`。从分支发布时 GitHub 会自行构建源码。

推送后查看仓库 Actions 中的 Pages 构建／部署任务，成功后访问 https://mengchuli0911.github.io/ 。本地验证通过并不代表线上已部署，最终以上述任务结果为准。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site


## 文件结构

- `_layouts/`、`_includes/`：页面结构与共用组件。
- `assets/css/site.css`：公共样式、页面样式和手机适配，包含统一行距与间距变量。
- `assets/js/theme.js`：主题切换。
- `_archive/others.md`：原非学术页面草稿，保留链接，不参与构建；正式启用时移回 `_pages/` 并加入导航。
- `.gitignore`：排除构建结果、本地依赖及 macOS 元数据。

示例文章和旧静态预览已移出项目，避免误发布。
