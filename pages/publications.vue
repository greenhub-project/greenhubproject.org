<template>
  <div class="container">
    <page-header title="publications" icon="fa-newspaper-o"/>

    <section class="section">
      <div class="content">
        <h1 class="title">Publications</h1>
        <ul class="is-unstyled">
          <li>
            <h2 class="subtitle">2019</h2>
            <ul class="is-unstyled">
              <li>
                <div class="ml-4">
                  <h3 class="has-text-weight-semibold">
                    GreenHub Farmer: Real-world data for Android Energy Mining
                    <a href="http://greenlab.di.uminho.pt/wp-content/uploads/2019/04/GreenHubFarmerFinal.pdf"><i class="fa fa-link" aria-hidden="true"></i></a>
                  </h3>
                  <p class="has-text-dark">Hugo Matalonga, Bruno Cabral, Fernando Castor, Marco Couto, Rui Pereira, Simão Melo de Sousa and João Paulo Fernandes</p>
                  <p class="has-text-grey">In Proceedings of the 16th International Conference on Mining Software Repositories, ACM, 2019</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <p class="small">
      Photo by
      <a href="https://unsplash.com/@geran">Geran de Klerk</a>.
    </p>

    <page-footer/>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  name: 'publications',

  layout: 'page',

  components: {
    PageHeader
  },

  head () {
    return {
      title: 'GreenHub - Publications'
    }
  }
}
</script>

<style scoped>
ul.is-unstyled {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ml-4 {
  margin-left: 1rem;
}
</style>

