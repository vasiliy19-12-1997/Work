import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";


function App() {
  
  


    return (
      <BrowserRouter>
        <Route path="/About">
          <About/>
        </Route>
      </BrowserRouter>
    );
  }

  export default App;
