import { makeObservable, observable, computed } from "mobx";
import Todo from "./Class";
export default class TodoList {
  todos = [];
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
    });
    this.todos = todos;
  }
}
export const store = new TodoList([
  new Todo("Get Coffee"),
  new Todo("Write simpler code"),
]);
