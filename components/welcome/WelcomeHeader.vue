<template>
  <header class="section welcome">
    <div class="container">
      <nav>
        <nuxt-link to="/about">About</nuxt-link>
        <a href="https://docs.greenhubproject.org">Docs</a>
        <a href="https://medium.com/greenhub-blog">Blog</a>
      </nav>
      <div class="columns">
        <div class="column is-half is-offset-half">
          <div class="welcome__content">
            <h1 class="title">GreenHub</h1>
            <p class="welcome__lead">A collaborative approach to power consumption analysis of Android devices.</p>
            <div class="welcome__hint">
              <p>Download our mobile app!</p>
              <h3>BatteryHub</h3>
            </div>
            <p class="welcome__info">
              <a class="welcome__info-google-play" href="https://play.google.com/store/apps/details?id=com.hmatalonga.greenhub">
                <img class="img-responsive center-block" src="~static/images/en_badge_web_generic.png" alt="GreenHub Google Play">
              </a>
            </p>
          </div>
          <div id="welcome__scroll-down" class="welcome__navigate">
            <span class="fa-stack fa-lg">
              <i class="fa fa-square-o fa-stack-2x"></i>
              <i class="fa fa-arrow-down fa-stack-1x"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import smoothScroll from 'smoothscroll'

export default {
  mounted () {
    const scroll = this.$el.querySelector('#welcome__scroll-down')
    scroll.addEventListener('click', event => {
      event.preventDefault()
      smoothScroll(document.querySelector('#features'), 800)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/sass/variables";
  @import "~assets/sass/partials/headings";

  .welcome {
    min-height: 100vh;
    text-align: center;
    background: url(~static/images/backdrop.jpg) no-repeat scroll 50% / cover transparent;

    nav {
      a {
        font-size: 1.2rem;
        font-weight: 700;
        color: white;
      }
      a:hover {
        text-decoration: underline;
      }
      a:nth-child(even) {
        margin: 0 2vw;
      }
    }

    .welcome__content {
      margin-top: 160px;
      color: white;

      .title {
        font-family: 'Montserrat', sans-serif;
        font-size: 4rem;
        font-weight: 300;
        color: white;
      }

      .welcome__lead {
        margin-top: 20px;
        font-size: 1.6rem;
        color: white;
      }

      .welcome__hint {
        margin-top: 40px;

        p {
          font-size: 1.4rem;
          text-decoration: underline;
        }

        h3 {
          margin-top: 15px;
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem;
          color: white;
        }
      }

      .welcome__info {
        margin: 20px auto 70px;

        .welcome__info-google-play > img {
          width: auto;
          height: 100px;
        }
      }

      .welcome__version {
        padding: 15px 45px;
        letter-spacing: 2px;
        text-transform: uppercase;
        border: 1px solid white;
        border-radius: 300px;
        font-size: 11px;
        font-weight: bold;
        color: white;
      }
    }

    .welcome__navigate {
      position: relative;
      top: 25vh;
      margin-left: auto;
      margin-right: auto;
      color: #fff;
    }

    .welcome__navigate:hover {
      cursor: pointer;
    }
  }
</style>
