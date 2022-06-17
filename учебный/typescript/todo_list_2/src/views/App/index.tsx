import React, {useEffect} from 'react';
import s from './index.module.scss';
import {useToDoStore} from '../../data/stores/useToDoStore';
export const App: React.FC=()=>{
   const [
    tasks,
    createTask,
    updateTask,
    removeTask,
   ]  = useToDoStore(state =>[
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
]);
useEffect(()=>{
    createTask('')
},[])
console.log(tasks)

// useEffect(()=>{
//     updateTask('fdf', 'fdf')
// },[])
// console.log(updateTask)
    return (
        <article className={s.article}>
            <h3 className={s.articleTitle}>To do App</h3>
            <section className={s.articleSection}>

            </section>
            <section className={s.articleSection}>
                
                </section>
        </article>
    );
};

export default App;