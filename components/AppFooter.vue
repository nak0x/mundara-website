<template>
  <footer class="footer b-noir">
    <NuxtLink to="mailto:contat@mundara.com"class="title is-1 c-orange">contact@mundara.com</NuxtLink>
    <div class="columns py-6 my-3">
      <div class="column is-6 is-flex flex-col">
        <NuxtLink class="is-size-5" to="/">Accueil</NuxtLink>
        <NuxtLink class="is-size-5" to="/reservation">Reservation</NuxtLink>
        <NuxtLink class="is-size-5" to="/contact">Contactez nous</NuxtLink>
      </div>
      <div class="column is-6 has-text-right c-orange">
        <p class="is-size-4">Addresse</p>
        <p class="is-size-5">11 Place Carnot, Annecy 74000</p>
        <p class="is-size-5">0450982543</p>
      </div>
    </div>
    <p class="uge is-size-1-mobile title c-orange">MUNDARA</p>
  </footer>
</template>

<style lang="scss" scoped>
.uge {
  text-align: center;
  font-size: 13em;
  line-height: 0.5em;
  padding-top: 2rem;
}
</style>
