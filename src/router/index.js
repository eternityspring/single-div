import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/front.vue')
    },
    {
      path: '/shape',
      name: 'shapes',
      component: () => import('../views/shapePage.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/createPage.vue')
    },
    {
      path: '/box-shadow',
      name: 'boxShadow',
      component: () => import('../views/boxShadow.vue')
    },
    {
      path: '/impress',
      name: 'impress',
      component: () => import('../views/impressPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
