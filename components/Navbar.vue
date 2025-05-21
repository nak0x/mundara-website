<template>
  <nav class="custom-navbar columns p-0 m-0">
    <div class="logo-container column is-2 p-3">
      <NuxtImg
        src="/images/logo.png"
        alt="Mundara"
        height="64"
        width="110"
        format="avif"
      />
    </div>
    <div class="navitems-container column is-flex-center">
      <NuxtLink to="/" class="custom-navitem">Home</NuxtLink>
      <NuxtLink to="/#experiences" class="custom-navitem">Experiences</NuxtLink>
      <NuxtLink to="/contact" class="custom-navitem">Contact</NuxtLink>
    </div>
    <div class="nav-cta column p-3 is-2 is-flex is-justify-content-end is-align-items-center">
      <NuxtLink to="/reservation" class="button">Reserver</NuxtLink>
    </div>
  </nav>
</template>
