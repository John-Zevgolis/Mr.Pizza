import Vue from 'vue';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'hamburgers/dist/hamburgers.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import * as VueGoogleMaps from 'vue2-google-maps';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueWaypoint from 'vue-waypoint';
import VueLazyload from 'vue-lazyload';
import VueMeta from 'vue-meta';
library.add(faPhone, faPizzaSlice, faDirections);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.use(VueWaypoint);
Vue.use(VueLazyload);
Vue.use(VueMeta);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCBmUXYXi_Zufpz1rKucKIT1dsU9yIdx_Y'
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
