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
</script>

