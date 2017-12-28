<template >
  <div v-if="isAuth">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <div  
      v-if="showTopMenu"
      :class="[showMenu ? 'wrapper-opened' : 'wrapper-closed']"
    >
      <div
        :class="[
          showMenu ? 'toggle-wrapper-opened' : 'toggle-wrapper-closed'
        ]"
        @click="toggleMenu" 
      />
      <div
        :class="[
          showMenu ? 'toggle-bg-opened' : 'toggle-bg-closed'
        ]"
      />
      <div 
        class="var-navbar" 
        :class="[showMenu ? 'navbar-shrinked' : '']"
      >
        <img 
          class="var-navbar__logo"
          :src="logo"
        />
        <div class="var-navbar__logo-container" @click="toggleMenu">
          <img class="image" :src="avatar"/>
        </div>
        <div  class="menu-closed" :class="[showMenu ? 'menu-opened' : '']">
          <ul class="menu-ul">
            <li @click="toggleMenu">
              <router-link :to="{ name: 'profile', params: { type: 'balance' }}">
                <i class="fa fa-money"></i>
              </router-link>
            </li>
            <li @click="toggleMenu">
              <router-link :to="{ name: 'profile', params: { type: 'transactions' }}">
                <i class="fa fa-exchange"></i>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- <p class="var-navbar__name">{{ user.name }}</p> -->
      </div>
    </div>
    <div class="bottom-tabs" v-if="showBottomMenu">
      <router-link 
        v-for="(index, key) in menu"
        :to="index.url"
        :key="key"
      >
        <i :class="[index.icon]"></i>
        <span style="margin-left:10px;">
          {{index.name}}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  import { mapGetters } from 'vuex'
  import logo from '@/assets/logo.png'
  import avatar from '@/assets/ryan.jpg'
  import menu from './data.mock'

  export default {
    data() {
      return {
        logo,
        avatar,
        menu: menu.menu,
        showMenu: false
      }
    },
    computed: {
      ...mapGetters({
        user: 'user',
        isAuth: 'isAuth'
      }),
      showTopMenu() {
        const { name } = this.$route
        switch (name) {
          case 'profile':
            return false
            break
          case 'signUp':
            return false
            break
          case 'login':
            return false
            break
          default:
            return true
            break
        }
      },
      showBottomMenu() {
        const { name } = this.$route
        switch (name) {
          case 'signUp':
            return false
            break
          case 'login':
            return false
            break
          default:
            return true
            break
        }
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>

<style scoped lang="scss">
  .var-navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.525rem;
    height: 55px;
    min-height: 55px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    background: -moz-linear-gradient(left, rgba(0,0,0,0.8) 1%, rgba(249,99,50,1) 100%);
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.8) 1%,rgba(249,99,50,1) 100%);
    background: linear-gradient(to right, rgba(0,0,0,0.8) 1%,rgba(249,99,50,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc000000', endColorstr='#e6f96332',GradientType=1 );
    transition: ease-in-out all .3s;
    &__logo {
      width: 35px;
    }
    &__bar-container {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      // box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
      i {
        color: #fff;
      }
    }
    &__logo-container {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
      .image {
        max-width: 100%;
        border-radius: 1px;
      }
    }
    .menu-ul {
      margin: 0;
      list-style-type: none;
      padding: 0;
      padding-top: 0px;
      li {
        color: #fff;
        padding: 13px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          color: #fff;
          font-size: 18px;
          text-transform: uppercase;
          -webkit-box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
          padding: 10px;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .bottom-tabs {
    background: -moz-linear-gradient(left, rgba(249,99,50,1) 1%, rgba(0,0,0,1) 100%);
    background: -webkit-linear-gradient(left, rgba(249,99,50,1) 1%, rgba(0,0,0,1) 100%);
    background: linear-gradient(to right, rgba(249,99,50,1) 1%, rgba(0,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc000000', endColorstr='#e6f96332',GradientType=1 );
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 7%;
    display: flex;
    align-items: center;
    z-index: 99999;
    a {
      width: 50%;
      color: #fff;
      font-size: 18px;
      font-weight: 100;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  // Modifiers
   .wrapper-closed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
    background: -moz-linear-gradient(left, rgba(0,0,0,0.8) 1%, rgba(249,99,50,1) 100%);
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.8) 1%,rgba(249,99,50,1) 100%);
    background: linear-gradient(to right, rgba(0,0,0,0.8) 1%,rgba(249,99,50,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc000000', endColorstr='#e6f96332',GradientType=1 );
    height: 55px;
  }
  .wrapper-opened {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
    background: rgba(249,99,50,1);
    height: 55px;
  }
  .toggle-wrapper-closed {
    opacity: 0;
    transition: ease-in-out all .3s;
  }
  .toggle-wrapper-opened {
    opacity: 1;
    width: 83%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: 99999;
    transition: ease-in-out all .3s;
  }
  .toggle-bg-closed {
    opacity: 0;
    transition: ease-in-out all .3s;
  }
  .toggle-bg-opened {
    opacity: 1;
    width: 17%;
    position: fixed;
    bottom: 0;
    // top: 71px;
    right: 0;
    height: 125px;
    top: 0;
    background-color: rgb(249, 99, 50);
    z-index: 1000;
    transition: ease-in-out all .3s;
    border-radius: 25%;
  }
  .menu-closed {
    opacity: 0;
    width: 0;
    position: fixed;
    right: -100px;
    height: 125px;
    top: 0;
    background: -moz-linear-gradient(top, rgba(249,99,50,0.9) 0%, rgba(249,99,50,0.6) 100%);
    background: -webkit-linear-gradient(top, rgba(249,99,50,0.9) 0%,rgba(249,99,50,0.6) 100%);
    background: linear-gradient(to bottom, rgba(249,99,50,0.9) 0%,rgba(249,99,50,0.6) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f96332', endColorstr='#99f96332',GradientType=0 );
    box-shadow: 1px 10px 20px 0px rgba(0, 0, 0, 0.7);
    display: block;
    transition: ease-in-out all .3s;
  }
  .menu-opened {
    right: 0;
    opacity: 1;
    width: 17%;
    height: 125px;
    top: 0;
    background: -moz-linear-gradient(top, rgba(249,99,50,1) 0%, rgba(0,0,0,0.8) 100%);
    background: -webkit-linear-gradient(top, rgba(249,99,50,1) 0%,rgba(0,0,0,0.8) 100%);
    background: linear-gradient(to bottom, rgba(249,99,50,1) 0%,rgba(0,0,0,0.8) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f96332', endColorstr='#99f96332',GradientType=0 );
    transition: ease-in-out all .3s;
    border-radius: 0 0 20% 20%;
  }
  .navbar-shrinked {
    width: 83%!important;
    transition: ease-in-out all .2s;
  }
  .move-bars {
    margin-right: 10%;
    transition: ease-in-out all .2s;
  }
</style>