import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import ListTodo from './components/ListTodo/ListTodo';
import React, {useState} from 'react';

function App() {
   const[todo, setTodo] = useState([
     {
       id:1,
       title: 'firsttodo',
       status: true,  
     },
     {
      id:2,
      title: 'secondtodo',
      status: true,  
    },
    {
      id:3,
      title: 'thirdtodo',
      status: false,  
    },
   ]);
   console.log(todo);
  return (
    <div className="App">
     <Header todo={todo} setTodo={setTodo}></Header>
     <AddTodo todo={todo} setTodo={setTodo}></AddTodo>
     <ListTodo todo={todo} setTodo={setTodo}></ListTodo>
    </div>
  );
}

export default App;
