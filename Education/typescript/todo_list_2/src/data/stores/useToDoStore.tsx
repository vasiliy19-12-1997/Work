import React from "react";
import s from './index.module.scss';
import { devtools } from 'zustand/middleware';
import create, {State, StateCreator} from 'zustand';
import { generateId } from "./helper";

interface Task {
    id:string,
    title:string,
    createAt:number,
}
interface ToDoStore {
    tasks:Task[],
    createTask:(title:string)=>void,
    updateTask:(id:string, title:string)=>void,
    removeTask:(id:string)=>void,
    removeAll:(id:string)=>void,
}
function isToDoStore(object: any ): object is ToDoStore {
    return 'tasks' in object;
}
const localeStorageUpdate = <T extends State>(config: StateCreator<T>):StateCreator<T> => (set, get, api) =>
  config(
    (nextState, ...args) => {
        console.log(nextState)
        if (isToDoStore(nextState)){
            
      window.localStorage.setItem('tasks', JSON.stringify(
        nextState.tasks
      ))
    }
    set(nextState, ...args);
    },
    get,
    api
  );
  const getCurrentState =()=>{
    try{
        const currentState = (JSON.parse(window.localStorage.getItem('tasks') ||
  '[]')) as Task[];
  return currentState;
    }catch(e){
        window.localStorage.setItem('tasks', '[]');
        }
    return [];
  }
  

export const useToDoStore = create<ToDoStore>(localeStorageUpdate(devtools ((set, get)=>({
    tasks:getCurrentState(),
    createTask:(title)=>{
        const {tasks} = get();
        const newTask = {
            id:generateId(),
            title,
            createAt:Date.now(),
        }
        set({
            tasks:[newTask].concat(tasks)
        });
    },
    updateTask:(id:string, title:string)=>{
        const {tasks} = get();
        set({
            tasks:tasks.map(a=>({
                ...a,
                title: a.id === id ? title : a.title
            }))
        });
    },
    removeTask:(id)=>{
        const {tasks} = get();
        set({
            tasks:tasks.filter(b=>b.id !== id)
        })
    },
    removeAll:(id)=> {
        const {tasks}=get();
        set({
            tasks:tasks
        })
    },
}))));


   

