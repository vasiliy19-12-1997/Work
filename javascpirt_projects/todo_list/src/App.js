import React, { useState, useEffect } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import s from "./App.module.scss";
import TodoList from "./components/todoList/TodoList";
import { useTodos } from "./components/hooks/useTodos";
import MySelect from "./components/ui/mySelect/MySelect";
import TodoFilter from "./components/todoFilter/TodoFilter";
import axios from "axios";
import TodoService from "./api/todoService/TodoService";
function App() {
  const [todos, setTodos] = useState([]);
  const fetchTodo = async () => {
    const todos = await TodoService.getAll();
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodo();
  }, []);
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
      {/* <MyButton onClick={fetchTodo} /> */}
      <TodoForm create={createTodo} />
      {todos.title}
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList remove={deleteTodo} todos={sortedAndSearchTodos} />
    </div>
  );
}

export default App;
