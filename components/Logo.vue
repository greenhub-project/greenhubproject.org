<template>
  <div class="has-text-centered" :class="{ 'has-margin': margin}">
    <h1 class="title--logo"><span>Green</span>Hub</h1>
    <slot name="love"></slot>
    <slot name="copyright"></slot>
  </div>
</template>

<script>
export default {
  name: 'logo',
  props: ['margin']
}
</script>

<style lang="scss">
  @import "~assets/sass/variables";
  @import url(https://fonts.googleapis.com/css?family=Montserrat);

  .title--logo {
    font-size: 1.8rem;
    font-family: 'Montserrat', sans-serif;
    color: $gray;

    span {
      color: $green;
    }
  }

  .has-margin {
    margin-top: 2rem;
  }

  .title {
    margin-bottom: 1rem;
  }

  .love {
    margin-bottom: 2rem;
    font-size: 0.75rem;
    color: #999;
  }

  .copyright {
    font-size: .8rem;
    color: #666;
  }
</style>
