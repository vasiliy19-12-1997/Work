import React from "react";
 
function ToDoList({todo, setTodo}){
    // console.log(todo);
   function deleteToDo(){
       
   }
    return(
        <div>{
            todo.map(item =>(
                <div key={item.id} >
                    <div>{item.title}</div>
                    <button onClick={()=>deleteToDo(item.id)}>Delete</button>
                </div>
            ))
        }
        </div>
    )
}
export default ToDoList;