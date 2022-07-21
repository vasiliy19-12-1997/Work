import React from 'react';
import { ListFormat } from 'typescript';
import './App.css';
import AddTodo from './components/AddTodo';
import Increment from './components/Increment';
import ListToDo from './components/ListToDo';
import todosStore from './store/Store';


function App() {
  return (
    <div className="App">
     
        {/* <Increment 
          title={''} 
          id={0} 
          done={false} 
          description={''}        
        /> */}
        <ListToDo/>
      
        <AddTodo/>
          
    </div>
  );
}

export default App;
