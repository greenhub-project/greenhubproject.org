<template>
  <div>
    <nav-bar/>
    <nuxt/>
    <page-footer/>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar.vue'
  import PageFooter from '~/components/PageFooter.vue'

  export default {
    components: {
      NavBar,
      PageFooter
    }
  }
</script>

<style lang="scss">
  body {
    font-size: 15px;
  }
</style>
