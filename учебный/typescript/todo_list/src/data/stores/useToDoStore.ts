import React from 'react';
import create, {State, StateCreator} from 'zustand';

interface Task {
    id:string,
    title:string,
}
interface ToDoStore {
    tasks:Task[],
    createTask:(title:string)=>void,
    updateTask:(title:string, id:string)=>void,
    removeTask:(id:string)=>void,
}
function isToDoStore(object:object): object is ToDoStore{
    return 'tasks' in object
}
const localeStorageUpdate = <T extends State>(config:StateCreator<T>):StateCreator<T>=>(set, get, api)=>
    config(
        (newState, ...args){
            if(isToDoStore(newState)){
                window.localStorage.setItem('tasks', JSON.stringify(newState.tasks))
                }
                set(newState, ...args)
        },
        get,
        api,
    )

          
    
