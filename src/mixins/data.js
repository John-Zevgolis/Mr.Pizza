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