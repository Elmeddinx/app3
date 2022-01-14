<template>
  <div class="col-12 mt-4">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-lg-8">
        <input type="text" class="form-control" placeholder="Add Todo" v-model="todo.name"/>
      </div>
      <div class="col-sm-12 col-md-4 ">
        <button type="submit" class="btn btn-primary mb-3" @click.prevent="addTodo">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo : {
        name : ""
      }
    }
  },
  methods : {
    addTodo() {
      this.$store.dispatch("addTodo", this.todo);
      this.todo = {};
      console.log(this.$store.state.todoList);
    }
  }
}
</script>