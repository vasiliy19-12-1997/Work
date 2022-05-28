import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';


function App() {
//set to do функция которая будет менять to do
  const [todo, setToDo] = useState([
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
      id: 3,
      title: 'third todo',
      status: false,
    },
  ]);

  console.log(todo);
  return (
    <div className="App">
     <Header />
     <AddToDo />
     <ToDoList todo={todo} setToDo ={setToDo}/>
    </div>
  );
}

export default App;
