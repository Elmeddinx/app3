import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    todoList : [],
  },
  getters : {
    getTodolist(state) {
      return state.todoList;
    },
    getTodo(state) {
      return state.todo;
    }
    
  },
  mutations: {
    updateTodoList(state, todoList) {
      state.todoList.push(todoList);
    }
  },
  actions: {
    addTodo({commit}, todo) {
      axios.post("https://todoapp-5a044-default-rtdb.firebaseio.com/todolist.json", todo)
      .then((response) => {
        todo.key = response.data.name;
        commit("updateTodoList", todo);
      })
      .catch((e) => console.log(e));
    },
    getTodo({commit}) {
      axios.get("https://todoapp-5a044-default-rtdb.firebaseio.com/todolist.json")
      .then(response => {
        let data = response.data;
        for(let key in data) {
          data[key].key = key;
          commit("updateTodoList", data[key]);
        }
      })
    },

    
  }
})
 