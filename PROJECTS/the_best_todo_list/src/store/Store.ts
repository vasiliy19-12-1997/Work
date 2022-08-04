import { createContext } from 'react'
import { makeAutoObservable } from "mobx";
// import AddTodo from '../components/addtodo/AddTodo';
import { Task } from './../interface/Interface';
  
class Store {
  
  tasks: Task[] = [];
  newTask= {
    id:Math.random(),
    title: '',
    done: false,
  };
 constructor() {
  makeAutoObservable(this)
 }
  addTodo(){
  this.tasks.push(this.newTask)
  console.log(this.tasks, this.newTask)
 }


 removeTodo(id:number){
   this.tasks.filter(i=>i.id !== id)
 }

 
}
const todosStore = new Store();
export default todosStore;
