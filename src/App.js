import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/allProducts";
import IndividualProduct from './pages/individualProduct';
import CartPage from "./pages/cartPage";
import AboutPage from "./pages/aboutPage";





function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route element={<AllProducts/>} path="/" exact />
        <Route element={<IndividualProduct/>} path="/:slug" />
        <Route element={<CartPage/>} path="/cart" />
        <Route element={<AboutPage/>} path="/about" />
    </Routes>
    </BrowserRouter>
  );

};

export default App;