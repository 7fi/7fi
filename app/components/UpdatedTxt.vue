<script lang="ts" setup>
const config = useRuntimeConfig()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>
<template>
  <span class="updatetxt">updated {{ formatDate(config.public.buildTime) }}</span>
</template>
<style scoped>
.updatetxt {
  z-index: 1001;
  font-size: 0.7rem;
  color: var(--text-2);
  padding: 0.2rem;
}
</style>
