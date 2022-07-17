import * as React from 'react';
import { UseToDoStore } from '../../data/stores/UseToDoStore';
import InputPlus from '../components/InputPlus/InputPlus';
import InputTask from '../components/InputTask/InputTask';
import s from './index.module.scss'
export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask,
    ]=UseToDoStore (s=>[
        s.tasks,
        s.createTask,
        s.updateTask,
        s.removeTask
    ])
    
  return(
    <article className={s.article}>
        <h2 className={s.articleHeader}>To Do App</h2>
        <section className={s.articleSection}>
        <InputPlus
        useToDo={(title)=>{
            if(title){
                createTask(title)
            }
        }}/>
        </section>
        <section className={s.articleSection}>
        {!tasks.length && (
            <p className={s.articleTitle}>Нету таск</p>
        )}
        <hr />
        {tasks.map(i=>(
            <InputTask
            id={i.id}
            title={i.title}
            onDone={removeTask}
            onEdited={updateTask}
            onRemove={removeTask}
            key = {i.id}
            />
        ))}
        </section>

    </article>
  )
};

export default App;
