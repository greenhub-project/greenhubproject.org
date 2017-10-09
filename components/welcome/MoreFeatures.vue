<template>
  <section id="more-features" class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <img class="image block" src="~static/images/extra-screenshot-cropped.png" alt="GreenHub">
        </div>
        <div class="column">
          <div class="content">
            <h2 class="title is-1 is-spaced">More features</h2>
            <p>BatteryHub helps you keep track of your device info, providing details on the wifi, bluetooth, memory, storage, etc.</p>
            <p>Easily visualize the data history of your battery levels, with interactive charts!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'more-features'
}
</script>

<style lang="scss" scoped>
  @import "~assets/sass/variables";
  @import "~assets/sass/partials/headings";

  #more-features {
    padding-bottom: 0;
    background: linear-gradient(to bottom, $light-purple, $purple);

    .image {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    .title {
      margin-top: 100px;
      color: white;
    }

    p {
      font-size: 1.2rem;
      color: white;
    }
  }
</style>
