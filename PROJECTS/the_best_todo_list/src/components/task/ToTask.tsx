import React, { useId, useState } from "react";
import { UseTasks } from "../../customHooks/UseTasks";
import { ITask } from "../../Models";
import s from './ToTask.module.scss'
interface TaskProps{
  task: ITask,
  id?:ITask,
}
export function ToTask({task}:TaskProps){
  const [value, setValue] = useState(false)
  const {deleteTask} = UseTasks();
  const ids = useId();
  function RemoveTask(id:number|string){
    deleteTask(id)
  }
  console.log(RemoveTask(ids))
 

  return( 
  <div className={s.ToTask}>Just do TASK!!!
  <img src={task.image} alt={task.title} className={s.ToTaskImg}/>
  <p>{task.title}</p>
  <span>{task.price}</span>
  {task.title}
  <button
  className={s.ToTaskShow}
  onClick={()=>setValue(prev=>!prev)}
  >{value ? 'Hide Details': 'Show Details'}</button>
  <button
  onClick={()=>RemoveTask(ids)}
  >delete</button>
  {value && <div>
    <p>
      {task.description}
    </p>
  </div>}
  </div>
  )
}



