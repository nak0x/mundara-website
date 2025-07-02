<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" data-theme="light">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <NuxtImg
          src="/images/logo.png"
          alt="Mundara"
          format="avif"
        />
      </NuxtLink>

      <a @click="toggleMenu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar-menu" class="navbar-menu">
      <div class="navbar-items-container">
        <NuxtLink to="/" class="navbar-item">Accueil</NuxtLink>
        <a href="/#presentation" class="navbar-item">Présentation</a>
        <a href="/#ateliers" class="navbar-item">Ateliers</a>
        <a href="/#infos" class="navbar-item">Infos pratiques</a>
        <NuxtLink to="/contact" class="navbar-item">Contact</NuxtLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <NuxtLink to="/reservation" class="button is-primary">Reserver</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="js" setup>
  function toggleMenu(e) {
    e.target.classList.toggle('is-active');
    document.getElementById('navbar-menu').classList.toggle('is-active');

  }
</script>

<style scoped lang="scss">
.navbar-menu {
  .navbar-items-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &.is-active {
    .navbar-items-container {
      flex-direction: column;
      justify-content: start;
    }
    
    .navbar-end {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
