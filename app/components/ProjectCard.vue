<script lang="ts" setup>
import type { Project } from '~/types/content'

defineProps<{
  project: Project
}>()

import { ref, inject, computed, type Ref } from 'vue'

const card = ref<HTMLDivElement | null>(null)
const scrollY = inject<Ref<number>>('scrollY')

if (!scrollY) {
  throw new Error('scrollY not provided')
}

const speed = 0.17

const offset = computed(() => {
  if (!card.value || !scrollY) return 0

  const val = scrollY.value // explicit dependency

  const rect = card.value.getBoundingClientRect()
  const centerOffset = rect.top - window.innerHeight

  return centerOffset * speed
})
</script>

<template>
  <div class="card" ref="card">
    <img v-if="project.img" :src="project.img" :style="{ transform: `translateY(${offset}px)` }" />
    <div class="titleBar">
      <a class="titleLink bareLink" :href="project.url ?? project.github" target="_blank">
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
  position: relative;
  box-sizing: border-box;
  border-radius: var(--radius);
  outline: var(--outline);
  padding: 1rem;
  transition: transform 0.125s;
  overflow: hidden;
}
.card:hover {
  outline: var(--outline-thick);
  box-shadow: var(--shadow);
  transform: scale(1.01);
}

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
img {
  position: absolute;
  width: 100%;
  height: 200%;
  inset: 0;
  overflow: hidden;
  filter: blur(3px) brightness(0.6);
  z-index: -1;
  object-fit: cover;
  object-position: center 70%;
  will-change: transform;
}
</style>
