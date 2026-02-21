// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  ssr: true,
  nitro: {
    preset: 'github_pages',
  },
  runtimeConfig: {
    public: {
      buildTime: new Date().toISOString(),
    },
  },
})
