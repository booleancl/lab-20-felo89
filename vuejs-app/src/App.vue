<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <LoginPage />
</template>

<script>
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',

  components: {
    LoginPage
  }
}
</script>

