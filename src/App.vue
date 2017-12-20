<template>
  <div id="app" :style="parsePadding">
    <var-nav-bar/>
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import VarNavBar from '@/components/layout/NavBar/VarNavBar'

  export default {
    name: 'app',
    components: {
      VarNavBar
    },
    computed: {
      ...mapGetters({
        isAuth: 'isAuth'
      }),
      parsePadding() {
        const { name } = this.$route
        switch (name) {
          case 'test':
            return 'padding-top: 10px;'
            break
          case 'login':
            return 'padding-top: 0px;'
            break
          case 'signUp':
            return 'padding-top: 0px;'
            break
          default:
            return 'padding-top: 71px;'
            break
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: 'OpenGost Type A TT';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

* {
	box-sizing: border-box;
}

body {
	margin: 0;
	-webkit-font-smoothing:antialiased;
	-moz-osx-font-smoothing:grayscale;
	background-color: #fff;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: red;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
