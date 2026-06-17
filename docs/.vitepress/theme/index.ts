import DefaultTheme from 'vitepress/theme'
import BlogPostList from './components/BlogPostList.vue'
import ArchiveList from './components/ArchiveList.vue'
import TagCloud from './components/TagCloud.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogPostList', BlogPostList)
    app.component('ArchiveList', ArchiveList)
    app.component('TagCloud', TagCloud)
  }
}
