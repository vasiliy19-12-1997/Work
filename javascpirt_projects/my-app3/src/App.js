import React, { useMemo, useState } from "react";
import MyButton from "./components/ui/myButton/MyButton";
import s from "./App.module.scss";
import TodoForm from "./components/todoForm/TodoForm";
import ToDoList from "./components/todoList/TodoList";
import MySelect from "./components/ui/mySelect/MySelect";
import TodoFilter from "./components/todoFilter/TodoFilter";
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const createTodos = (newTodos) => {
    setTodos([...todos, newTodos]);
  };
  const deleteTodos = (todo) => {
    setTodos(todos.filter((p) => p.id !== todo.id));
  };
  const sortedTodos = useMemo(
    (sort) => {
      if (sort) {
        setTodos([...todos].sort((a, b) => a[sort].localeCompare(b[sort])));
      }
    },
    [filter, todos]
  );

  return (
    <div className={s.App}>
      <TodoForm create={createTodos} />
      <ToDoList remove={deleteTodos} todos={todos}></ToDoList>
      <TodoFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;
