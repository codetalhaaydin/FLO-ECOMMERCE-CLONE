import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import WEB from '../components/WEB.vue';
import GirisSayfasi from '../components/girisSayfasi.vue';
import SepetSayfasi from '../components/sepetSayfasi.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: WEB,
  },
  {
    path: '/girisSayfasi',
    name: 'GirisSayfasi',
    component: GirisSayfasi,
  },
  {
    path: '/sepetSayfasi',
    name: 'SepetSayfasi',
    component: SepetSayfasi,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;