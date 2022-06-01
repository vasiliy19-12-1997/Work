import React, {useState} from "react";
import { Row, Col, Button, FormControl} from "react-bootstrap";
import s from './TodoList.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faLock, faLockOpen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
function ToDoList({todo, setTodo}){
    // console.log(todo);
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');

   function deleteToDo(id){
       let newToDo = [...todo].filter(item=>item.id!=id);
       setTodo(newToDo);
   }
   function statusToDo(id){
    let newToDo = [...todo].filter(item=>{
        if(item.id==id){
            item.status = !item.status;
        }
        return item;
    });
    setTodo(newToDo);
   }
   function editToDo(id, title){
    setEdit(id);
    setValue(title);
   }
   function saveTodo(id){
    let newToDo = [...todo].map(item =>{
        if(item.id == id) {
            item.title = value;
        }
        return item;
    });
    setTodo(newToDo);
    setEdit(null);
}

    return(
        <div>{
            todo.map(item =>(
                <div key={item.id}  className={s.listItems}>
                    {
                        edit == item.id ?  <div> 
                                    <input value={value}
                                    onChange={(e)=>setValue(e.target.value)}/>
                                    
                                </div> :
                                <div className={item.status? s.close: ''}> {item.title}</div>
                    }
                    {
                        edit == item.id ?
                        <div>
                            <Button onClick={()=>saveTodo(item.id)} size='sm'><FontAwesomeIcon icon={faSave}/> </Button>
                        </div> :
                        <div>
                            <Button onClick={()=>deleteToDo(item.id)}size='sm'  ><FontAwesomeIcon  icon = {faTrash}/></Button>
                            <Button onClick={()=>editToDo(item.id, item.title)}size='sm' className={s.btn}><FontAwesomeIcon icon={faEdit}/></Button>
                            <Button onClick={()=>statusToDo(item.id)}size='sm' className={s.btn}>
                                {
                                    !item.status ? <FontAwesomeIcon icon={faLockOpen} />:<FontAwesomeIcon icon={faLock} />
                                }
                                </Button>
                        </div>
                    }
                    <div>{item.title}</div>
                    
                </div>
            ))
        }
        </div>
    )
}
export default ToDoList;