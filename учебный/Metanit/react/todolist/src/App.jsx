import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';
import { useState } from 'react';
function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true,
    },
    {
      id: 2,
      title: 'second todo',
      status: true,
    },
    {
      id: 1,
      title: 'third todo',
      status: false,
    },
  ]);
  console.log(todo);
  return (
    <div className="App">
     <Header/>
     <AddToDo></AddToDo>
     <ToDoList todo = {todo} setTodo = {setTodo}></ToDoList>
    </div>
  );
}

export default App;
