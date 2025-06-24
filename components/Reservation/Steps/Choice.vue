<template>
  <div class="hero is-fullheight pt-0 is-flex is-align-items-center">
    <div class="step-content w-100 is-flex-center flex-col g-2">
      <h1 class="title is-2 c-noir w-100 has-text-centered">Choix</h1>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="(choice, key) in choices" :key="key">
          <div class="choice-container">
            <NuxtImg
              :src="choice.image"
              alt="Mundara"
              format="avif"
              class="choice-background"
            />
            <div class="rugged-border choice w-100 h-100 p-4 m-0">
              <div class="w-100 h-100 is-flex flex-col is-justify-content-space-between">
                <h3 class="title is-3 p-3 pt-4 c-blanc">{{ choice.title }}</h3>
                <div class="choice-content p-3 glass">
                  <p class="is-size-5 c-blanc">{{ choice.description }}</p>
                  <button @click="choose(key)" class="button is-primary mt-4">Choisir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
  import { ref, watch, defineProps, defineEmits } from 'vue'

  const props = defineProps({
    choices: Array,
    choice: Number,
    currentStep: Number
  })

  const emit = defineEmits([
    'update:choice',
    'update:currentStep'
  ])

  const choices = ref(props.choices)
  const choice = ref(props.choice)
  const currentStep = ref(props.currentStep)

  function choose(key) {
    if (key >= 0 && key < choices.value.length) {
      choice.value = key;
      currentStep.value = currentStep.value + 1;
    }
  }

  // Sync with parent when internal value changes
  watch(choice, (v) => {
    emit('update:choice', v)
  })

  // Sync with parent updates
  watch(() => props.choice, (v) => {
    if (v !== choice.value) {
      choice.value = v
    }
  })

  // Sync with parent when internal value changes
  watch(currentStep, (v) => {
    emit('update:currentStep', v)
  })

  // Sync with parent updates
  watch(() => props.currentStep, (v) => {
    if (v !== currentStep.value) {
      currentStep.value = v
    }
  })
</script>

<style lang="scss">
.step-content {
  max-width: 1440px;
}

.choice-container {
  position: relative;
  min-height: 400px;
  aspect-ratio: 9/11;
  padding: 0 !important;
}

.choice-background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
