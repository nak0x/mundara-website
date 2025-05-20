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

  const layers = 5;
  const experiences = experiencesDatas.experiences;
</script>
