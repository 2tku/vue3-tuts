<template>
  <div class="navbar">
    <h1>Todo list</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="authen.isAuthenticated">
        Total item: {{ items.length }}
        <button @click="loginOrLogOut">Logout</button>
      </li>
      <li v-else><button @click="loginOrLogOut">Login</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    items() {
      return this.$store.state.items
    },
    authen() {
      return this.$store.state.authen
    }
  },
  methods: {
    loginOrLogOut() {
      this.$store.commit('TOGGLE_AUTH')
    }
  }
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
