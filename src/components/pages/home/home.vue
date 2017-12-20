<template>
  <div style="padding: 400px 0;background: #818181;">
    <router-link to="profile">Profile</router-link>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  export default {
    methods: {
      logout() {
        wilddog.auth().signOut(() => {
          localStorage.removeItem('uid')
          this.$router.push({ path: '/login' })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  
</style>
