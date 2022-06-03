import React, {useState} from "react";
import s from './ListTodo.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function ListTodo({todo, setTodo}){
  const [value, setValue] = useState('');
  const [edit, setEdit] = useState(null);
  function deleteTodo(id){
    let newTodo = [...todo].filter(item=>item.id!=id);
    setTodo(newTodo);
  }
  function statusTodo(id){
    let newTodo = [...todo].filter(item=>{
        if(item.id == id){
            item.status = !item.status;
        }
        return item;
    });
    setTodo(newTodo);
  }
  function saveTodo(id){
    let newTodo = [...todo].map(item=>{
        if(item.id == id){
            item.title = value;
        }
        return item;
    })
    setTodo(newTodo);
    setEdit(null);
  }
  function editTodo(id, title){
    setEdit(id);
    setValue(title);
  }
    
    // console.log(value);
    return (
       <div>
           {
               todo.map(item=>(
                   <div className={s.listItems}  key = {item.id}>
                       {
                           edit == item.id ?
                           <div  >
                               <input value={value} onChange={(e)=>setValue(e.target.value)}/>
                           </div>
                           :
                           <div>{item.title}</div>
                       }
                       {
                           edit == item.id ?
                            <div>
                                <Button className={s.btn} onClick = {()=>saveTodo(item.id, item.title)}>Save</Button>
                            </div>
                            :
                            <div>
                                <Button className={s.btn}  onClick = {()=>deleteTodo(item.id, item.title)}>Delete</Button>
                                <Button className={s.btn} onClick = {()=>editTodo(item.id, item.title)}>Edit</Button>
                                <Button className={s.btn} onClick = {()=>statusTodo(item.id, item.title)}>Close/Open</Button>
                            </div>
                       }
                   </div>
               ))
           }
       </div>
    )
}
export default ListTodo;