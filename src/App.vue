<template>
  <div id="app" :style="parsePadding">
    <var-nav-bar />
    <router-view />
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
    watch: {
      '$route'(to, from) {
        const debuger = document.getElementById('arjsDebugUIContainer')
        const scene = document.getElementById('scene')
        const element = document.querySelector('video')
        if (from.name === 'scanner') {
          scene.parentNode.removeChild(scene)
          debuger.remove()
          console.log('works?')
          navigator.getUserMedia(
            { audio: true, video: { width: 1280, height: 720 } },
            (stream) => {
              const video = document.querySelector('video')
              video.srcObject = stream
              stream.getTracks()[1].stop()
              element.remove()
            },
            err => console.log(`The following error occurred: ${err.name}`)
          )
        }
      }
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
          case 'profile':
            return 'padding-top: 0px;'
            break
          default:
            return 'padding-top: 55px;'
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
