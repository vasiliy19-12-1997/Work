import React, {useId} from "react";
import create, {State, StateCreator} from 'zustand';
import {generateId} from './helper';
import { devtools } from 'zustand/middleware'

interface Task  {
    id:string,
    title:string,
}
interface TaskToDo {
    tasks:Task[],
    createTask:(title:string)=>void,
    updateTask:(id:string, title:string)=>void,
    removeTask:(id:string)=>void,
}
function isToDoStore(object:object):object is TaskToDo {
    return 'tasks' in object
}
const localeStorageUpdate = <T extends State>(config:StateCreator<T>):StateCreator<T>=>(set, get, api)=>
config(
    (newState, ...args)=>{
        if(isToDoStore(newState)){
            window.localStorage.setItem('tasks', JSON.stringify(newState.tasks))
            }
            set(newState, ...args)
    },
    get,
    api,
)
const getCurrentState = ()=>{
    try{
        const currentState = (JSON.parse(window.localStorage.getItem('tasks')||'[]')as Task[])
        return currentState
    }
    catch(e){
        window.localStorage.setItem('tasks', '[]')
       
    }
    return []
}

export const UseToDoStore = create<TaskToDo>(localeStorageUpdate(devtools((set, get)=>({
    tasks:getCurrentState(),
    createTask:(title:string)=>{
        const {tasks} = get();
        const newTask = {
            id:generateId(),
            title,
        }
        set({
            tasks:[newTask].concat(tasks)
        })
    },
    updateTask:(title:string, id:string)=>{
        const {tasks} = get();
        if(title){
        set({
            
            tasks:tasks.map(i=>({
                
                ...i,
                title:i.id === id ? title : i.title
            }))
        })}
    },
    removeTask:(id:string)=>{
        const {tasks} = get();
        set({
            tasks:tasks.filter(i=>i.id !== id)
        })
    },
    

}))))

