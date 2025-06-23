<template>
  <div class="columns w-100 c-noir">
    <div class="column is-3">
      <div v-if="currentStep > 1" >
        <button @click="previews"><i class="c-orange is-size-4 fa-solid fa-arrow-left"></i></button>
      </div>
    </div>
    <div class="column is-6">
      <div class="is-flex-center g-2">
        <div class="step" v-for="step in steps" :key="step">
          <button class="button is-rounded py-3 title is-6" :class="step == currentStep ? 'is-link c-blanc' : 'is-outline' " @click="goto(step)">{{ step }}</button>
        </div>
      </div>
    </div>
    <div class="column is-3 has-text-right">
      <div v-if="currentStep < steps">
        <button @click="next"><i class="c-orange is-size-4 fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
  import { ref, watch, defineProps, defineEmits } from 'vue'

  const props = defineProps({
    currentStep: Number,
    steps: Number,
  })

  const emit = defineEmits([
    'update:currentStep',
  ])

  const currentStep = ref(props.currentStep)
  const steps = ref(props.steps)

  function previews() {
    if (currentStep.value - 1 < 1) return;
    currentStep.value = currentStep.value - 1;
  }

  function next() {
    if (currentStep.value + 1 > steps) return;
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
</script>
