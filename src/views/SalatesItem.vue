<template>
	<section v-if="item">
		<div class="container-fluid px-0">
			<div class="row gx-0">
				<div class="col-12">
					<inner-item :item="item"></inner-item>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import InnerItem from '../components/InnerItem.vue';
import item from '../mixins/item';

export default {
	mixins: [item],
	components: {
		InnerItem
	}
}
</script>