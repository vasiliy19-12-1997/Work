import React, { useState } from "react";
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
  const [sort, setSort] = useState("");

  const createTodo = (newTask) => {
    setTodos([...todos, newTask]);
  };
  const deleteTodo = (todo) => {
    setTodos([...todos].filter((t) => t.id !== todo.id));
  };
  const sortTodos = () => {
    setSort(sort);
    console.log(sort);
  };

  return (
    <div>
      <TodoForm create={createTodo} />
      <MyInput />
      {/* <TodoFilter sort={sort} setSort={setSort} /> */}
      <MySelect
        value={sort}
        onChange={sortTodos}
        options={[
          { value: "title", name: "on title" },
          { value: "body", name: "on body" },
        ]}
      />
      <TodoList remove={deleteTodo} todos={todos} />
    </div>
  );
}

export default App;
