<template>
  <div class="container">
    <page-header title="blog"/>

    <section class="section">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="content">
            <h1>Blog</h1>
            <hr>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  name: 'blog',

  layout: 'page',

  components: {
    PageHeader
  },

  head () {
    return {
      title: 'GreenHub - Blog'
    }
  }
}
</script>
