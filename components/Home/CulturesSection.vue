<template>
  <div class="experience-wrapper" id="#experiences">
    <div class="cultures-container">
      <h2 class="title is-1 section-title">
        Discover the cultures
      </h2>
      <div class="experiences-container">
        <section class="experience-section" v-for="exp in experiences" :key="exp.id" :data-id="exp.id">
          <div class="layers">
            <NuxtImg
              v-for="i in exp.layers"
              :key="i"
              :src="`/images/experience/${exp.id}/layer_${i}.avif`"
              format="avif"
              class="layer"
              aria-hidden
              height="100dvh"
              width="100vw"
            />
            <div class="content-container">
              <h3 class="title is-1 mb-3">{{ exp.name }}</h3>
              <p class="subtitle has-text-white">{{ exp.description }}</p>
              <NuxtLink to="/reservation/?id={{exp.id}}" class="button is-primary mt-3">Reserver cette culture</NuxtLink>
            </div>
          </div>
        </section>
        <NuxtImg
          src="/images/door.avif"
          format="avif"
          placeholder
          class="clipping-door"
          aria-hidden
          height="100dvh"
          width="100vw"
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
        id: "experiences",
      }
    })
    .to(door, {
      scale: 11.56,
      y: -1000,
      ease: 'power2.in',
      transformOrigin: 'center center'
    }, 0)
    .to(layersContainer, {
      scale: 1.1,
      y: 0,
      ease: 'power2.out',
      transformOrigin: 'center center'
    }, "-=0.67")
    .to(title, {
      opacity: 0,
      ease: 'none'
    }, "-=1")

    // Parlax
    const container = document.querySelector('.cultures-container');
    const layers = container?.querySelectorAll('.layer');

    const paralaxStrength = 1.2;
    const paralaxLayerZOffset = 60;

    if (!layers) return;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * paralaxStrength;
      const mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * paralaxStrength;

      layers.forEach((layer, i) => {
        const depth = (i + 1) / layers.length;
        const movement = depth * paralaxLayerZOffset; // max offset in px

        gsap.to(layer, {
          x: mouseX * movement,
          y: mouseY * movement,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });

    // Sections scrolling
    const sections = gsap.utils.toArray('.experience-section');

    console.log(sections)

  });
</script>
