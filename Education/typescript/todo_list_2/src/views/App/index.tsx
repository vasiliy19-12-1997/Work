import React from "react";
import s from './index.module.scss';
import InputPlus from "../components/InputPlus/InputPlus";
import { useToDoStore } from "../../data/stores/useToDoStore3";
import {InputTask} from "../components/InputTask/InputTask";
export const App:React.FC=()=>{
    const [
        tasks,
        createTask,
        updateTask,
        removeTask,
    ]=useToDoStore(s=>[
        s.tasks,
        s.createTask,
        s.updateTask,
        s.removeTask,
    ])
    
    return (
        <article className={s.article}>
            <h1 className={s.articleTitle}>To do App</h1>
            <section>
            <InputPlus
            onAdd={(title)=>{
                if(title){
                    createTask(title)
                }
            }}
            />
            
            </section>
            
            <section>
                {tasks.map(i=>(
                    <InputTask
                    id={i.id}
                    title={i.title}
                    onDone={removeTask}
                    onEdited={updateTask}
                    onRemoved={removeTask}
                    key= {i.id}
                    />
                ))}

            </section>
        </article>
    )
}

export default App;
