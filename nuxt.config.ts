// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  ssr: true,

  // SSG target
  target: 'static',

  nitro: {
    preset: 'vercel-static'
  },

  app: {
    head: {
      link: [
      ]
    }
  },

  css:['@/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;'
        }
      }
    }
  },

  modules: ['@nuxt/image']
})