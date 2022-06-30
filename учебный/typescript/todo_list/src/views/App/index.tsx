import React, {useEffect} from "react";
import s from './index.module.scss';
import { useToDoStore } from "../../data/stores/useToDoStore";
import create from "zustand/react";
import { InputPlus } from "../components/InputPlus";
import { InputTask } from './../components/InputTask/index';
export const App: React.FC =()=>{
   const  [
    tasks,
    createTask,
    updateTask,
    removeTask,
   ] = useToDoStore(state=> [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
   ]);


//    useEffect(()=>{
   
//     createTask('')
//     }, []);
//     useEffect(()=>{
//         console.log(tasks)
//         updateTask('fdfd', 'fdf')
//         }, []);


    return (
        <article className={s.article}>
            <h1 className={s.articleTitle}>To Do App</h1>
            <section className={s.articleSection}>
                <InputPlus 
              onAdd={(title)=>{
                if(title){
                    createTask(title)
                }
              }}/>
            </section>
            <section className={s.articleSection}>
                {!tasks.length && (
                    <p className={s.articleText}>Нету task</p>
                )}
                {tasks.map((task)=>(
                    <InputTask
                    id = {task.id}
                    title = {task.title}
                    onDone={removeTask}
                    onEdited={(id, title)=>{
                        if(title){
                            updateTask(id, title)
                        }
                    }
                    }
                        
                    onRemoved={removeTask}
                    key = {task.id}
                    />
                ))}
            </section>
          
        </article>
    );
}
