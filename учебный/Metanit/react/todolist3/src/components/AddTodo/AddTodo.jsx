import React,{ useState } from "react";
import {v1 as uuid} from 'uuid';
import {v3} from 'uuid';
import s from './AddTodo.module.css';

function AddTodo({todo, setTodo, title}){
    const [value, setValue] = useState('');
    function saveTodo(id, title){
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
        
        <div className={s.root}>
            <input value={value} onChange ={(e)=>setValue(e.target.value)}/>
            <button className={s.btn} onClick={()=>saveTodo(title)}>Save</button>
        </div>
    )
}


export default AddTodo;