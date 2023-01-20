import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../ui/loader/Loader";
import { useFetching } from "./../hooks/useFetching";
import ServiceTodo from "../api/ServiceTodo";
import s from "./TodoIdPage.module.scss";
const TodoIdPage = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});
  const [comments, setComment] = useState([]);
  const [fetchTodoId, isLoadingId, errorId] = useFetching(async (id) => {
    const response = await ServiceTodo.getById(id);
    setTodo(response.data);
  });
  const [fetchComId, isLoadingCom, errorCom] = useFetching(async (id) => {
    const response = await ServiceTodo.getCommment(id);
    setComment(response.data);
  });
  // console.log(params);
  useEffect(() => {
    fetchTodoId(params.id);
    fetchComId(params.id);
  }, []);
  return (
    <div className={s.TodoIdPage}>
      <h1>You have opened a site about todo id = {params.id}</h1>
      {isLoadingId ? (
        <Loader />
      ) : (
        <div>
          {todo.id} . {todo.title}
        </div>
      )}
      <h1>Comments</h1>
      {isLoadingCom ? (
        <Loader />
      ) : (
        <div>
          {comments.map((com) => (
            <div key={com.id}>
              <h5>{com.email}</h5>
              <div>{com.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoIdPage;
