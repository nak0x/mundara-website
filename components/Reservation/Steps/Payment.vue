<template>
  <div class="hero is-fullheight pt-0 is-flex is-align-items-center">
    <div v-if="!isSubmitted" class="step-content w-100 is-flex-center flex-col g-2">
      <h1 class="title is-1 c-noir has-text-centered">Paiement</h1>
      <form class="w-65" @submit.prevent="handleSubmit">
        <div class="field">
          <label class="label c-noir">Nom sur la carte</label>
          <div class="control has-icons-left">
            <input v-model="cardName" class="input" type="text" placeholder="Jean Dupont" />
            <span class="icon is-small is-left">
              <FontAwesomeIcon icon="user" />
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label c-noir">Numéro de carte</label>
          <div class="control has-icons-left">
            <input v-model="cardNumber" class="input" type="text" placeholder="1234 5678 9012 3456" />
            <span class="icon is-small is-left">
              <FontAwesomeIcon icon="credit-card" />
            </span>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <label class="label c-noir">Expiration</label>
              <div class="control">
                <input v-model="cardExpiry" class="input" type="text" placeholder="MM/YY" />
              </div>
            </div>
            <div class="field">
              <label class="label c-noir">CVC</label>
              <div class="control">
                <input v-model="cardCVC" class="input" type="text" placeholder="123" />
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="checkbox">
            <input type="checkbox" v-model="agree" />
            J'accepte les <a href="/cgv">conditions générales de vente</a>
          </label>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button type="button" @click="resetForm" class="button is-secondary">Annuler</button>
          </div>
          <div class="control">
            <button type="submit" class="button is-primary">Payer</button>
          </div>
        </div>
      </form>
    </div>

    <div v-else class="hero-body flex-col">
      <h1 class="title c-orange mb-4">Paiement réussi !</h1>
      <div class="subtitle">Merci {{ cardName }} pour votre paiement.</div>
      <NuxtLink to="/" class="button is-primary mt-6">Retour à l'accueil</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cardName = ref('')
const cardNumber = ref('')
const cardExpiry = ref('')
const cardCVC = ref('')
const agree = ref(false)
const isSubmitted = ref(false)

function resetForm() {
  cardName.value = ''
  cardNumber.value = ''
  cardExpiry.value = ''
  cardCVC.value = ''
  agree.value = false
}

function handleSubmit() {
  if (
    cardName.value &&
    cardNumber.value &&
    cardExpiry.value &&
    cardCVC.value &&
    agree.value
  ) {
    console.log('Fake payment:', {
      name: cardName.value,
      number: cardNumber.value,
      expiry: cardExpiry.value,
      cvc: cardCVC.value,
    })
    isSubmitted.value = true
  }
}
</script>

<style scoped>
/* Add styling if needed */
</style>

