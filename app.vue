<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Analytics />
    <AppFooter />
  </div>
</template>

<script setup>
  import { Analytics } from '@vercel/analytics/nuxt'
  import { useLenis } from '~/composables/useScroll'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  onMounted(() => {
    const lenis = useLenis(ScrollTrigger.Update)
  })

  useHead({
    titleTemplate: (title) => 'Mundara · The Cultural experience',
    meta: [
      { name: 'description', content: 'Mundara is a cultural experience to reconnected to lost cultures.' },
      { property: 'og:title', content: 'Mundara' },
      { property: 'og:description', content: 'Mundara is a cultural experience to reconnected to lost cultures.' },
      { property: 'og:image', content: '/images/logo.png' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Mundara' },
      { name: 'twitter:description', content: 'Mundara is a cultural experience to reconnected to lost cultures.' },
      { name: 'twitter:image', content: '/images/logo.png' }
    ]
  })
</script>

