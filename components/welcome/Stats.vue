<template>
  <section id="stats" class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Devices installs</p>
              <p class="title">{{ devices }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Uploads received</p>
              <p class="title">{{ uploads }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import status from '~/static/status.json'

export default {
  name: 'stats',

  data () {
    return {
      url: this.sanitizeUrl('api/v1/public/count/'),
      devices: 0,
      uploads: 0,
      users: 0
    }
  },

  mounted () {
    if (process.env.NODE_ENV === 'production') {
      this.getData()
    }
  },

  methods: {
    sanitizeUrl (path) {
      return status.server.substring(-1) === '/' ? status.server + path : status.server + '/' + path
    },
    getData () {
      axios.get(this.url + 'devices')
        .then(response => {
          this.devices = response.data
        })
        .catch(error => console.log(error))
      axios.get(this.url + 'samples')
        .then(response => {
          this.uploads = response.data
        })
        .catch(error => console.log(error))
      axios.get(this.url + 'users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
