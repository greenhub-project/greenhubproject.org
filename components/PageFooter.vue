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
              <li><a href="https://docs.greenhubproject.org">Introduction</a></li>
              <li><a href="https://docs.greenhubproject.org/api-reference/">API</a></li>
            </ul>
          </aside>
        </div>
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">
              Ecosystem
            </p>
            <ul class="menu-list">
              <li><a href="https://github.com/greenhub-project/batteryhub">GreenHub BatteryHub</a></li>
              <li><a href="https://github.com/greenhub-project/farmer">GreenHub Farmer</a></li>
              <li><a href="https://github.com/greenhub-project/lumberjack">GreenHub Lumberjack</a></li>
            </ul>
          </aside>
        </div>
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">
              More
            </p>
            <ul class="menu-list">
              <li><a href="https://greenhub-group.slack.com/">Slack</a></li>
              <li>
                <nuxt-link to="/privacy">
                  Privacy Policy
                </nuxt-link>
              </li>
              <li><a href="http://greenlab.di.uminho.pt/">Green Software Lab</a></li>
            </ul>
          </aside>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <Logo :margin="true">
            <p slot="love" class="love">
              Made with ♥ in Portugal
            </p>
            <p slot="copyright" class="copyright">
              2020 GreenHub
            </p>
          </Logo>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
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
