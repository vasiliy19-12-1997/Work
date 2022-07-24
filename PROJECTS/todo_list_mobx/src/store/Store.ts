import { makeAutoObservable } from "mobx";
import { Task } from "../interface/Interaface";

const addTodo=(tasks: Task[], text: string):Task[]=>[
    ...tasks,
    {
        id: Math.max(0, Math.max(...tasks.map(({ id }) => id))) + 1,
        text,
        done: false,
    }
]
const removeTodo=(tasks: Task[], id: number): Task[]=>tasks.filter(t=>t.id !== id)

class Todo {
    tasks:Task[] = [];
    newTodo: string=''
    
    constructor(){
        makeAutoObservable(this)
    }
    addTodo(){
        this.tasks = addTodo(this.tasks, this.newTodo)
        this.newTodo = ''
    }
    removeTodo(id: number){
        this.tasks = removeTodo(this.tasks, id)
    }
    load(url:string){
        fetch(url)
        .then((t)=>t.json())
        .then((t:Task[])=>todosStore.tasks = t)
    }
}
const todosStore = new Todo();
export default todosStore;