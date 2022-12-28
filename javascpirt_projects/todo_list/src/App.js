import React, { useState, useMemo } from "react";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import TodoList from "./components/todoList/TodoList";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import MySelect from "./components/ui/mySelect/MySelect";

function App() {
  const [todos, setTodos] = useState([
    { title: "Js", id: Math.random(), completed: false, body: "java script" },
    { title: "TS", id: Math.random(), completed: false, body: "type script" },
    { title: "C#", id: Math.random(), completed: false, body: "si sharp" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchTodos, setSearchTodos] = useState("");

  const sortedTodos = useMemo(() => {
    console.log("функция отработала");
    if (selectedSort) {
      [...todos].sort((a, b) =>
        a[selectedSort]
          .toLowerCase()
          .localeCompare(b[selectedSort].toLowerCase())
      );
    }
    return todos;
  }, [selectedSort, todos]);
  const searchAndSortTodos = useMemo(() => {
    return sortedTodos.filter((todo) => todo.title.includes(searchTodos));
  }, [sortedTodos, searchTodos]);
  const createTodo = (newTask) => {
    setTodos([...todos, newTask]);
  };
  const deleteTodo = (todo) => {
    setTodos([...todos].filter((t) => t.id !== todo.id));
  };
  const sortTodos = (sort) => {
    setSelectedSort(sort);
  };
  return (
    <div>
      <TodoForm create={createTodo} />
      <MyInput
        value={searchTodos}
        onChange={(e) => setSearchTodos(e.target.value)}
      />

      <MySelect
        value={selectedSort}
        onChange={sortTodos}
        options={[
          { value: "title", name: "on title" },
          { value: "body", name: "on body" },
        ]}
      />
      <TodoList remove={deleteTodo} todos={searchAndSortTodos} />
    </div>
  );
}

export default App;
