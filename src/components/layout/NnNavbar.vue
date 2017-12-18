<template>
  <div class="nn-navbar">
    <nn-list :items="items"/>
  </div>
</template>

<script>
  import NnList from '../shared/NnList/NnList'

  export default {
    name: 'NnNavbar',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        items: [
          {
            id: '1',
            text: 'One Parent',
            parent: true,
            subItems: [
              {
                text: 'One Child',
                id: '11'
              },
              {
                text: 'One Child 2',
                id: '12'
              },
              {
                text: 'One Child 3',
                id: '12'
              },
              {
                text: 'One Child 4',
                id: '12'
              },
              {
                text: 'One Child 5',
                id: '12'
              }
            ]
          },
          {
            text: 'One Child 5',
            id: '12'
          },
          {
            text: 'One Child 6',
            id: '12'
          },
          {
            id: '1',
            text: 'Two Parent',
            parent: true,
            subItems: [
              {
                text: 'Two Child 1',
                id: '21'
              },
              {
                text: 'Two Child',
                id: '32'
              }
            ]
          }
        ]
      }
    },
    components: {
      NnList
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  /*For Scroll*/
  ::-webkit-scrollbar {
    width: 0px;
    height: 20px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #f3f3f3; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgb(255, 255, 255); 
  }
  .nn-navbar {
    position: fixed;
    background: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200px;
    overflow: auto;
    border-right: 1px solid #f3f3f3;
  }
</style>
