import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Todos from "./pages/Todos";
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/todos">
        <Todos />
      </Route>
    </BrowserRouter>
  );
};

export default App;
