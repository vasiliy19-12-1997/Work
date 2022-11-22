import React from "react";
import TodoItem from "../todoItem/TodoItem";
const TodoList = ({ todos, remove, title }) => {
  if (!todos.length) {
    <h1>Todos doesnt found</h1>;
    return (
      <h1 style={{ margin: "15px", color: "teal" }}>Todos doesnt found!</h1>
    );
  }
  return (
    <div>
      <h1>{title}</h1>
      {todos.map((todo) => (
        <TodoItem remove={remove} todo={todo} key={todo.id}></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
