import React, { useState, useEffect, useRef } from "react";
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
import { useObserver } from "./../components/hooks/useObserver";
import MySelect from "../components/ui/mySelect/MySelect";
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
  const lastElement = useRef();

  console.log(lastElement);

  const [fetching, isLoading, error] = useFetching(async (limit, page) => {
    const response = await TodoServise.getAll(limit, page);
    setTodos([...todos, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });
  useEffect(() => {
    fetching(limit, page);
  }, [limit, page]);

  const createTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodos = (todo) => {
    setTodos(todos.filter((p) => p.id !== todo.id));
  };

  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div className={s.App}>
      <TodoForm create={createTodos} />

      <TodoFilter filter={filter} setFilter={setFilter} />
      {/* <TodoClassForm create={createTodos} /> */}
      {error && <h1>Произошла ошибка ${error}</h1>}
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue={"elements"}
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: -1, name: "All" },
        ]}
      />
      <ToDoList
        remove={deleteTodos}
        todos={sortedAndSearchTodos}
        title="Todo"
      ></ToDoList>
      <div
        ref={lastElement}
        style={{
          height: 20,
          background: "red",
          display: "grid",
          gridTemplateColumns: "800px",
        }}
      ></div>
      {isLoading && (
        <div style={{ margin: "50px" }}>
          <Loader></Loader>
        </div>
      )}

      <Pagination totalPages={totalPages} changePage={changePage} page={page} />
    </div>
  );
}

export default Todos;
