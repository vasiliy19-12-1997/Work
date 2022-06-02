import React,{ useState } from "react";
import {v1 as uuid} from 'uuid';
import {v3} from 'uuid';
import s from './AddTodo.module.css';

function AddTodo({setTodo, todo}){
    const [value, setValue] = useState('');
    function saveTodo(){
        setTodo(
            [...todo,{
                id: uuid(v3),
                title: value,
                status: true,
            }]
        );
        setValue('');
    }

    return(
        <div className={s.root}>
            <input placeholder="add task" value={value} onChange = {(e)=>setValue(e.target.value)}/>
            <button className={s.btn} onClick={saveTodo}>Save</button>
        </div>
    )

}
export default AddTodo;