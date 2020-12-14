<template>
  <div class="container">
    <header :class="title">
      <i class="fa fa-5x" :class="icon" aria-hidden="true" />
      <p>{{ title }}</p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',

  props: {
    title: {
      required: true,
      type: String
    },
    icon: {
      default: 'fa-tree',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    margin: 10px 0 40px 0;
    padding: 100px 0;
    color: white;
    text-align: center;

    p {
      margin-top: 5px;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  .about {
    background: url(~static/images/backdrop-about.jpg) no-repeat scroll 50% / cover transparent;
  }

  .blog {
    background: url(~static/images/backdrop-blog.jpg) no-repeat scroll 50% / cover transparent;
  }

  .dataset {
    background: url(~static/images/backdrop-docs.jpg) no-repeat scroll 50% / cover transparent;
  }

  .publications {
    background: url(~static/images/backdrop-pub.jpg) no-repeat scroll 50% / cover transparent;
  }

  .eula {
    background: url(~static/images/backdrop-eula.jpg) no-repeat scroll 50% / cover transparent;
  }

  .privacy {
    background: url(~static/images/backdrop-privacy.jpg) no-repeat scroll 50% / cover transparent;
  }
</style>
