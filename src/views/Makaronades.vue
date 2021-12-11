<template>
	<div>
		<section v-if="objData" class="custom-padding-top pb-5">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h1 class="mb-4 text-center"><span class="badge">{{objData.title}}</span></h1>
					</div>
				</div>
				<div class="row">
					<div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="col-md-6 mb-4 from-bottom" v-for="(makaronada, index) in objData.metadata.makaronades_items" :key="index">
						<item :slug="objData.slug" :item="makaronada"></item>
					</div>
				</div>
			</div>
		</section>
		<transition name="fade">
			<loader v-show="!objData"></loader>
		</transition>
	</div>
</template>

<script>
import data from '../mixins/data';
import Item from '../components/Item.vue';
import Loader from '../components/Loader.vue';

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
		Item,
		Loader
	},
	mixins: [data],
	methods: {
		fetchData() {
			this.$store.dispatch('fetchContent', {
				id: '61a7c7ed69eda200080bafee',
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