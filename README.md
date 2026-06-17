# VitePress 个人博客

这是一个基于 VitePress 和 GitHub Pages 的个人博客模板，包含首页、文章列表、关于我、归档、标签、本地搜索、深色模式、移动端适配、SEO 基础配置和 GitHub Actions 自动部署。

## 本地预览

```bash
npm install
npm run docs:dev
```

默认会在本地启动开发预览服务，终端会显示可访问地址。

## 构建检查

```bash
npm run docs:build
npm run docs:preview
```

## 写新文章

在 `docs/posts/` 新建一个 Markdown 文件，例如 `my-new-post.md`：

```md
---
title: 文章标题
date: 2026-06-17
description: 文章摘要，会显示在列表和 SEO 信息中。
tags:
  - 前端
  - 笔记
---

# 文章标题

这里开始写正文。
```

保存后，文章会自动出现在文章列表、归档和标签页。

## 部署到 GitHub Pages

1. 把代码推送到 GitHub 仓库的 `main` 分支。
2. 打开 GitHub 仓库的 Settings > Pages。
3. 在 Build and deployment 的 Source 中选择 GitHub Actions。
4. 等待 Actions 中的 `Deploy VitePress site to Pages` 工作流完成。

如果你使用自定义域名，请把站点 URL 写入仓库变量 `VITEPRESS_SITE_URL`，并按 GitHub Pages 的要求配置域名。
