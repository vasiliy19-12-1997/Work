import React, {useState} from "react";
import {v1 as uuid} from 'uuid';
import { v3 } from "uuid";
function AddTodo({todo, setTodo}){
const [value, setValue] = useState('');

function saveTodo(id){
    let newTodo = [...todo,{
        id: uuid(v3),
        title:value ,
        status: false, 
    }]
    setTodo(newTodo);
    setValue('');
}

        
        
    

return (
    <div>
        <input value={value} onChange = {(e)=>setValue(e.target.value)}/>
        <button onClick={saveTodo}>Save</button>
    </div>
)
}
export default AddTodo;
