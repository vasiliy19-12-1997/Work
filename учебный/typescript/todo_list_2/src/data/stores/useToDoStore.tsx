import React from 'react';
import { generateId } from './helper';
import create, {State, StateCreator} from 'zustand';
interface Task {
    title: string;
    id: string;
    createAt: number;
}
interface TaskToDo {
    tasks: Task[],
    createTask:(title: string) => void,
    updateTask:(title: string, id: string, ) => void,
    removeTask:( id: string) => void,
    
}

export const useToDoStore = create<TaskToDo> ((set, get) => ({
    tasks: [
        {
            id: generateId(),
            title: 'моя дефолтная таска',
            createAt: 2121,
        }
    ],
    createTask: (title)=>{
        const {tasks} = get();
        const newTask = {
            id: generateId(),
            title,
            createAt: Date.now(),
            
        }
        set({
            tasks: [newTask].concat(tasks),
            
        });
    },
    removeTask: (id)=>{
        const {tasks} = get();
        set({
            tasks: tasks.filter(task=>task.id!==id)
        })


    },
    updateTask: (title, id)=>{
        const {tasks} = get();
        set({
            tasks: tasks.map(task=>({
                ...task,
                title: task.id === id ? title : task.title
            }))
        })
    }
}))
    

