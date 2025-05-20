<template>
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
            placeholder
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
        scrub: 0.1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    })
    .to(door, {
      scale: 11.5,
      y: -250,
      ease: 'power2.inOut',
      transformOrigin: 'center center'
    })
    .to(layersContainer, {
      scale: 1.05,
      ease: 'power2.inOut',
      y: 0,
      transformOrigin: 'center center'
    })
    .to(title, {
      opacity: 0,
      ease: 'power2.inOut'
    })
    .to(door, {
      opacity: 0,
      ease: 'power2.inOut',
    });
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
