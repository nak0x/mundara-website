<template>
  <div class="hero is-fullheight pt-0 is-flex is-align-items-center">
    <div class="step-content is-flex-center flex-col g-2 w-100">
      <div class="columns is-multiline w-100">
        <div class="column is-12 w-100">
          <PartialsBookingTable />
          <div class="is-flex-center w-100 mt-6 g-4">
            <button @click="cancel" class="button is-secondary title is-5 m-0">Annuler</button>
            <button @click="validate" class="button is-primary title is-5 m-0">Confirmer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details-image {
  min-height: 10dvh;
  aspect-ratio: 1;
}
</style>

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
