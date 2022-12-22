import React, { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import s from "./App.module.scss";
import TodoList from "./components/todoList/TodoList";
import MySelect from "./components/ui/mySelect/MySelect";
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
  // const [filter, setFilter] = useState();
  const [selectedSort, setSelectedSort] = useState("");
  const getSortedTodos = () => {
    if (selectedSort) {
      return [...todos].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return todos;
  };
  const sortedTodos = getSortedTodos();

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const sortTodos = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className={s.App}>
      <TodoForm create={createTodo} />
      {todos.title}
      <TodoList remove={deleteTodo} todos={sortedTodos} />
      <MySelect
        defaultValue="sort by"
        options={[
          { value: "title", name: "On title" },
          { value: "completed", name: "On completed" },
          { value: "body", name: "onBody" },
        ]}
        value={selectedSort}
        onChange={sortTodos}
      />
    </div>
  );
}

export default App;
