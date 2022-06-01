import React, {useState} from "react";
function ListTodo({todo, setTodo}){
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
    function editTodo(id){
        setEdit(id);
    }
    return (
       
        <div>
            {   //выведем с помощью map на страницу наш титл потом добавим ключ id
                todo.map(item=>(
                    <div key = {item.id}>
                        {
                            edit == item.id ? <div>
                                <input/>
                                <button>save</button>
                            </div>
                            :
                            <div>{item.title}</div>

                        }
                    
                    <button onClick={()=>deleteTodo(item.id)}>Delete</button>
                    <button onClick={()=>editTodo(item.id)}>Edit</button>
                    <button onClick={()=>statusTodo(item.id)}>Close/Open</button>
                    </div>
                ))
            }
        </div>
    )
}
export default ListTodo;