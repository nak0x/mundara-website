import { gsap } from 'gsap'
import { onMounted, onUnmounted } from 'vue'

export const useRaf = (callback, once = false, prioritize = false) => {
  onMounted(() => {
    gsap.ticker.add(callback, once, prioritize)
  })

  onUnmounted(() => {
    gsap.ticker.remove(callback)
  })
}

