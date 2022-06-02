import React,{ useState } from "react";
import {v1 as uuid} from 'uuid';
import {v3} from 'uuid';
import s from './AddTodo.module.css';

function AddTodo({todo, setTodo}){
    const [value, setValue] = useState('');
    function saveTodo(id){
        setTodo(
            [...todo, {
                id: uuid(v3),
                status: true, 
                title: value,
            }]
        );
        setValue('');
    }
    return(
        <div>
            <input value={value} onChange ={(e)=>setValue(e.target.value)}/>
            <button onClick={saveTodo}>Save</button>
        </div>
    )
}


export default AddTodo;