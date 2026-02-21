<script lang="ts" setup>
defineProps<{
  boattype: string
  sailnum: string
  name?: string
}>()
</script>

<template>
  <div class="boatCard">
    <h1>{{ boattype }}{{ name ? ': ' + name : '' }}</h1>
    <span class="text2 smalltext">{{ sailnum }}</span>
  </div>
</template>

<style scoped>
.boatCard {
  outline: var(--outline);
  border-radius: var(--radius);
  padding: 1rem;
}
</style>
