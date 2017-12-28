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
      data() {
        return {
          img: ''
        }
      },
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
            // marker.attributes[0].value = this.marker.poster
            // console.log(marker.attributes)
          }
        }
      },
      mounted() {
        console.clear()
        console.log(document.head)
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        // document.body.insertBefore(this.$el, document.body.firstChild)
        const id = '-L0eMUf7HvIivTYm1rBb'
        this.$store.dispatch('getMarker', id)
      }
    }
  }
}
</script>

<style>
  .a-canvas {
    width: 100%!important;
    height: 90%!important;
  }
  a-scene {
    height: 90%!important;
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
    top: 0;
    left: 0;
    width: 100%!important;
    height: 90vh!important;
    margin: 0!important;
    top: 25%!important;
  }

  @viewport { 
    zoom: 0!important;
  }

</style>
