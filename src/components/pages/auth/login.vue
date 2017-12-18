<template>
  <div class="login">
    login
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
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
