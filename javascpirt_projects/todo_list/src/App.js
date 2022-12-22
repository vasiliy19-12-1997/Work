import React, { useState, useMemo } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import s from "./App.module.scss";
import TodoList from "./components/todoList/TodoList";
import { useTodos } from "./components/hooks/useTodos";
import MySelect from "./components/ui/mySelect/MySelect";
import TodoFilter from "./components/todoFilter/TodoFilter";
function App() {
  const [todos, setTodos] = useState([
    {
      title: "JS",
      completed: true,
      id: Math.random(),
      body: "Javascript is the best",
    },
    {
      title: "TS",
      completed: true,
      id: Math.random(),
      body: "TypeScript is better",
    },
    {
      title: "Python",
      completed: true,
      id: Math.random(),
      body: "Python i dont know",
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  return (
    <div className={s.App}>
      <TodoForm create={createTodo} />
      {todos.title}
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList remove={deleteTodo} todos={sortedAndSearchTodos} />
    </div>
  );
}

export default App;
