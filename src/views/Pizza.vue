<template>
	<section v-if="objData" class="custom-padding-top pb-5">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class="mb-4 text-center"><span class="badge">{{objData.title}}</span></h1>
				</div>
			</div>
			<div class="row">
				<div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="col-md-6 col-lg-4 mb-4 from-bottom" v-for="(pizza, index) in objData.metadata.pizza_items" :key="index">
					<item :slug="objData.slug" :item="pizza"></item>
				</div>
			</div>
			<div class="row">
				<div class="col-12 text-center">
					<h2 v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="my-3 my-md-4 display-5 from-bottom"><span class="badge">ΜΗΝ ΞΕΧΑΣΕΤΕ</span></h2>
				</div>
			</div>
			<div class="row">
				<div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="col-md-6 mt-4 from-bottom" v-for="(item, index) in objData.metadata.diafora_items" :key="index">
					<item :slug="item.metadata.url" :item="item"></item>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import data from '../mixins/data';
import Item from '../components/Item.vue';

export default {
	data() {
		return {
			intersectionOptions: {
				root: null,
				rootMargin: '0px 0px 0px 0px',
				threshold: [.25, .65] 
			} 
		};
	},
	components: {
		Item
	},
	mixins: [data],
	methods: {
		fetchData() {
			this.$store.dispatch('fetchContent', {
				id: '61a1fca71d759b00088c82a9',
				props: 'title,slug,metadata'
			});   
		},
		onWaypoint ({ el, going }) {
			if (going === this.$waypointMap.GOING_IN) {
				el.classList.add('fire');
			}
		}
	}
}
</script>

<style lang="scss">
.display-5 {
	@media (max-width: 1199.98px) {
		font-size: calc(1.5rem + 1.5vw);
	}
}
</style>