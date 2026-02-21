<script lang="ts" setup>
import type { Project } from '~/types/content'
import { ref, onMounted, onUnmounted, provide, type Ref } from 'vue'

const { data: projects } = await useAsyncData<Project[]>('projects', () => queryCollection('projects').order('order', 'ASC').all(), { default: () => [] })

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  scrollY.value = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

provide<Ref<number>>('scrollY', scrollY)
</script>

<template>
  <main>
    <div class="projectsGrid marginAreaWider">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </main>
</template>

<style scoped>
main {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.projectsGrid {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-auto-rows: 1fr;
  gap: 1rem;
  align-items: stretch;
}
</style>
