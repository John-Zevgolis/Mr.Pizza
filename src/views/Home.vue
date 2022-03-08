<template>
  <div>
  <section v-if="objData">
    <carousel :banners="objData.metadata.banners"></carousel>
  </section>
  <transition name="fade">
    <loader v-show="!objData"></loader>
  </transition>
</div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Loader from '../components/Loader.vue';

export default {
  metaInfo: {
    title: "Mr.Pizza",
    meta: [
      { name: 'description', content: 'Η καλύτερη πίτσα της πόλης !!! Απόλλωνος 71 & Αρτέμιδος, Ηλιούπολη, 164 43 Αθήνα.' }
    ]
  },
  components: {
    Carousel,
    Loader
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

