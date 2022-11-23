import React from "react";
import TodoItem from "../todoItem/TodoItem";
const TodoList = ({ todos, remove, title }) => {
  if (!todos.length) {
    <h1>Todos doesnt found</h1>;
    return (
      <h1
        style={{
          margin: "15px",
          color: "teal",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Todos doesnt found!
      </h1>
    );
  }
  return (
    <div>
      <h1
        style={{
          margin: "15px",
          color: "teal",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {title}
      </h1>
      {todos.map((todo, index) => (
        <TodoItem
          remove={remove}
          todo={todo}
          key={todo.id}
          index={index + 1}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
