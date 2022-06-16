import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import ListTodo from './components/ListTodo/ListTodo';
import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';

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
  //  const [clicks, setClicks] = useState(
  //   JSON.parse(localStorage.getItem('clicks')) || []
  //  )

  //  useEffect(() => {
  //   localStorage.setItem('clicks', JSON.stringify(clicks))
  //  }, [clicks])
   
   
  return (
    <Container className={App}>
     <Header todo={todo} setTodo={setTodo}></Header>
     <AddTodo todo={todo} setTodo={setTodo}></AddTodo>
     <ListTodo  todo={todo} setTodo={setTodo}></ListTodo>
    </Container>
  );
}

export default App;
