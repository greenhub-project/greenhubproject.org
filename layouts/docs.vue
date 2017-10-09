<template>
  <div>
    <nav-bar/>
    <page-header title="docs"/>
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column is-3">
            <docs-menu/>
          </div>
          <div class="column is-6 is-offset-1">
            <nuxt/>
          </div>
        </div>
      </section>
    </div>
    <page-footer/>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar.vue'
  import DocsMenu from '~/components/DocsMenu.vue'
  import PageHeader from '~/components/PageHeader.vue'
  import PageFooter from '~/components/PageFooter.vue'

  export default {
    name: 'docs',

    components: {
      NavBar,
      DocsMenu,
      PageHeader,
      PageFooter
    }
  }
</script>

<style lang="scss">
  body {
    font-size: 15px;
  }

  ul.summary {
    list-style: square;
  }

  .content h2 {
    margin-top: 55px !important;
  }

  .content h3 {
    margin-top: 45px !important;
  }

  .content h3::before {
    content: '#';
    margin-right: 5px;
    color: #00d1b2;
  }
</style>
