import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "./../components/hooks/useFetching";
import TodoServise from "../components/api/TodoServise";
import Loader from "../components/ui/loader/Loader";
const TodoIdPage = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchTodoId, isLoading, error] = useFetching(async (id) => {
    const response = await TodoServise.getById(id);
    setTodo(response.data);
  });
  const [fetchComments, isComLoading, ComError] = useFetching(async (id) => {
    const response = await TodoServise.getCommentsByTodoId(id);
    setTodo(response.data);
  });
  console.log(params);
  useEffect(() => {
    fetchTodoId(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div>
      <h1>Вы попали на страницу туду c id ={params.id} </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {todo.id}.{todo.title}
        </div>
      )}
      <h1>Comments</h1>
      {isComLoading ? (
        Loader
      ) : (
        <div>
          {comments.map((com) => (
            <div style={{ marginTop: "15px" }}>
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
