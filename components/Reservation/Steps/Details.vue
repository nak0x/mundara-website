<template>
  <div class="hero is-fullheight pt-0 is-flex is-align-items-center">
    <div class="step-content is-flex-center flex-col g-2 w-100">
      <div class="columns is-multiline w-100">
        <div class="column is-12 columns w-100" v-if="choice >= 0 && choice < choices.length">
          <div class="column is-4">
            <div class="details-image rugged-border w-100 h-100">
              <NuxtImg
                :src="choices[choice].image"
                alt="Mundara"
                format="avif"
                class="choice-background"
              />
            </div>
          </div>
          <div class="column is-8">
            <h2 class="title is-1 c-noir">{{ choices[choice].title }}</h2>
            <p class="subtitle is-3 c-marron">{{ choices[choice].subtitle }}</p>
            <p class="is-size-5 c-marron mt-6">{{ choices[choice].longDescription }}</p>
            <div class="is-flex g-3 mt-3">
              <button @click="cancel" class="button is-secondary">Changer</button>
              <button @click="validate" class="button is-primary">Choisir</button>
            </div>
          </div>
        </div>
        <div class="column is-12 w-100 is-flex-center flex-col mt-3" v-else>
          <h2 class="title is-2 c-marron">Vous devez faire un choix.</h2>
          <button class="button is-primary" @click="cancel">Faire un choix</button>
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

  function validate() {
    currentStep.value = currentStep.value + 1; 
  }

  function cancel() {
    choice.value = -1;
    currentStep.value = 1;
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

<style lang="scss" scoped>
.details-image {
  min-height: 10dvh;
  aspect-ratio: 1;
}
</style>
