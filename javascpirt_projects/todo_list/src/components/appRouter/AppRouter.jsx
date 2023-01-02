import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./../pages/About";
import Todos from "./../pages/Todos";
import Error from "./../pages/Error";
import { Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/router";
import TodoIdPage from "./../todoIdPage/TodoIdPage";
import { AuthContext } from "./../../context/Context";
import Loader from "../ui/loader/Loader";

const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth);
  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((r) => (
        <Route element={<r.element />} path={r.path} key={r.path} />
      ))}

      {/* если пользователь введет не существующий url, то перейдем к туду листу */}
      <Route path="/*" element={<Navigate to="/todos" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((r) => (
        <Route element={<r.element />} path={r.path} key={r.path} />
      ))}
      {/* если не авторизовался то к логину  */}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
