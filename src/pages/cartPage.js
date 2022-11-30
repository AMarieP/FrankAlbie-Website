import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../context/cart/cart";
import '../stylesheets/cart.css'

//page which displays cart

function CartPage(){


    return(
        <>
        <div className="container">
            <h1 id="cartHeading">Your Cart</h1>
            <Cart />
        </div>
        </>

    );
};


export default CartPage;