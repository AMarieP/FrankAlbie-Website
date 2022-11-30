import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/allProducts";
import IndividualProduct from './pages/individualProduct';
import CartPage from "./pages/cartPage";
import AboutPage from "./pages/aboutPage";
import PrivacyPolicy from "./pages/privacyPolicy";
import LoadingScreen from "./components/loadingScreen";

import NavigationBar from "./components/navigation";
import Footer from "./components/footer";

import { CartProvider } from './context/cart/cartContext';
import { ActiveProductContext } from './context/activeProduct/activeProductContext';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
import './stylesheets/main.css'


function App(){
  const [currentProduct, setCurrentProduct] = useState(ActiveProductContext);

  return(
    <CartProvider>
    <ActiveProductContext.Provider value={{currentProduct, setCurrentProduct}}>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
        <Route element={<AllProducts/>} path="/" exact />
        <Route element={<IndividualProduct/>} path="/:slug" />
        <Route element={<CartPage/>} path="/cart" />
        <Route element={<AboutPage/>} path="/about" />
        <Route element={<PrivacyPolicy/>} path="/privacy" />
        <Route element={<LoadingScreen/>} path="/load" />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </ActiveProductContext.Provider>
    </CartProvider>
  );

};

export default App;