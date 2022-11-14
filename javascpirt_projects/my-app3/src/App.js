import React, { useState } from "react";
import MyButton from "./components/ui/myButton/MyButton";
import s from "./App.module.scss";
import TodoForm from "./components/todoForm/TodoForm";
import ToDoList from "./components/todoList/TodoList";
function App() {
  const [todos, setTodos] = useState([
    { id: Math.random(), title: "Js", body: "language of programming1" },
    { id: Math.random(), title: "Java", body: "language of programming2" },
    { id: Math.random(), title: "Python", body: "language of programming3" },
  ]);
  const createTodos = (newTodos) => {};
  console.log(todos);
  return (
    <div className={s.App}>
      <ToDoList todos={todos}></ToDoList>
      <MyButton>Удалить</MyButton>
    </div>
  );
}

export default App;
