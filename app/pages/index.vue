<script lang="ts" setup>
import type { Home } from '~/types/content'

const { data: page } = await useAsyncData<Home | null>('home', () => queryCollection('pages').path('/home').first())
</script>

<template>
  <main v-if="page">
    <div class="flexCol topMarginArea marginArea">
      <div class="preferFlexRow">
        <div class="preferFlexCol">
          <div class="blurContainer">
            <img src="/profile.jpeg" />
            <img src="/profile.jpeg" class="blur" />
          </div>
          <div class="flexCol linksList">
            <a :href="page.github" target="_blank" class="textSmall">github</a>
            <a :href="page.linkedin" target="_blank" class="textSmall">linkedin</a>
            <a href="/Carter Anderson.pdf" class="textSmall" download>resume</a>
          </div>
        </div>
        <div class="flexCol">
          <h1 class="noMargin nowrap">{{ page.title }}</h1>
          <div class="flexRow">
            <span class="text2 textSmall noMargin nowrap">{{ page.home }}</span>
            <span class="text2 textSmall noMargin nowrap">{{ page.email }}</span>
          </div>
          <ContentRenderer :value="page.body" />
          <div class="stronglyPreferFlexRow">
            <TechList :techs="page.langs" phrase="I am best with" />
            <TechList :techs="page.techs" phrase="I like working in" />
          </div>
          <NuxtLink to="/projects" class="bareLink">check out my projects!</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.heroContainer {
  margin-top: 5rem;
}
.linksList {
  align-items: flex-end;
}
@media (max-width: 850px) {
  .linksList {
    align-items: flex-start;
    justify-content: center;
  }
}

.noMargin {
  margin: 0;
}
:deep(p) {
  margin: 0;
}
:deep(strong) {
  font-weight: normal;
  color: var(--text-3);
}

img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 2rem;
}

.blurContainer {
  position: relative;
  display: inline-block;
}

.blurContainer img {
  display: block;
}

.blur {
  position: absolute;
  inset: 0;
  filter: blur(20px);
  z-index: -1;
  transform: scale(1.05); /* prevents visible edge clipping */
}
</style>
