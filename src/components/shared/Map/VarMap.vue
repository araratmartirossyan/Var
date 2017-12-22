<template>
    <div class="amap-page-container">
      <el-amap 
        style="height:100%!important;overflow:hidden;"
        :vid="'amap-vue'"
        :center="mapConfig.center"
        :zoom="mapConfig.zoom"
        :amap-manager="amapManager"
        :plugin="plugin"
        :events="events"
      >
        <el-amap-marker 
          v-for="(marker, index) in marks"
          :key="marker.id"
          :vid="index"
          :position="marker.position"
          :visible="marker.visible"
          :draggable="false"
          :amount="marker.amount"
          :hType="marker.hType"
          :content-render="markConfig.contentRender"
          :events="markerEvents.events"
        ></el-amap-marker>
        <el-amap-info-window 
          :position="markerPosition"
          :content="infoContent"
          :visible="visibleInfo"
        ></el-amap-info-window>
        <el-amap-circle 
          v-for="(circle, index) in circles"
          :key="circle.id"
          :center="circle.center"
          :radius="circle.radius"
          :events="circleEvents.events"
          :fillOpacity="circleConfig.fillOpacity"
          :fillColor="circleConfig.fillColor"
          :strokeColor="circleConfig.strokeColor"
        ></el-amap-circle>
      </el-amap>
    </div>
  </template>
 <script>
  import { AMapManager } from 'vue-amap'
  import { mapConfig } from './configs/mapConfig'
  import { markConfig } from './configs/marksConfig'
  import { circleConfig } from './configs/circleConfig'
  import { marks } from './mocks/marksMockUp'
  import { circles } from './mocks/circlesMockUp'

  const amapManager = new AMapManager()
  export default {
    name: 'var-map',
    data() {
      return {
        mapConfig,
        markConfig,
        circleConfig,
        marks,
        circles,
        amapManager: amapManager,
        infoContent: '',
        markerPosition: [121.5273386, 31.21916044],
        visibleInfo: false,
        plugin: ['ToolBar',
          {
            pName: 'MapType',
            defaultType: 0
          }
        ],
        markerEvents: {
          events: {
            click: (e) => {
              this.markerPosition = []
              this.markerPosition.push(e.lnglat.lng)
              this.markerPosition.push(e.lnglat.lat)
              this.infoContent = this.marks[e.target.G.vid].amount
              this.visibleInfo = this.marks[e.target.G.vid].hType === 'hot'
            }
          }
        },
        circleEvents: {
          events: {
            click: () => {
              console.log('click polygon')
            }
          }
        },
        events: {
          'moveend': () => {
            const mapCenter = this.amapManager.getMap().getCenter()
            this.mapConfig.center = [mapCenter.getLng(), mapCenter.getLat()]
          },
          'zoomchange': () => {
            this.mapConfig.zoom = this.amapManager.getMap().getZoom()
          },
          'click': (e) => {
            console.log('map clicked', e)
          }
        }
      }
    },
    watch: {
      visibleInfo() {},
      markerPosition() {}
    },
    methods: {
      changePosition() {
        const position = this.markers[0].position
        this.markers[0].position = [position[0] + 0.002, position[1] - 0.002]
      },
      chnageDraggle() {
        const draggable = this.markers[0].draggable
        this.markers[0].draggable = !draggable
      },
      addZoom() {
        this.mapConfig.zoom++
      },
      subZoom() {
        this.mapConfig.zoom--
      },
      changeCenter() {
        this.mapConfig.center = [this.mapConfig.center[0] + 0.1, this.mapConfig.center[1] + 0.1]
        // console.log(this.mapConfig.circles)
      }
    }
  }
</script>

  <style>
    #component-marker {
      background: green;
    }
    .amap-page-container {
      height:100%;
    }
    .hong-bao-hot {
      background: red;
      white-space: nowrap;
      border: 1px solid white;
      color: white;
      border-radius: 50%;
      padding: 5px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hong-bao-cold {
      background: white;
      white-space: nowrap;
      border: 1px solid red;
      color: red;
      border-radius: 50%;
      padding: 5px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .amap-info-content {
      padding: 10px 10px 10px 10px!important;
    }
    .amap-info-close {
      display: none!important;
    }
  </style>
  