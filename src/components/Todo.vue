<template>
  <div v-if="authen.isAuthenticated">
    <AddTodo @add-item="onItemAdd" />
    <TodoItem
      v-for="item in items"
      v-bind:key="item.id"
      v-bind:itemProps="item"
      v-on:item-completed="onItemComplete"
      v-on:delete-item="onItemDelete"
    />
  </div>
  <p v-else style="text-align: center">Not authen</p>
</template>

<script>
import axios from 'axios'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo.vue'
import { mapState } from 'vuex'

export default {
  name: 'Todo',
  components: { TodoItem, AddTodo },

  setup() {},
  computed: mapState(['items', 'authen']),
  created() {
    this.getAllTodos()
  },
  methods: {
    async getAllTodos() {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=10'
        )

        this.$store.dispatch('setupItems', res.data)
      } catch (error) {
        console.log(error)
      }
    },

    async onItemComplete(id) {
      this.$store.commit('MARK_COMPLETE', id)
    },

    async onItemDelete(id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        this.$store.commit('DELETE_ITEMS', id)
      } catch (error) {
        console.log(error)
      }
    },

    async onItemAdd(newItem) {
      try {
        const res = await axios.post(
          `https://jsonplaceholder.typicode.com/todos`,
          newItem
        )
        this.$store.commit('ADD_ITEM', res.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style></style>
