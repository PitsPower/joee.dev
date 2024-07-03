// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '',
    buildAssetsDir: 'assets',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    "@nuxt/image"
  ],

  googleFonts: {
    families: {
      "Zilla Slab": true
    }
  },

  router: {
    options: {
      linkActiveClass: 'font-bold',
    }
  }
})