import React, { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import s from "./App.module.scss";
import TodoList from "./components/todoList/TodoList";
function App() {
  const [todos, setTodos] = useState([
    { title: "JS", completed: false, id: Math.random() },
    { title: "TS", completed: false, id: Math.random() },
    { title: "Python", completed: false, id: Math.random() },
  ]);
  return (
    <div className={s.App}>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
