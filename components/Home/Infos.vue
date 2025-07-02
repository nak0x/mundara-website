<template>
  <section class="section b-bleu is-flex-center" id="infos">
    <div class="info-container">
      <p class="info title" v-for="(info, idx) in infos" :key="idx">
        <NuxtImg
          :src="info.img1"
          height="64"
          width="130"
          format="avif"
          :alt="info.content"
        />
        <span>{{ info.content }}</span>
        <NuxtImg
          :src="info.img2"
          format="avif"
          height="64"
          width="130"
          :alt="info.content"
        />
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.section {
  min-height: 75vh;
}

.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;
    font-size: 1.5em;
    text-align: center;
    width: 100%;

    img {
      width: 100%;
      max-width: 15vw;
    }
  }
}

</style>

<script setup>
  const infos = [
    {
      "content": "Toute la semaine",
      "img1": "images/infos-imgs/info-i1.avif",
      "img2": "images/infos-imgs/info-i2.avif",
    },
    {
      "content": "Du lundi au vendredi",
      "img1": "images/infos-imgs/info-i3.avif",
      "img2": "images/infos-imgs/info-i4.avif",
    },
    {
      "content": "9H00 - 19H00",
      "img1": "images/infos-imgs/info-i5.avif",
      "img2": "images/infos-imgs/info-i6.avif",
    },
    {
      "content": "11 Place Carnot, Annecy",
      "img1": "images/infos-imgs/info-i7.avif",
      "img2": "images/infos-imgs/info-i1.avif",
    },
  ]
</script>
