import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { faUser, faEnvelope, faCreditCard } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faEnvelope, faCreditCard )

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})

