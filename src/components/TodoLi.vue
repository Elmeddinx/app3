<template>
  <li
    class="
      d-flex
      align-items-center
      justify-content-between
      border
      px-2
      py-3
      rounded
    "
    
  >
    <h6>{{ this.todo.name }}</h6>
    <button class="btn btn-danger btn-sm" @click="deleteItem">Delete</button>
  </li>
</template>

<script>
import axios from "axios";
export default {
  props: ["todo"],
  methods: {
    deleteItem() {
      axios.delete(
        `https://todoapp-5a044-default-rtdb.firebaseio.com/todolist/${this.todo.key}.json`
      );

      let Item = document.getElementById(`${this.todo.key}`);
      Item.remove();
    },
  },
};
</script>