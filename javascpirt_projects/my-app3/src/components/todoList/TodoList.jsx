import React from "react";
import TodoItem from "../todoItem/TodoItem";
const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={todo.id} number={index + 1} />
      ))}
    </div>
  );
};

export default TodoList;
