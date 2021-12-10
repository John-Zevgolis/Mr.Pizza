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
			social: null,
			loading: false
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
		},
		setLoading(state, payload) {
			state.loading = payload;
		}
	},
	actions: {
		fetchContent({commit}, payload) {
			commit('setLoading', true);
			bucket.getObject({
				id: payload.id,
				props: payload.props
			}).then(response => commit('storeData', response.object))
				.then(() => commit('setLoading', false));
		},
		fetchPages({commit}) {
			commit('setLoading', true);
			bucket.getObjectTypes().then(response => {
				const pages = response.object_types.filter(item => {
					return item.singleton === true;
				});
				commit('storePages', pages);
			}).then(() => commit('setLoading', false));
		},
		fetchItem({ commit}, payload) {
			commit('setLoading', true);
			bucket.getObjects().then(response => { 
				const item = response.objects.find(item => {
					return item.slug === payload;
				});
				commit('storeItem', {
					title: item.title,
					metadata: item.metadata
				});
			}).then(() => commit('setLoading', false));
		},
		fetchLogo({commit}) {
			commit('setLoading', true);
			bucket.getSingleMedia({
				id: '61a14502921e530e5feee446',
				props: 'url'
			}).then(response => commit('storeLogo', response.media.url))
				.then(() => commit('setLoading', false));
		},
		fetchSocial({commit}) {
			commit('setLoading', true);
			bucket.getObjects({
				query: {
					type: 'social'
				},
				props: 'slug,metadata'
			}).then(response => commit('storeSocial', response.objects)).then(() => commit('setLoading', false));
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
		},
		loading(state) {
			return state.loading;
		}
	}
});

export default store;

