import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    name: 'Pizza',
    path: '/pizza',
    component: () => import('../views/Pizza.vue')
  },
  {
    name: 'PizzaItem',
    path: '/pizza/:id',
    component: () => import('../views/PizzaItem.vue')
  },
  {
    name: 'Makaronades',
    path: '/makaronades',
    component: () => import('../views/Makaronades.vue')
  },
  {
    name: 'MakaronadesItem',
    path: '/makaronades/:id',
    component: () => import('../views/MakaronadesItem.vue')
  },
  {
    name: 'Synodeutika',
    path: '/synodeutika',
    component: () => import('../views/Synodeutika.vue')
  },
  {
    name: 'SynodeutikaItem',
    path: '/synodeutika/:id',
    component: () => import('../views/SynodeutikaItem.vue')
  },
  {
    name: 'Timokatalogos',
    path: '/timokatalogos',
    component: () => import('../views/Timokatalogos.vue')
  },
  {
    name: 'Contact',
    path: '/epikoinwnia',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/:notFound(.*)',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
