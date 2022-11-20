import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./allProducts";
import IndividualProduct from './individualProduct';
import CartPage from "./cartPage";
import AboutPage from "./aboutPage";





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