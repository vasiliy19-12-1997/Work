import React, {useState} from "react";
function ToDoList({todo, setTodo}){

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');
    // console.log(todo);
    function deleteTodo(id){
        /* console.log('delete');
        запишем новую переменную в которую передаем копию todo и применяем метод filter с условием для item что если item id не равно id то мы записываем в новый массив newTodo*/
        let newTodo = [...todo].filter(item=>item.id!=id);
        //вызовим функцию set todo и доьавим новый массив newTodo и в appjsx вместо todo newTodo
        setTodo(newTodo);
    }
    function statusTodo(id){
        let newTodo = [...todo].filter(item=>{
            if(item.id == id){
                item.status = !item.status;
            }
            //в случае если элемент нашелся то надо выйти из условия
            return item;
        });
        setTodo(newTodo);   
    }
    function editTodo(id, title){
        setEdit(id);
        setValue(title);
    }
    // console.log(todo);
    function saveTodo(id){
        let newTodo = [...todo].map(item=>{
                if(item.id == id){
                   item.title = value; 
                }
                return item;
            })
            setTodo(newTodo);
            // мы находились в режиме просмотра поэтмоу надо от туда выйти присвоив функции null
            setEdit(null);
    
    }

    return(
        <div>
            {
                //выводим todo item title на лист с помощью метода map для массива
                todo.map(item=>(
                <div key={item.id}>
                    {
                        edit == item.id ? 
                        <div>
                            <input value={value} onChange={(e)=>setValue(e.target.value)}/>
                            
                        </div>
                        :
                        <div>item.title</div>

                    }
                    {
                        edit == item.id ? 
                        <div>
                            <button onClick= {()=>saveTodo(item.id)}>Save</button>
                        </div>
                        :
                        <div>
                            <button onClick={()=>deleteTodo(item.id)}>Delete</button>
                            <button onClick={()=>editTodo(item.id, item.title)}>Edit</button>
                            <button onClick={()=>statusTodo(item.id)}>Close/Open</button>
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