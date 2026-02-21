<script lang="ts" setup>
import type { Home } from '~/types/content'

const { data: page } = await useAsyncData<Home | null>('home', () => queryCollection('pages').path('/home').first())
</script>

<template>
  <main v-if="page">
    <div class="flexCol topMarginArea marginArea">
      <div class="preferFlexRow">
        <img src="/profile.jpeg" />
        <div>
          <h1>{{ page.title }}</h1>
          <span class="text2 textSmall">{{ page.email }}</span>
          <ContentRenderer :value="page.body" />
          <p>{{ page.paragraph }}</p>
          <a :href="page.github" target="_blank" class="textSmall">github</a>
        </div>
      </div>
      <div class="stronglyPreferFlexRow">
        <TechList :techs="page.langs" phrase="I am best with" />
        <TechList :techs="page.techs" phrase="I like working in" />
      </div>
      <NuxtLink to="/projects" class="bareLink">check out my projects!</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.heroContainer {
  margin-top: 5rem;
}

img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 2rem;
}
</style>
