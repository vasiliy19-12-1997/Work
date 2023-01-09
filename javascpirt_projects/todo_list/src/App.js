import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/appRouter/AppRouter";
import { AuthContext } from "./context/Context";
import Navbar from "./components/ui/navbar/Navbar";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, setIsLoading, isLoading }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
