import React, { useState } from "react";
import MyButton from "./../ui/myButton/MyButton";
import MyInput from "./../ui/myInput/MyInput";
import s from "./TodoForm.module.scss";
const TodoForm = ({ create }) => {
  const [todo, setTodo] = useState({ title: "", completed: true });

  const addNewTodo = () => {
    const newTodo = {
      ...todo,
      id: Math.random(),
    };
    create(newTodo);
    setTodo({ title: "", completed: true });
  };
  return (
    <div className={s.TodoForm}>
      <MyInput
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        type="text"
        placeholder="Enter title"
      />
      <MyButton onClick={addNewTodo}>Create Todo</MyButton>
    </div>
  );
};

export default TodoForm;
