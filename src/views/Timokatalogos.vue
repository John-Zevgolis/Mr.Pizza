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
					<div class="col-12">
						<div class="menu border py-4 py-md-5 px-3 px-sm-4 px-md-5 rounded"  v-html="objData.content"></div>
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
import Loader from '../components/Loader.vue';

export default {
	mixins: [data],
	components: {
		Loader
	},
	methods: {
		fetchData() {
			this.$store.dispatch('fetchContent', {
				id: '61a1fd461d759b00088c82ab',
				props: 'title,content,slug,metadata'
			});   
		}
	}
}
</script>

<style lang="scss">
.menu {
	background: #d8252f;
	color: #fff;

	h4 {
		margin-bottom: 1.5rem;

		@media (max-width: 1199.98px) {
			font-size: calc(1rem + 0.3vw);
		}

		&:last-child {
			margin-bottom: 0;
		}

		.dots {
			border-bottom: 2px dotted #ccc;
		}
	}
}

</style>