import React, { useState } from 'react'
import { Task } from '../interface/Interface'


export default function Increment({id}: Task) {
    const [value, setValue] = useState(0)
    const addTask =()=>{
        setValue(value + 1)
    }
    const removeTask =()=>{
        setValue(value - 1)
    }
    console.log(value)
  return (
    <div>
        <label>
            <h3>{value}</h3>
            <button
                onClick={addTask}
            />
            <button
            
                onClick={removeTask}
            />
            <input 
            type="text"
            
           
            />
        </label>
      
    </div>
  )
}


