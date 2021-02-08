import { createRouter, createWebHistory } from 'vue-router';
import Primary from './components/template/Primary.vue'

export const router =  createRouter({
  history: createWebHistory(),
  routes: [
    {
    path: '',
    name: 'Primary',
    component: Primary,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('./components/pages/Index.vue')
      }
    ]
  }
  ]
})

export default router