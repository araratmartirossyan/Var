import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import wilddog from 'wilddog'
import App from './App'
import router from './router'
import store from './stores/index'
import './assets/css/main.css'
import './assets/fonts/font-import.css'

Vue.config.productionTip = false
const config = {
  syncURL: 'https://wd4505314210dtebdx.wilddogio.com/',
  authDomain: 'wd4505314210dtebdx.wilddog.com'
}

wilddog.initializeApp(config)
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.mustAuth)) {
    console.warn('AUTH:', store.getters.isAuth)
    if (store.getters.isAuth) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})
/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    this.$store.dispatch('getUser')
  }
})
