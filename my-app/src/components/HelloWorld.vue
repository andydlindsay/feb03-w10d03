<template>
  <div class="hello-world">
    <h1>{{ msg }}</h1>
    <slot></slot>
    <button @click="doSomething">Pass data to parent</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg'],
  data() {
    return {
      childMessage: 'hello from the child'
    };
  },
  methods: {
    doSomething() {
      this.$emit('send-to-parent', this.childMessage);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
