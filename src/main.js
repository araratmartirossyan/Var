import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import wilddog from 'wilddog'
import App from './App'
import router from './router'

Vue.config.productionTip = false
const config = {
  syncURL: 'https://wd4505314210dtebdx.wilddogio.com/',
  authDomain: 'wd4505314210dtebdx.wilddog.com'
}

wilddog.initializeApp(config)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
