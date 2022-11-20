import React from "react";
import Cart from "./cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page which displays cart

function CartPage({setContents}){

    const cartList = Cart();
    let content = props.content;

    return(
        <>
        <h1>Your Shopping Cart</h1>
        <ul>
        </ul>

        <div>
            <button>Send Enquiry</button>
        </div>
        </>

    );
};


export default CartPage;