<template>
  <main class="page-container">
    <section class="hero is-fullheight" data-theme="light">
      <div class="hero-body flex-col">
        <h1 class="title is-1 c-noir has-text-centered">Contactez-nous</h1>
        <form class="w-65" action="/api/contact" method="POST">
          <div class="field">
            <label class="label c-noir">Nom</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Nom">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
          
          <div class="field">
            <label class="label c-noir">Objet</label>
            <div class="control">
              <input class="input c-noir" type="text" placeholder="Demande d'information">
            </div>
          </div>

          <div class="field">
            <label class="label c-noir">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="monemail@service.com">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label c-noir">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="J'aimerais savoir si ...."></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="/cgv">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-secondary">Cancel</button>
            </div>
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>
