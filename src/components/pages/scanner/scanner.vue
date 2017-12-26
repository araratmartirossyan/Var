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
        document.body.insertBefore(this.$el, document.body.firstChild)
        const id = '-L0eMUf7HvIivTYm1rBb'
        this.$store.dispatch('getMarker', id)
      }
    }
  }
}
</script>

<style>
  .body {
    height: 100px;
    width: 100px;
    position: relative;
  }
  h2 {
    margin-top: 120px;
  }
  .camera {
    width: 120px;
    height: 120px;
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
    width: 100%;
    height: 100%;
  }

</style>
