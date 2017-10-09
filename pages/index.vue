<template>
  <div id="page">
    <welcome-header/>
    <features/>
    <stats/>
    <more-features/>
    <extras/>
    <page-footer/>
  </div>
</template>

<script>
import WelcomeHeader from '~/components/welcome/WelcomeHeader.vue'
import Stats from '~/components/welcome/Stats.vue'
import Features from '~/components/welcome/Features.vue'
import MoreFeatures from '~/components/welcome/MoreFeatures.vue'
import Extras from '~/components/welcome/Extras.vue'
import PageFooter from '~/components/PageFooter.vue'

export default {
  components: {
    WelcomeHeader,
    Stats,
    Features,
    MoreFeatures,
    Extras,
    PageFooter
  }
}
</script>
