import React, { useCallback, useState } from 'react'
import todosStore from '../store/Store'
import { Task } from '../interface/Interface'
import { observer } from 'mobx-react-lite'



function AddTodo() {
    
  return (
    <div>
        <label>
            <h3>{}</h3>
            <input
            placeholder='Add todo' 
            type="text"
            value={todosStore.newTodo}
            onChange={(e)=>todosStore.newTodo=e.target.value}
            />
            <button
                onClick={()=>todosStore.addTodo()}
            >
                Todo
            </button>

          
        </label>
      
    </div>
  )
}
export default observer(AddTodo)