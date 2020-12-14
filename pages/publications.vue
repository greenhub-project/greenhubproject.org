<template>
  <div class="container">
    <PageHeader title="publications" icon="fa-newspaper-o" />

    <section class="section">
      <div class="content">
        <h1 class="title">
          Publications
        </h1>
        <ul class="is-unstyled group-year">
          <li>
            <h2 class="subtitle">
              2020
            </h2>
            <ul class="is-unstyled">
              <li>
                <div class="ml-4">
                  <h3 class="has-text-weight-semibold">
                    GreenHub: A Large-Scale Collaborative Dataset to Battery Consumption Analysis of Android Devices
                    <a href="#"><i class="fa fa-link" aria-hidden="true" /></a>
                  </h3>
                  <p class="has-text-dark">
                    Rui Pereira, Hugo Matalonga, Marco Couto, Fernando Castor, Bruno Cabral, Pedro Carvalho, Simão Melo de Sousa, João Paulo Fernandes
                  </p>
                  <p class="has-text-grey">
                    Empirical Software Engineering Journal (EMSE). Springer. (to appear)
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h2 class="subtitle">
              2019
            </h2>
            <ul class="is-unstyled">
              <li>
                <div class="ml-4">
                  <h3 class="has-text-weight-semibold">
                    GreenHub Farmer: Real-world data for Android Energy Mining
                    <a href="http://greenlab.di.uminho.pt/wp-content/uploads/2019/04/GreenHubFarmerFinal.pdf"><i class="fa fa-link" aria-hidden="true" /></a>
                  </h3>
                  <p class="has-text-dark">
                    Hugo Matalonga, Bruno Cabral, Fernando Castor, Marco Couto, Rui Pereira, Simão Melo de Sousa and João Paulo Fernandes
                  </p>
                  <p class="has-text-grey">
                    In Proceedings of the 16th International Conference on Mining Software Repositories, ACM, 2019
                  </p>
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
  </div>
</template>

<script>
export default {
  name: 'Publications',

  layout: 'page',

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
ul.group-year li:nth-child(odd) {
  margin-bottom: 2rem;
}
.ml-4 {
  margin-left: 1rem;
}
</style>
