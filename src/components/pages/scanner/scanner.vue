<template>
  <ar-marker
    v-if="marker"
    :marker="marker"
    :poster="poster"
  />  
</template>

<script>

export default {
  computed: {
    marker() { return this.$store.getters.marker },
    poster() { return this.marker.poster }
  },
  components: {
    'arMarker': {
      props: ['marker', 'poster'],
      template: `
        <a-scene v-if="poster" embedded arjs='trackingMethod: best;'>
          <a-anchor hit-testing-enabled='true'>
            <a-plane
              :src="poster"
              id="marker"
              position="0 0.5 0"
              segments-height="1500" geometry="width: 4; height: 6;"
            />
          </a-anchor>
          <a-camera-static class="camera" />
        </a-scene>`,
      watch: {
        marker() {
          if (this.marker) {
            // const marker = document.getElementById('marker')
            // marker.attributes[0].value = this.poster
            // console.log(marker.attributes)
          }
        }
      },
      mounted() {
        document.body.insertBefore(this.$el, document.body.firstChild)
        const id = '-L0eMUf7HvIivTYm1rBb'
        this.$store.dispatch('getMarker', id)
      }
    }
  }
}
</script>

<style>
  .a-canvas {
    height: 100%;
    left: 0;
    position: absolute;
    top: 20px;
    width: 100%;
  }
  a-scene {
    height: 100%!important;
  }
  .body {
    height: 100px;
    width: 100px;
    position: relative;
  }
  body {
    width: 375px!important;
    height: 667px!important;
    margin: 0!important;
    position: relative;
  }
  h2 {
    margin-top: 120px;
  }
  .camera {
    width: 12px;
    height: 12px;
    background: #d23232;
    position: absolute;
  }
  #featured {
    position: absolute;
    width: calc(100vh * (1000 / 562));    /*  video width / height  */
    height: calc(100vw * (562 / 1000));   /*  video height / width  */
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  video {
    position: absolute;
    top: 10%;
    left: 0;
    background: #000;
    width: 100%!important;
    margin: 0!important;
    height: 100vh!important;
  }
  @viewport { 
    zoom: 0!important;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  position: relative;
}

#arjsDebugUIContainer {
    position: fixed;
    color: grey;
    border: 4px solid #d23232;
    z-index: 9999;
    top: 35%;
    bottom: 0;
    left: 0;
    width: 200px!important;
    height: 200px;
    right: 0;
    border-radius: 17px;
    margin: 0 auto;
}
</style>
