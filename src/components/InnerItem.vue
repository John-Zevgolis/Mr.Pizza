<template>
	<div class="bg-img" :style="`background-image: url(${item.metadata.banner.url}`">
		<div class="container px-0">
			<div class="row mx-0">
				<div class="col-12">
					<div class="custom-padding-top pb-5 position-relative">
						<h1 class="mb-4"><span class="badge">{{item.title}}</span></h1>
						<ul class="list-group flex-column flex-md-row list-group-horizontal">
							<li v-for="(item, index) in item.metadata.ingredients" :key="index" class="list-group-item">
								<span v-for="(value, name, index) in item" :key="index">{{value}}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['item']
}
</script>

<style lang="scss" scoped>
	.bg-img {
		min-height: 100vh;

		&:before {
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: absolute;
            background: rgba(0, 0, 0, .4);
        }
	}

	.list-group {
		.list-group-item {
			@media (max-width: 767.98px) {
				&:first-child {
					border-bottom-left-radius: 0;
					border-top-right-radius: .25rem;
				}

				&:last-child {
					border-top-right-radius: 0;
					border-bottom-left-radius: .25rem;
				}
			}
		}
	}
</style>