import { CartContext } from "../context/cart/cartContext";
import { ActiveProductContext } from "../context/activeProduct/activeProductContext";
import React, { useState } from "react";

const cartContents = CartContext;

export default function AddToCart(product){

    cartContents = [
        cartContents,
        {
            id: product._id,
            prodName: product.title,
            prodQuant: product.quantitiy,
            cartQuant: 1,
            prodPrice: product.price,
        }
    ];

    return(
        <button>Add To Cart</button>
    )
};