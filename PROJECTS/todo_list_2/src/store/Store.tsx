
import {makeAutoObservable} from "mobx";
import { Task } from './../interface/Interface';

const deleteTodo = (tasks: Task[], id:number):Task[]=>tasks.filter(t=>t.id !== id)

const addTodo= (tasks: Task[], text:string):Task[]=>[
    ...tasks,
    {
        id: Math.max(0, Math.max(...tasks.map(({id})=>id)))+1,
        text,
        done:true,
    }
]
class Todo {
    tasks: Task[] = [];
    newTodo:string = '';

    constructor(){
        makeAutoObservable(this)
    }
    addTodo(){
        this.tasks = addTodo(this.tasks, this.newTodo)
    }
    deleteTodo(id: number){
        this.tasks = deleteTodo(this.tasks, id)
    }
   load(url:string){
    fetch(url)
    .then((t)=>t.json())
    .then((t:Task[])=>todosStore.tasks = t)
   }
}
const todosStore = new Todo();
export default todosStore;

