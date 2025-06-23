<template>
  <section class="section py-6 my-6">
    <div class="columns">
      <div class="column is-6">
        <h3 class="title is-3 c-noir">FAQ</h3>
        <p class="subtitle is-5 c-noir mt-5 w-80">
          Vous vous demandez comment se déroule un atelier, qui peut y participer, ou ce qu’il vous faut pour organiser
          une session dans votre structure ?
        </p>
      </div>
      <div class="column is-6">
        <details class="c-noir py-3 faq-item" v-for="(question, idx) in faqItems" :key="idx">
          <summary class="clickable is-size-5">{{ question.label }}</summary>
          <p class="mt-3 pt-1 faq-item-content">{{ question.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqItems = [
  {
    "label": "(01) Qui peut participer à ces ateliers ?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat libero eget est luctus, in semper quam venenatis. Curabitur pellentesque accumsan neque, vel malesuada dolor viverra ut. Vivamus dapibus et lacus id laoreet. Sed neque mi, aliquam id gravida sit amet, venenatis at mauris. Ut non nunc interdum, venenatis nisl ac, blandit erat. Mauris tempus orci eget ultricies laoreet. Donec gravida tellus ipsum, quis porttitor mi dapibus non. Cras ultricies ante purus, sed fermentum elit iaculis vitae. Sed nec feugiat lectus. Vivamus id risus imperdiet, tristique risus et, suscipit ipsum. Duis id ullamcorper arcu. Suspendisse laoreet eget nisi quis ullamcorper."
  },
  {
    "label": "(02) Faut-il du matériel spécifique pour participer ?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat libero eget est luctus, in semper quam venenatis. Curabitur pellentesque accumsan neque, vel malesuada dolor viverra ut. Vivamus dapibus et lacus id laoreet. Sed neque mi, aliquam id gravida sit amet, venenatis at mauris. Ut non nunc interdum, venenatis nisl ac, blandit erat. Mauris tempus orci eget ultricies laoreet. Donec gravida tellus ipsum, quis porttitor mi dapibus non. Cras ultricies ante purus, sed fermentum elit iaculis vitae. Sed nec feugiat lectus. Vivamus id risus imperdiet, tristique risus et, suscipit ipsum. Duis id ullamcorper arcu. Suspendisse laoreet eget nisi quis ullamcorper."
  },
  {
    "label": "(03) Combien de temps dure un atelier ?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat libero eget est luctus, in semper quam venenatis. Curabitur pellentesque accumsan neque, vel malesuada dolor viverra ut. Vivamus dapibus et lacus id laoreet. Sed neque mi, aliquam id gravida sit amet, venenatis at mauris. Ut non nunc interdum, venenatis nisl ac, blandit erat. Mauris tempus orci eget ultricies laoreet. Donec gravida tellus ipsum, quis porttitor mi dapibus non. Cras ultricies ante purus, sed fermentum elit iaculis vitae. Sed nec feugiat lectus. Vivamus id risus imperdiet, tristique risus et, suscipit ipsum. Duis id ullamcorper arcu. Suspendisse laoreet eget nisi quis ullamcorper."
  },
  {
    "label": "(04) Quelles cultures sont abordées ?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat libero eget est luctus, in semper quam venenatis. Curabitur pellentesque accumsan neque, vel malesuada dolor viverra ut. Vivamus dapibus et lacus id laoreet. Sed neque mi, aliquam id gravida sit amet, venenatis at mauris. Ut non nunc interdum, venenatis nisl ac, blandit erat. Mauris tempus orci eget ultricies laoreet. Donec gravida tellus ipsum, quis porttitor mi dapibus non. Cras ultricies ante purus, sed fermentum elit iaculis vitae. Sed nec feugiat lectus. Vivamus id risus imperdiet, tristique risus et, suscipit ipsum. Duis id ullamcorper arcu. Suspendisse laoreet eget nisi quis ullamcorper."
  },
  {
    "label": "(05) Peut-on organiser un atelier dans notre structure ?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat libero eget est luctus, in semper quam venenatis. Curabitur pellentesque accumsan neque, vel malesuada dolor viverra ut. Vivamus dapibus et lacus id laoreet. Sed neque mi, aliquam id gravida sit amet, venenatis at mauris. Ut non nunc interdum, venenatis nisl ac, blandit erat. Mauris tempus orci eget ultricies laoreet. Donec gravida tellus ipsum, quis porttitor mi dapibus non. Cras ultricies ante purus, sed fermentum elit iaculis vitae. Sed nec feugiat lectus. Vivamus id risus imperdiet, tristique risus et, suscipit ipsum. Duis id ullamcorper arcu. Suspendisse laoreet eget nisi quis ullamcorper."
  },
]
</script>

<style lang="scss" scoped>
.faq-item {
  border-bottom: 2px solid black;
}

.faq-item-content {
  border-top: 2px solid black;
}
</style>
