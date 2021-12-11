<template>
	<div>
		<section v-if="item">
			<div class="container-fluid px-0">
				<div class="row gx-0">
					<div class="col-12">
						<inner-item :item="item"></inner-item>
					</div>
				</div>
			</div>
		</section>
		<transition name="fade">
			<loader v-show="!item"></loader>
		</transition>
	</div>
</template>

<script>
import InnerItem from '../components/InnerItem.vue';
import item from '../mixins/item';
import Loader from '../components/Loader.vue';

export default {
	mixins: [item],
	components: {
		InnerItem,
		Loader
	}
}
</script>