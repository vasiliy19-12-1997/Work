// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
//todo - это state который мы будем менять с помощью setTodo
  const [todo, setTodo] = useState([]);
  // console.log(todo);
  return (
    <Container>
    <Header></Header>
    <AddToDo todo={todo} setTodo = {setTodo}></AddToDo>
    <ToDoList todo={todo} setTodo = {setTodo}></ToDoList>
    </Container>
  );
}

export default App;
