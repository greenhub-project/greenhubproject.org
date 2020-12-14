<template>
  <div class="container">
    <PageHeader title="blog" />

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
export default {
  name: 'Blog',

  layout: 'page',

  head () {
    return {
      title: 'GreenHub - Blog'
    }
  }
}
</script>
