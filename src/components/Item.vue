<template>
	<router-link class="box-item" :to="`/${slug}/${item.slug}`">
		<div class="bg-img" v-lazy:background-image="item.thumbnail"></div>
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
	}
}
</style>