<template>
  <div class="navbar">
    <h1>Todo list</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="authen.isAuthenticated">
        Total item: {{ items.length }} <button>Logout</button>
      </li>
      <li v-else><button>Login</button></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: mapState(['items', 'authen'])
}
</script>

<style scoped>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
