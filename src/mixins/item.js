export default {
	metaInfo () {
		return {
			title: 'Mr.Pizza',
			titleTemplate: `%s | ${this.title}`,
			// meta: [
			// 	{ name: 'description', content: `${this.description}` }
			// ]
		}
	},
	data() {
		return {
			title: '',
			// description: ''
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
			// this.description = value.metadata.ingredients.map(item => {
			// 	for (var prop in item) {
			// 		return item[prop];
			// 	}
			// }).join(', ');
		}
	}
};