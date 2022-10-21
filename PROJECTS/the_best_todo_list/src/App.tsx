import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { AboutPage } from "./pages/AboutPage";
import { Page3 } from "./pages/Page3";
import { ProductPage } from "./pages/productPage/ProductPage";


function App() {
 return (
  <>
  <Navigation/>
  <Routes>
    <Route path='/' element={<ProductPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/page3' element={<Page3/>}/>
    
  </Routes>
  </>
 )
}


export default App;
