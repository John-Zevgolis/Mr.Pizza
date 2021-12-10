export default {
	metaInfo () {
		return {
			title: 'Mr.Pizza',
			titleTemplate: `%s | ${this.title}`
		}
	},
	data() {
		return {
			title: ''
		};
	},
	created() {
		this.fetchData();
	},
	methods: {
		fetchData() {
			this.$store.dispatch('fetchItem', this.$route.params.id);   
		}
	},
	computed: {
		item() {
			return this.$store.getters['item'];
		}
	},
	watch: {
		item(value) {
			this.title = value.title;
		}
	}
};