import React from 'react';
import { generateId } from './helper';
import create, {State, StateCreator} from 'zustand';

interface Task {
    id: string,
    title:string,
    createAt:number 
}
interface TaskToDo {
    tasks:Task[],
    createTask:(title:string)=>void,
    updateTask:(title:string, id:string)=>void,
    removeTask:(id:string)=>void,
}
export const useToDoStore =create <TaskToDo>((set, get)=>({
    tasks:[],
    createTask:(title:string)=>{
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
    updateTask:(title:string, id:string)=>{
        const {tasks}= get();
        set({
            tasks:tasks.map(task=>({
                ...task,
                title:task.id === id ? title : task.title
            })
            )})
    },
    removeTask:(id:string)=>{
        const {tasks} = get();
        set({
            tasks:tasks.filter(task=>task.id !== id)
        })
    },

}))