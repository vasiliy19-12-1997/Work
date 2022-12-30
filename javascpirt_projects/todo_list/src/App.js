import React, { useState, useMemo, useEffect } from "react";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import TodoList from "./components/todoList/TodoList";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import MySelect from "./components/ui/mySelect/MySelect";
import axios from "axios";
import { useTodos } from "./components/hooks/useTodos";

import Loader from "./components/ui/loader/Loader";
import { useFetching } from "./components/hooks/usefetching";
import ServiceTodoClass from "./components/service/ServiceTodoClass";
function App() {
  const [todos, setTodos] = useState([
    { title: "Js", id: Math.random(), completed: false, body: "java script" },
    { title: "TS", id: Math.random(), completed: false, body: "type script" },
    { title: "C#", id: Math.random(), completed: false, body: "ci sharp" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);

  const [fetching, isLoading, error] = useFetching(async () => {
    const todos = await ServiceTodoClass.getAll();
    setTodos(todos);
  });
  // const fetchTodos = async () => {};
  useEffect(() => {
    fetching();
    console.log("work");
  }, []);
  const createTodo = (newTask) => {
    setTodos([...todos, newTask]);
  };
  const deleteTodo = (todo) => {
    setTodos([...todos].filter((t) => t.id !== todo.id));
  };

  return (
    <div>
      <MyButton onClick={fetching} />
      <TodoForm create={createTodo} />
      {error && <div>{error}</div>}
      <TodoFilter filter={filter} setFilter={setFilter} />
      {isLoading && <Loader></Loader>}
      <TodoList remove={deleteTodo} todos={sortedAndSearchTodos} />
    </div>
  );
}

export default App;
