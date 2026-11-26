# Mengchu Li’s personal website

基于 Jekyll 的自定义学术主页，包含 About me、CV、Publications 页面。支持跟随系统和手动切换深浅色，无需 Minimal Mistakes 或前端构建工具。

## 内容维护

- 首页介绍：编辑 `index.md`（Markdown）。
- 论文：编辑 `_data/publications.yml`；首页和 Publications 页自动使用同一份列表，按文件顺序展示。`abstract` 字段保存摘要，仅在 Publications and preprints 页面显示折叠按钮；预印本无需填写 `doi`。
- 姓名、邮箱、照片、地址与 CV 路径：编辑 `_data/profile.yml`。首页图标也在此维护：`instagram`、`bilibili`、`film`、`gallery` 填写完整链接；Instagram 和 bilibili 留空时隐藏，观影与摄影留空时显示不可点击的灰色预留项；Email 和 GitHub 使用 `email`、`github`。图标具有可读标签和悬停提示。
- CV 页面内容：编辑 `_data/cv.yml`（经历、教育、奖项等）；布局为 `_layouts/cv.html`，页面入口为 `_pages/cv.md`；PDF 替换 `assets/docs/mengchu_cv.pdf`。
- 导航：编辑 `_data/navigation.yml`。
- 新增页面：在 `_pages` 新建 Markdown 文件，设置 `layout: page`、`title`、`permalink`，再添加导航条目即可。
- 样式：`assets/css/site.css`；布局：`_layouts`。

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

本次修改尚未发布。上线前在 GitHub 仓库的 Settings → Pages 确认发布来源：如果从分支构建，选择包含这份 Jekyll 源码的分支根目录；如果使用 GitHub Actions，工作流需要构建 Jekyll 并部署 `_site/`。此仓库尚未添加部署工作流。

## 文件结构

- `_layouts/`、`_includes/`：页面结构与共用组件。
- `assets/css/site.css`：公共样式、页面样式和手机适配，包含统一行距与间距变量。
- `assets/js/theme.js`：主题切换。
- `_archive/others.md`：原非学术页面草稿，保留链接，不参与构建；正式启用时移回 `_pages/` 并加入导航。
- `.gitignore`：排除构建结果、本地依赖及 macOS 元数据。

示例文章和旧静态预览已移出项目，避免误发布。
