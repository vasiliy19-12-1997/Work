import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./../pages/About";
import Todos from "./../pages/Todos";
import Error from "./../pages/Error";
import { Navigate } from "react-router-dom";
import { routes } from "../router/router";
import TodoIdPage from "./../todoIdPage/TodoIdPage";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((r) => (
        <Route element={<r.element />} path={r.path} key={r.path} />
      ))}
      {/* если пользователь введет не существующий url, то перейдем к туду листу */}
      <Route path="/*" element={<Navigate to="/todos" replace />} />
    </Routes>
  );
};

export default AppRouter;
