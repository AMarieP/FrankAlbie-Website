import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page which displays cart

function CartPage({setContents}){


    return(
        <>
        <h1>Your Shopping Cart</h1>
        <ul>
            {/* {cart here} */}
        </ul>

        <div>
            <button>Send Enquiry</button>
        </div>
        </>

    );
};


export default CartPage;