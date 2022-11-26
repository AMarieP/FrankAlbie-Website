import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/allProducts";
import IndividualProduct from './pages/individualProduct';
import CartPage from "./pages/cartPage";
import AboutPage from "./pages/aboutPage";
import { CartProvider } from './context/cart/cartContext';
import { ActiveProductContext } from './context/activeProduct/activeProductContext';



function App(){
  const [currentProduct, setCurrentProduct] = useState(ActiveProductContext);

  return(
    <CartProvider>
    <ActiveProductContext.Provider value={{currentProduct, setCurrentProduct}}>
    <BrowserRouter>
    <Routes>
        <Route element={<AllProducts/>} path="/" exact />
        <Route element={<IndividualProduct/>} path="/:slug" />
        <Route element={<CartPage/>} path="/cart" />
        <Route element={<AboutPage/>} path="/about" />
    </Routes>
    </BrowserRouter>
    </ActiveProductContext.Provider>
    </CartProvider>
  );

};

export default App;