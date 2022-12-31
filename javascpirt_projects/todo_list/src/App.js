import React, { useState, useMemo, useEffect } from "react";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";
import TodoList from "./components/todoList/TodoList";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import MySelect from "./components/ui/mySelect/MySelect";
import axios from "axios";
import { useTodos } from "./components/hooks/useTodos";

import Loader from "./components/ui/loader/Loader";
import { useFetching } from "./components/hooks/useFetching";
import ServiceTodo from "./components/service/ServiceTodo";
import { getPageCount } from "./components/utils/pages";
import { usePagination } from "./components/hooks/usePagination";
import Pagination from "./components/ui/pagination/Pagination";
function App() {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await ServiceTodo.getAll(limit, page);
    setTodos(response.data);

    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetching();
  }, [page]);

  // }, []);
  const createTodo = (newTask) => {
    setTodos([...todos, newTask]);
  };
  const deleteTodo = (todo) => {
    setTodos([...todos].filter((t) => t.id !== todo.id));
  };
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div>
      <MyButton onClick={fetching}>Load</MyButton>
      <TodoForm create={createTodo} />
      {error && <div>{error}</div>}
      <TodoFilter filter={filter} setFilter={setFilter} />
      {isLoading && <Loader></Loader>}
      <TodoList remove={deleteTodo} todos={sortedAndSearchTodos} />
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default App;
