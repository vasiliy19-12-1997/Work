import React, { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import s from "./App.module.scss";
import TodoList from "./components/todoList/TodoList";
import MySelect from "./components/ui/mySelect/MySelect";
function App() {
  const [todos, setTodos] = useState([
    { title: "JS", completed: true, id: Math.random() },
    { title: "TS", completed: true, id: Math.random() },
    { title: "Python", completed: true, id: Math.random() },
  ]);
  const [filter, setFilter] = useState();
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  console.log(todos);

  return (
    <div className={s.App}>
      <TodoForm create={createTodo} />
      {todos.title}
      <TodoList remove={deleteTodo} todos={todos} />
      <MySelect deleteTodo="sort by" options={[{ title: "По названию" }]} />
    </div>
  );
}

export default App;
