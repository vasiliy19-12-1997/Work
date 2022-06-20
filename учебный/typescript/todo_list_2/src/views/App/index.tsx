import React, {useEffect} from 'react';
import s from './index.module.scss';
import {InputPlus} from '../components/InputPlus/InputPlus';
import {useToDoStore} from '../../data/stores/useToDoStore';
import InputTask from '../components/InputTask/InputTask';
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


// useEffect(()=>{
//     updateTask('fdf', 'fdf')
// },[])
// console.log(updateTask)
    return (
        <article className={s.article}>
          <h3 className={s.articleTitle}>To Do App</h3>
            <section>
                <InputPlus
                onAdd={title=>{
                    if(title){
                        createTask(title)
                    }
                }}
                />
            </section>
            
            <section>
                {tasks.map(task=>(
                     <InputTask 
                        id={task.id}
                        title={task.title}
                        onDone={removeTask}
                        onEdited={updateTask}
                        onRemove={removeTask}
                        key={task.id}
                />
                ))}
               
            </section>

                
            
        </article>
    );
};

export default App;