<template>
  <section v-if="objData">
    <carousel :banners="objData.metadata.banners"></carousel>
  </section>
</template>

<script>
import Carousel from '../components/Carousel.vue';

export default {
  metaInfo: {
    title: "Mr.Pizza"
  },
  components: {
    Carousel
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchContent', {
        id: '61a1fa8b02072e0008bf5968',
        props: 'thumbnail,metadata'
      });  
    }
  },
  created () {
    this.fetchData();
  },
  computed: {
    objData() {
      return this.$store.getters['objData'];
    }
  },
}
</script>

