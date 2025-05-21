<template>
  <div class="experience-wrapper">
    <div class="cultures-container">
      <h2 class="title is-1 section-title">
        Discover the cultures
      </h2>
      <div class="experiences-container">
        <section class="experience-section" v-for="exp in experiences" :key="exp.id">
          <div class="layers">
            <NuxtImg
              v-for="i in exp.layers"
              :key="i"
              :src="`/images/experience/${exp.id}/layer_${i}.png`"
              format="avif"
              class="layer"
              aria-hidden
            />
          </div>
        </section>
        <NuxtImg
          src="/images/door.png"
          format="avif"
          placeholder
          class="clipping-door"
          aria-hidden
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import experiencesDatas from '~/data/experiences.json';
  import gsap from 'gsap';
  import { onMounted } from 'vue';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const experiences = experiencesDatas.experiences;

  onMounted(() => {
    const door = document.querySelector('.clipping-door');
    const title = document.querySelector('.section-title');
    const layersContainer = document.querySelector('.layers');

    gsap.timeline({
      scrollTrigger: {
        trigger: '.cultures-container',
        start: 'top top',
        end: 'bottom top', // ends when bottom of container hits top of viewport
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: "experiences"
      }
    })
    .to(door, {
      scale: 11.56,
      y: -1000,
      ease: 'none',
      transformOrigin: 'center center'
    }, 0)
    .to(layersContainer, {
      scale: 1.05,
      y: 0,
      ease: 'power2.out',
      transformOrigin: 'center center'
    }, "-=0.6")
    .to(title, {
      opacity: 0,
      ease: 'none'
    }, "-=1")
    const container = document.querySelector('.cultures-container');
    const layers = container?.querySelectorAll('.layer');

    if (!layers) return;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

      layers.forEach((layer, i) => {
        const depth = (i + 1) / layers.length;
        const movement = depth * 30; // max offset in px

        gsap.to(layer, {
          x: mouseX * movement,
          y: mouseY * movement,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });
  });
</script>
