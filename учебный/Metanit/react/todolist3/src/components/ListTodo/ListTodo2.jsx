import React, {useState} from "react";
import s from './ListTodo.module.css';
function ListTodo({todo, setTodo}){
    const [value, setValue] = useState('');
    const [edit, setEdit] = useState(null);
    // console.log(todo);
    function deleteTodo(id){
        let newTodo = [...todo].filter(item=>item.id!=id);
        setTodo(newTodo);
    }
   function statusTodo(id){
       const newTodo = [...todo].filter(item=>{
           if(item.id==id){
               item.status = !item.status;
           }
           return item;
        });
        setTodo(newTodo);
    }
    function editTodo(id, title){
        setEdit(id);
        setValue(title);
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
    return (
       
        <div>
            {   //выведем с помощью map на страницу наш титл потом добавим ключ id
                todo.map(item=>(
                    <div key = {item.id} className={s.listItems}>
                        {
                            edit == item.id ? 
                            <div>
                                <input value={value} onChange = {(e)=>setValue(e.target.value)}/>
                                {/* <button>save</button> */}
                            </div>
                            :
                            <div>{item.title}</div>

                        }

                        {
                          edit == item.id ? 
                          <div>
                              <button className={s.btn} onClick={()=>saveTodo(item.id)}>Save</button>
                          </div>
                          :
                          <div>
                                <button className={s.btn} onClick={()=>deleteTodo(item.id)}>Delete</button>
                                <button className={s.btn} onClick={()=>editTodo(item.id, item.title)}>Edit</button>
                                <button className={s.btn} onClick={()=> statusTodo(item.id)}>Open</button>
                          </div>  
                        }
                    
                    
                    </div>
                ))
            }
        </div>
    )
}
export default ListTodo;