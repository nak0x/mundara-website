<template>
  <main class="page-content">
    <div class="hero is-fullheight">
      <div class="hero-body" data-theme="light">
        <div class="w-100">
          <ReservationProgress
            v-model:currentStep="currentStep"
            v-bind:steps="steps"
          />
          <pre class="mb-4">Step: {{ currentStep }} | Choice: {{ choice }}</pre>
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

  const currentStep = ref(2)
  const steps = ref(4)
  const choice = ref(1)

  const emit = defineEmits([
    'update:currentStep',
    'update:choice',
  ])

  const choices = [
    {
      'title': 'Mexico',
      'subtitle': 'BLSJLKSDF',
      'description': 'The cultural shitty tkjaosdf sofdje o sdofjieo sojifei oisej foiejfo adsf',
      'longDescription': 'TThe cultural shitty tkjaosdf sofdje o sdofjieo sojifei oisej foiejfo ads fhe cultural shitty tkjaosdf sofdje o sdofjieo sojifei oisej foiejfo adsf',
      'image': '/images/hands-clayering.png',
    },
    {
      'title': 'Grece',
      'subtitle': 'BLSJLKSDF',
      'description': 'The cultural shitty tkjaosdf sofdje o sdofjieo sojifei oisej foiejfo adsf',
      'longDescription': 'TThe cultural shitty tkjaosdf sofdje o sdofjieo sojifei oisej foiejfo ads fhe cultural shitty tkjaosdf sofdje o sdofjieo sojifei oisej foiejfo adsf',
      'image': '/images/grece.jpg',
    },
    {
      'title': 'Egypt',
      'subtitle': 'BLSJLKSDF',
      'description': 'The cultural shitty tkjaosdf sofdje o sdofjieo sojifei oisej foiejfo adsf',
      'longDescription': 'TThe cultural shitty tkjaosdf sofdje o sdofjieo sojifei oisej foiejfo ads fhe cultural shitty tkjaosdf sofdje o sdofjieo sojifei oisej foiejfo adsf',
      'image': '/images/egypte.jpg',
    },
  ]

  watch(() => choice.value, (v) => {
    if (v !== choice.value) {
      choice.value = v
    }
  })
</script>
