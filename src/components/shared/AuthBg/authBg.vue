<template>
  <div class="page-header-image" :style="getBackground"></div>
</template>

<script>
  /* eslint-disable no-undef */
  import image from '@/assets/login.jpg'

  export default {
    data() {
      return {
        image
      }
    },
    name: 'authHeader',
    computed: {
      getBackground() {
        return 'background-image:' + this.getLinear + ', url(' + this.image + ');' + this.getBgPos
      },
      getLinear() {
        return '-webkit-linear-gradient(90deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))'
      },
      getBgPos() {
        return 'background-size:cover;background-position: center center;'
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-header-image {
    position: absolute;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: -webkit-linear-gradient(90deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6));
    background: -o-linear-gradient(90deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6));
    background: -moz-linear-gradient(90deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6));
    background: linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6));
  }
</style>
