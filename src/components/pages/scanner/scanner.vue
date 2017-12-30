<template>
  <div id="max">
    <ar-marker
      v-if="marker"
      :marker="marker"
      :poster="poster"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      domStart: {}
    }
  },
  computed: {
    marker() { return this.$store.getters.marker },
    poster() { return this.marker.poster }
  },
  components: {
    'arMarker': {
      props: ['marker', 'poster'],
      template: `
        <a-scene v-if="poster" id="scene" embedded arjs='trackingMethod: best;'>
          <a-anchor hit-testing-enabled='true' @click="action">
            
            <a-plane
              :src="poster"
              id="marker"
              position="0 0.5 0"
              segments-height="1500" 
              geometry="width: 4; height: 4;"
            >
              <a-entity 
                id="refresh-button" 
                geometry="primitive: box" 
                material="color: red" 
                position="0 0 0"
              />
            </a-plane>
          </a-anchor>
          <a-camera-static class="camera" />
        </a-scene>`,
      mounted() {
        document.body.appendChild(this.$el)
        const id = '-L0eMUf7HvIivTYm1rBb'
        this.$store.dispatch('getMarker', id)
      },
      computed: {
        ...mapGetters({
          hongbao: 'getHongbao',
          user: 'user'
        })
      },
      methods: {
        ...mapActions({
          handleSetHongbao: 'setHongbao'
        }),
        action() {
          console.log('action')
        }
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

  body {
    width: 100%!important;
    height: 667px!important;
    margin: 0!important;
    position: relative;
  }
  h2 {
    margin-top: 120px;
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

.containerButton {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 10%;
}

.hong_button {
  width: 120px;
  height: 35px;
  border-radius: 4px;
  border: none;
  z-index: 9999;
  position: absolute;
  color: #fff;
  background: #d23232;
  bottom: 120px;
  text-align: center;
}
</style>
