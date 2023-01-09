import React from "react";
import TodoItem from "./../todoItem/TodoItem";

const TodoList = ({ todos, remove }) => {
  if (!todos.length) {
    return (
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Todos doesnt found
      </div>
    );
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index + 1} remove={remove} />
      ))}
    </div>
  );
};

export default TodoList;
