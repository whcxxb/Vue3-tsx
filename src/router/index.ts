import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index'),
      meta: {
        title: '小白の窝'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About'),
      meta: {
        title: 'About me'
      }
    }
  ]
})

router.afterEach((to) => {
  const { title }: any = to.meta
  document.title = title
})

export default router
