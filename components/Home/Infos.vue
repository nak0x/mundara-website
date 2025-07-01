<template>
  <section class="section b-bleu is-flex-center" id="infos">
    <div class="info-container">
      <p class="info title" v-for="(info, idx) in infos" :key="idx">
        <NuxtImg
          :src="info.img1"
          height="64"
          width="130"
          format="avif"
        />
        <span>{{ info.content }}</span>
        <NuxtImg
          :src="info.img2"
          format="avif"
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
      "img1": "images/infos-imgs/info-i1.png",
      "img2": "images/infos-imgs/info-i2.png",
    },
    {
      "content": "Du lundi au vendredi",
      "img1": "images/infos-imgs/info-i3.png",
      "img2": "images/infos-imgs/info-i4.png",
    },
    {
      "content": "9H00 - 19H00",
      "img1": "images/infos-imgs/info-i5.png",
      "img2": "images/infos-imgs/info-i6.png",
    },
    {
      "content": "11 Place Carnot, Annecy",
      "img1": "images/infos-imgs/info-i7.png",
      "img2": "images/infos-imgs/info-i1.png",
    },
  ]
</script>
