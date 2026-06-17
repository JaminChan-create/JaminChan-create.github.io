<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { data as posts } from '../posts.data'

const formatter = new Intl.DateTimeFormat('zh-CN', {
  month: '2-digit',
  day: '2-digit'
})

const groupedPosts = computed(() => {
  const groups = new Map<string, typeof posts>()
  for (const post of posts) {
    const year = new Date(post.date).getFullYear().toString()
    groups.set(year, [...(groups.get(year) || []), post])
  }
  return Array.from(groups.entries())
})
</script>

<template>
  <div class="archive-list">
    <section v-for="[year, items] in groupedPosts" :key="year" class="archive-year">
      <h2>{{ year }}</h2>
      <a v-for="post in items" :key="post.url" class="archive-item" :href="withBase(post.url)">
        <time>{{ formatter.format(new Date(post.date)) }}</time>
        <span>{{ post.title }}</span>
      </a>
    </section>
  </div>
</template>
