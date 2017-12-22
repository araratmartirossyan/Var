/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/pages/auth/login'
import signUp from '../components/pages/auth/signUp'
import home from '../components/pages/home/home'
// import aMap from '../components/shared/Map/Map'
import profile from '../components/pages/profile/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: { mustAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: { mustAuth: true }
    },
    {
      path: '*',
      name: 'Redirect',
      redirect: '/home'
    }
  ]
})
