import { createRouter, createWebHistory } from 'vue-router';
import GirisSayfasi from '@/components/girisSayfasi.vue';
import HomePage from '../components/HomePage.vue'; // Your main page component

const routes = [
  { path: '/', component: HomePage },
  { path: '/giris', component: GirisSayfasi },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;