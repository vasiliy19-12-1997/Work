import React, { useState } from "react";
import MyButton from "../ui/myButton/MyButton";
import MyInput from "../ui/myInput/MyInput";
const TodoForm = ({ create }) => {
  const [todo, setTodo] = useState({ body: "", title: "" });
  const addNewTodos = (e) => {
    e.preventDefault();
    const newTodos = {
      ...todo,
      id: Math.random(),
    };
    create(newTodos);
    setTodo({ body: "", title: "" });
  };

  return (
    <div>
      <MyInput
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <MyInput
        type="text"
        value={todo.body}
        onChange={(e) => setTodo({ ...todo, body: e.target.value })}
      />
      <MyButton onClick={addNewTodos}>Создать</MyButton>
    </div>
  );
};

export default TodoForm;
