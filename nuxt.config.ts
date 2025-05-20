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
  modules: ['@nuxt/image-edge'],

  image: {
    // Use the local provider (for /public assets)
    providers: {
      local: {
        provider: 'ipx', // built-in transformer
        options: {}
      }
    },
    // Default options
    img: {
      loading: 'lazy'
    },
    formats: ['avif', 'webp'], // tries AVIF first, falls back to WebP/PNG
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280
    },
    // auto detects public/ path
    dir: 'public'
  }
})
