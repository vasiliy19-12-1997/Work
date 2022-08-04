
import React, { useContext, useId } from 'react'
import { Task } from '../../interface/Interface';
import Store from '../../store/Store';
// import { Task } from '../../interface/Interface';

 
// const StoreContext = createContext<Task>({} as Task);
// export const StoreProvider = StoreContext.Provider;
  
 function ListTodo() {


  const ids = useId();
  console.log(ids)

  return (
    <>
    <div>
      Todo
    </div>


    
    </>
    
  )
}

export default ListTodo;

