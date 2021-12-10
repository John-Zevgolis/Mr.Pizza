<template>
	<header v-if="pages" class="fixed-top" :class="{active: show, scrolling: scrolled}">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav class="d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center navbar-expand-lg position-relative">
						<router-link v-if="logo" class="navbar-brand me-0 position-relative py-0 order-1 order-lg-0" to="/">
							<img :src="logo">
						</router-link>
						<div class="order-3 order-lg-1 justify-content-center main-navigation">
							<nav class="py-5 py-lg-0">
								<ul class="nav flex-column flex-lg-row text-center text-lg-start">
									<li v-for="(page, index) in pages" :key="index">
										<router-link @click.native="closeMenu" class="fw-bold px-lg-1 position-relative mx-lg-3 py-3 mb-2 mb-lg-0 py-lg-1 d-inline-block" :exact="index === 0" :to="index === 0 ? '/' : `/${page.slug}`">{{page.singular}}</router-link>
									</li>
								</ul>
							</nav>
						</div>
						<nav class="order-0 order-lg-2">
							<ul class="nav social flex-nowrap">
								<li v-for="(item, index) in social" :key="index">
									<a target="_blank" v-if="item.slug==='facebook'" :class="item.slug" class="d-flex align-items-center justify-content-center rounded-circle position-relative" :href="item.metadata.url">
										<font-awesome-icon :icon="icon(item.slug)" />
									</a>
									<router-link
										v-else
										:to="item.metadata.url"
										custom
										v-slot="{ href }">
										<a :class="item.slug" class="d-flex align-items-center justify-content-center ms-2 ms-sm-3 rounded-circle position-relative" :href="href">
											<font-awesome-icon :icon="icon(item.slug)" />
										</a>
									</router-link>
								</li>
							</ul>
						</nav>
						<button class="hamburger p-0 hamburger--collapse hamburger--collapse navbar-toggler order-2" :class="{'is-active': show}" type="button" @click="toggleMenu">
							<span class="hamburger-box">
								<span class="hamburger-inner"></span>
							</span>						
						</button>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	props: ['logo', 'social'],
	data() {
		return {
			show: false,
			scrolled: false
		}
	},
	mounted() {
		this.handleScroll();
		this.handleResize();
		window.addEventListener('resize', this.handleResize);
	},
	created() {
		this.fetchData();
	},
	methods: {
		closeMenu() {
			if(this.show) {
				this.show = false;
			}
			if(document.body.classList.contains('overflow-hidden')) {
				document.body.classList.remove("overflow-hidden");
			}
		},
		toggleMenu() {
			if(this.show) {
				this.show = false;
				document.body.classList.remove("overflow-hidden");
			} else {
				this.show = true;
				document.body.classList.add("overflow-hidden");
			}
		},
		handleScroll() {
			window.addEventListener('scroll', () => {
				if(window.scrollY > 1) {
					this.scrolled = true
				} else {
					this.scrolled = false;
				}
			});
		},
		handleResize() {
			if(window.matchMedia('(min-width: 992px)').matches) {
				if(this.show === true) {
					this.show = false;
				}
				if(document.body.classList.contains('overflow-hidden')) {
					document.body.classList.remove("overflow-hidden");
				}
			}
		},
		fetchData() {
			this.$store.dispatch('fetchPages');   
		},
		icon(item) {
			const icon = {
				'website': {
					'prefix': 'fa',
					'iconName': 'pizza-slice'
				},
				'facebook': {
					'prefix': 'fab',
					'iconName': 'facebook-f'
				}
			};
			return icon[item];
		}
	},
	computed: {
		pages() {
			return this.$store.getters['pages'];
		}
	}
}
</script>