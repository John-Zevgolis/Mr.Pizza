import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Cosmic = require('cosmicjs');
const api = Cosmic();
const bucket = api.bucket({
  slug: 'mr-pizza-production',
  read_key: 'ozOqSG8S3rLrbPDeY1lTs7jPn6rEjzvgM1Z43eAlWou8vn7piE'
});

const store = new Vuex.Store({
	state() {
		return {
			objData: null,
			pages: null,
			item: null,
			logo: null,
			social: null
		};
	},
	mutations: {
		storeData(state, payload) {
			state.objData = payload;
		},
		storePages(state, payload) {
			state.pages = payload;
		},
		storeItem(state, payload) {
			state.item = payload;
		},
		storeLogo(state, payload) {
			state.logo = payload;
		},
		storeSocial(state, payload) {
			state.social = payload;
		}
	},
	actions: {
		fetchContent({commit}, payload) {
			bucket.getObject({
				id: payload.id,
				props: payload.props
			}).then(response => commit('storeData', response.object));
		},
		fetchPages({commit}) {
			bucket.getObjectTypes().then(response => {
				const pages = response.object_types.filter(item => {
					return item.singleton === true;
				});
				commit('storePages', pages);
			});
		},
		fetchItem({ commit}, payload) {
			bucket.getObjects().then(response => { 
				const item = response.objects.find(item => {
					return item.slug === payload;
				});
				commit('storeItem', {
					title: item.title,
					slug: item.slug,
					metadata: item.metadata
				});
			});
		},
		fetchLogo({commit}) {
			bucket.getSingleMedia({
				id: '61a14502921e530e5feee446',
				props: 'url'
			}).then(response => commit('storeLogo', response.media.url));
		},
		fetchSocial({commit}) {
			bucket.getObjects({
				query: {
					type: 'social'
				},
				props: 'slug,metadata'
			}).then(response => commit('storeSocial', response.objects));
		},
	},
	getters: {
		objData(state) {
			return state.objData;
		},
		pages(state) {
			return state.pages;
		},
		item(state) {
			return state.item;
		},
		logo(state) {
			return state.logo;
		},
		social(state) {
			return state.social;
		}
	}
});

export default store;

