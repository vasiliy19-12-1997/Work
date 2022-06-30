import React, { useEffect } from "react";
import  create  from 'zustand';
import {UseToDoStore} from "../../data/stores/UseToDoStore";

import s from './index.module.scss';
import { InputPlus } from "../components/InputPlus/InputPlus";
import { InputTask } from "../components/InputTask/InputTask";

export const App: React.FC =()=>{
    const [
        tasks,
        createTask,
        updateTask,
        removeTask,
    ] = UseToDoStore(state=>[
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
    ])

    return (
        <article className={s.article}>
            <h3 className={s.articleTitle}>To Do App</h3>
            <section>
                <InputPlus
                onAdd={(title)=>{
                    if(title)
                    createTask(title)
                }}
                />
            </section>
            <section>
                {!tasks.length && (
                    <p className={s.articleText}>Нету таск</p>
                )}
            {tasks.map(item=>(
                <InputTask
                id={item.id}
                title={item.title}
                key={item.id}
                onDone={removeTask}
                onUpdate={updateTask}
                onRemove={removeTask}
            />
            ))}

            </section>
        </article>
    )
}