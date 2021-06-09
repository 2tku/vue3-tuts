<template>
  <p :class="['todo-item', itemProps.isCompleted ? 'is-completed' : '']">
    <input
      type="checkbox"
      :checked="itemProps.isCompleted"
      v-on:change="markItemCompleted"
    />
    {{ itemProps.title }}
    <button class="del-btn" v-on:click="deleteItem">Delete</button>
  </p>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['itemProps'],
  setup(props, context) {
    const markItemCompleted = () => {
      context.emit('item-completed', props.itemProps.id)
    }

    const deleteItem = () => {
      context.emit('delete-item', props.itemProps.id)
    }

    return {
      markItemCompleted,
      deleteItem
    }
  }
}
</script>

<style>
.del-btn {
  background: red;
  color: seashell;
  border: none;
  cursor: pointer;
  float: right;
}
.is-completed {
  text-decoration: line-through;
}
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  margin: 0;
  border-bottom: 1px #ccc dotted;
}
</style>
