import React, { useState } from "react";
import MyInput from "./../ui/myInput/MyInput";
import MyButton from "./../ui/myButton/MyButton";
import s from "./TodoForm.module.scss";
const TodoForm = ({ create }) => {
  const [todo, setTodo] = useState({ title: "", body: "" });

  const createTask = () => {
    const newTask = {
      ...todo,
      id: Math.random(),
    };
    create(newTask);
    setTodo({ title: "", body: "" });
  };
  return (
    <div>
      <MyInput
        type="text"
        value={todo.title}
        placeholder="Write title..."
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <MyInput
        type="text"
        value={todo.body}
        placeholder="Write body..."
        onChange={(e) => setTodo({ ...todo, body: e.target.value })}
      />
      <MyButton onClick={createTask}>Create Todos</MyButton>
    </div>
  );
};

export default TodoForm;
