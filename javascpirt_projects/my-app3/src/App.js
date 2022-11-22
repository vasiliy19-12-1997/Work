import React, { useMemo, useState, useRef } from "react";
import MyButton from "./components/ui/myButton/MyButton";
import s from "./App.module.scss";
import TodoForm from "./components/todoForm/TodoForm";
import ToDoList from "./components/todoList/TodoList";
import MySelect from "./components/ui/mySelect/MySelect";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoItem from "./components/todoItem/TodoItem";
import TodoClassForm from "./components/todoForm/TodoClassForm";
import MyInput from "./components/ui/myInput/MyInput";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, body: "Description", title: "Javascript" },
    { id: 2, body: "Description", title: "Typescript" },
    { id: 3, body: "Description", title: "Python" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  // const [filter, setFilter] = useState({ sort: "", query: "" });

  // const [edit, setEdit] = useState(false);
  // const [post, setPosts] = useState([]);
  const createTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodos = (todo) => {
    setTodos(todos.filter((p) => p.id !== todo.id));
  };
  const sortedTodos = (sort) => {
    setSelectedSort(sort);
    setTodos([...todos].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  // const editTodos = (todo) => {
  //   setTodos(todos.filter((t) => t.id === todo.id));
  // };
  // console.log(title);

  return (
    <div className={s.App}>
      <TodoForm create={createTodos} />
      <MySelect
        value={selectedSort}
        onChange={sortedTodos}
        defaultValue={"Sort by"}
        options={[
          { value: "title", name: "On title" },
          { value: "body", name: "On body" },
        ]}
      />
      {/* <TodoClassForm create={createTodos} /> */}
      <ToDoList remove={deleteTodos} todos={todos} title="Todo"></ToDoList>
      {/* <TodoFilter filter={filter} setFilter={setFilter} /> */}
    </div>
  );
}

export default App;
