<template>
<div>
  <div class="curtain" :style="getStyles">
    
  </div>
    <div class="login" >
      <div class="var-input-group">
        <span class="var-input-group__addon">
            <i class="fa fa-user"></i>
        </span>
        <input class="var-input-group__input"/>
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
        NOT FINISHED
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
export default {
  name: 'login',
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      reg: {
        displayName: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    image() {
      return 'http://demos.creative-tim.com/now-ui-kit/assets/img/login.jpg'
    },
    getStyles() {
      return 'background-image:-webkit-linear-gradient(90deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6)), url(' + this.image + ');background-size:cover;'
    }
  },
  methods: {
    SingIn(email, password) {
      wilddog.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.userUid = res.uid
          // this.$router.push( { path: '/home'} )
      }).catch((error) => {
        console.log(error)
      })
    },
    SignUp(email, password) {
      wilddog.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const ref = wilddog.sync().ref('users').child(user.uid)
        .set({
          email: email,
          displayName: this.reg.displayName,
          uid: user.uid
        })
        .then(() => {
          console.log('User updated')
          // this.$router.push( { path: '/home'} )
        })
        .catch((error) => {
          console.warn(error)
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    mounted() {
      this.image
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html {
  height: 100%;
  
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.curtain {
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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(44, 44, 44, 0.2);
  height: 100vh;
}
.var-input-group {
  position: relative;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  &__addon {
    padding: 15px 0 15px 19px;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 30px;
    display: flex;
    align-items: center;
    position: absolute;
  }
  &__input {
    padding: 15px 15px 15px 40px;
    background-color: transparent;
    border: 1px solid #E3E3E3;
    border-radius: 30px;
    color: #2c2c2c;
    line-height: normal;
    font-size: 0.8571em;
    -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    -webkit-box-shadow: none;
    box-shadow: none;
    &:focus {
      border: 1px solid #f96332;
      -webkit-box-shadow: none;
      box-shadow: none;
      outline: 0 !important;
      color: #2c2c2c;
    }
  }
}
</style>
