import React, { useContext, useState } from 'react'
import s from './AddTodo.module.scss'
import Store  from './../../store/Store';
import { observer } from 'mobx-react-lite';


 function AddTodo() {
  const [value, setValue] = useState('');
  const todoStore = useContext(Store)
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
        onClick={()=>todoStore.addTodo()}
        className={s.AddTodoSave}
      />
        
      
    </div>
  )
}
export default observer(AddTodo);