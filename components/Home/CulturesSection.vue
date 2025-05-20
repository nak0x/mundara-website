<template>
  <div class="cultures-container">
    <h2 class="title is-1 section-title">
      Discover the cultures
    </h2>
    <div class="experiences-container">
      <section class="experience-section" v-for="exp in experiences" :key="exp.id">
        <div class="layers">
          <NuxtImg
            v-for="i in layers"
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

  gsap.registerPlugin(ScrollTrigger);

  const layers = 5;
  const experiences = experiencesDatas.experiences;

  onMounted(() => {
    const door = document.querySelector('.clipping-door');

    gsap.timeline({
      scrollTrigger: {
        trigger: '.cultures-container',
        start: 'top top',
        end: 'bottom top', // ends when bottom of container hits top of viewport
        scrub: 0.1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: true
      }
    })
    .to(door, {
      scale: 10,
      y: -250,
      ease: 'power2.inOut',
      transformOrigin: 'center center'
    });
  });
</script>
