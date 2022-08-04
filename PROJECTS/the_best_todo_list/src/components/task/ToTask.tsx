import React, { useState } from "react";
import { ITask } from "../../Models";
import s from './ToTask.module.scss'
interface TaskProps{
  task: ITask
}
export function ToTask({task}: TaskProps){
  const [value, setValue] = useState(false)
  

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

  {value && <div>
    <p>
      {task.description}
    </p>
  </div>}
  </div>
  )
}



