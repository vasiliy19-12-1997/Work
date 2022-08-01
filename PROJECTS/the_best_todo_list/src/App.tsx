import React from 'react';

import './App.css';
import AddTodo from './components/addtodo/AddTodo';
import Bar from './components/bar/Bar';

import TodoList from './components/listtodo/ListTodo';
import MyDay from './components/myday/MyDay';

function App() {
  return (
    <div className="App">
      <Bar/>
      <MyDay/>
      <AddTodo/>
      <TodoList/>
      
    </div>
  );
}

export default App;
