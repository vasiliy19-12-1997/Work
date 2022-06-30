import React, {useId} from 'react';
import create, {State, StateCreator} from 'zustand';
import { devtools } from 'zustand/middleware'
import { InputPlus } from '../../views/components/InputPlus/InputPlus';
import { generateId } from './Helper2';
interface Task {
    id:string,
    title:string,
}
interface TodoStore {
    tasks: Task[],
    createTask:(title:string)=>void,
    updateTask:(title:string, id:string)=>void,
    removeTask:(id:string)=>void,
}
function isToDoStore(object:object):object is TodoStore {
    return 'tasks' in object
}
const LocaleStorageUpdate = <T extends State>(config:StateCreator<T>):StateCreator<T>=>(set, get, api)=>
config(
    (vasyaState, ...args)=>{
        if(isToDoStore(vasyaState)){
            window.localStorage.setItem('tasks', JSON.stringify(vasyaState.tasks));
        }
        set(vasyaState, ...args)
        
    },
    get,
    api
)
const getCurrentCurrentState=()=>{
    try{
        const currentState = JSON.parse((window.localStorage.getItem('tasks')||'[]')) as Task [];
        return currentState;
    }catch(e){
        window.localStorage.setItem('tasks', '[]')
    }
    return [];
}
export const UseToDoStore = create<TodoStore>(LocaleStorageUpdate(devtools((set, get)=>({
    tasks: getCurrentCurrentState(),
createTask:(title)=>{
    const {tasks} = get();
    const newTask = {
        id:generateId(),
        title,
    }
    set({
        tasks:[newTask].concat(tasks)
    })
},
updateTask:(title, id)=>{
    const {tasks} = get();
    set({
        tasks:tasks.map(i=>({
            ...i,
            title:i.id === id ? title : i.title 
        }))
    })
},
removeTask:(id)=>{
    const {tasks} = get();
    set({
        tasks:tasks.filter(r=> r.id !== id)
    })
},

}))))
