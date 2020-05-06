import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 注册页面
  {
    path: '/register',
    component: () => import('../views/Register.vue'),
  },
  //登录页面
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
