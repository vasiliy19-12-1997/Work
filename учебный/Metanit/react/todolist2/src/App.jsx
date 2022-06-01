// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';



function App() {
//todo - это state который мы будем менять с помощью setTodo
  const [todo, setTodo] = useState([
    {
      id:1,
      title: 'first todo',
      status: true,
    },
    {
      id:2,
      title: 'second todo',
      status: true,
    },
    {
      id:3,
      title: 'third todo',
      status: false,
    },
  ]);
  // console.log(todo);
  return (
    <div className="App">
    <Header></Header>
    <AddToDo todo={todo} setTodo = {setTodo}></AddToDo>
    <ToDoList todo={todo} setTodo = {setTodo}></ToDoList>
    </div>
  );
}

export default App;
