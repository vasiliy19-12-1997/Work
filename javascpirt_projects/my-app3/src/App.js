import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/navbar/Navbar";
import About from "./pages/About";
import Todos from "./pages/Todos";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/Context";
const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("Auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
