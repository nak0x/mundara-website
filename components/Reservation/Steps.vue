<template>
  <div class="step-body">
    <ReservationStepsChoice
      v-if="currentStep == 1"
      v-bind:choices="choices"
      v-model:choice="choice"
      v-model:currentStep="currentStep"
    />
    <ReservationStepsDetails
      v-if="currentStep == 2"
      v-bind:choices="choices"
      v-model:choice="choice"
      v-model:currentStep="currentStep"
    />
    <ReservationStepsBooking
      v-if="currentStep == 3"
      v-model:currentStep="currentStep"
    />
    <ReservationStepsPayment
      v-if="currentStep == 4"
      v-model:currentStep="currentStep"
    />
  </div>
</template>

<script setup lang="js">
  import { ref, watch, defineProps, defineEmits } from 'vue'

  const props = defineProps({
    currentStep: Number,
    choice: Number,
    choices: Array,
  })

  const emit = defineEmits([
    'update:currentStep',
    'update:choice',
  ])

  const currentStep = ref(props.currentStep)
  const choice = ref(props.choice)

  function previews() {
    currentStep.value = currentStep.value - 1;
  }

  function next() {
    currentStep.value = currentStep.value + 1;
  }

  function goto(step) {
    currentStep.value = step
  }

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
</script>
