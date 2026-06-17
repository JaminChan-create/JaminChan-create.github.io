import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: string
  description: string
  tags: string[]
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .filter(({ frontmatter }) => frontmatter.draft !== true && Boolean(frontmatter.date))
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        date: frontmatter.date,
        description: frontmatter.description || excerpt || '',
        tags: frontmatter.tags || []
      }))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  }
})
