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
    name: 'Salates',
    path: '/salates',
    component: () => import('../views/Salates.vue')
  },
  {
    name: 'SalatesItem',
    path: '/salates/:id',
    component: () => import('../views/SalatesItem.vue')
  },
  {
    name: 'Anapsyktika',
    path: '/anapsyktika',
    component: () => import('../views/Anapsyktika.vue')
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
  routes
});

export default router;
