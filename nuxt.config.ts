// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: 'Mundara', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css' },
        { rel: 'stylesheet', href: '/style/main.css' }
      ]
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  ssr: true,
  target: 'static',
  nitro: {
    preset: 'vercel-static'
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
    formats: ['avif', 'webp'], // tries AVIF first, falls back to WebP/PNG
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280
    },
    // auto detects public/ path
    dir: 'public'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  imports: { autoImport: true },
})
