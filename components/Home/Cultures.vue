<template>
  <section class="section p-0">
    <div class="row" v-for="(culture, index) in sectionContent" :key="index" :class="index % 2 ? 'flipped b-marron' : 'b-blanc'">
      <div class="col img">
        <NuxtImg
          :src="culture.img"
          :alt="culture.title"
          format="avif"
        />
      </div>
      <div class="col content" :class="index % 2 ? 'c-blanc' : 'c-marron'">
        <h3 class="title is-2 inherit-color">{{ culture.title }}</h3>
        <p class="subtitle is-4 inherit-color mt-2">{{ culture.subtitle }}</p>
        <div class="columns mt-6">
          <div class="column is-6">{{ culture.text1 }}</div>
          <div class="column is-6">{{ culture.text2 }}</div>
        </div>
        <NuxtLink to="/reservation" class="button" :class="index % 2 ? 'is-primary' : 'is-secondary'">Découvrir</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .col {
    display: block;
    width: 100vw;
    min-height: 25vh;

    &.content {
      padding: 2em;
    }

    &.img img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &.flipped {
    flex-direction: col-reverse;
  }
}

@media screen and (min-width: 992px) {
  .row {
    flex-direction: row;

    &.flipped {
      flex-direction: row-reverse;
    }
  }
}
</style>

<script setup>
  const sectionContent = [
    {
      "title": "MEXIQUE ANCIEN",
      "subtitle": "La poterie méso-américaine",
      "text1": "Bien plus qu’un simple contenant, la poterie dans les civilisations du Mexique ancien (Mayas, Aztèques, Toltèques…) était un support d’expression, de rituel et de transmission.",
      "text2": "À travers nos ateliers, les participant·es explorent les formes, les décors et les usages de ces objets en argile, tout en découvrant les techniques de modelage et de cuisson utilisées dans les ateliers précolombiens.",
      "img": "/images/hands-clayering.png"
    },
    {
      "title": "MAROC ANCIEN",
      "subtitle": "Le cuir, matière vivante",
      "text1": "Du cœur des tanneries aux mains des artisans, le cuir marocain est bien plus qu’un matériau : c’est un savoir-faire transmis de génération en génération.",
      "text2": "Dans cet atelier, les participant·es découvrent les différentes étapes du travail du cuir, trempage, tannage, teinture, façonnage. À travers des objets du quotidien comme les babouches.",
      "img": "/images/maroc.png"
    },
    {
      "title": "EGYPTE ANTIQUE",
      "subtitle": "La calligraphie comme pouvoir",
      "text1": "Plus qu’un simple outil d’écriture, la calligraphie en Égypte antique était un art sacré, réservé à une élite formée et respectée.",
      "text2": "À travers nos ateliers, les participants découvrent les instruments du scribe, les formes de l’écriture hiéroglyphique, et le rôle politique et spirituel de l’écrit dans cette civilisation fascinante.",
      "img": "/images/egypte.png"
    },
  ]
</script>
