import React, { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import s from "./App.module.scss";
import TodoList from "./components/todoList/TodoList";
function App() {
  const [todos, setTodos] = useState([
    { title: "JS", completed: true, id: Math.random() },
    { title: "TS", completed: true, id: Math.random() },
    { title: "Python", completed: true, id: Math.random() },
  ]);
  const [filter, setFilter] = useState({ title: "", completed: true });

  return (
    <div className={s.App}>
      <TodoForm />
      {todos.title}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
