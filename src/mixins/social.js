export default {
  created() {
    this.fetchSocial();
  },
  methods: {
    fetchSocial() {
      this.$store.dispatch('fetchSocial');   
    }
  },
  computed: {
    social() {
      return this.$store.getters['social'];
    }
  }
};