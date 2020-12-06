import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SeferAra from '../views/SeferAra.vue'
import KoltukSecimi from '../views/KoltukSecimi.vue'
import YolcuBilgileri from '../views/YolcuBilgileri.vue'
import OdemeBilgileri from '../views/OdemeBilgileri.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias:'/home',
    name: 'Home',
    redirect:'/seferara'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/seferara',
    name:'seferara',
    component: SeferAra
  },
  {
    path:'/koltuksecimi/:sefer_id',
    name:'koltuksecimi',
    component: KoltukSecimi
  },
  {
    path:'/yolcubilgileri',
    name:'yolcubilgileri',
    component: YolcuBilgileri
  },
  {
    path:'/odemebilgileri',
    name:'odemebilgileri',
    component: OdemeBilgileri
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
