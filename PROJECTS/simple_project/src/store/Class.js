import { makeObservable, observable, action, makeAutoObservable } from "mobx";

export default class Todo {
  id = Math.random();
  title = "";
  finished = false;

  constructor(title) {
    makeAutoObservable(this);
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}
