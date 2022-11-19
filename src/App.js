import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./allProducts";
import IndividualProduct from './individualProduct';

function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route element={<AllProducts/>} path="/" exact />
        <Route element={<IndividualProduct/>} path="/:slug" />
    </Routes>
    </BrowserRouter>
  );

};

export default App;