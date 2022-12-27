import React, { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import TodoList from "./components/todoList/TodoList";
import MyButton from "./components/ui/myButton/MyButton";

function App() {
  const [todos, setTodos] = useState([
    { title: "Js", id: Math.random(), completed: false },
    { title: "TS", id: Math.random(), completed: false },
    { title: "C#", id: Math.random(), completed: false },
  ]);
  const createTodo = (newTask) => {
    setTodos([...todos, newTask]);
  };

  return (
    <div>
      <TodoForm create={createTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
