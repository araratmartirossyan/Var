<template>
  <div v-if="isAuth">
    <div :class="[showMenu ? 'wrapper-opened' : 'wrapper-closed']">
      <div 
        :class="[showMenu ? 'toggle-wrapper-opened' : 'toggle-wrapper-closed']" 
        @click="toggleMenu"
      />
      <div :class="[showMenu ? 'toggle-bg-opened' : 'toggle-bg-closed']"></div>
      <div class="var-navbar" :class="[showMenu ? 'navbar-shrinked' : '']">
        <img class="var-navbar__logo" :src="logo"/>
        <div v-if="showBars" class="var-navbar__logo-container" @click="toggleMenu">
          <img class="image" :src="avatar"/>
        </div>
        <div v-if="!showBars" class="var-navbar__bar-container" :class="[showMenu ? 'move-bars' : '']" @click="toggleMenu">
          <i class="fa fa-bars"></i>
        </div>
        <div  class="menu-closed" :class="[showMenu ? 'menu-opened' : '']">
          <ul class="menu-ul">
            <li 
              @click="toggleMenu"
              v-for="(index, key) in menus"
            >
              <router-link :to="index.url">{{index.name}}</router-link>
            </li>
          </ul>
        </div>
        <!-- <p class="var-navbar__name">{{ user.name }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  import { mapGetters } from 'vuex'
  import logo from '@/assets/logo.png'
  import avatar from '@/assets/ryan.jpg'

  const menus = [
    {
      name: 'Home',
      url: 'home'
    },
    {
      name: 'Profile',
      url: 'profile'
    },
    {
      name: 'Scanner',
      url: 'scanner'
    }
  ]
  
  export default {
    data: () => ({
      logo,
      avatar,
      showMenu: false,
      menus
    }),
    computed: {
      ...mapGetters({
        user: 'user',
        isAuth: 'isAuth'
      }),
      showBars() {
        const { name } = this.$route
        switch (name) {
          case 'profile':
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
    padding: 0.625rem;
    min-height: 53px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    background-color: rgb(249, 99, 50);
    transition: ease-in-out all .2s;
    &__logo {
      width: 45px;
    }
    &__bar-container {
      width: 45px;
      height: 45px;
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
      width: 45px;
      height: 45px;
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
      padding-top: 15px;
      li {
        padding: 15px 30px;
        color: #fff;
        text-align: left;
        a {
          color: #fff;
          font-size: 20px;
          text-transform: uppercase;
        }
      }
    }
  }
  // Modifiers
   .wrapper-closed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
    background: rgb(249,99,50);
    background: -moz-linear-gradient(top, rgba(249,99,50,1) 0%, rgba(249,99,50,1) 100%);
    background: -webkit-linear-gradient(top, rgba(249,99,50,1) 0%,rgba(249,99,50,1) 100%);
    background: linear-gradient(to bottom, rgba(249,99,50,1) 0%,rgba(249,99,50,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f96332', endColorstr='#f96332',GradientType=0 );
    height: 71px;
  }
  .wrapper-opened {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
    background: rgb(249,99,50);
    background: -moz-linear-gradient(top, rgba(249,99,50,1) 0%, rgba(249,99,50,1) 100%);
    background: -webkit-linear-gradient(top, rgba(249,99,50,1) 0%,rgba(249,99,50,1) 100%);
    background: linear-gradient(to bottom, rgba(249,99,50,1) 0%,rgba(249,99,50,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f96332', endColorstr='#f96332',GradientType=0 );
    height: 71px;
  }
  .toggle-wrapper-closed {
    opacity: 0;
    transition: ease-in-out all .2s;
  }
  .toggle-wrapper-opened {
    opacity: 1;
    width: 40%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: 99999;
    transition: ease-in-out all .2s;
  }
  .toggle-bg-closed {
    opacity: 0;
    transition: ease-in-out all .3s;
  }
  .toggle-bg-opened {
    opacity: 1;
    width: 60%;
    position: fixed;
    bottom: 0;
    top: 71px;
    right: 0;
    height: 100vh;
    background-color: rgb(249, 99, 50);
    z-index: 1000;
    transition: ease-in-out all .3s;
  }
  .menu-closed {
    opacity: 0;
    width: 0;
    position: fixed;
    right: -200px;
    bottom: 0;
    height: 100vh;
    background: -moz-linear-gradient(top, rgba(249,99,50,0.9) 0%, rgba(249,99,50,0.6) 100%);
    background: -webkit-linear-gradient(top, rgba(249,99,50,0.9) 0%,rgba(249,99,50,0.6) 100%);
    background: linear-gradient(to bottom, rgba(249,99,50,0.9) 0%,rgba(249,99,50,0.6) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f96332', endColorstr='#99f96332',GradientType=0 );
    box-shadow: 1px 10px 20px 0px rgba(0, 0, 0, 0.7);
    display: block;
    transition: ease-in-out all .2s;
  }
  .menu-opened {
    right: 0;
    opacity: 1;
    width: 60%;
    background: -moz-linear-gradient(top, rgba(249,99,50,0.9) 0%, rgba(0,0,0,0.8) 100%);
    background: -webkit-linear-gradient(top, rgba(249,99,50,0.9) 0%,rgba(0,0,0,0.8) 100%);
    background: linear-gradient(to bottom, rgba(249,99,50,0.9) 0%,rgba(0,0,0,0.8) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f96332', endColorstr='#99f96332',GradientType=0 );
    transition: ease-in-out all .2s;
  }
  .navbar-shrinked {
    width: 50%!important;
    transition: ease-in-out all .2s;
  }
  .move-bars {
    margin-right: 10%;
    transition: ease-in-out all .2s;
  }
</style>
