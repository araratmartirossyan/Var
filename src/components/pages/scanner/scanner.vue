
<template>
  <div class="body">
    <a-scene embedded arjs='trackingMethod: best;'>
      <a-anchor hit-testing-enabled='true'>
        <a-plane
          id="marker"
          :src="image"  
          position="0 0.5 0" 
          segments-height="800" 
          geometry="width: 4; height: auto;"
        />
      </a-anchor>
      <a-camera-static />
    </a-scene>
  </div>
</template>

<script>
// import 'aframe'
// import ar from '../../../assets/js/a-frame.js'

export default {
  data: () => ({
    image: 'http://oisooyqzw.bkt.clouddn.com/tmp_b50ed1e6d6c6ad07fd8f52693b76cce6.jpg'
  }),
  methods: {
    fetchData() {
      const ref = wilddog.sync().ref().child('points')
      ref.once('value')
      .then((data) => {
        const point = Object.values(data.val())[0]
        this.image = point.poster
        console.log('this', this.image)
      })
      .catch(err => console.error('err', err))
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style>
  .body {
    height: 100vh;
    position: relative;
  }
  .appendElement {
    width: 120px;
    height: 120px;
    background: #d23232;
    position: absolute;
  }
</style>
