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
import { ServiceTodo } from "./components/service/ServiceTodo";
function App() {
  const [todos, setTodos] = useState([
    { title: "Js", id: Math.random(), completed: false, body: "java script" },
    { title: "TS", id: Math.random(), completed: false, body: "type script" },
    { title: "C#", id: Math.random(), completed: false, body: "ci sharp" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);
  const fetchTodos = async () => {
    const todos = await ServiceTodo();
    setTodos(todos);
  };
  useEffect(() => {
    fetchTodos();
    console.log("Отработала");
  }, []);
  const createTodo = (newTask) => {
    setTodos([...todos, newTask]);
  };
  const deleteTodo = (todo) => {
    setTodos([...todos].filter((t) => t.id !== todo.id));
  };

  return (
    <div>
      <MyButton onClick={fetchTodos} />
      <TodoForm create={createTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList remove={deleteTodo} todos={sortedAndSearchTodos} />
    </div>
  );
}

export default App;
