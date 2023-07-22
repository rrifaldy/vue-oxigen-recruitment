import { createRouter, createWebHistory } from 'vue-router'
import BannerView from '../views/BannerView.vue'

const routes = [
  {
    path: '/',
    name: 'bannerView',
    component: BannerView
  },
  {
    path: '/RegisterView',
    name: 'RegisterView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/memberData',
    name: 'memberData',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MemberData.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
