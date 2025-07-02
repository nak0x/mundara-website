// https://nuxt.com/docs/api/configuration/nuxt-config
import Inspect from 'vite-plugin-inspect'
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
        {
          rel: 'stylesheet',
          href: '/style/main.css',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/Nersans-Three.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/GeneralSans-Variable.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
      ]
    }
  },
  devtools: {
    enabled: true,
  },
  ssr: true,
  target: 'static',
  nitro: {
    preset: 'vercel-static',
  },
  css:['@/assets/scss/main.scss'],
  build: {
    extractCSS: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;'
        }
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: { drop_console: true },
      },
    },
    plugins: [
      Inspect()
    ],
    server: {
      fs: {
        allow: ['.'] // important to allow plugin paths
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
    formats: ['avif', 'webp'], // tries AVIF first, falls back to WebP/
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280
    },
    // auto detects public/ path
    dir: 'public',
    presets: {
      default: {
        modifiers: {
          loading: 'lazy'
        }
      }
    }
  },
  imports: { autoImport: true },
})
