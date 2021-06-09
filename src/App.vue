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
  color: black;
}
</style>
