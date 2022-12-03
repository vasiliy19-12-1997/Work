import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Todos from "./pages/Todos";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div></div>
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/todos" element={<Todos />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
