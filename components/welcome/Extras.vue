<template>
  <section id="extras" class="section">
    <div class="container">
      <div class="content">
        <h2 class="title is-1 is-spaced">Start saving energy today.</h2>
        <p>
          Discover how can you save energy of your battery's device. Track the data history of your device.
          GreenHub collects generic data of the device's usage, later it uploads the data to the cloud.
          Don't worry no private information is collected.
        </p>
        <p>
          The data is used to make research aiming to improve energy consumption on Android devices.
          It is available for everybody via API.
        </p>
        <p>
          Why we make the data open? Very much like the app, a collaborative approach seems the most benefitial and transparent method for the community.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'extras'
}
</script>

<style lang="scss" scoped>
  @import "~assets/sass/partials/headings";

  #extras {
    padding: 250px 0;
    background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),
    url(~static/images/backdrop-about.jpg) no-repeat scroll 50% / cover transparent;
    color: white;

    .title {
      color: white;
    }

    p {
      font-size: 1.2rem;
      color: white;
    }
  }
</style>
