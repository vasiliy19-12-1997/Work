import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./../pages/About";
import Todos from "./../pages/Todos";
import Error from "./../pages/Error";
import { Navigate } from "react-router-dom";
import TodoIdPage from "./../todoIdPage/TodoIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<About />} path="/about"></Route>
      <Route element={<Todos />} path="/todos"></Route>
      <Route element={<Error />} path="/error"></Route>
      <Route element={<TodoIdPage />} path="/todos/:id"></Route>
      {/* если пользователь введет не существующий url, то перейдем к туду листу */}
      <Route path="/*" element={<Navigate to="/todos" replace />} />
    </Routes>
  );
};

export default AppRouter;
