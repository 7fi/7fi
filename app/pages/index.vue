<script lang="ts" setup>
import type { Home } from '~/types/content'

const { data: page } = await useAsyncData<Home | null>('home', () => queryCollection('pages').path('/home').first())
</script>

<template>
  <main v-if="page">
    <div class="flexCol topMarginArea marginArea">
      <div class="preferFlexRow heroContainer">
        <div class="preferFlexCol">
          <div class="blurContainer">
            <img class="pfImage" src="/profile.jpeg" />
            <img class="pfImage blur" src="/profile.jpeg" />
          </div>
          <div class="flexCol linksList">
            <a :href="page.github" target="_blank" class="textSmall">github</a>
            <a :href="page.linkedin" target="_blank" class="textSmall">linkedin</a>
            <a href="/Carter Anderson.pdf" target="_blank" class="textSmall">resume</a>
          </div>
        </div>
        <div class="flexCol">
          <h1 class="noMargin nowrap">{{ page.title }}</h1>
          <div class="preferFlexRow">
            <span class="text2 textSmall noMargin nowrap">{{ page.home }}</span>
            <span class="text2 textSmall noMargin nowrap">{{ page.email }}</span>
          </div>
          <ContentRenderer :value="page.body" />
          <div class="stronglyPreferFlexRow flexEven">
            <TechList :techs="page.langs" phrase="My best languages" />
            <TechList :techs="page.techs" phrase="I like working in" />
            <TechList :techs="page.learning" phrase="I am learning" />
          </div>
          <NuxtLink to="/projects" class="bareLink">check out my projects!</NuxtLink>
        </div>
      </div>
      <!-- <img src="/49ermotion.jpg" class="heroimg" /> -->
    </div>
  </main>
</template>

<style scoped>
.heroContainer {
  gap: 1.5rem;
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

.pfImage {
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
  filter: blur(10px);
  z-index: -1;
  transform: scale(1.05); /* prevents visible edge clipping */
}
.heroimg {
  position: absolute;
  z-index: -1;
  top: 50px;
  left: 0;
  /* width: 100vw; */
  height: calc(100vh - 50px);
  filter: blur(5px) brightness(0.4);
  overflow: hidden;
  overflow-y: hidden;
  /* border-radius: 20px; */
  /* box-shadow: 0 0 20px 5px #fff; */
}
</style>
