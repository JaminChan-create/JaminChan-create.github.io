<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { data as posts } from '../posts.data'

const selectedTag = ref(typeof window === 'undefined' ? '' : new URLSearchParams(window.location.search).get('tag') || '')

const tags = computed(() => {
  const counts = new Map<string, number>()
  for (const post of posts) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) || 0) + 1)
  }
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
})

const filteredPosts = computed(() => {
  if (!selectedTag.value) return posts
  return posts.filter((post) => post.tags.includes(selectedTag.value))
})

function selectTag(tag: string) {
  selectedTag.value = selectedTag.value === tag ? '' : tag
  const url = selectedTag.value ? `${withBase('/tags')}?tag=${encodeURIComponent(selectedTag.value)}` : withBase('/tags')
  history.replaceState(null, '', url)
}
</script>

<template>
  <div class="tag-cloud">
    <div class="tag-buttons" aria-label="标签筛选">
      <button :class="{ active: selectedTag === '' }" type="button" @click="selectTag('')">
        全部
      </button>
      <button
        v-for="[tag, count] in tags"
        :key="tag"
        :class="{ active: selectedTag === tag }"
        type="button"
        @click="selectTag(tag)"
      >
        {{ tag }} <span>{{ count }}</span>
      </button>
    </div>

    <div class="tag-results">
      <a v-for="post in filteredPosts" :key="post.url" :href="withBase(post.url)" class="tag-post">
        <strong>{{ post.title }}</strong>
        <span>{{ post.description }}</span>
      </a>
    </div>
  </div>
</template>
