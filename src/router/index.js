import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/pages/auth/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      name: 'Redirect',
      redirect: '/login'
    }
  ]
})
