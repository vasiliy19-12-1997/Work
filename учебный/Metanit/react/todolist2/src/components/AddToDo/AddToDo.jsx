import React, {useState} from "react";
import {v1 as uuid} from 'uuid';
import {v3} from 'uuid';
function AddToDo({setTodo, todo}){
    const [value, setValue] = useState('');
    console.log(value);
    function saveTodo(){
        setTodo(
            //добавим в todo объект и заменим id поменяем title на значение которое мы ввели и статус будет true
            [...todo, {
                id: uuid(v3),
                title: value,
                status: true,
            }]
        )
           //полсе добавления задачи, обнулим значения value 
           setValue('');
        
    }
    return(
        <div>
            {/* чтобы мы могли вводить значение в поле, оно должно где-то храниться, поэтому добавим value, поэтому воспользуемся хуком useState  и в него уже передадим пустую строку и мы можем вводить значения */}
            <input placeholder="Add task" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={saveTodo}>Save</button>
        </div>
    )
}
export default AddToDo; 