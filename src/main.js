import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import VueAMap from 'vue-amap'
import wilddog from 'wilddog'
import App from './App'
import router from './router'
import store from './stores/index'
import serverStatic from 'server-static'
// import ArMarker from '../src/components/global'
import './assets/css/main.css'
import './assets/fonts/font-import.css'

// Vue.component('el-amap', ElAmap)
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '28966b6be8e4fa0e4c4f4c9b4bf8d3ce',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor']
})

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
Vue.config.ignoredElements = ['a-scene', 'a-marker', 'a-box', 'a-camera-static', 'a-plane', 'a-anchor']
/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { 
    App
  },
  created() {
    this.$store.dispatch('getUser')
  }
})
