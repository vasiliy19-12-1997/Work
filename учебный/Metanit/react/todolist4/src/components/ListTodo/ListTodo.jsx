import React, {useState} from "react";
function ListTodo({todo, setTodo}){
    const  [value, setValue] = useState('');
    const [edit, setEdit] = useState(null);
    function deleteTodo(id){
        let newTodo = [...todo].filter(item=>item.id!=id);
            setTodo(newTodo);
        }
        function statusTodo(id){
            let newTodo = [...todo].filter(item=>{
                if(item.id==id){
                    item.status=!item.status;
                }
                return item;
            })
            setTodo(newTodo);
        }
   function saveTodo(id, title){
    let newTodo = [...todo].map(item=>{
        if(item.id == id){
            item.title = value
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
   

return (
    <div>
        {
            todo.map(item=>(
                <div key = {item.id}>
                    {
                        edit == item.id ?
                        <div>
                            <input value={value} onChange = {(e)=>setValue(e.target.value)}/>
                        </div>
                        :
                        <div>{item.title}</div>
                    }
                    {
                       edit == item.id ?
                       <div>
                           <button onClick={()=>saveTodo(item.id, item.title)}>Save</button>
                       </div> 
                       :
                       <div>
                           <button onClick={()=>deleteTodo(item.id, item.title)}>Delete</button>
                           <button onClick={()=>editTodo(item.id, item.title)}>Edit</button>
                           <button onClick={()=>statusTodo(item.id, item.title)}>Open/Close</button>
                       </div>
                    }
                </div>
            ))
        }
    </div>
)
    }
export default ListTodo;