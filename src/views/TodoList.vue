<template>
  <div class="col-12 mt-4">
    <ul class="nav d-flex flex-column">
      <todo-li-vue
        v-for="todo in getTodolist"
        :key="todo"
        :todo="todo"
        :id="todo.key"
      ></todo-li-vue>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoLiVue from "../components/TodoLi.vue";
export default {
  computed: {
    ...mapGetters(["getTodolist"]),
  },
  components: {
    TodoLiVue,
  },

};
</script>