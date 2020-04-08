<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld
      @send-to-parent="acceptChildMessage"
      msg="Welcome to Your Vue.js App"
    >
      <h3>I am child node</h3>
      <h3>Please render me!</h3>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    acceptChildMessage(data) {
      console.log(`message received from child: ${data}`);
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
