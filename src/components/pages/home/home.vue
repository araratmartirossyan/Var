<template>
  <div class="map-container">
    <var-map />
  </div>
</template>

<script>
  import VarMap from '@/components/shared/Map/VarMap'

  export default {
    components: {
      VarMap
    }
  }
</script>

<style scoped lang="scss">
  .map-container {
    padding: 55px 0 0 0;
    background: #818181;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 93%;
  }
</style>
