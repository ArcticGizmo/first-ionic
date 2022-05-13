import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '@/views/HomePage.vue';
// https://ionic.io/ionicons
import { homeSharp, cloudyNightSharp, librarySharp, bookSharp } from 'ionicons/icons';

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
    path: '/weather',
    component: () => import('@/views/WeatherPage.vue'),
    meta: {
      title: 'Weather',
      icon: cloudyNightSharp,
    },
  },
  {
    path: '/library',
    component: () => import('@/views/LibraryPage.vue'),
    meta: {
      title: 'Library',
      icon: librarySharp,
    },
  },
  {
    path: '/books',
    component: () => import('@/views/BooksPage.vue'),
    meta: {
      title: 'Books',
      icon: bookSharp,
    },
  },
  {
    path: '/settings',
    component: () => import('@/views/SettingsPage.vue'),
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
