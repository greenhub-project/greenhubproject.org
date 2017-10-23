<template>
  <div id="about" class="container">
    <page-header title="about"/>

    <section id="what-is-greenhub" class="section">
      <div class="content">
        <h1>What is GreenHub?</h1>
        <p><strong>GreenHub</strong> is a collaborative approach to power consumption analysis of Android devices.</p>
        <p>It is a platform developed in the context of <span class="underline">Green Computing</span> research field.</p>
        <p>The project is organized in three distinct modules:</p>
        <ul>
          <li>
            <a href="https://play.google.com/store/apps/details?id=com.hmatalonga.greenhub">GreenHub BatteryHub</a> - Android app
          </li>
          <li>
            <a href="https://greenhub.di.ubi.pt">GreenHub Farmer</a> - Backend web app + REST API
          </li>
          <li>
            <a href="https://www.npmjs.com/package/greenhub-cli">GreenHub Lumberjack</a> - a command line app for interacting with the GreenHub REST API
          </li>
        </ul>
        <p>The main is goal is to collect data about energy consumption of Android Devices in order to have real-world data to conduct further research, while making it available to everyone interested.</p>

        <h3 id="greenhub-batteryhub">GreenHub BatteryHub</h3>
        <p>GreenHub BatteryHub is an Android battery monitor app, proving the user with useful information in real-time about their device and its battery such as instant energy consumption, temperature, voltage, battery's health, network's details, memory details, etc.</p>
        <p>It also displays statistics charts with the history of battery level, temperature and voltage.</p>
        <p>The app also collects samples of various details and uploads them to the web server periodically.</p>
        <p>At the moment GreenHub BatteryHub is in Release Candidate! Feel free to try it out, download the app on Google Play <a href="https://play.google.com/store/apps/details?id=com.hmatalonga.greenhub">here</a>.</p>

        <h3 id="greenhub-farmer">GreenHub Farmer</h3>
        <p>It is the backend component of the platform which stores all the data collect via the mobile app. There is a web app where you can find a dashboard with further statistics, charts and perform detailed searches.</p>
        <p>You can access GreenHub Farmer <a href="https://greenhub.di.ubi.pt" target="_blank">here</a>.</p>

        <h3 id="greenhub-lumberjack">GreenHub Lumberjack</h3>
        <p>It is a command line app for interacting with the GreenHub REST API. It has many commands to quickly query the GreenHub API.</p>
        <p>For detailed documentation visit <a href="https://github.com/greenhub-project/lumberjack">GreenHub Lumberjack Docs</a>.</p>
      </div>
    </section>

    <section id="why-making-greenhub" class="section">
      <div class="content">
        <h1>Why making GreenHub?</h1>
        <p>Our goal is to build an open repository of data, collected through the mobile app.</p>
        <p>So that everyone can use the data for research promoting collaboration between the community.</p>
      </div>
    </section>

    <section id="our-team" class="section">
      <div class="content">
        <h1>Our team</h1>
        <div class="columns">
          <div class="column">
            <img class="image" src="~static/images/team/bruno.png" alt="Bruno Cabral">
            <div class="details">
              <a class="name" href="https://eden.dei.uc.pt/~bcabral/" target="_blank">Bruno Cabral</a>
              <span class="university">University of Coimbra</span>
            </div>
          </div>
          <div class="column">
            <img class="image" src="~static/images/team/fernando.jpg" alt="Fernando Castor">
            <div class="details">
              <a class="name" href="https://sites.google.com/a/cin.ufpe.br/castor/" target="_blank">Fernado Castor</a>
              <span class="university">Federal University of Pernambuco</span>
            </div>
          </div>
          <div class="column">
            <img class="image" src="~static/images/team/hugo.jpg" alt="Hugo Matalonga">
            <div class="details">
              <a class="name" href="http://hmatalonga.com" target="_blank">Hugo Matalonga</a>
              <span class="university">University of Coimbra</span>
            </div>
          </div>
          <div class="column">
            <img class="image" src="~static/images/team/jpaulo.jpg" alt="João Paulo Fernandes">
            <div class="details">
              <a class="name" href="https://eden.dei.uc.pt/~jpf/Site/Home.html" target="_blank">João Paulo Fernandes</a>
              <span class="university">University of Coimbra</span>
            </div>
          </div>
          <div class="column">
            <img class="image" src="~static/images/team/simao.jpg" alt="Simão Melo de Sousa">
            <div class="details">
              <a class="name" href="https://www.di.ubi.pt/~desousa/" target="_blank">Simão Melo de Sousa</a>
              <span class="university">University of Beira Interior</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <p class="small">Photo by <a href="https://unsplash.com/@carminu">Carmine De Fazio</a>.</p>

    <page-footer/>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  name: 'about',

  layout: 'page',

  components: {
    PageHeader
  },

  head () {
    return {
      title: 'GreenHub - About'
    }
  }
}
</script>

<style lang="scss" scoped>
  .small {
    font-size: 0.8rem;
  }

  .image {
    width: 180px;
    height: 180px;
    margin: 20px auto;
    border-radius: 50%;
    filter: grayscale(1.0);
  }

  .details {
    text-align: center;

    a,
    span {
      display: block;
    }

    .name {
      font-weight: 700;
      color: #363636;
    }
    .name:hover {
      text-decoration: underline;
    }

    .university {
      font-size: small;
      color: #666;
    }
  }

  .underline {
    text-decoration: underline;
  }
</style>
