import axios from 'axios'
import { configure, makeAutoObservable} from "mobx";
import { Task } from './../interface/Interface';

// этот конфиг для того чтобы я не забыл action


  const deleteTodo=(tasks: Task[], id:number):Task[]=>
  tasks.filter((t)=>t.id !== id)
const addTodo =(tasks:Task[], title:string):Task[]=>[
    ...tasks,
{
    id: Math.max(0, Math.max(...tasks.map(({id})=>id)))+1,
    title,
    done: false,
    description:'',
}
]

class Store {
    tasks: Task[] = [] ;
    newTodo:string = ''
    
    constructor(){
        makeAutoObservable(this)
    }


    addTodo(){
        console.log(`My tasks ${this.newTodo}`)
      this.tasks = addTodo(this.tasks, this.newTodo)
      this.newTodo = ''

      
    }
    deleteTodo(id: number){
        console.log(`Delete my tasks ${this.tasks}`)
        this.tasks=deleteTodo(this.tasks, id)
    }

}
const todosStore = new Store();
export default todosStore;
