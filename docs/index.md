---
layout: home

hero:
  name: Jamin 的个人博客
  text: 写给长期主义的技术笔记
  tagline: 记录前端、工程实践、阅读思考，以及一路积累下来的方法。
  image:
    src: /logo.svg
    alt: Jamin Blog
  actions:
    - theme: brand
      text: 阅读文章
      link: /posts/
    - theme: alt
      text: 关于我
      link: /about

features:
  - title: 技术沉淀
    details: 用清晰的文章记录问题、方案、取舍和复盘。
  - title: 长期维护
    details: 目录简单，文章用 Markdown 编写，方便持续更新。
  - title: 自动发布
    details: 推送到 main 分支后由 GitHub Actions 自动部署到 Pages。
---

## 最新文章

<BlogPostList :limit="3" />
