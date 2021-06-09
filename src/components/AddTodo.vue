<template>
  <form @submit="addItem">
    <input type="text" v-model="title" placeholder="Add new job ..." />
    <input type="submit" value="Add new" class="add-button" />
  </form>
</template>

<script>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'AddTodo',
  setup(props, context) {
    const title = ref('')

    const addItem = event => {
      event.preventDefault()

      const newItem = {
        id: uuidv4(),
        title: title.value,
        isCompleted: false
      }

      context.emit('add-item', newItem)
    }

    return {
      title,
      addItem
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type='text'] {
  flex: 10;
  padding: 5px;
}
input[type='submit'] {
  flex: 2;
}
</style>
