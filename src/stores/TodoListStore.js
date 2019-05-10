import { observable, computed, action } from "mobx";

import TodoStore from "./TodoStore";

class TodoListStore {
  @observable todos = [];

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action
  addTodo(title) {
    this.todos.push(new TodoStore(title));
  }
}

export default new TodoListStore();
