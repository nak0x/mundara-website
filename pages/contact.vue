<template>
  <main class="page-container">
    <section class="hero is-fullheight" data-theme="light">
      <!-- Form -->
      <div v-if="!isSubmitted" class="hero-body flex-col">
        <h1 class="title is-1 c-noir has-text-centered">Contactez-nous</h1>
        <form class="w-65" @submit.prevent="handleSubmit">
          <div class="field">
            <label class="label c-noir">Nom</label>
            <div class="control has-icons-left has-icons-right">
              <input v-model="nom" class="input" type="text" placeholder="Nom" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label c-noir">Objet</label>
            <div class="control">
              <input v-model="objet" class="input c-noir" type="text" placeholder="Demande d'information" />
            </div>
          </div>

          <div class="field">
            <label class="label c-noir">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input v-model="email" class="input" type="email" placeholder="monemail@service.com" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label c-noir">Message</label>
            <div class="control">
              <textarea v-model="message" class="textarea" placeholder="J'aimerais savoir si ...."></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="agree" />
                I agree to the <a href="/cgv">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button type="button" class="button is-secondary">Cancel</button>
            </div>
            <div class="control">
              <button type="submit" class="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
      
      <!-- Success Message -->
      <div v-else class="hero-body flex-col">
        <h1 class="title c-orange mb-4">Votre message a bien été pris en compte !</h1>
        <div class="subtitle">Merci {{  nom  }} ! ✨</div>
        <NuxtLink to="/" class="button is-primary mt-6">Retours a la page d'accueil</NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const nom = ref('')
const objet = ref('')
const email = ref('')
const message = ref('')
const agree = ref(false)

const isSubmitted = ref(false)

function handleSubmit() {
  console.log('Form submitted:', {
    nom: nom.value,
    objet: objet.value,
    email: email.value,
    message: message.value,
    agree: agree.value
  })

  if (
    nom.value != '' &&
    objet.value != '' &&
    email.value != '' &&
    message.value != '' &&
    agree.value
  )

  isSubmitted.value = true;
}
</script>
