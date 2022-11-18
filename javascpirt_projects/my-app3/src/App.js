import React, { useMemo, useState } from "react";
import MyButton from "./components/ui/myButton/MyButton";
import s from "./App.module.scss";
import TodoForm from "./components/todoForm/TodoForm";
import ToDoList from "./components/todoList/TodoList";
import MySelect from "./components/ui/mySelect/MySelect";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoItem from "./components/todoItem/TodoItem";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, body: "Description", title: "Javascript" },
    { id: 2, body: "Description", title: "Typescript" },
    { id: 3, body: "Description", title: "Python" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  // const [edit, setEdit] = useState(false);
  // const [post, setPosts] = useState([]);
  const createTodos = (newTodos) => {
    setTodos([...todos, newTodos]);
  };
  const deleteTodos = (todo) => {
    setTodos(todos.filter((p) => p.id !== todo.id));
  };
  // const editTodos = (todo) => {
  //   setTodos(todos.filter((t) => t.id === todo.id));
  // };

  return (
    <div className={s.App}>
      <form>
        <input placeholder="Name Todo" type="text" />
        <input placeholder="Description Todo" type="text" />
        <MyButton>Create Post</MyButton>
      </form>
      {/* <TodoForm create={createTodos} /> */}
      <ToDoList remove={deleteTodos} todos={todos} title="Todo"></ToDoList>
      <TodoFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;
