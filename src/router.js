import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('./pages/main/index.vue'),
      name: 'main',
    },
    {
      path: '/category/:category',
      component: () => import('./pages/category/index.vue'),
      name: 'category',
    },
  ],
});

export default router;
