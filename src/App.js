import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/allProducts";
import IndividualProduct from './pages/individualProduct';
import CartPage from "./pages/cartPage";
import AboutPage from "./pages/aboutPage";

import { CartContext } from './context/cart/cartContext';
import { ActiveProductContext } from './context/activeProduct/activeProductContext';
import Cart from './context/cart/cart';
import AddToCartButton from "./components/addToCartButton";


function App(){
  const [cartContents, setCart] = useState([CartContext]);
  const [currentProduct, setCurrentProduct] = useState(ActiveProductContext);

  return(
    <ActiveProductContext.Provider value={{currentProduct, setCurrentProduct}}>
    <CartContext.Provider value={{cartContents, setCart}}>
    <BrowserRouter>
    <Routes>
        <Route element={<AllProducts/>} path="/" exact />
        <Route element={<IndividualProduct/>} path="/:slug" />
        <Route element={<CartPage/>} path="/cart" />
        <Route element={<AboutPage/>} path="/about" />
    </Routes>
    </BrowserRouter>
    </CartContext.Provider>
    </ActiveProductContext.Provider>
  );

};

export default App;