// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  target: 'static', // SSG target
  nitro: {
    preset: 'vercel-static'
  }
})
