import React, { useMemo, useState, useRef, useEffect } from "react";
import MyButton from "./components/ui/myButton/MyButton";
import s from "./App.module.scss";
import TodoForm from "./components/todoForm/TodoForm";
import ToDoList from "./components/todoList/TodoList";
import MySelect from "./components/ui/mySelect/MySelect";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoItem from "./components/todoItem/TodoItem";
import TodoClassForm from "./components/todoForm/TodoClassForm";
import MyInput from "./components/ui/myInput/MyInput";
import { useTodos } from "./components/hooks/useTodos";
import axios from "axios";
import PostServise from "./components/api/PostServise";
function App() {
  const [todos, setTodos] = useState([]);
  // const [selectedSort, setSelectedSort] = useState("");

  // const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);
  // const [edit, setEdit] = useState(false);
  // const [post, setPosts] = useState([]);
  useEffect =
    (() => {
      fetchTodo();
      console.log("Use EFFECT");
    },
    [filter]);
  const createTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodos = (todo) => {
    setTodos(todos.filter((p) => p.id !== todo.id));
  };
  // console.log(filter.sort);
  // const editTodos = (todo) => {
  //   setTodos(todos.filter((t) => t.id === todo.id));
  // };
  // console.log(title);
  async function fetchTodo() {
    const todos = await PostServise.getAll();
    setTodos(todos.data);
  }
  return (
    <div className={s.App}>
      <TodoForm create={createTodos} />
      <MyButton onClick={fetchTodo} />
      {/* <TodoClassForm create={createTodos} /> */}
      <ToDoList
        remove={deleteTodos}
        todos={sortedAndSearchTodos}
        title="Todo"
      ></ToDoList>
      <TodoFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;
