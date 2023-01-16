import { useState, useEffect } from "react";
import useTodos from "./../../hooks/useTodos";
import { useFetching } from "../../hooks/useFetching";
import ServiceTodo from "./../../api/ServiceTodo";
import { getPageCount } from "./../../utils/pages";
import MyButton from "./../../ui/myButton/MyButton";

import Loader from "./../../ui/loader/Loader";
import TodoFilter from "./../../todoFilter/TodoFilter";
import TodoList from "./../../todoList/TodoList";
import Pagination from "./../../ui/pagination/Pagination";

import TodoForm from "./../../todoForm/TodoForm";
function Todos() {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);
  const [, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetching, isLoading, error] = useFetching(async (limit, page) => {
    const response = await ServiceTodo.getAll(limit, page);
    setTodos(response.data);

    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetching(limit, page);
  }, [limit, page]);

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

export default Todos;
