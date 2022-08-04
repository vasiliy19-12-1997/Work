import React, { useContext, useEffect, useState } from 'react'
import s from './AddTodo.module.scss'
import Store  from './../../store/Store';
import { observer } from 'mobx-react';
import todosStore from './../../store/Store';
import { Task } from './../../interface/Interface';


 function AddTodo(){
  const [value, setValue] = useState('');
  const [task, setTask] = useState<Task[]>([])
  function addTask(task: Task){
    setTask(prev=>[...prev, task])
  }
  useEffect(()=>{
    console.log(addTask)
  },[])
  return (
    <div className={s.AddTodo}>
       <button
        disabled={true}
      />
      <input type="text" 
      className={s.AddTodoInput}
      
      value = {value}
      onChange = {(e)=>setValue(e.target.value)}
      />
      <button
        
        aria-label='Save'
        onClick={()=>addTask}
        className={s.AddTodoSave}
      />
        <div>
          Todo
        </div>
      
    </div>
  )
}
export default AddTodo;