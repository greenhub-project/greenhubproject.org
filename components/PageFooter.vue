<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-3 is-offset-2">
          <aside class="menu">
            <p class="menu-label">
              Docs
            </p>
            <ul class="menu-list">
              <li><nuxt-link to="/docs/intro/overview">Introduction</nuxt-link></li>
              <li><nuxt-link to="/docs/architecture-concepts/workflow">Architure Concepts</nuxt-link></li>
              <li><nuxt-link to="/docs/api">API</nuxt-link></li>
            </ul>
          </aside>
        </div>
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">
              Ecosystem
            </p>
            <ul class="menu-list">
              <li><a href="https://github.com/hmatalonga/greenhub">GreenHub BatteryHub</a></li>
              <li><a href="https://greenhub.di.ubi.pt">GreenHub Farmer</a></li>
              <li><a href="https://github.com/hmatalonga/greenhub-lumberjack">GreenHub Lumberjack</a></li>
            </ul>
          </aside>
        </div>
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">
              More
            </p>
            <ul class="menu-list">
              <li><nuxt-link to="/blog">Blog</nuxt-link></li>
              <li><nuxt-link to="/privacy">Privacy Policy</nuxt-link></li>
              <li><a href="https://github.com/hmatalonga/greenhub/wiki">Wiki</a></li>
            </ul>
          </aside>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <logo margin="true">
            <p class="love" slot="love">Made with ♥ in Portugal</p>
            <p class="copyright" slot="copyright">2017 GreenHub</p>
          </logo>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'page-footer',

  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
  .content {
    p {
      padding: 25px 0;
      font-size: small;
    }
  }
</style>
