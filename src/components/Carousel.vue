<template>
  <div class="container-fluid px-0">
    <div class="row gx-0">
      <div class="col-12" >
        <VueSlickCarousel v-bind="settings" v-if="banners">
          <div v-for="(item, index) in banners" :key="index">
            <div class="bg-img position-relative h-100 d-flex justify-content-center align-items-center" :style="`background-image: url(${item.metadata.slide.url}`">
              <div class="position-relative text-center custom-padding-top custom-padding-bottom px-3 box-item">
                <img :src="item.thumbnail" v-if="item.thumbnail" class="tada">
                <div v-else>
                  <h1 class="mb-4">{{item.title}}</h1>
                  <router-link class="btn shadow-none custom-btn text-white px-4 px-sm-5 py-2 py-sm-3 fw-bold position-relative" :to="`/${item.metadata.url}`">
                    <span class="over position-relative">ΠΕΡΙΣΣΟΤΕΡΑ</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  props: ['banners'],
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        "lazyLoad": "ondemand",
        "dots": true,
        "fade": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "autoplay": true,
        "autoplaySpeed": 6000,
        "pauseOnHover": false
      }
    }
  }
}
</script>

<style lang="scss">
.slick-slider {
  .slick-track {
    display: flex;

    &:after,&:before {
      display: none;
    }
  }

  .slick-slide {
    height: auto;
    float: none;

    & > div {
      height: 100%;

      & > div {
        height: 100%;
      }
    }

    .bg-img {
      min-height: 100vh;

      &:before {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: rgba(0, 0, 0, .4);
      }

      h1 {
        color: #fff;
        font-size: 4.5rem;
        transform: translateY(20px);

        @media (max-width: 1399.98px) {
          font-size: 4rem;
        }

        @media (max-width: 1199.98px) {
          font-size: 3.5rem;
        }

        @media (max-width: 575.98px) {
          font-size: 3rem;
        }

        @media (max-width: 420px) {
          font-size: 2.5rem;
        }
      }

      .custom-btn {
        transform: translateY(40px);

        @media (max-width: 1399.98px) {
          font-size: 1rem;
        }

        @media (max-width: 1199.98px) {
          font-size: .875rem;
        }
      }

      h1,.custom-btn {
        opacity: 0;
      }

      .tada {
        @media (min-width: 576px) {
          animation: tada 6s infinite;
        }

        @media (max-width: 575.98px) {
          max-width: 280px;
        }
      }
    }

    &.slick-active {
      z-index: 1;

      .bg-img {
        h1 {
          animation: heading .3s forwards .3s;
        }

        .custom-btn {
          animation: button .6s forwards .3s;
        }
      }
    }
  }

  .slick-arrow {
    border: 2px solid #fff !important;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    z-index: 1;

    @media (max-width: 575.98px) {
      display: none !important;
    }

    &:before {
      display: none;
    }

    &:after {
      display: inline-block;
      font-family: bootstrap-icons !important;
      font-style: normal;
      font-weight: normal !important;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      vertical-align: -0.125em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #fff;
      font-size: 1.2rem;
    }

    &.slick-prev {
      left: 40px;

      &:after {
        content: "\f284";
        margin-left: -2px;
      }

      @media (max-width: 767.98px) {
        left: 15px;
      }
    }

    &.slick-next {
      right: 40px;

      &:after {
        content: "\f285";
        margin-right: -2px;
      }

      @media (max-width: 767.98px) {
        right: 15px;
      }
    }
  }

  .slick-dots {
    bottom: 40px;

    @media (max-width: 767.98px) {
      bottom: 15px;
    }

    li {
      width: auto;
      height: auto;

      button {
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;

        &:before {
          display: none;
        }

        &:after {
          content: '';
          background: #fff;
          border-radius: 100%;
          width: 6px;
          height: 6px;
          display: block;
          margin-top: -1px;
          margin-left: -1px;
          opacity: 1;
        }
      }

      &.slick-active {
        button {
          border: 2px solid #fff;
        }
      }
    }
  }
}

@keyframes heading {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes button {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes tada {
  0% {
      transform: scale3d(1, 1, 1);
  }
  10%, 20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }  
  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>
