<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://greenhubproject.org">
          <logo menu="true"/>
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://github.com/greenhub-project" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-github"></i>
          </span>
        </a>

        <div class="navbar-burger burger" data-target="navMenuExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
          <a class="navbar-item" href="https://docs.greenhubproject.org">Docs</a>
          <a class="navbar-item" href="https://medium.com/greenhub-blog">Blog</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Ecosystem
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="https://github.com/greenhub-project/batteryhub" target="_blank">
                GreenHub BatteryHub
              </a>
              <a class="navbar-item" href="https://github.com/greenhub-project/farmer" target="_blank">
                GreenHub Farmer
              </a>
              <a class="navbar-item" href="https://github.com/greenhub-project/lumberjack" target="_blank">
                GreenHub Lumberjack
              </a>
            </div>
          </div>
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a id="twitter"
                  class="button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://greenhubproject.org"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Greenhub: A collaborative approach to power consumption analysis of Android devices&url=https://greenhubproject.org&via=hmatalonga">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://play.google.com/store/apps/details?id=com.hmatalonga.greenhub" target="_blank">
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
  #twitter {
    color: #55acee;
    border-color: #55acee;
  }

  #twitter:hover {
    color: white;
    background-color: #55acee;
  }
</style>
