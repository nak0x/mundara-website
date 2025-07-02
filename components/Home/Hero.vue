<template>
  <section class="hero is-fullheight is-flex-center flex-col">
    <div class="hero-body w-100">
      <div class="content w-100 is-flex is-flex-justifiy-content-center is-align-items-center is-flex-direction-column">
        <p class="hero-title c-noir title is-size-1-mobile">Mundara</p>
        <p class="subtitle is-size-5-mobile c-noir has-text-centered mt-6 pt-4">Nous proposons des ateliers immersif pour faire découvrir les cultures matérielles de plusieurs civilisations. Pour ceux qui ont des difficultés à voyager, grâce à la réalité augmentée.</p>
        <NuxtLink to="/reservation" class="button is-primary is-medium mt-4" >Reserver</NuxtLink>
      </div>
    </div>
    <div class="doors-images">
      <NuxtImg
        v-for="(door, key) in doors"
        :key="key"
        :src="door.img"
        :alt="door.title"
        format="avif"
        class="door"
        :style="`transform: rotateZ(${door.rotation}deg) translateX(${door.translateX}%) translateY(${door.translateY}%)`"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .doors-images {
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .door {
    border-radius: 99rem 99rem 0 0;
    width: 23%;
    height: auto;
    aspect-ratio: 113/164;
    background-color: var(--bulma-primary);
  }
</style>

<script lang="js" setup>
  const doors = [
    {
      title: 'Traditional Clayering',
      img: '/images/doors/traditional-clay-pot.avif',
      rotation: -15,
      translateX: -20,
      translateY: 15,
    },
    {
      title: 'Holographic clayering',
      img: '/images/doors/holographic-clayering.avif',
      rotation: -15,
      translateX: -17,
      translateY: 15,
    },
    {
      title: 'Hands clayering',
      img: '/images/doors/hands-clayering.avif',
      rotation: 10,
      translateX: 15,
      translateY: 16,
    },
    {
      title: 'Workbench clayering',
      img: '/images/doors/workbench-clayering.avif',
      rotation: -15,
      translateX: 10,
      translateY: 20,
    }
  ]
</script>
