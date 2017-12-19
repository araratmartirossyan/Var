<template>
  <div>
    home
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
