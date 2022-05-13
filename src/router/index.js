import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '@/views/HomePage.vue';
import { homeSharp } from 'ionicons/icons';

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomePage,
    meta: {
      title: 'Home',
      icon: homeSharp,
    },
  },
  {
    path: '/settings',
    components: () => import('@/views/SettingsPage.vue'),
    meta: {
      title: 'Settings',
      hide: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
