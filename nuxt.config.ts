// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/i18n'
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
  devtools: { enabled: true }
})
