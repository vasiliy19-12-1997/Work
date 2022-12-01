import React, { useMemo, useState, useRef, useEffect } from "react";
import MyButton from "./components/ui/myButton/MyButton";
import s from "./App.module.scss";
import TodoForm from "./components/todoForm/TodoForm";
import ToDoList from "./components/todoList/TodoList";
import MySelect from "./components/ui/mySelect/MySelect";
import TodoFilter from "./components/todoFilter/TodoFilter";
import TodoItem from "./components/todoItem/TodoItem";
import TodoClassForm from "./components/todoForm/TodoClassForm";
import MyInput from "./components/ui/myInput/MyInput";
import { useTodos } from "./components/hooks/useTodos";
import TodoServise from "./components/api/TodoServise";
import Loader from "./components/ui/loader/Loader";
import { useFetching } from "./components/hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/page";
import Pagination from "./components/ui/pagination/Pagination";
function App() {
  const [todos, setTodos] = useState([]);
  // const [selectedSort, setSelectedSort] = useState("");

  // const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchTodos = useTodos(todos, filter.sort, filter.query);

  const [fetching, isLoading, error] = useFetching(async (limit, page) => {
    const response = await TodoServise.getAll(limit, page);
    setTodos(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // const [edit, setEdit] = useState(false);
  // const [post, setPosts] = useState([]);
  useEffect =
    (() => {
      fetching(limit, page);
    },
    []);
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
      <MyButton onClick={fetching} />
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
      <Pagination totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default App;
