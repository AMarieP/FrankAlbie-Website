import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../context/cart/cart";
import '../stylesheets/cart.css'

//page which displays cart

function CartPage({setContents}){


    return(
        <>
        <h1>Your Cart</h1>
        <Cart />
        </>

    );
};


export default CartPage;