<template>
  <div>
    <auth-header/>
    <div class="login">
      <img class="login__image" src="../../../assets/logo.png"/>
      <div v-for="(index, key) in signUpParams" :key="key">
        <var-input
          :icon="index.icon"
          :placeholder="index.placeholder"
          :name="key"
          :type="index.type"
          @inputVal="userInput"
        />
      </div>  
      <div class="login-middle">
        <button class="login-middle__btn" @click="signUp">Sign Up</button>
      </div>
      <div class="login__links">
        <router-link :to="'login'">Have an account?</router-link>
        <router-link :to="'signUp'">Need help?</router-link>
      </div>
      <div class="login-bottom">
        <p class="login-bottom__copyright">
          ©2017 By <a>Sullivan</a> & <a>Nakamura</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  /* eslint-disable no-unused-vars */
  /* eslint-disable object-shorthand */
  import { mapActions } from 'vuex'
  import authHeader from '@/components/shared/AuthHeader/authHeader'
  import VarInput from '@/components/shared/Input/VarInput'
  import image from '@/assets/login.jpg'
  import { signUpParams } from './signUpMock'
  
  export default {
    name: 'login',
    data() {
      return {
        image,
        signUpParams,
        form: {
          email: '',
          name: '',
          password: ''
        }
      }
    },
    computed: {},
    components: {
      VarInput,
      authHeader
    },
    methods: {
      ...mapActions({
        handleSignUp: 'signUp'
      }),
      userInput(_val, _name) {
        switch (_name) {
          case 'email':
            this.form.email = _val
            break
          case 'name':
            this.form.name = _val
            break
          case 'password':
            this.form.password = _val
            break
          default:
            break
        }
      },
      signUp() {
        const form = this.form
        this.handleSignUp({ form })
        // this.$store.commit('USER_SIGNUP', this.form)
        // wilddog.auth().createUserWithEmailAndPassword(email, password)
        // .then((user) => {
        //   const ref = wilddog.sync().ref('users').child(user.uid)
          // .set({
          //   email: email,
          //   displayName: this.reg.displayName,
          //   uid: user.uid
          // })
          // .then(() => {
          //   console.log('User updated')
          //   // this.$router.push( { path: '/home'} )
          // })
        //   .catch((error) => {
        //     console.warn(error)
        //   })
        // }).catch((error) => {
        //   console.log(error)
        // })
      },
      mounted() {
        this.image
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(44, 44, 44, 0.2);
    height: 100vh;
    flex-direction: column;
    &__image {
      width: 100px;
      margin: 50px 0;
    }
    &-middle {
      width: 100%;
      text-align:-webkit-center;
      &__btn {
        font-size: 12px;
        width: 300px;
        padding: 15px 48px;
        border-width: 1px;
        border-radius: 30px;
        background-color: #f96332;
        color: #FFFFFF;
        font-weight: 400;
        line-height: 1.35em;
        margin-bottom: 15px;
        border: none;
        cursor: pointer;
        display: block;
      }
    }
    &__links {
      width: 300px;
      display: flex;
      justify-content: space-between;
      margin: 15px 0;
      a {
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);
        font-size: 12px;
        font-weight: 600;
      }
    }
    &-bottom {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      &__copyright {
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        a {
          color: #f96332;
        }
      }
    }
  }
</style>
