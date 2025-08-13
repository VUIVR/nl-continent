import { createRouter, createWebHistory } from 'vue-router'

import Main from './pages/main/index.vue/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Main, name: 'main' },
  ],
})

export default router
