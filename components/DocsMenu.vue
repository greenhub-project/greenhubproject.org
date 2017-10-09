<template>
  <aside class="menu">
    <p class="menu-label">
      Introduction
    </p>
    <ul class="menu-list">
      <li><nuxt-link to="/docs/intro/overview">Overview</nuxt-link></li>
    </ul>
    <p class="menu-label">
      Architecture Concepts
    </p>
    <ul class="menu-list">
      <li><nuxt-link to="/docs/architecture-concepts/workflow">Workflow</nuxt-link></li>
      <li><nuxt-link to="/docs/architecture-concepts/tech-stack">Technology Stack</nuxt-link></li>
    </ul>
    <p class="menu-label">
      API
    </p>
    <ul class="menu-list">
      <li><nuxt-link to="/docs/api">Getting Started</nuxt-link></li>
      <li><nuxt-link to="/docs/api/auth">Authentication</nuxt-link></li>
      <li>
        <a>Objects</a>
        <ul>
          <li><nuxt-link to="/docs/api/objects/devices">Devices</nuxt-link></li>
          <li><nuxt-link to="/docs/api/objects/samples">Samples</nuxt-link></li>
          <li><nuxt-link to="/docs/api/objects/datasets">Datasets</nuxt-link></li>
          <li><nuxt-link to="/docs/api/objects/user">User</nuxt-link></li>
        </ul>
      </li>
      <li><nuxt-link to="/docs/api/other-endpoints">Other Endpoints</nuxt-link></li>
    </ul>
    <p class="menu-label">
      Modules
    </p>
    <ul class="menu-list">
      <li><a>GreenHub BatteryHub</a></li>
      <li><a>GreenHub Farmer</a></li>
      <li><a>GreenHub Lumberjack</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'docs-menu'
}
</script>

<style lang="scss" scoped>
  .menu {
    font-size: 15px;
  }

  .menu-list a.nuxt-link-exact-active {
    background-color: #00d1b2;
    color: #fff;
  }
</style>
