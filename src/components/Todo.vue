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
import { ref } from 'vue'
import axios from 'axios'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo.vue'
import { mapState } from 'vuex'

export default {
  name: 'Todo',
  components: { TodoItem, AddTodo },
  computed: mapState(['items', 'authen']),
  setup() {
    const defaultItems = ref([])

    const getAllTodos = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=10'
        )
        defaultItems.value = res.data
      } catch (error) {
        console.log(error)
      }
    }

    getAllTodos()

    const onItemComplete = id => {
      defaultItems.value = defaultItems.value.map(todo => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted
        return todo
      })
    }

    const onItemDelete = async id => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        defaultItems.value = defaultItems.value.filter(todo => todo.id !== id)
      } catch (error) {
        console.log(error)
      }
    }

    const onItemAdd = async newItem => {
      try {
        const res = await axios.post(
          `https://jsonplaceholder.typicode.com/todos`,
          newItem
        )
        defaultItems.value.push(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    return {
      // items: defaultItems,
      onItemComplete,
      onItemDelete,
      onItemAdd
    }
  }
}
</script>

<style></style>
