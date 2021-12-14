<template>
	<div>
		<section class="contact custom-padding-top" v-if="objData">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class="mb-4 text-center"><span class="badge">{{objData.title}}</span></h1>
				</div>
			</div>
		</div>
		<div class="container-fluid px-0">
			<div class="row gx-0">
				<div class="col-12 position-relative">
					<a class="position-absolute d-inline-flex align-items-center directions text-white py-2 px-3 rounded fw-bold" href="https://www.google.com/maps/dir//Mr.Pizza,+Apollonos+ke,+%CE%91%CF%81%CF%84%CE%AD%CE%BC%CE%B9%CE%B4%CE%BF%CF%82,+%CE%97%CE%BB%CE%B9%CE%BF%CF%8D%CF%80%CE%BF%CE%BB%CE%B7+163+43/@37.9369736,23.7610915,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14a196281ded059d:0x6145793c9c1f9f84!2m2!1d23.7632802!2d37.9369694!3e0" target="_blank">
						<font-awesome-icon :icon="{'prefix': 'fa','iconName': 'directions'}" />
						<span class="d-block ms-3">ΛΗΨΗ ΟΔΗΓΙΩΝ</span>
					</a>
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
									<router-link
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
		<transition name="fade">
			<loader v-show="!objData"></loader>
		</transition>
	</div>
</template>

<script>
import data from '../mixins/data';
import social from '../mixins/social';
import Loader from '../components/Loader.vue';

export default {
	mixins: [data, social],
	components: {
		Loader
	},
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
				'pizza-button': {
					'prefix': 'fa',
					'iconName': 'pizza-slice'
				},
				'contact-button': {
					'prefix': 'fa',
					'iconName': 'phone'
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

.directions {
	z-index: 1;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	background: #d8252f;

	@media (max-width: 767.98px) {
		top: auto;
		left: 10px;
		bottom: 40px;
		transform: none;
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

      &.contact-button,
      &.pizza-button {
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>