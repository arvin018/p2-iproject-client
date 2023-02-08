import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginHome',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]

})
let isAuthenticated = localStorage.getItem('access_token')
router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home' })
  } else if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' })
  }else {
    next()
  }
})

export default router
