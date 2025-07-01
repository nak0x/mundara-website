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
        src="/images/Hero-bottom.png"
        alt="Doors with experiences previews"
        format="avif"
        class="custom-hero-bottom"
      />
    </div>
  </section>
</template>
