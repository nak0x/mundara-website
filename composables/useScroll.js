import Lenis from 'lenis'

let lenisInstance = null

export function useLenis(onScroll) {
  if (!lenisInstance) {
    lenisInstance = new Lenis({ smooth: true })

    function raf(time) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  if (onScroll) {
    lenisInstance.on('scroll', onScroll)
  }

  return lenisInstance
}

