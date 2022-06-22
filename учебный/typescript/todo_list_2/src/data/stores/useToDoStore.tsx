import React from "react";
import s from './index.module.scss';
import { generateId } from "./helper";
import create from "zustand/react";
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


export const useToDoStore = create<ToDoStore> ((set, get)=>({
    tasks:[],
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
}))


   

