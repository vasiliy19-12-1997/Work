import React, { useState, useEffect } from "react";
import TodoServise from "./../components/api/TodoServise";

import useTodos from "./../components/hooks/useTodos";
import ToDoList from "./../components/todoList/TodoList";
import { useFetching } from "./../components/hooks/useFetching";
import { getPageCount, getPagesAray } from "./../utils/page";
import TodoForm from "./../components/todoForm/TodoForm";
import MyButton from "./../components/ui/myButton/MyButton";
import TodoFilter from "./../components/todoFilter/TodoFilter";
import Loader from "./../components/ui/loader/Loader";
import Pagination from "./../components/ui/pagination/Pagination";
import s from "./App.module.scss";
function Todos() {
  const [todos, setTodos] = useState([]);
  // const [selectedSort, setSelectedSort] = useState("");

  // const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);
  let pagesArray = getPagesAray(totalPages);

  console.log([pagesArray]);
  const [fetching, isLoading, error] = useFetching(async (limit, page) => {
    const response = await TodoServise.getAll(limit, page);
    setTodos(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  console.log(totalPages);

  const createTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodos = (todo) => {
    setTodos(todos.filter((p) => p.id !== todo.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetching(limit, page);
  };
  return (
    <div className={s.App}>
      <TodoForm create={createTodos} />
      <MyButton onClick={changePage} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      {/* <TodoClassForm create={createTodos} /> */}
      {error && <h1>Произошла ошибка ${error}</h1>}
      {isLoading ? (
        <div style={{ margin: "50px" }}>
          <Loader></Loader>
        </div>
      ) : (
        <ToDoList
          remove={deleteTodos}
          todos={sortedAndSearchTodos}
          title="Todo"
        ></ToDoList>
      )}
      <Pagination totalPages={totalPages} changePage={changePage} page={page} />
    </div>
  );
}

export default Todos;
