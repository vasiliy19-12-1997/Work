import React from "react";
import TodoItem from "../todoItem/TodoItem";
const TodoList = ({ todos, remove, post, title }) => {
  if (!todos.length) {
    console.log(post);
    return (
      <h1 style={{ margin: "15px", color: "teal" }}>Todos doesnt found!</h1>
    );
  }
  return (
    <div>
      <h1>{title}</h1>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id}></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
