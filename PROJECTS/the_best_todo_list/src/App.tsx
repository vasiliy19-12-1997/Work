import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import './App.css';
import AddTodo from './components/addtodo/AddTodo';
import TodoList from './components/listtodo/ListTodo';
import { ToTask } from './components/task/ToTask';
import { tasks } from './data/Tasks';
import { ITask } from './Models';
import { UseTasks } from './customHooks/UseTasks';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/error/ErrorMessage';

function App() {
const {tasks, loading, error} = UseTasks()
  return (
    <div className="App">
      
     <AddTodo/>
      <TodoList/>
      {loading &&<Loader/>}
      {tasks.map(p=><ToTask task={p} key={p.id} />)}
      {error && <ErrorMessage error={error}/>}
      
      
    </div>
  );
}


export default App;
