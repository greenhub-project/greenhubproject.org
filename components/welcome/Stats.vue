<template>
  <section id="stats" class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Devices installs</p>
              <p class="title">~77k</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Uploads received</p>
              <p class="title">~22M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import numeral from 'numeral'

export default {
  name: 'stats',

  data () {
    return {
      url: this.sanitizeUrl('api/v1/public/count/'),
      devices: '0',
      uploads: '0'
    }
  },

  mounted () {
    if (process.env.NODE_ENV === 'production') {
      // this.getData()
    }
  },

  methods: {
    sanitizeUrl (path) {
      const server = 'https://farmer.greenhubproject.org'
      return server.substring(-1) === '/' ? server + path : server + '/' + path
    },
    getData () {
      axios
        .get(this.url + 'devices', { timeout: 8000 })
        .then(response => {
          this.devices = numeral(response.data).format('0.0a')
        })
        .catch(error => console.log(error))
      axios
        .get(this.url + 'samples', { timeout: 20000 })
        .then(response => {
          this.uploads = numeral(response.data).format('0.0a')
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
