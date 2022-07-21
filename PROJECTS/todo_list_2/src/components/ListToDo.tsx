import React, { useCallback, useEffect, useState } from 'react'
import todosStore from '../store/Store'
import { Task } from '../interface/Interface'

import { observer } from 'mobx-react-lite'



function ListToDo() {
 
  return (
    <div>
        <h3>Todo</h3>
       
        {todosStore.tasks.map((t)=>(
        <label key={t.id}>
         
                <input type="text"
                value={t.title}
                onChange={e=>t.title = e.target.value}
                 />
                <button
                onClick={()=>todosStore.deleteTodo(t.id)}
                >Save</button>
          
         
        </label>
    ))}
      
    </div>
  )
}
export default (ListToDo)