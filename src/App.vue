<template>
  <div id="app">
    <Header />
    <Todo />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: { Header, Todo }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
