<template>
  <Analytics />
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
  import { Analytics } from '@vercel/analytics/nuxt'
</script>

