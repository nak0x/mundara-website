<template>
  <nav class="custom-navbar columns px-6 py-0 m-0">
    <div class="logo-container column is-2 p-3">
      <NuxtImg
        src="/images/logo.png"
        alt="Mundara"
        height="64"
        width="130"
        format="avif"
      />
    </div>
    <div class="navitems-container column is-flex-center">
      <NuxtLink to="/" class="custom-navitem c-noir">Accueil</NuxtLink>
      <a href="/#presentation" class="custom-navitem c-noir">Présentation</a>
      <a href="/#ateliers" class="custom-navitem c-noir">Ateliers</a>
      <a href="/#infos" class="custom-navitem c-noir">Infos pratiques</a>
      <NuxtLink to="/contact" class="custom-navitem c-noir">Contact</NuxtLink>
    </div>
    <div class="nav-cta column p-3 is-2 is-flex is-justify-content-end is-align-items-center">
      <NuxtLink to="/reservation" class="button is-primary">Reserver</NuxtLink>
    </div>
  </nav>
</template>
