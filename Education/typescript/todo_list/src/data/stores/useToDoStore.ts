import create, {State, StateCreator} from 'zustand';
import { devtools } from 'zustand/middleware';
import {generateId} from './helper'

interface Task {
    id: generateProps;
    title: string;
}
interface ToDoStore {
    tasks: Task[];
    createTask: (title:string) =>void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
}

function isToDoStore(object: object): object is ToDoStore {
    return 'tasks' in object;
}

const localeStorageUpdate = <T extends State>(config: StateCreator<T>):StateCreator<T> => (set, get, api) =>
  config(
    (nextState, ...args) => {
        
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
        const currentState = (JSON.parse(window.localStorage.getItem('tasks')||'[]')) as Task[];
        return currentState;
    }
    catch(e) {
        window.localStorage.setItem('tasks', '[]')
    }
    return [];
}
  

//создаем store zyztand
export const useToDoStore = create<ToDoStore>(localeStorageUpdate(devtools((set, get)=>({
    tasks: getCurrentState(),
    createTask: (title) =>{
        // в классе this также работает как мы ниже написали через метод get достали tasks
        const {tasks} = get();
        const newTask ={
            id:generateId(),
            title,
        }
        set({
            tasks: [newTask].concat(tasks),
        })
    },
    updateTask: (id:string, title:string) =>{
        const {tasks} = get();
        set({
            tasks: tasks.map((task)=>({
                ...task,
                title: task.id === id ? title : task.title

            }))
        });
    },

    removeTask: (id: string) =>{
        const {tasks} = get();
        set({
            tasks: tasks.filter((task)=>task.id !== id)
        });
    },

}))));
