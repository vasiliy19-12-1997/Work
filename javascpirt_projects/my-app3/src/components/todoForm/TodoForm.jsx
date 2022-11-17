import React, { useState, useMemo } from "react";
import MyButton from "../ui/myButton/MyButton";
import MyInput from "../ui/myInput/MyInput";
const TodoForm = ({ create }, props, setTodos) => {
  const [todo, setTodo] = useState({ body: "", title: "" });
  const addNewTodos = () => {
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
      <MyButton onClick={addNewTodos}>Create Todo</MyButton>
    </div>
  );
};

export default TodoForm;
