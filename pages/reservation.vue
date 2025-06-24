<template>
  <main class="page-content">
    <div class="hero is-fullheight">
      <div class="hero-body" data-theme="light">
        <div class="w-100">
          <ReservationProgress
            v-model:currentStep="currentStep"
            v-bind:steps="steps"
          />
          <ReservationSteps
            v-model:currentStep="currentStep"
            v-model:choices="choices"
            v-model:choice="choice"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="js">
  import { ref, watch, defineProps, defineEmits } from 'vue'

  const currentStep = ref(1)
  const steps = ref(4)
  const choice = ref(-1)

  const emit = defineEmits([
    'update:currentStep',
    'update:choice',
  ])

  const choices = [
    {
      "title": "MEXIQUE ANCIEN",
      "subtitle": "La poterie méso-américaine",
      'description': 'Bien plus qu’un simple contenant, la poterie dans les civilisations du Mexique ancien (Mayas, Aztèques, Toltèques…) était un support d’expression, de rituel et de transmission.',
      'longDescription': 'Bien plus qu’un simple contenant, la poterie dans les civilisations du Mexique ancien (Mayas, Aztèques, Toltèques…) était un support d’expression, de rituel et de transmission.',
      'image': '/images/hands-clayering.png',
    },
    {
      "title": "MAROC ANCIEN",
      "subtitle": "Le cuir, matière vivante",
      'description': 'Du cœur des tanneries aux mains des artisans, le cuir marocain est bien plus qu’un matériau : c’est un savoir-faire transmis de génération en génération.',
      'longDescription': 'Plus qu’un simple outil d’écriture, la calligraphie en Égypte antique était un art sacré, réservé à une élite formée et respectée.  À travers nos ateliers, les participants découvrent les instruments du scribe, les formes de l’écriture hiéroglyphique, et le rôle politique et spirituel de l’écrit dans cette civilisation fascinante.',
      'image': '/images/grece.jpg',
    },
    {
      "title": "EGYPTE ANTIQUE",
      "subtitle": "La calligraphie comme pouvoir",
      'description': 'Plus qu’un simple outil d’écriture, la calligraphie en Égypte antique était un art sacré, réservé à une élite formée et respectée.',
      'longDescription': 'Plus qu’un simple outil d’écriture, la calligraphie en Égypte antique était un art sacré, réservé à une élite formée et respectée.',
      'image': '/images/egypte.jpg',
    },
  ]

  watch(() => choice.value, (v) => {
    if (v !== choice.value) {
      choice.value = v
    }
  })
</script>
