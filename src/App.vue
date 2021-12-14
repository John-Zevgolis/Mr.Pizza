<template>
  <div>
    <div :class="$route.name === 'Home' || $route.params.id ? 'white-text' : 'red-text'">
      <the-header :logo="logo" :social="social"></the-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import social from './mixins/social';

export default {
  mixins: [social],
  components: {
    TheHeader
  },
  created() {
    this.fetchLogo();
  },
  methods: {
    fetchLogo() {
      this.$store.dispatch('fetchLogo');
    }
  },
  computed: {
    logo() {
      return this.$store.getters['logo'];
    }
  }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.woff2') format('woff2'),
        url('/fonts/Roboto-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Medium.woff2') format('woff2'),
        url('/fonts/Roboto-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Bold.woff2') format('woff2'),
        url('/fonts/Roboto-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

body {
  position: relative;
  font-family: 'Roboto', sans-serif;
  max-width: 1920px;
  margin: 0 auto;
  background: #fafafa;
}

h1 {
 font-size: 3rem;

 @media (max-width: 1199.98px) {
    font-size: calc(1.5rem + 1.5vw);
 }
}

h5 {
 @media (max-width: 1199.98px) {
    font-size: calc(.625rem + 1vw);
 }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all .3s ease-out;
}

.fade-leave-active {
  transition: all .3s ease-in;
}

.list-group {
  .list-group-item {
    @media (max-width: 1199.98px) {
      font-size: calc(.625rem + .625vw);
    }
  }
}

a {
  text-decoration: none;
}

img {
  height: auto;
  max-width: 100%;
}

.bg-img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.badge {
  background-color: #d8252f !important;
  white-space: unset;
}

.from-bottom {
  opacity: 0;
  transform: translateY(20px);
  transition: all .3s;

  &.fire {
    opacity: 1;
    transform: none;
  }
}

.custom-padding-top {
  padding-top: calc(227px + 3rem);

  @media (max-width: 1399.98px) {
    padding-top: calc(198.45px + 3rem);
  }

  @media (max-width: 1199.98px) {
    padding-top: calc(174.67px + 3rem);
  }

  @media (max-width: 575.98px) {
    padding-top: calc(162.78px + 1.5rem);
  }
}

.custom-padding-bottom {
  padding-bottom: calc(227px + 3rem);

  @media (max-width: 1399.98px) {
    padding-bottom: calc(198.45px + 3rem);
  }

  @media (max-width: 1199.98px) {
    padding-bottom: calc(174.67px + 3rem);
  }

  @media (max-width: 575.98px) {
    padding-bottom: calc(162.78px + 1.5rem);
  }
}

.custom-btn {
  background: #d8252f;
  font-size: 1.125rem;
  transition: all 270ms cubic-bezier(0.16,0.01,0.77,1);

  .over {
    z-index: 5;
  }

  &:before {
    content:'';
    z-index:1;
    transform:scaleX(0);
    transform-origin:right 50%;
    transition-property:transform;
    transition-duration:380ms;
    background-color:#fff;
    padding-bottom:2px;
    width:100%;
    height:100%;
    display:block;
    position:absolute;
    top:0;
    left:0;
  }

  &:hover {
    .over {
      color: #d8252f;
    }

    &:before {
      transform:scaleX(1);
      transform-origin:left 50%;
    }
  }
}

.social {
  li {
    a {
      width: 40px;
      height: 40px;
      transition: color .3s;

      &:before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        position: absolute;
        transition: all .3s;
        transform: scale(0);
        z-index: -1;
      }

      &:hover {
        &:before {
          transform: none;
        }
      }
    }
  }
}

header {
  transition: all .3s;
  padding: 1rem 0;
  min-height: 0;

  &:after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: #d8252f;
    transition: all .3s;
    transform: translateY(-100%);
  }

  &.scrolling,&.active {
    .main-navigation {
      li {
        a {
          color: #fff !important;

          &:before {
            background: #fff !important;
          }
        }
      }
    }

    .social {
      li {
        a {
          color: #fff !important;
          border: 2px solid #fff !important;

          &:before {
            background: #fff !important;
          }

          &.contact-button,
          &.pizza-button {
            &:hover {
              color: #d8252f !important;
            }
          }
        }
      }
    }

    .navbar-expand-lg {
      .hamburger {
        .hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
          background: #fff !important;
        }
      }
    }
  }

  &.scrolling {
    padding: 0.5rem;

    .navbar-brand {
      img {
        max-width: 120px;

        @media (max-width: 1399.98px) {
          max-width: 110px;
        }

        @media (max-width: 1199.98px) {
          max-width: 100px;
        }

        @media (max-width: 575.98px) {
          max-width: 90px;
        }
      }
    }

    &:after {
      transform: none;
    }
  }

  @media (max-width: 991.98px) {
    &.active {
      background: #d8252f;
      overflow: auto;
      max-height: 100vh;
      min-height: 100vh;
    
      .main-navigation {
        opacity: 1;
        pointer-events: all;
      }
    }

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #d8252f;
    }

    &::-webkit-scrollbar-thumb {
      background: #fff;
    }
  }
  
  .social {
    li {
      a {
        @media (max-width: 575.98px) {
          width: 35px;
          height: 35px;
          font-size: 0.875rem;
        }
      }
    }
  }

  .navbar-expand-lg {
    z-index: 1;

    .hamburger {
      box-shadow: none;
      line-height: 1;

      .hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
         height: 2px;
         width: 35px;
      }

      &.is-active:hover, &:hover {
        opacity: 1;
      }
    }
  }

  .main-navigation {
    @media (max-width: 991.98px) {
      width: 100%;
      position: absolute;
      opacity: 0;
      pointer-events: none;
      top: 158.67px;
    }

    li {
      a {
        font-size: 1.25rem;

        @media (max-width: 1399.98px) {
          font-size: 1rem;
        }

        @media (max-width: 1199.98px) {
          font-size: 0.875rem;
        }

        @media (max-width: 991.98px) {
          transition: color .3s;
          font-size: 1.25rem;
        }

        @media (max-width: 767.98px) {
          font-size: 1rem;
        }

        @media (max-width: 575.98px) {
          font-size: 0.875rem;
        }

        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          transition: all .3s;
          transform: scaleX(0);

          @media (max-width: 991.98px) {
            display: none;
          }
        }

        &.active,&:hover {
          @media (max-width: 991.98px) {
            color: #FDFF06 !important;
          }

          &:before {
            transform: none;
          }
        }
      }
    }
  }

  .navbar-brand {
    min-width: 165px;

    @media (max-width: 1399.98px) {
      min-width: 140px;
    }

    @media (max-width: 1199.98px) {
      min-width: 120px;
    }

    @media (max-width: 991.98px) {
      min-width: auto;
    }

    img {
      transition: all .3s;

      @media (max-width: 1399.98px) {
        max-width: 140px;
      }

      @media (max-width: 1199.98px) {
        max-width: 120px;
      }

      @media (max-width: 575.98px) {
        max-width: 110px;
      }
    }
  }
}

.white-text {
  header {
    .main-navigation {
      li {
        a {
          color: #fff;

          &:before {
            background: #fff;
          }
        }
      }
    }

    .navbar-expand-lg {
      .hamburger {
        .hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
          background: #fff;
        }
      }
    }

    .social {
      li {
        a {
          color: #fff;
          border: 2px solid #fff;

          &:before {
            background: #fff;
          }

          &.contact-button,
          &.pizza-button {
            &:hover {
              color: #d8252f;
            }
          }
        }
      }
    }
  }
}

.red-text {
  header {
    .main-navigation {
      li {
        a {
          color: #d8252f;

          &:before {
            background: #d8252f;
          }
        }
      }
    }

    .navbar-expand-lg {
      .hamburger {
        .hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
          background: #d8252f;
        }
      }
    }

    .social {
      li {
        a {
          color: #d8252f;
          border: 2px solid #d8252f;

          &:before {
            background: #d8252f;
          }

          &.contact-button,
          &.pizza-button {
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>


