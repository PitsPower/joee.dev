// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/joee.dev/',
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})