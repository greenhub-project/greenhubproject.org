<template>
    <section id="features" class="section">
      <div class="container">

        <div class="columns">
          <div class="column">
            <div class="features__title has-text-centered">
              <h2 class="title is-1 is-spaced">Battery monitor and much more</h2>
              <p class="subtitle is-6">Discover all the details about your device's power consumption</p>
              <hr>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-4">
            <div id="features-device" class="features__device">
              <img class="image" src="~static/images/home-screenshot.png" alt="GreenHub">
            </div>
          </div>

          <div class="column is-8">
            <div class="container is-fluid">

              <div class="columns">
                <div class="column is-6">
                  <div class="features__item">
                    <i class="fa fa-battery-three-quarters" aria-hidden="true"></i>
                    <h3 class="title is-3">Power consumption</h3>
                    <p class="subtitle is-6">Find out how your battery's device is behaving</p>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="features__item">
                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                    <h3 class="title is-3">Battery alerts</h3>
                    <p class="subtitle is-6">Get real-time notifications about the battery level, temperature and charging</p>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-6">
                  <div class="features__item">
                    <i class="fa fa-cube" aria-hidden="true"></i>
                    <h3 class="title is-3">API</h3>
                    <p class="subtitle is-6">
                      Get more information from the community and compare the data</br>
                      <span class="tag is-success">Available now</span>
                    </p>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="features__item">
                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                    <h3 class="title is-3">Open source</h3>
                    <p class="subtitle is-6">The source code is available on GitHub</p>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'features'
}
</script>

<style lang="scss" scoped>
  @import "~assets/sass/variables";
  @import "~assets/sass/partials/headings";

  .section {
    padding: 100px 0;
  }

  #features {
    .subtitle {
      color: #666;
    }

    .features__title {
      margin-bottom: 100px;

      hr {
        max-width: 100px;
        margin: 25px auto 0;
        border-width: 1px;
        border-color: rgba(34,34,34,.1);
      }
    }

    .image {
      display: block;
      max-width: 85%;
      margin-left: auto;
      margin-right: auto;
    }

    .features__item {
        margin-bottom: 70px;
        text-align: center;

        .title {
          margin-bottom: 35px;
        }

        .fa {
          margin: 10px 0;
          font-size: 80px;
          background: linear-gradient(to left, $green, $dark-green);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tag {
          margin-top: 10px;
        }
    }
  }
</style>
