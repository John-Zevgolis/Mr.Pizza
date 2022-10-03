<template>
	<router-link v-if="item.metadata.url" class="box-item" :to="`/${slug}`">
		<div class="bg-img" v-lazy:background-image="item.thumbnail"></div>
	</router-link>
	<router-link v-else class="box-item" :to="`/${slug}/${item.slug}`">
		<div class="bg-img" v-if="item.thumbnail" v-lazy:background-image="item.thumbnail"></div>
		<div class="bg-img position-relative no-img" v-else>
			<div class="position-absolute h-100 w-100 d-flex justify-content-center align-items-center p-3 text-white text-center">
				<h4 v-html="item.title"></h4>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {
	props: ['slug','item']
}
</script>

<style lang="scss" scoped>
.box-item {
	.bg-img {
		padding-top: 71.83333%;

		&.no-img {
			background: #d8252f;

			& > div {
				background: rgba(0, 0, 0, .4);
				bottom: 0;
				left: 0;
			}
		}
	}
}
</style>