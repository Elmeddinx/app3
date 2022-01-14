<template>
  <div class="container d-flex flex-column align-items-center mt-5">
    <div class="col-sm-12 col-md-9 col-lg-6">
      <div class="card d-flex flex-column align-items-center p-5">
        <h1>Todos App</h1>
        <add-todo-vue></add-todo-vue>
        <todo-list-vue></todo-list-vue>
      </div>
    </div>
  </div>
</template>
<script>
import AddTodoVue from "./views/AddTodo.vue";
import TodoListVue from "./views/TodoList.vue";
export default {
  components: {
    AddTodoVue,
    TodoListVue,
  },
  created() {
    this.$store.dispatch("getTodo");
  },
};
</script>
<style>
ul {
  row-gap: 10px;
}
</style>