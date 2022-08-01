
import React, { useContext } from 'react'
import { observer } from "mobx-react";
import Store from '../../store/Store';
// import { Task } from '../../interface/Interface';

 
// const StoreContext = createContext<Task>({} as Task);
// export const StoreProvider = StoreContext.Provider;
 function ListTodo() {
  const todoStore = useContext(Store)
  const {tasks} = todoStore;
  console.log(`fdfd`)
  return (
    <>
    <div>
      Todo
    </div>
    {tasks.map((t)=>(
      <div key={t.id}>
        <input 
        type="text" />
      </div>
    ))}
    </>
    
  )
}
const Todos = observer(ListTodo);
 function TodoList(){
  return (
    <>
    <h1>Todo </h1>
    <Todos/>
    </>
  )
}
export default TodoList;

