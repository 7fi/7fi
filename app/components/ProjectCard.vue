<script lang="ts" setup>
import type { Project } from '~/types/content'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="card">
    <div class="titleBar">
      <a class="titleLink" :href="project.url ?? project.github" target="_blank">
        <h2>
          {{ project.title }}
        </h2>
      </a>
      <div class="tbRight">
        <a v-if="project.url" :href="project.url" target="_blank">visit</a>
        <a v-if="project.github" :href="project.github" target="_blank">github</a>
      </div>
    </div>

    <div v-if="project.tech">
      <span class="text2 textSmall">{{ project.tech.join(', ') }}</span>
    </div>

    <p>{{ project.description }}</p>
  </div>
  <!-- <ContentRenderer :value="project" /> -->
</template>

<style scoped>
.card {
  box-sizing: border-box;
  border-radius: var(--radius);
  outline: var(--outline);
  padding: 1rem;
  transition: transform 0.125s;
}
/* .card:hover {
  outline: var(--outline-thick);
  box-shadow: var(--shadow);
  transform: scale(1.01);
} */

.titleBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.titleLink {
  text-decoration: none;
  color: var(--text-1);
}

.tbRight {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
</style>
