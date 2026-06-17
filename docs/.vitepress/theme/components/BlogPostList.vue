<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { data as posts } from '../posts.data'

const props = defineProps<{
  limit?: number
}>()

const visiblePosts = computed(() => {
  return typeof props.limit === 'number' ? posts.slice(0, props.limit) : posts
})

const formatter = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
})

function tagUrl(tag: string) {
  return `${withBase('/tags')}?tag=${encodeURIComponent(tag)}`
}
</script>

<template>
  <div class="post-list">
    <article v-for="post in visiblePosts" :key="post.url" class="post-item">
      <div class="post-meta">{{ formatter.format(new Date(post.date)) }}</div>
      <h2><a :href="withBase(post.url)">{{ post.title }}</a></h2>
      <p>{{ post.description }}</p>
      <div class="post-tags">
        <a v-for="tag in post.tags" :key="tag" :href="tagUrl(tag)">
          #{{ tag }}
        </a>
      </div>
    </article>
  </div>
</template>
