import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
function App() {
  const [todo, setTodo] = useState([]);
  console.log(todo);
  return (
    <Container>
     <Header/>
     <AddToDo todo={todo} setTodo={setTodo}></AddToDo>
     <ToDoList todo = {todo} setTodo = {setTodo}></ToDoList>
     </Container>
  );
}

export default App;
