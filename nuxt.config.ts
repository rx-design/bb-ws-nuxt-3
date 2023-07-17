// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'et',
        name: 'Eesti'
      }
    ]
  },
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs'
    ]
  },
  imports: {
    dirs: [
      'stores'
    ]
  },
  devtools: { enabled: true }
})
