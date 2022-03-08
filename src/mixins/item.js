export default {
	metaInfo () {
		return {
			title: 'Mr.Pizza',
			titleTemplate: `%s | ${this.title}`,
			meta: [
				{ name: 'description', content: 'Η καλύτερη πίτσα της πόλης !!! Απόλλωνος 71 & Αρτέμιδος, Ηλιούπολη, 164 43 Αθήνα.' }
			]
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