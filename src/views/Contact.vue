<template>
	<section class="contact custom-padding-top" v-if="objData">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class="mb-5 text-center"><span class="badge">{{objData.title}}</span></h1>
				</div>
			</div>
		</div>
		<div class="container-fluid px-0">
			<div class="row gx-0">
				<div class="col-12">
					<GmapMap
						:zoom="17"
						:center="center"
						id="map"
						class="w-100"
						:options="options">
							<GmapMarker
								v-if="objData.thumbnail"
								:position="center"
								:animation="2"
								:clickable="true"
								:icon="{url: objData.thumbnail}"
								@click="openInfoWindowTemplate()"/>
							<gmap-info-window
								:options="{ maxWidth: 300, pixelOffset: { width: 0, height: -105 } }"
								:position="infoWindow.position"
								:opened="infoWindow.open"
								@closeclick="infoWindow.open=false">
								<div v-html="infoWindow.template"></div>
							</gmap-info-window>
					</GmapMap>
				</div>
			</div>
		</div>
		<div class="py-5">
			<div class="container">
				<div class="row" v-for="(item, index) in objData.metadata.contact_info" :key="index">
					<div class="col-md-4 text-center mb-3 mb-md-0" v-for="(value, name, index) in item" :key="index">
						<div  v-html="value"></div>
						<div v-if="name === 'address'">
							<p>{{objData.metadata.address}}</p>
							<ul class="nav social flex-nowrap justify-content-center">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<transition v-else name="fade">
		<loader></loader>
	</transition>
</template>

<script>
import data from '../mixins/data';
import social from '../mixins/social';
import Loader from '../components/Loader.vue';

export default {
	components: {
		Loader
	},
	mixins: [data, social],
	data() {
		return {
			center: {lat: 37.93722790686488, lng: 23.763348726809543},
			options: {
				styles: [
					{
					"featureType": "administrative.locality",
					"elementType": "all",
					"stylers": [
					{
					"hue": "#0049ff"
					},
					{
					"saturation": 7
					},
					{
					"lightness": 19
					},
					{
					"visibility": "on"
					}
					]
					},
					{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
					{
					"hue": "#ff0000"
					},
					{
					"saturation": -100
					},
					{
					"lightness": 100
					},
					{
					"visibility": "simplified"
					}
					]
					},
					{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
					{
					"hue": "#ff0000"
					},
					{
					"saturation": -100
					},
					{
					"lightness": 100
					},
					{
					"visibility": "off"
					}
					]
					},
					{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
					{
					"hue": "#008eff"
					},
					{
					"saturation": -93
					},
					{
					"lightness": 31
					},
					{
					"visibility": "simplified"
					}
					]
					},
					{
					"featureType": "road",
					"elementType": "labels",
					"stylers": [
					{
					"hue": "#008eff"
					},
					{
					"saturation": -93
					},
					{
					"lightness": 31
					},
					{
					"visibility": "on"
					}
					]
					},
					{
					"featureType": "road.arterial",
					"elementType": "labels",
					"stylers": [
					{
					"hue": "#bbc0c4"
					},
					{
					"saturation": -93
					},
					{
					"lightness": -2
					},
					{
					"visibility": "simplified"
					}
					]
					},
					{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
					{
					"hue": "#007fff"
					},
					{
					"saturation": -90
					},
					{
					"lightness": -8
					},
					{
					"visibility": "simplified"
					}
					]
					},
					{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
					{
					"hue": "#007fff"
					},
					{
					"saturation": 10
					},
					{
					"lightness": 69
					},
					{
					"visibility": "on"
					}
					]
					},
					{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
					{
					"visibility": "on"
					},
					{
					"color": "#bfd4e7"
					},
					{
					"lightness": "30"
					}
					]
					}
				]
			},
			infoWindow: {
				position: {lat: 0, lng: 0},
				open: false,
				template: ''
			}
		};
	},
	methods: {
		openInfoWindowTemplate() {
			this.infoWindow.position = this.center;
			this.infoWindow.template = this.objData.metadata.address;
			this.infoWindow.open = true;
		},
		fetchData() {
			this.$store.dispatch('fetchContent', {
				id: '61a1fdaa02072e0008bf5971',
				props: 'title,thumbnail,metadata'
			});   
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
	watch: {
		objData(value) {
			this.title = value.title;
		}
	}
}
</script>

<style lang="scss" scoped>
#map {
	height: 660px;

	@media (max-width: 767.98px) {
		height: 440px;
	}
}

.social {
  li {
    a {
      color: #000;
      border: 1px solid #000;

      &:before {
        background: #000;
      }

      &.website,
       &.facebook {
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>