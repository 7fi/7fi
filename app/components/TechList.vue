<script lang="ts" setup>
defineProps<{
  techs: string[]
  phrase: string
}>()
</script>

<template>
  <div class="techList">
    <span class="nowrap">{{ phrase }}: </span>
    <ul>
      <li v-for="tech in techs" class="nowrap">- {{ tech }}</li>
    </ul>
    <!-- <span> {{ techs.join(', ') }}</span> -->
  </div>
</template>
<style scoped>
ul {
  margin: 0;
  padding: 0 0.5rem;
  list-style-type: none;
}
</style>
