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
					<div class="col-md-8 col-xxl-9">
						<div class="row">
							<div class="col-6 col-lg-4 col-xxl-3 mb-4" v-for="(item, index) in objData.metadata.pictures" :key="index">
								<div class="bg-img" v-for="(value, name, index) in item" :key="index"  v-lazy:background-image="value.url"></div>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-xxl-3" v-html="objData.content"></div>
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

<style lang="scss" scoped>
	.bg-img {
		padding-top: 100%;
		border: 5px solid #000;
	}
</style>