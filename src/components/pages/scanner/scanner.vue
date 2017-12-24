<template>
  <ar-marker
    v-if="marker"
    :marker="marker"
  />  
</template>

<script>

export default {
  computed: {
    marker() { return this.$store.getters.marker }
  },
  components: {
    'arMarker': {
      props: ['marker'],
      data() {
        return {
          img: ''
        }
      },
      template: `
        <a-scene embedded arjs='trackingMethod: best;'>
          <a-anchor hit-testing-enabled='true'>
            <a-plane
              src="4"
              id="marker"
              position="0 0.5 0"
              segments-height="1500" geometry="width: 2; height: 4;"
            />
          </a-anchor>
          <a-camera-static/>
        </a-scene>`,
      watch: {
        marker() {
          const marker = document.getElementById('marker')
          marker.attributes[0].value = this.marker.poster
          console.log(marker.attributes[0].value)
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
    height: 100vh;
    position: relative;
  }
  h2 {
    margin-top: 120px;
  }
  .appendElement {
    width: 120px;
    height: 120px;
    background: #d23232;
    position: absolute;
  }
</style>
