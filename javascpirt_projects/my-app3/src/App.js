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
  // const [selectedSort, setSelectedSort] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  // const [searchQuery, setSearchQuery] = useState("");

  // const [edit, setEdit] = useState(false);
  // const [post, setPosts] = useState([]);
  const createTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodos = (todo) => {
    setTodos(todos.filter((p) => p.id !== todo.id));
  };
  const sortedTodos = useMemo(() => {
    if (filter.sort) {
      return [...todos].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return todos;
  }, [filter.sort, todos]);
  const sortedAndSearchTodos = useMemo(() => {
    return sortedTodos.filter((todo) =>
      todo.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  });
  console.log(sortedAndSearchTodos);

  // const editTodos = (todo) => {
  //   setTodos(todos.filter((t) => t.id === todo.id));
  // };
  // console.log(title);

  return (
    <div className={s.App}>
      <TodoForm create={createTodos} />
      <MySelect
        value={filter.sort}
        onChange={sortedTodos}
        defaultValue={"Sort by"}
        options={[
          { value: "title", name: "On title" },
          { value: "body", name: "On body" },
        ]}
      />
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
