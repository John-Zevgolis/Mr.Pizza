export default {
	metaInfo () {
		return {
			title: 'Mr.Pizza',
			titleTemplate: `%s | ${this.title}`,
			// meta: [
			// 	{ name: 'description', content: 'Η καλύτερη πίτσα της πόλης !!! Απόλλωνος 71 & Αρτέμιδος, Ηλιούπολη, 164 43 Αθήνα.' }
			// ]
		}
	},
	data() {
		return {
			title: ''
		};
	},
	created () {
		this.fetchData();
	},
	computed: {
		objData() {
			return this.$store.getters['objData'];
		}
	},
	watch: {
		objData(value) {
			this.title = value.title;
		}
	}
};